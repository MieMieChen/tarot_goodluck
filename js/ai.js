// Question-aware interpretation.
//  - streamReading(): calls Claude through the official SDK (loaded on demand from a CDN)
//    with the user's own API key, streaming the answer.
//  - localReading(): a rule-based fallback assembled from the card meanings, used when
//    no key is configured or the API call fails.
import { CARD_BY_ID } from "./data/index.js";
import { t, L, other, getLang } from "./i18n.js";
import { SPREADS } from "./spreads.js";

export const AI_MODELS = [
  { id: "claude-opus-5-5",   name: { zh: "Claude Opus 5.5（默认，质量最好）", en: "Claude Opus 5.5 (default, best quality)" } },
  { id: "claude-sonnet-5-5", name: { zh: "Claude Sonnet 5.5（更快、更省）", en: "Claude Sonnet 5.5 (faster, cheaper)" } },
  { id: "claude-haiku-5-5",  name: { zh: "Claude Haiku 5.5（最便宜）", en: "Claude Haiku 5.5 (cheapest)" } },
];
const DEFAULT_MODEL = AI_MODELS[0].id;
const SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk@0.133.0/+esm";
const MAX_TOKENS = 4096;

/* ---------- settings (localStorage) ---------- */
const KEY = "tarot.ai";
export function getAiSettings() {
  let s = {};
  try { s = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch { /* ignore */ }
  return {
    apiKey: typeof s.apiKey === "string" ? s.apiKey : "",
    model: AI_MODELS.some((m) => m.id === s.model) ? s.model : DEFAULT_MODEL,
    auto: s.auto !== false,
  };
}
export function saveAiSettings(next) {
  const merged = { ...getAiSettings(), ...next };
  try { localStorage.setItem(KEY, JSON.stringify(merged)); } catch { /* ignore */ }
  return merged;
}
export const hasApiKey = () => getAiSettings().apiKey.trim().length > 0;

/* ---------- SDK loading ---------- */
let sdkPromise = null;
export function loadSdk() {
  if (!sdkPromise) {
    sdkPromise = import(SDK_URL).then((m) => m.default).catch((e) => { sdkPromise = null; throw Object.assign(new Error("sdk"), { code: "sdk", cause: e }); });
  }
  return sdkPromise;
}
function makeClient(Anthropic, apiKey) {
  return new Anthropic({ apiKey, dangerouslyAllowBrowser: true, maxRetries: 1 });
}

/* ---------- helpers shared by both paths ---------- */
export function hasQuestion(r) {
  return !!(r.question?.trim() || r.topic?.trim() || (r.setId === "custom" && r.spreadId === "three" && r.questions?.some((q) => q?.trim())));
}
const orientKey = (rev) => (rev ? "reversed" : "upright");
export function verdictOf(card, rev) {
  if (card.yesNo === "maybe") return "maybe";
  if (!rev) return card.yesNo;
  return card.yesNo === "yes" ? "no" : "yes";
}

/* ---------- prompt ---------- */
function buildPrompt(r, positions) {
  const lang = getLang();
  const spread = SPREADS[r.spreadId];
  const isCustom = r.spreadId === "three" && r.setId === "custom";
  const system = lang === "zh"
    ? `你是一位温和、诚实、有洞察力的塔罗解读者。用户已经抽好了牌，并带着一个问题。请用简体中文回应。

要求：
- 直接回应用户的问题：开头一两句就针对问题本身给出你的判断，不要先复述牌义定义。
- 逐张解释每个位置的牌对这个问题意味着什么，按牌名称呼；只在逆位改变含义时提到逆位。
- 然后把几张牌串成一个连贯的回答：现在的局面是什么、需要留意什么、用户可以怎么做。
- 塔罗是帮助反思的镜子，不是预言：语气温暖、坦诚、不宿命论，不要对未来说得绝对。不给医疗、法律、投资方面的具体指令；涉及严重问题时建议求助专业人士或信任的人。
- 如果是"是/否"牌阵，第一句就给出倾向（是 / 否 / 尚不明朗），再解释。
- 如果用户给了三个自定义问题，分别用对应的牌回答每个问题，每个问题前用一个简短的加粗小标题。
- 篇幅约 300 到 450 字。用自然段落写，可以给每张牌或每个问题加简短的加粗小标题；不要罗列要点，不要用表情符号。`
    : `You are a warm, honest, perceptive tarot reader. The user has drawn their cards and has a question. Respond in English.

Guidelines:
- Speak directly to the user's question: open with your read on the question itself in a sentence or two, not with card definitions.
- Walk through each card in its position and say what it means for this question. Call cards by name; mention a reversal only when it changes the meaning.
- Then weave the cards into one coherent answer: what the situation is, what to watch for, what the user can do.
- Tarot is a mirror for reflection, not prophecy: be warm, candid, non-fatalistic, and never absolute about the future. Give no medical, legal, or financial directives; for serious matters, suggest a professional or a trusted person.
- For a yes/no spread, state the lean (yes / no / not yet clear) in the first sentence, then explain.
- If the user gave three custom questions, answer each with its card under a short bold heading.
- Length: about 200 to 320 words. Plain paragraphs; short bold headings per card or question are fine. No bullet lists, no emoji.`;

  const lines = [];
  lines.push(`${lang === "zh" ? "牌阵" : "Spread"}: ${L(spread.name)} (${spread.count} ${lang === "zh" ? "张" : "cards"})`);
  if (r.topic?.trim()) lines.push(`${lang === "zh" ? "主题" : "Topic"}: ${r.topic.trim()}`);
  if (r.question?.trim()) lines.push(`${lang === "zh" ? "问题" : "Question"}: ${r.question.trim()}`);
  if (isCustom) lines.push(lang === "zh" ? "用户的三个相关问题分别对应三张牌（见下）。" : "The user's three related questions map to the three cards below.");
  lines.push("");
  lines.push(lang === "zh" ? "抽到的牌：" : "Cards drawn:");
  r.cards.forEach((c, i) => {
    const card = CARD_BY_ID[c.id];
    const o = orientKey(c.rev);
    const pos = positions[i];
    const posLabel = isCustom
      ? `${lang === "zh" ? "问题" : "Question"} ${i + 1}: ${L(pos.name)}`
      : `${L(pos.name)}${pos.hint ? ` (${L(pos.hint)})` : ""}`;
    lines.push(`${i + 1}. ${posLabel}`);
    lines.push(`   ${lang === "zh" ? "牌" : "Card"}: ${card.name.zh} / ${card.name.en}, ${t("orient." + o)}`);
    lines.push(`   ${t("reading.keywords")}: ${L(card.keywords[o]).join(", ")}`);
    lines.push(`   ${lang === "zh" ? "传统牌义" : "Traditional meaning"}: ${card.meaning[o][lang]}`);
    if (r.spreadId === "yesno") lines.push(`   ${lang === "zh" ? "是否倾向" : "Yes/no lean"}: ${t("yesno." + verdictOf(card, c.rev))}`);
  });
  return { system, user: lines.join("\n") };
}

/* ---------- Claude (streaming) ---------- */
/**
 * Streams the interpretation. `onText(fullTextSoFar)` is called on every delta.
 * Resolves to { text, model, stopReason }. Throws an Error with `.code` in
 * {sdk, auth, rate, billing, busy, network, aborted, generic} (and `.detail`).
 */
export async function streamReading(r, positions, { onText, signal } = {}) {
  const { apiKey, model } = getAiSettings();
  const Anthropic = await loadSdk();
  const client = makeClient(Anthropic, apiKey.trim());
  const { system, user } = buildPrompt(r, positions);
  let text = "";
  try {
    const stream = client.beta.messages.stream({
      model,
      max_tokens: MAX_TOKENS,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low" },
      system,
      messages: [{ role: "user", content: user }],
    }, { signal });
    for await (const ev of stream) {
      if (ev.type === "content_block_delta" && ev.delta?.type === "text_delta") {
        text += ev.delta.text;
        onText?.(text);
      }
    }
    const final = await stream.finalMessage();
    return { text: text.trim(), model: final?.model || model, stopReason: final?.stop_reason || "end_turn" };
  } catch (e) {
    throw classify(e, Anthropic, signal);
  }
}

export async function testConnection(apiKey, model) {
  const Anthropic = await loadSdk();
  const client = makeClient(Anthropic, apiKey.trim());
  try {
    const res = await client.messages.create({ model, max_tokens: 16, output_config: { effort: "low" }, messages: [{ role: "user", content: "Reply with the single word OK." }] });
    return { ok: true, model: res.model };
  } catch (e) {
    throw classify(e, Anthropic);
  }
}

function classify(e, Anthropic, signal) {
  if (e?.code === "sdk") return e;
  const err = new Error(e?.message || String(e));
  err.detail = e?.message || "";
  if (signal?.aborted || e?.name === "AbortError" || /abort/i.test(e?.name || "")) err.code = "aborted";
  else if (e instanceof Anthropic.AuthenticationError || e?.status === 401) err.code = "auth";
  else if (e instanceof Anthropic.RateLimitError || e?.status === 429) err.code = "rate";
  else if (e?.status === 402 || e?.type === "billing_error") err.code = "billing";
  else if (e?.status === 529 || e?.type === "overloaded_error" || e instanceof Anthropic.InternalServerError) err.code = "busy";
  else if (e instanceof Anthropic.APIConnectionError) err.code = "network";
  else err.code = "generic";
  return err;
}

/* ---------- rule-based fallback ---------- */
const TOPICS = {
  love:     { zh: ["感情", "恋爱", "喜欢", "暧昧", "分手", "复合", "结婚", "对象", "男朋友", "女朋友", "男友", "女友", "他对我", "她对我", "脱单", "相亲", "爱情", "关系", "表白", "喜欢我"],
              en: ["love", "relationship", "crush", "boyfriend", "girlfriend", "partner", " ex ", "marry", "marriage", "dating", "date", "breakup", "break up", "feelings for", "like me"] },
  work:     { zh: ["工作", "事业", "offer", "跳槽", "升职", "面试", "老板", "同事", "公司", "项目", "职业", "创业", "辞职", "实习"],
              en: ["job", "work", "career", "offer", "interview", "boss", "promotion", "company", "project", "startup", "business", "quit", "intern"] },
  money:    { zh: ["钱", "财", "收入", "投资", "理财", "买房", "贷款", "债", "存款", "工资"],
              en: ["money", "financ", "invest", "salary", "income", "debt", "loan", "savings", "afford"] },
  study:    { zh: ["学习", "考试", "考研", "留学", "论文", "学校", "成绩", "申请", "读博", "保研"],
              en: ["study", "exam", "school", "grade", "thesis", "apply", "application", "university", "phd", "college"] },
  health:   { zh: ["健康", "身体", "生病", "病"], en: ["health", "sick", "illness", "body"] },
  decision: { zh: ["该不该", "要不要", "是否", "应该", "能不能", "值不值得", "该怎么", "选"], en: ["should", "whether", "can i", "will i", "choose", "decide"] },
};
function topicOf(text) {
  const s = ` ${(text || "").toLowerCase()} `;
  for (const key of ["love", "work", "money", "study", "health", "decision"]) {
    const words = [...TOPICS[key].zh, ...TOPICS[key].en];
    if (words.some((w) => s.includes(w.toLowerCase()))) return key;
  }
  return "general";
}

// Pull the clause of the meaning text that speaks to the topic, else the second sentence.
function clauseFor(meaning, topic, lang) {
  const sentSplit = lang === "zh" ? /(?<=[。！？])/ : /(?<=[.!?])\s+/;
  const sentences = meaning.split(sentSplit).map((s) => s.trim()).filter(Boolean);
  const pick = (re) => { const m = meaning.match(re); return m ? m[0].replace(/[；;]$/, "").trim() : null; };
  let clause = null;
  if (lang === "zh") {
    if (topic === "love") clause = pick(/感情[^。；]*[。；]/);
    else if (topic === "work" || topic === "money" || topic === "study") clause = pick(/工作[^。；]*[。；]/);
    else if (topic === "health") clause = pick(/内心[^。；]*[。；]/) || pick(/身[体心][^。；]*[。；]/);
  } else {
    if (topic === "love") clause = pick(/\b[Ii]n (love|relationships?)[^.;]*[.;]/);
    else if (topic === "work" || topic === "money" || topic === "study") clause = pick(/\b[Aa]t work[^.;]*[.;]/);
    else if (topic === "health") clause = pick(/\b[Ii]nwardly[^.;]*[.;]/);
  }
  if (clause) {
    clause = clause.replace(/[；;。.]$/, "");
    return lang === "zh" ? clause + "。" : clause + ".";
  }
  const body = sentences.slice(1, 3).join(lang === "zh" ? "" : " ");
  return body || sentences[0] || meaning;
}

function tone(r) {
  let score = 0;
  for (const c of r.cards) {
    const v = verdictOf(CARD_BY_ID[c.id], c.rev);
    score += v === "yes" ? 1 : v === "no" ? -1 : 0;
  }
  return score > 0 ? "positive" : score < 0 ? "cautious" : "neutral";
}

const TONE_TEXT = {
  positive: { zh: "整体来看，牌面的能量偏向积极：方向是对的，关键在于你是否愿意持续投入。", en: "Taken together, the cards lean positive: the direction is sound, and what matters now is whether you keep showing up for it." },
  cautious: { zh: "整体来看，牌面提醒你放慢脚步：眼前有需要先处理的阻碍，与其急着要答案，不如先把基础稳住。", en: "Taken together, the cards counsel patience: there is something to work through first, and steadying the ground matters more than rushing to an answer." },
  neutral:  { zh: "整体来看，牌面没有给出一边倒的倾向：局面还在变化，结果更取决于你接下来的选择。", en: "Taken together, the cards do not tip one way: the situation is still in motion, and the outcome depends mostly on what you choose next." },
};

/** Deterministic, offline interpretation. Returns plain text with blank-line paragraph breaks. */
export function localReading(r, positions) {
  const lang = getLang();
  const isCustom = r.spreadId === "three" && r.setId === "custom";
  const q = (r.question || "").trim();
  const topicText = (r.topic || "").trim();
  const paras = [];

  if (isCustom) {
    const intro = topicText
      ? (lang === "zh" ? `围绕「${topicText}」，三张牌分别回应了你的三个问题：` : `Around "${topicText}", the three cards answer your three questions:`)
      : (lang === "zh" ? "三张牌分别回应了你的三个问题：" : "The three cards answer your three questions in turn:");
    paras.push(intro);
    r.cards.forEach((c, i) => {
      const card = CARD_BY_ID[c.id];
      const o = orientKey(c.rev);
      const question = (r.questions?.[i] || L(positions[i].name) || "").trim();
      const topic = topicOf(question + " " + topicText);
      const name = `${L(card.name)}${c.rev ? (lang === "zh" ? "（逆位）" : " (reversed)") : ""}`;
      paras.push(`**${question}**\n${name}${lang === "zh" ? "：" : ": "}${clauseFor(card.meaning[o][lang], topic, lang)} ${card.advice[lang]}`);
    });
    paras.push(L(TONE_TEXT[tone(r)]));
    return paras.join("\n\n");
  }

  const focus = q || topicText;
  const topic = topicOf(focus);
  paras.push(lang === "zh" ? `关于「${focus}」，牌面是这样回应的：` : `On "${focus}", here is what the cards say:`);

  if (r.spreadId === "yesno") {
    const c = r.cards[0];
    const card = CARD_BY_ID[c.id];
    const v = verdictOf(card, c.rev);
    const why = v === "yes" ? "yesno.leanYes" : v === "no" ? "yesno.leanNo" : "yesno.leanMaybe";
    paras.push(`**${t("yesno." + v)}**${lang === "zh" ? "。" : "."} ${t(why)}`);
  }

  r.cards.forEach((c, i) => {
    const card = CARD_BY_ID[c.id];
    const o = orientKey(c.rev);
    const name = `${L(card.name)}${c.rev ? (lang === "zh" ? "（逆位）" : " (reversed)") : ""}`;
    const head = r.cards.length > 1 ? `**${L(positions[i].name)} · ${name}**` : `**${name}**`;
    paras.push(`${head}\n${clauseFor(card.meaning[o][lang], topic, lang)}`);
  });

  const last = r.cards[r.cards.length - 1];
  const lastCard = CARD_BY_ID[last.id];
  paras.push(`${L(TONE_TEXT[tone(r)])} ${lastCard.advice[lang]}`);
  return paras.join("\n\n");
}
