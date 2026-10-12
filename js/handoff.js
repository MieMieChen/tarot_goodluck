// Hand a finished reading over to Claude chat (claude.ai): a prompt with the question,
// spread, positions and cards, plus a rendered image of the spread for the card faces.
import { CARD_BY_ID, imgSrc } from "./data/index.js";
import { t, L, getLang, formatDate, formatDay } from "./i18n.js";
import { SPREADS, THREE_SETS, CELTIC_LAYOUT } from "./spreads.js";

const SITE = "https://miemiechen.github.io/tarot_goodluck/";

/* ---------- prompt ---------- */
export function handoffPrompt(r, positions) {
  const lang = getLang();
  const zh = lang === "zh";
  const spread = SPREADS[r.spreadId];
  const isCustom = r.spreadId === "three" && r.setId === "custom";
  const setName = r.spreadId === "three" && !isCustom ? THREE_SETS.find((s) => s.id === r.setId)?.name : null;
  const spreadLabel = `${L(spread.name)}${setName ? (zh ? `（${L(setName)}）` : ` (${L(setName)})`) : ""}`;
  const when = r.date ? formatDay(r.date) : formatDate(r.ts || Date.now());
  const orient = (rev) => (zh ? (rev ? "逆位" : "正位") : (rev ? "reversed" : "upright"));
  const lines = [];

  if (zh) {
    lines.push(`我刚用塔罗牌抽了一个「${spreadLabel}」（${when}），请你结合我的问题来解读。`);
  } else {
    lines.push(`I just drew a tarot spread: ${spreadLabel} (${when}). Please interpret it for my question.`);
  }
  lines.push("");
  if (r.topic?.trim()) lines.push(`${zh ? "主题" : "Topic"}: ${r.topic.trim()}`);
  if (r.question?.trim()) lines.push(`${zh ? "问题" : "Question"}: ${r.question.trim()}`);
  if (isCustom) lines.push(zh ? "我的三个相关问题分别对应三张牌：" : "My three related questions, one card each:");
  if (r.topic?.trim() || r.question?.trim() || isCustom) lines.push("");

  lines.push(zh ? "抽到的牌：" : "Cards drawn:");
  r.cards.forEach((c, i) => {
    const card = CARD_BY_ID[c.id];
    const pos = positions[i];
    const name = `${card.name.zh} / ${card.name.en}`;
    if (isCustom) {
      lines.push(`${i + 1}. ${zh ? "问题" : "Question"}: ${L(pos.name)}`);
      lines.push(`   ${zh ? "牌" : "Card"}: ${name}${zh ? "，" : ", "}${orient(c.rev)}`);
    } else {
      const hint = pos.hint ? (zh ? `（${L(pos.hint)}）` : ` (${L(pos.hint)})`) : "";
      lines.push(`${i + 1}. ${L(pos.name)}${hint}: ${name}${zh ? "，" : ", "}${orient(c.rev)}`);
    }
  });
  lines.push("");

  if (r.spreadId === "yesno") {
    lines.push(zh
      ? "这是一个是/否牌阵：请先明确给出倾向（是 / 否 / 尚不明朗），再解释原因，最后给一条可以行动的建议。语气温和坦诚，不要宿命论。"
      : "This is a yes/no spread: start with a clear lean (yes / no / not yet clear), then explain why, and end with one practical suggestion. Be warm and candid, not fatalistic.");
  } else if (isCustom) {
    lines.push(zh
      ? "请用对应的牌分别回答我的每个问题，再把三个答案串成一个整体的看法，最后给一条可以行动的建议。语气温和坦诚，不要宿命论。"
      : "Answer each question with its card, then tie the three answers into one overall view, and end with one practical suggestion. Be warm and candid, not fatalistic.");
  } else if (r.spreadId === "daily") {
    lines.push(zh
      ? "这是我今天的每日一牌，请告诉我今天值得留意什么，以及一条简单可行的建议。"
      : "This is my card of the day. Tell me what to pay attention to today, with one simple, doable suggestion.");
  } else {
    lines.push(zh
      ? "请直接回应我的问题：先用一两句话给出整体判断，再逐张说明每个位置的牌对这个问题意味着什么，然后把它们串成一个完整的回答，最后给一条可以行动的建议。语气温和坦诚，不要宿命论。"
      : "Please answer my question directly: give your overall read in a sentence or two, then explain what each card in its position means for the question, weave them into one coherent answer, and end with one practical suggestion. Be warm and candid, not fatalistic.");
  }
  lines.push("");
  lines.push(zh ? `（牌面图片我可以另外发给你。来自 ${SITE}）` : `(I can send a picture of the spread too. From ${SITE})`);
  return lines.join("\n");
}

export const claudeUrl = (prompt) => `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;

/* ---------- spread image ---------- */
export function canShareFiles() {
  try {
    return typeof navigator.share === "function" && typeof navigator.canShare === "function" &&
      navigator.canShare({ files: [new File([new Blob(["x"])], "x.jpg", { type: "image/jpeg" })] });
  } catch { return false; }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrap(ctx, text, maxWidth) {
  const tokens = String(text).match(/[A-Za-z0-9'’\-]+|\s+|./gu) || [];
  const lines = [];
  let cur = "";
  for (const tok of tokens) {
    if (tok === "\n") { lines.push(cur); cur = ""; continue; }
    const test = cur + tok;
    if (ctx.measureText(test).width > maxWidth && cur.trim()) { lines.push(cur.trimEnd()); cur = tok.trimStart(); }
    else cur = test;
  }
  if (cur.trim()) lines.push(cur.trimEnd());
  return lines;
}

function drawText(ctx, lines, x, y, lineHeight, align = "left") {
  ctx.textAlign = align;
  lines.forEach((ln, i) => ctx.fillText(ln, x, y + i * lineHeight));
  return y + lines.length * lineHeight;
}

async function loadImages(r) {
  return Promise.all(r.cards.map(async (c) => {
    const img = new Image();
    img.src = imgSrc(CARD_BY_ID[c.id]);
    await img.decode();
    return img;
  }));
}

function drawCard(ctx, img, x, y, w, h, { reversed = false, crossing = false } = {}) {
  const rot = (crossing ? Math.PI / 2 : 0) + (reversed ? Math.PI : 0);
  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);
  ctx.rotate(rot);
  ctx.shadowColor = "rgba(0,0,0,.6)"; ctx.shadowBlur = 24; ctx.shadowOffsetY = 10;
  ctx.fillStyle = "#111";
  roundRect(ctx, -w / 2, -h / 2, w, h, w * 0.045); ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.save(); roundRect(ctx, -w / 2, -h / 2, w, h, w * 0.045); ctx.clip(); ctx.drawImage(img, -w / 2, -h / 2, w, h); ctx.restore();
  ctx.strokeStyle = "rgba(212,178,106,.75)"; ctx.lineWidth = 3;
  roundRect(ctx, -w / 2, -h / 2, w, h, w * 0.045); ctx.stroke();
  ctx.restore();
}

function drawBadge(ctx, n, cx, cy, rad) {
  ctx.save();
  ctx.beginPath(); ctx.arc(cx, cy, rad, 0, Math.PI * 2);
  ctx.fillStyle = "#15132b"; ctx.fill();
  ctx.strokeStyle = "rgba(212,178,106,.8)"; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = "#f1dc9f"; ctx.font = `600 ${Math.round(rad * 1.1)}px Cinzel, Georgia, serif`;
  ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(String(n), cx, cy + 1);
  ctx.restore();
}

const FONT_ZH = "'Noto Serif SC', 'Songti SC', 'SimSun', serif";
const FONT_EN = "Cinzel, 'Noto Serif SC', Georgia, serif";

/** Renders the spread to a JPEG Blob. Width 1200px; height depends on the spread. */
export async function spreadImageBlob(r, positions) {
  const lang = getLang();
  const zh = lang === "zh";
  const spread = SPREADS[r.spreadId];
  const isCeltic = r.spreadId === "celtic";
  const isCustom = r.spreadId === "three" && r.setId === "custom";
  const setName = r.spreadId === "three" && !isCustom ? THREE_SETS.find((s) => s.id === r.setId)?.name : null;
  try { await document.fonts?.ready; } catch { /* ignore */ }
  const imgs = await loadImages(r);

  const W = 1200, PAD = 64;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  // Measure header first (needs a context with fonts), then size the canvas.
  canvas.width = W; canvas.height = 100;
  ctx.font = `400 26px ${FONT_ZH}`;
  const qText = [r.topic?.trim() ? `${zh ? "主题" : "Topic"}: ${r.topic.trim()}` : "", r.question?.trim() ? `${zh ? "问题" : "Question"}: ${r.question.trim()}` : ""].filter(Boolean);
  if (isCustom) r.questions.forEach((q, i) => qText.push(`${i + 1}. ${q}`));
  const qLines = qText.flatMap((s) => wrap(ctx, s, W - 2 * PAD)).slice(0, 8);
  const headerH = 64 + 48 + 34 + (qLines.length ? qLines.length * 38 + 20 : 0);

  // Layout geometry
  let cardW, cardH, areaH, slots = [], labelH = 0, legendH = 0;
  const count = r.cards.length;
  if (isCeltic) {
    const unit = (W - 2 * PAD) / CELTIC_LAYOUT.width;
    cardW = unit; cardH = unit * CELTIC_LAYOUT.cardH;
    areaH = unit * CELTIC_LAYOUT.height;
    slots = CELTIC_LAYOUT.slots.map((s) => ({ x: PAD + s.x * unit, y: s.y * unit, crossing: !!s.crossing }));
    legendH = 5 * 40 + 30;
  } else {
    cardW = count === 1 ? 380 : 300; cardH = cardW * 1.678;
    const gap = 60;
    const total = count * cardW + (count - 1) * gap;
    const x0 = (W - total) / 2;
    slots = r.cards.map((_, i) => ({ x: x0 + i * (cardW + gap), y: 0 }));
    areaH = cardH; labelH = 96;
  }
  const H = headerH + 24 + areaH + labelH + legendH + 90;
  canvas.height = Math.round(H);

  // Background
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, "#14122c"); g.addColorStop(1, "#0a0916");
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "rgba(255,255,255,.5)";
  for (let i = 0; i < 90; i++) { const sx = (i * 977) % W, sy = (i * 613) % H; ctx.fillRect(sx, sy, 2, 2); }

  // Header
  let y = PAD + 8;
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#f1dc9f";
  ctx.font = `600 40px ${zh ? FONT_ZH : FONT_EN}`;
  drawText(ctx, [`${L(spread.name)}${setName ? ` · ${L(setName)}` : ""}`], W / 2, y + 34, 48, "center");
  y += 48 + 10;
  ctx.fillStyle = "#a39db4"; ctx.font = `400 22px ${FONT_ZH}`;
  drawText(ctx, [r.date ? formatDay(r.date) : formatDate(r.ts || Date.now())], W / 2, y + 22, 34, "center");
  y += 34 + 14;
  if (qLines.length) {
    ctx.fillStyle = "#ebe6da"; ctx.font = `400 26px ${FONT_ZH}`;
    drawText(ctx, qLines, PAD, y + 26, 38, "left");
    y += qLines.length * 38 + 20;
  }
  y += 24;

  // Cards
  const areaTop = y;
  const order = isCeltic ? [0, 2, 3, 4, 5, 6, 7, 8, 9, 1] : r.cards.map((_, i) => i); // crossing card drawn last
  for (const i of order) {
    const c = r.cards[i];
    const s = slots[i];
    drawCard(ctx, imgs[i], s.x, areaTop + s.y, cardW, cardH, { reversed: c.rev, crossing: s.crossing });
  }
  if (isCeltic) {
    for (let i = 0; i < count; i++) {
      const s = slots[i];
      const bx = s.crossing ? s.x + cardW - 6 : s.x + 6;
      drawBadge(ctx, i + 1, bx, areaTop + s.y + 6, 20);
    }
  } else {
    ctx.textBaseline = "alphabetic";
    r.cards.forEach((c, i) => {
      const card = CARD_BY_ID[c.id];
      const cx = slots[i].x + cardW / 2;
      const ly = areaTop + cardH + 40;
      ctx.fillStyle = "#d4b26a"; ctx.font = `400 22px ${FONT_ZH}`;
      const posLines = wrap(ctx, L(positions[i].name), cardW + 40).slice(0, 2);
      drawText(ctx, posLines, cx, ly, 28, "center");
      const nameText = `${L(card.name)}${c.rev ? (zh ? "（逆位）" : " (reversed)") : ""}`;
      let size = 26;
      ctx.font = `600 ${size}px ${FONT_ZH}`;
      while (size > 17 && ctx.measureText(nameText).width > cardW + 36) { size -= 1; ctx.font = `600 ${size}px ${FONT_ZH}`; }
      ctx.fillStyle = "#ebe6da";
      drawText(ctx, [nameText], cx, ly + posLines.length * 28 + 6, 32, "center");
    });
  }
  y = areaTop + areaH + labelH;

  // Legend (Celtic Cross)
  if (isCeltic) {
    y += 30;
    ctx.textBaseline = "alphabetic"; ctx.textAlign = "left"; ctx.font = `400 24px ${FONT_ZH}`;
    const colW = (W - 2 * PAD) / 2;
    r.cards.forEach((c, i) => {
      const card = CARD_BY_ID[c.id];
      const col = i < 5 ? 0 : 1, row = i % 5;
      const lx = PAD + col * colW, lyy = y + row * 40 + 24;
      ctx.fillStyle = "#d4b26a"; ctx.fillText(`${i + 1}. ${L(positions[i].name)}`, lx, lyy);
      const pw = ctx.measureText(`${i + 1}. ${L(positions[i].name)}`).width;
      ctx.fillStyle = "#ebe6da"; ctx.fillText(`  ${L(card.name)}${c.rev ? (zh ? "（逆位）" : " (reversed)") : ""}`, lx + pw, lyy);
    });
    y += legendH;
  }

  // Footer
  ctx.fillStyle = "#7f7993"; ctx.font = `400 20px ${FONT_ZH}`; ctx.textAlign = "center";
  ctx.fillText(`${SITE.replace(/^https?:\/\//, "")}  ·  Rider–Waite–Smith (1909)`, W / 2, H - 36);

  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob"))), "image/jpeg", 0.92));
}

export function imageFileName(r) {
  const d = new Date(r.ts || Date.now());
  const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}-${String(d.getHours()).padStart(2, "0")}${String(d.getMinutes()).padStart(2, "0")}`;
  return `tarot-${r.spreadId}-${stamp}.jpg`;
}

export function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = name; a.rel = "noopener";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
