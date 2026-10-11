// Tarot — single-page app: spreads, shuffle/pick/reveal flow, library, history, bilingual UI.
import { CARDS, CARD_BY_ID, imgSrc } from "./data/index.js";
import { t, L, other, getLang, setLang, formatDate, formatDay } from "./i18n.js";
import { SPREADS, SPREAD_ORDER, THREE_SETS, CELTIC_LAYOUT } from "./spreads.js";

const REVERSED_ONE_IN = 3;      // when reversed cards are allowed, ~1 in 3 comes up reversed
const HISTORY_MAX = 60;
const SHUFFLE_MS = 1700;
const REVEAL_STAGGER_MS = 380;

/* ---------- storage (localStorage may be unavailable; every call is guarded) ---------- */
const store = {
  get(k, fallback) { try { const v = localStorage.getItem(k); return v == null ? fallback : JSON.parse(v); } catch { return fallback; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } },
  del(k) { try { localStorage.removeItem(k); } catch { /* ignore */ } },
};

/* ---------- randomness ---------- */
function randInt(n) {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return a[0] % n;
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
// Deterministic PRNG (mulberry32 seeded from a string hash) for the card of the day.
function seededRng(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let x = Math.imul(a ^ (a >>> 15), 1 | a);
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------- small helpers ---------- */
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const orientKey = (rev) => (rev ? "reversed" : "upright");
const localDay = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};
const ROMAN = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"];
const backLink = (href, label) => `<a class="back" href="${href}">← ${label ?? t("setup.back")}</a>`;

/* ---------- state ---------- */
const state = {
  reading: null,                       // the in-progress (or viewed) reading
  modal: null,                         // { id, orient }
  lib: { filter: "all", query: "" },
};
const app = document.getElementById("app");
const modalRoot = document.getElementById("modal-root");

/* ======================================================================
   Routing
   ====================================================================== */
function route() {
  const h = location.hash.replace(/^#\/?/, "");
  const [page, param] = h.split("/");
  return { page: page || "home", param };
}

function render() {
  const r = route();
  const navKey = r.page === "home" || r.page === "reading" ? "home" : r.page;
  document.querySelectorAll("[data-nav]").forEach((el) => el.classList.toggle("active", el.dataset.nav === navKey));
  switch (r.page) {
    case "home": renderHome(); break;
    case "reading": renderReading(r.param); break;
    case "library": renderLibrary(); break;
    case "history": r.param ? renderHistoryEntry(r.param) : renderHistory(); break;
    default: location.hash = "#/"; return;
  }
  renderChrome();
}

function renderChrome() {
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  const btn = document.getElementById("lang-toggle");
  btn.textContent = t("lang.switch");
  btn.title = t("lang.switchTitle");
  btn.setAttribute("aria-label", t("lang.switchTitle"));
}

/* ======================================================================
   Home
   ====================================================================== */
function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <h1 class="hero-title">${t("app.title")}</h1>
      <p class="hero-tag">${t("app.tagline")}</p>
    </section>
    <h2 class="section-title">${t("home.choose")}</h2>
    <div class="spread-grid">
      ${SPREAD_ORDER.map((id) => {
        const s = SPREADS[id];
        return `
        <a class="spread-tile" href="#/reading/${id}">
          <span class="tile-icon" aria-hidden="true">${s.icon}</span>
          <span class="tile-name">${esc(L(s.name))}</span>
          <span class="tile-desc">${esc(L(s.desc))}</span>
          <span class="tile-count">${s.count === 1 ? t("home.card") : t("home.cards", { n: s.count })}</span>
        </a>`;
      }).join("")}
    </div>`;
}

/* ======================================================================
   Reading flow: setup → shuffle → pick → spread
   ====================================================================== */
function initReading(spreadId) {
  state.reading = {
    spreadId,
    stage: "setup",
    setId: "ppf",
    question: "",
    topic: "",
    questions: ["", "", ""],
    allowReversed: store.get("tarot.allowReversed", true),
    deck: [],
    picks: [],
    cards: [],
    saved: false,
    readonly: false,
    busy: false,
    token: 0,
  };
  if (spreadId === "daily") setupDaily();
}

function setupDaily() {
  const r = state.reading;
  const today = localDay();
  let salt = store.get("tarot.salt");
  if (!salt) {
    salt = Array.from(crypto.getRandomValues(new Uint8Array(8)), (b) => b.toString(16).padStart(2, "0")).join("");
    store.set("tarot.salt", salt);
  }
  let d = store.get("tarot.daily");
  if (!d || d.date !== today) {
    const rng = seededRng(`${today}|${salt}`);
    const idx = Math.floor(rng() * CARDS.length);
    const rev = r.allowReversed && rng() < 1 / REVERSED_ONE_IN;
    d = { date: today, id: CARDS[idx].id, rev, saved: false };
    store.set("tarot.daily", d);
  }
  r.cards = [{ id: d.id, rev: !!d.rev, revealed: false }];
  r.date = d.date;
  r.saved = !!d.saved;
  r.stage = "spread";
}

function positionsFor(r) {
  const spread = SPREADS[r.spreadId];
  if (spread.id === "three") {
    if (r.setId === "custom") return r.questions.map((q) => ({ name: { zh: q, en: q }, hint: null }));
    return (THREE_SETS.find((s) => s.id === r.setId) || THREE_SETS[0]).positions;
  }
  return spread.positions;
}

function renderReading(spreadId) {
  const spread = SPREADS[spreadId];
  if (!spread) { location.hash = "#/"; return; }
  if (!state.reading || state.reading.spreadId !== spreadId || state.reading.readonly) initReading(spreadId);
  const r = state.reading;
  if (r.stage === "setup") renderSetup(r, spread);
  else if (r.stage === "shuffle") renderShuffle(r, spread);
  else if (r.stage === "pick") renderPick(r, spread);
  else renderSpread(r, spread);
}

function questionField(r, spread) {
  const ph = spread.id === "yesno" ? t("setup.yesnoPh") : t("setup.questionPh");
  return `
    <div class="field">
      <label for="question">${t("setup.question")}</label>
      <textarea id="question" data-field="question" rows="2" maxlength="200" placeholder="${esc(ph)}">${esc(r.question)}</textarea>
    </div>`;
}

function renderSetup(r, spread) {
  const isThree = spread.id === "three";
  const isCustom = isThree && r.setId === "custom";
  app.innerHTML = `
  <section class="panel setup">
    ${backLink("#/")}
    <header class="panel-head">
      <span class="panel-icon" aria-hidden="true">${spread.icon}</span>
      <div><h2>${esc(L(spread.name))}</h2><p class="muted">${esc(L(spread.desc))}</p></div>
    </header>
    ${isThree ? `
      <div class="field">
        <span class="label-text">${t("setup.positions")}</span>
        <div class="chips" role="radiogroup">
          ${THREE_SETS.map((s) => `<button type="button" class="chip ${s.id === r.setId ? "on" : ""}" role="radio" aria-checked="${s.id === r.setId}" data-action="set" data-set="${s.id}">${esc(L(s.name))}</button>`).join("")}
        </div>
      </div>` : ""}
    ${isCustom ? `
      <p class="muted small">${t("setup.customHint")}</p>
      <div class="field">
        <label for="topic">${t("setup.topic")}</label>
        <input id="topic" data-field="topic" value="${esc(r.topic)}" placeholder="${esc(t("setup.topicPh"))}" maxlength="80">
      </div>
      ${[0, 1, 2].map((i) => `
      <div class="field">
        <label for="q${i}">${t("setup.customQ", { n: i + 1 })}</label>
        <input id="q${i}" data-field="q${i}" value="${esc(r.questions[i])}" placeholder="${esc(t("setup.customQPh", { n: i + 1 }))}" maxlength="120">
      </div>`).join("")}
      <p class="form-error" id="form-error" hidden>${t("setup.customNeed")}</p>
    ` : questionField(r, spread)}
    <label class="switch">
      <input type="checkbox" data-field="allowReversed" ${r.allowReversed ? "checked" : ""}>
      <span class="switch-track" aria-hidden="true"></span>
      <span class="switch-text">${t("setup.reversed")}<small>${t("setup.reversedHint")}</small></span>
    </label>
    <div class="actions">
      <button type="button" class="btn primary big" data-action="shuffle">${t("setup.shuffle")}</button>
    </div>
  </section>`;
}

function renderShuffle() {
  app.innerHTML = `
  <section class="panel center shuffle-stage">
    <div class="shuffle-deck" aria-hidden="true">
      ${Array.from({ length: 10 }, (_, i) => `<div class="shuffle-card back-art" style="--i:${i}"></div>`).join("")}
    </div>
    <h2>${t("shuffle.ing")}</h2>
    <p class="muted">${t("shuffle.focus")}</p>
  </section>`;
}

function startShuffle() {
  const r = state.reading;
  const spread = SPREADS[r.spreadId];
  if (r.setId === "custom" && spread.id === "three" && r.questions.some((q) => !q.trim())) {
    const err = document.getElementById("form-error");
    if (err) err.hidden = false;
    return;
  }
  r.questions = r.questions.map((q) => q.trim());
  r.question = r.question.trim();
  r.topic = r.topic.trim();
  store.set("tarot.allowReversed", r.allowReversed);
  r.stage = "shuffle";
  const token = ++r.token;
  render();
  setTimeout(() => {
    if (state.reading !== r || r.token !== token || r.stage !== "shuffle") return;
    r.deck = shuffle(CARDS.map((c) => ({ id: c.id, rev: r.allowReversed && randInt(REVERSED_ONE_IN) === 0 })));
    r.picks = [];
    r.stage = "pick";
    render();
  }, SHUFFLE_MS);
}

function renderPick(r, spread) {
  const need = spread.count - r.picks.length;
  app.innerHTML = `
  <section class="panel pick-stage">
    <header class="pick-head">
      <h2>${spread.count === 1 ? t("pick.titleOne") : t("pick.title", { n: spread.count })}</h2>
      <p class="muted" id="pick-status">${need > 0 ? t("pick.remaining", { n: need }) : t("pick.done")}</p>
    </header>
    <div class="fan-wrap" id="fan-wrap"><div class="fan" id="fan"></div></div>
    <div class="actions">
      <button type="button" class="btn ghost" data-action="autopick">${t("pick.auto")}</button>
    </div>
  </section>`;
  fitFan();
}

// Lay the 78 face-down cards out in as few rows as fit, so each card keeps a
// comfortable visible strip (>= FAN_MIN_STEP px) to tap, without horizontal scrolling.
const FAN_MIN_STEP = 28;
const FAN_MAX_STEP = 40;
function fitFan() {
  const wrap = document.getElementById("fan-wrap");
  const fan = document.getElementById("fan");
  const r = state.reading;
  if (!wrap || !fan || !r) return;
  const n = r.deck.length;
  const cardW = parseFloat(getComputedStyle(fan).getPropertyValue("--card-w")) || 64;
  const avail = Math.max(cardW + FAN_MIN_STEP, wrap.clientWidth - 8);
  const maxPerRow = Math.max(1, Math.floor((avail - cardW) / FAN_MIN_STEP) + 1);
  const rows = Math.ceil(n / maxPerRow);
  const perRow = Math.ceil(n / rows);
  const step = perRow > 1 ? Math.min(FAN_MAX_STEP, (avail - cardW) / (perRow - 1)) : 0;
  fan.style.setProperty("--fan-step", `${step.toFixed(2)}px`);
  const rowsHtml = [];
  for (let start = 0; start < n; start += perRow) {
    const cells = [];
    for (let i = start; i < Math.min(n, start + perRow); i++) {
      cells.push(`<button type="button" class="fan-card back-art ${r.picks.includes(i) ? "picked" : ""}" data-action="pick" data-i="${i}" aria-label="${i + 1}"></button>`);
    }
    rowsHtml.push(`<div class="fan-row">${cells.join("")}</div>`);
  }
  fan.innerHTML = rowsHtml.join("");
}

function markPicked(i) {
  app.querySelector(`.fan-card[data-i="${i}"]`)?.classList.add("picked");
  const r = state.reading;
  const need = SPREADS[r.spreadId].count - r.picks.length;
  const status = document.getElementById("pick-status");
  if (status) status.textContent = need > 0 ? t("pick.remaining", { n: need }) : t("pick.done");
}

async function finishPicking(r) {
  r.busy = true;
  await sleep(700);
  if (state.reading !== r) return;
  r.cards = r.picks.map((i) => ({ ...r.deck[i], revealed: false }));
  r.stage = "spread";
  r.busy = false;
  render();
}

function pickCard(i) {
  const r = state.reading;
  const spread = SPREADS[r.spreadId];
  if (r.stage !== "pick" || r.busy || r.picks.includes(i) || r.picks.length >= spread.count) return;
  r.picks.push(i);
  markPicked(i);
  if (r.picks.length === spread.count) finishPicking(r);
}

async function autoPick() {
  const r = state.reading;
  const spread = SPREADS[r.spreadId];
  if (r.stage !== "pick" || r.busy) return;
  r.busy = true;
  const remaining = shuffle(r.deck.map((_, i) => i).filter((i) => !r.picks.includes(i)));
  const need = spread.count - r.picks.length;
  for (let k = 0; k < need; k++) {
    if (state.reading !== r) return;
    r.picks.push(remaining[k]);
    markPicked(remaining[k]);
    await sleep(170);
  }
  finishPicking(r);
}

/* ---------- spread view ---------- */
function slotHtml(c, i, pos, geo) {
  const card = CARD_BY_ID[c.id];
  const style = geo
    ? `style="left:${((geo.x / CELTIC_LAYOUT.width) * 100).toFixed(3)}%;top:${((geo.y / CELTIC_LAYOUT.height) * 100).toFixed(3)}%;width:${((1 / CELTIC_LAYOUT.width) * 100).toFixed(3)}%"`
    : "";
  return `
    <div class="slot ${geo?.crossing ? "crossing" : ""}" ${style}>
      <span class="slot-num" aria-hidden="true">${i + 1}</span>
      <div class="card ${c.rev ? "is-reversed" : ""} ${c.revealed ? "is-revealed" : ""}" data-action="card" data-i="${i}" role="button" tabindex="0" aria-label="${esc(L(pos.name))}">
        <div class="card-inner">
          <div class="card-face card-back back-art"></div>
          <div class="card-face card-front"><img src="${imgSrc(card)}" alt="${esc(L(card.name))}" draggable="false"></div>
        </div>
      </div>
      <div class="slot-label">
        <span class="slot-pos">${esc(L(pos.name))}</span>
        <span class="slot-name" id="slot-name-${i}">${c.revealed ? slotNameHtml(c) : ""}</span>
      </div>
    </div>`;
}
function slotNameHtml(c) {
  const card = CARD_BY_ID[c.id];
  return `${esc(L(card.name))}${c.rev ? ` <i>${t("orient.reversed")}</i>` : ""}`;
}

function verdict(card, rev) {
  if (card.yesNo === "maybe") return "maybe";
  if (!rev) return card.yesNo;
  return card.yesNo === "yes" ? "no" : "yes";
}
function verdictHtml(card, rev) {
  const v = verdict(card, rev);
  const why = v === "yes" ? "yesno.leanYes" : v === "no" ? "yesno.leanNo" : "yesno.leanMaybe";
  return `<div class="verdict verdict-${v}"><span class="verdict-word">${t("yesno." + v)}</span><span class="verdict-why">${t(why)}</span></div>`;
}

function readingItemHtml(r, spread, i) {
  const c = r.cards[i];
  const card = CARD_BY_ID[c.id];
  const pos = positionsFor(r)[i];
  const o = orientKey(c.rev);
  const lang = getLang();
  return `
    <div class="reading-card">
      <button type="button" class="reading-thumb ${c.rev ? "is-reversed" : ""}" data-action="detail" data-id="${card.id}" data-rev="${c.rev ? 1 : 0}" aria-label="${esc(L(card.name))}">
        <img src="${imgSrc(card)}" alt="">
      </button>
      <div class="reading-body">
        <p class="reading-pos">${spread.count > 1 ? `<span class="num">${i + 1}</span>` : ""}${esc(L(pos.name))}${pos.hint ? `<span class="hint">${esc(L(pos.hint))}</span>` : ""}</p>
        <h4 class="reading-name">${esc(L(card.name))} <span class="alt">${esc(other(card.name))}</span> <span class="badge ${o}">${t("orient." + o)}</span></h4>
        ${spread.id === "yesno" ? verdictHtml(card, c.rev) : ""}
        <p class="kw">${L(card.keywords[o]).map((k) => `<span class="tag">${esc(k)}</span>`).join("")}</p>
        <p class="meaning">${esc(card.meaning[o][lang])}</p>
        <p class="advice"><span class="label">${t("reading.advice")}</span>${esc(card.advice[lang])}</p>
      </div>
    </div>`;
}

function renderSpread(r, spread) {
  const positions = positionsFor(r);
  const allRevealed = r.cards.every((c) => c.revealed);
  const isCeltic = spread.id === "celtic";
  const setName = spread.id === "three" && r.setId !== "custom" ? THREE_SETS.find((s) => s.id === r.setId)?.name : null;
  app.innerHTML = `
  <section class="panel spread-stage" data-spread="${spread.id}">
    ${backLink(r.readonly ? "#/history" : "#/", r.readonly ? t("history.backList") : undefined)}
    <header class="panel-head between">
      <div class="head-main">
        <span class="panel-icon" aria-hidden="true">${spread.icon}</span>
        <div>
          <h2>${esc(L(spread.name))}${setName ? ` <span class="muted thin">· ${esc(L(setName))}</span>` : ""}</h2>
          ${spread.id === "daily" ? `<p class="muted">${t("daily.for", { date: formatDay(r.date) })}</p>` : ""}
          ${r.readonly ? `<p class="muted">${t("spread.readonly")} · ${formatDate(r.ts)}</p>` : ""}
        </div>
      </div>
      <div class="head-actions">
        ${!allRevealed && !r.readonly ? `<button type="button" class="btn ghost small" data-action="revealAll">${t("spread.revealAll")}</button>` : ""}
      </div>
    </header>
    ${r.topic ? `<p class="question"><span class="label">${t("reading.topic")}</span>${esc(r.topic)}</p>` : ""}
    ${r.question ? `<p class="question"><span class="label">${t("reading.question")}</span>${esc(r.question)}</p>` : ""}
    <p class="muted small center tap-hint" id="tap-hint" ${allRevealed ? "hidden" : ""}>${t("spread.tap")}</p>
    <div class="layout layout-${spread.id}" ${isCeltic ? `style="aspect-ratio:${CELTIC_LAYOUT.width}/${CELTIC_LAYOUT.height}"` : ""}>
      ${r.cards.map((c, i) => slotHtml(c, i, positions[i], isCeltic ? CELTIC_LAYOUT.slots[i] : null)).join("")}
    </div>
    <section class="reading" id="reading" aria-live="polite">
      <h3 class="section-title">${t("reading.title")}</h3>
      ${r.cards.map((c, i) => `
        <div class="reading-item ${c.revealed ? "" : "pending"}" id="reading-${i}">
          ${c.revealed ? readingItemHtml(r, spread, i) : `<p class="muted small"><span class="num">${i + 1}</span>${esc(L(positions[i].name))} · ${t("reading.waiting")}</p>`}
        </div>`).join("")}
      <div class="reading-foot" id="reading-foot" ${allRevealed ? "" : "hidden"}>
        <p class="muted small">${t("reading.disclaimer")}</p>
        <div class="actions">
          <button type="button" class="btn ghost" data-action="copy">${t("spread.copy")}</button>
          ${r.readonly || spread.id === "daily" ? "" : `<button type="button" class="btn primary" data-action="again">${t("spread.again")}</button>`}
        </div>
        <p class="muted small" id="saved-note">${r.saved && !r.readonly ? t("spread.saved") : ""}</p>
        ${spread.id === "daily" ? `<p class="muted small">${t("daily.note")}</p>` : ""}
      </div>
    </section>
  </section>`;
}

function revealCard(i) {
  const r = state.reading;
  const c = r?.cards[i];
  if (!c || c.revealed) return;
  c.revealed = true;
  app.querySelector(`.card[data-i="${i}"]`)?.classList.add("is-revealed");
  const nameEl = document.getElementById(`slot-name-${i}`);
  if (nameEl) nameEl.innerHTML = slotNameHtml(c);
  const item = document.getElementById(`reading-${i}`);
  if (item) {
    item.classList.remove("pending");
    item.classList.add("just-revealed");
    item.innerHTML = readingItemHtml(r, SPREADS[r.spreadId], i);
  }
  if (r.cards.every((x) => x.revealed)) onAllRevealed(r);
}

function onAllRevealed(r) {
  document.getElementById("tap-hint")?.setAttribute("hidden", "");
  app.querySelector('[data-action="revealAll"]')?.remove();
  const foot = document.getElementById("reading-foot");
  if (foot) foot.hidden = false;
  if (!r.readonly && !r.saved) {
    saveHistory(r);
    r.saved = true;
    if (r.spreadId === "daily") {
      const d = store.get("tarot.daily");
      if (d && d.date === r.date) { d.saved = true; store.set("tarot.daily", d); }
    }
    const note = document.getElementById("saved-note");
    if (note) note.textContent = t("spread.saved");
  }
}

async function revealAll() {
  const r = state.reading;
  if (!r || r.busy) return;
  r.busy = true;
  for (let i = 0; i < r.cards.length; i++) {
    if (state.reading !== r) return;
    if (!r.cards[i].revealed) { revealCard(i); await sleep(REVEAL_STAGGER_MS); }
  }
  r.busy = false;
}

/* ---------- history ---------- */
function saveHistory(r) {
  const list = store.get("tarot.history", []);
  const entry = {
    id: Date.now().toString(36) + randInt(1 << 20).toString(36),
    ts: Date.now(),
    spreadId: r.spreadId,
    setId: r.spreadId === "three" ? r.setId : undefined,
    question: r.question || undefined,
    topic: r.topic || undefined,
    questions: r.setId === "custom" && r.spreadId === "three" ? r.questions : undefined,
    date: r.date,
    cards: r.cards.map((c) => ({ id: c.id, rev: !!c.rev })),
  };
  list.unshift(entry);
  if (list.length > HISTORY_MAX) list.length = HISTORY_MAX;
  store.set("tarot.history", list);
  r.historyId = entry.id;
}

function renderHistory() {
  const list = store.get("tarot.history", []);
  app.innerHTML = `
  <section class="panel">
    <header class="panel-head between">
      <div><h2>${t("history.title")}</h2><p class="muted">${t("history.sub")}</p></div>
      ${list.length ? `<button type="button" class="btn ghost small danger" data-action="clearHistory">${t("history.clear")}</button>` : ""}
    </header>
    ${list.length ? `<ul class="history-list">${list.map((e) => {
      const s = SPREADS[e.spreadId];
      if (!s) return "";
      const setName = e.spreadId === "three" && e.setId && e.setId !== "custom" ? THREE_SETS.find((x) => x.id === e.setId)?.name : null;
      const sub = e.question || e.topic || (e.questions ? e.questions.join(" / ") : "");
      return `
      <li class="history-item">
        <a class="history-main" href="#/history/${e.id}">
          <span class="history-icon" aria-hidden="true">${s.icon}</span>
          <span class="history-text">
            <span class="history-title">${esc(L(s.name))}${setName ? ` · ${esc(L(setName))}` : ""}</span>
            <span class="history-sub">${formatDate(e.ts)}${sub ? ` · ${esc(sub)}` : ""}</span>
            <span class="history-cards">${e.cards.map((c) => CARD_BY_ID[c.id] ? `<span class="${c.rev ? "rev" : ""}">${esc(L(CARD_BY_ID[c.id].name))}</span>` : "").join("")}</span>
          </span>
        </a>
        <button type="button" class="icon-btn" data-action="deleteHistory" data-id="${e.id}" aria-label="${t("history.delete")}" title="${t("history.delete")}">×</button>
      </li>`;
    }).join("")}</ul>` : `<p class="empty">${t("history.empty")}</p>`}
  </section>`;
}

function renderHistoryEntry(id) {
  const e = store.get("tarot.history", []).find((x) => x.id === id);
  if (!e || !SPREADS[e.spreadId]) {
    app.innerHTML = `<section class="panel"><p class="empty">${t("history.notFound")}</p><div class="actions"><a class="btn ghost" href="#/history">${t("history.backList")}</a></div></section>`;
    return;
  }
  state.reading = {
    spreadId: e.spreadId,
    setId: e.setId || "ppf",
    question: e.question || "",
    topic: e.topic || "",
    questions: e.questions || ["", "", ""],
    cards: e.cards.map((c) => ({ id: c.id, rev: !!c.rev, revealed: true })),
    stage: "spread",
    readonly: true,
    saved: true,
    ts: e.ts,
    date: e.date,
    historyId: e.id,
  };
  renderSpread(state.reading, SPREADS[e.spreadId]);
}

/* ---------- copy ---------- */
function readingText(r) {
  const spread = SPREADS[r.spreadId];
  const lang = getLang();
  const positions = positionsFor(r);
  const lines = [`${L(spread.name)} · ${r.date ? formatDay(r.date) : formatDate(r.ts || Date.now())}`];
  if (r.topic) lines.push(`${t("reading.topic")}: ${r.topic}`);
  if (r.question) lines.push(`${t("reading.question")}: ${r.question}`);
  lines.push("");
  r.cards.forEach((c, i) => {
    const card = CARD_BY_ID[c.id];
    const o = orientKey(c.rev);
    lines.push(`${i + 1}. ${L(positions[i].name)}: ${L(card.name)} / ${other(card.name)} (${t("orient." + o)})`);
    if (spread.id === "yesno") lines.push(`   → ${t("yesno." + verdict(card, c.rev))}`);
    lines.push(`   ${t("reading.keywords")}: ${L(card.keywords[o]).join(lang === "zh" ? "、" : ", ")}`);
    lines.push(`   ${card.meaning[o][lang]}`);
    lines.push(`   ${t("reading.advice")}: ${card.advice[lang]}`);
    lines.push("");
  });
  lines.push(`— ${location.origin}${location.pathname}`);
  return lines.join("\n");
}

async function copyReading() {
  const text = readingText(state.reading);
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch { /* ignore */ }
    ta.remove();
  }
  toast(t("spread.copied"));
}

let toastTimer = 0;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
}

/* ======================================================================
   Library
   ====================================================================== */
const FILTERS = ["all", "major", "wands", "cups", "swords", "pentacles"];

function libResultsHtml() {
  const { filter, query } = state.lib;
  const q = query.trim().toLowerCase();
  const list = CARDS.filter((c) =>
    (filter === "all" || (filter === "major" ? c.arcana === "major" : c.suit === filter)) &&
    (!q || c.name.zh.includes(q) || c.name.en.toLowerCase().includes(q)));
  if (!list.length) return `<p class="empty">${t("library.empty")}</p>`;
  return `<div class="lib-grid">${list.map((c) => `
    <button type="button" class="lib-card" data-action="detail" data-id="${c.id}" data-rev="0">
      <img src="${imgSrc(c)}" alt="" loading="lazy">
      <span class="lib-name">${esc(L(c.name))}</span>
      <span class="lib-alt">${esc(other(c.name))}</span>
    </button>`).join("")}</div>`;
}

function renderLibrary() {
  app.innerHTML = `
  <section class="panel library">
    <header class="panel-head"><div><h2>${t("library.title")}</h2><p class="muted">${t("library.sub")}</p></div></header>
    <div class="lib-tools">
      <input type="search" id="lib-search" data-field="libQuery" value="${esc(state.lib.query)}" placeholder="${esc(t("library.search"))}" autocomplete="off">
      <div class="chips">${FILTERS.map((f) => `<button type="button" class="chip ${f === state.lib.filter ? "on" : ""}" data-action="filter" data-filter="${f}" aria-pressed="${f === state.lib.filter}">${t("filter." + f)}</button>`).join("")}</div>
    </div>
    <div id="lib-results">${libResultsHtml()}</div>
  </section>`;
}

/* ======================================================================
   Card detail modal
   ====================================================================== */
function openModal(id, rev) {
  if (!CARD_BY_ID[id]) return;
  state.modal = { id, orient: rev ? "reversed" : "upright", returnFocus: document.activeElement };
  renderModal();
}
function closeModal() {
  const back = state.modal?.returnFocus;
  state.modal = null;
  renderModal();
  if (back && typeof back.focus === "function") back.focus();
}
function renderModal() {
  if (!state.modal) {
    modalRoot.innerHTML = "";
    document.body.classList.remove("modal-open");
    return;
  }
  const card = CARD_BY_ID[state.modal.id];
  const o = state.modal.orient;
  const lang = getLang();
  const sub = card.arcana === "major" ? t("arcana.major", { n: ROMAN[card.number] }) : t("arcana.minor", { suit: t("filter." + card.suit) });
  modalRoot.innerHTML = `
  <div class="modal-backdrop" data-action="closeModal">
    <div class="modal" role="dialog" aria-modal="true" aria-label="${esc(L(card.name))}">
      <button type="button" class="icon-btn modal-close" data-action="closeModal" aria-label="${t("modal.close")}">×</button>
      <div class="modal-img ${o === "reversed" ? "is-reversed" : ""}"><img src="${imgSrc(card)}" alt="${esc(L(card.name))}"></div>
      <div class="modal-text">
        <p class="muted small">${sub}</p>
        <h3>${esc(L(card.name))}</h3>
        <p class="alt">${esc(other(card.name))}</p>
        <div class="tabs" role="tablist">
          ${["upright", "reversed"].map((k) => `<button type="button" role="tab" class="tab ${k === o ? "on" : ""}" aria-selected="${k === o}" data-action="orient" data-orient="${k}">${t("orient." + k)}</button>`).join("")}
        </div>
        <p class="kw">${L(card.keywords[o]).map((k) => `<span class="tag">${esc(k)}</span>`).join("")}</p>
        <p class="meaning">${esc(card.meaning[o][lang])}</p>
        <p class="advice"><span class="label">${t("reading.advice")}</span>${esc(card.advice[lang])}</p>
      </div>
    </div>
  </div>`;
  document.body.classList.add("modal-open");
  modalRoot.querySelector(".modal-close")?.focus();
}

/* ======================================================================
   Events
   ====================================================================== */
function onClick(e) {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const r = state.reading;
  switch (el.dataset.action) {
    case "set":
      if (r) { r.setId = el.dataset.set; render(); }
      break;
    case "shuffle":
      if (r) startShuffle();
      break;
    case "pick":
      pickCard(Number(el.dataset.i));
      break;
    case "autopick":
      autoPick();
      break;
    case "card": {
      const i = Number(el.dataset.i);
      const c = r?.cards[i];
      if (!c) return;
      if (c.revealed) openModal(c.id, c.rev);
      else revealCard(i);
      break;
    }
    case "revealAll":
      revealAll();
      break;
    case "again":
      if (r) { initReading(r.spreadId); render(); }
      break;
    case "copy":
      copyReading();
      break;
    case "detail":
      openModal(el.dataset.id, el.dataset.rev === "1");
      break;
    case "orient":
      if (state.modal) { state.modal.orient = el.dataset.orient; renderModal(); }
      break;
    case "closeModal":
      if (el.classList.contains("modal-backdrop") && e.target !== el) return;
      closeModal();
      break;
    case "filter":
      state.lib.filter = el.dataset.filter;
      render();
      break;
    case "deleteHistory": {
      const list = store.get("tarot.history", []).filter((x) => x.id !== el.dataset.id);
      store.set("tarot.history", list);
      render();
      break;
    }
    case "clearHistory":
      if (confirm(t("history.confirm"))) { store.del("tarot.history"); render(); }
      break;
  }
}

function onInput(e) {
  const el = e.target.closest("[data-field]");
  if (!el) return;
  const r = state.reading;
  const f = el.dataset.field;
  if (f === "libQuery") {
    state.lib.query = el.value;
    const host = document.getElementById("lib-results");
    if (host) host.innerHTML = libResultsHtml();
    return;
  }
  if (!r) return;
  if (f === "question") r.question = el.value;
  else if (f === "topic") r.topic = el.value;
  else if (f === "allowReversed") r.allowReversed = el.checked;
  else if (/^q[0-2]$/.test(f)) {
    r.questions[Number(f[1])] = el.value;
    const err = document.getElementById("form-error");
    if (err && r.questions.every((q) => q.trim())) err.hidden = true;
  }
}

app.addEventListener("click", onClick);
modalRoot.addEventListener("click", onClick);
app.addEventListener("input", onInput);
app.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.matches(".card")) { e.preventDefault(); e.target.click(); }
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && state.modal) closeModal(); });
document.getElementById("lang-toggle").addEventListener("click", () => {
  setLang(getLang() === "zh" ? "en" : "zh");
  render();
  renderModal();
});
window.addEventListener("hashchange", () => { render(); window.scrollTo({ top: 0 }); });
window.addEventListener("resize", () => { if (state.reading?.stage === "pick") fitFan(); });

setLang(getLang());
render();
