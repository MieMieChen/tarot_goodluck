// Tiny i18n layer: UI strings in Simplified Chinese and English, persisted language choice.
const STR = {
  "app.title":        { zh: "塔罗", en: "Tarot" },
  "app.tagline":      { zh: "抽一张牌，听听此刻的回声", en: "Draw a card. Listen to the moment." },
  "nav.reading":      { zh: "占卜", en: "Readings" },
  "nav.library":      { zh: "牌库", en: "Library" },
  "nav.history":      { zh: "历史", en: "History" },
  "lang.switch":      { zh: "EN", en: "中文" },
  "lang.switchTitle": { zh: "Switch to English", en: "切换为中文" },

  "home.choose":      { zh: "选择一种牌阵", en: "Choose a spread" },
  "home.cards":       { zh: "{n} 张", en: "{n} cards" },
  "home.card":        { zh: "1 张", en: "1 card" },

  "setup.back":           { zh: "返回", en: "Back" },
  "setup.question":       { zh: "你的问题（可选）", en: "Your question (optional)" },
  "setup.questionPh":     { zh: "把心里的问题写下来，更容易专注……", en: "Write your question down; it helps you focus…" },
  "setup.yesnoPh":        { zh: "例如：我该接受这份工作吗？", en: "e.g. Should I take this job?" },
  "setup.positions":      { zh: "牌阵位置", en: "Positions" },
  "setup.topic":          { zh: "主题（可选）", en: "Topic (optional)" },
  "setup.topicPh":        { zh: "例如：换工作这件事", en: "e.g. Changing jobs" },
  "setup.customQ":        { zh: "问题 {n}", en: "Question {n}" },
  "setup.customQPh":      { zh: "第 {n} 个问题", en: "Question {n}" },
  "setup.customHint":     { zh: "写下三个彼此相关的问题，每张牌回答其中一个。", en: "Write three related questions; each card answers one of them." },
  "setup.customNeed":     { zh: "请先把三个问题填完整。", en: "Please fill in all three questions first." },
  "setup.reversed":       { zh: "允许逆位", en: "Allow reversed cards" },
  "setup.reversedHint":   { zh: "开启后每张牌约有三分之一的概率逆位", en: "When on, roughly one card in three comes up reversed" },
  "setup.shuffle":        { zh: "洗牌", en: "Shuffle" },

  "shuffle.ing":      { zh: "洗牌中……", en: "Shuffling…" },
  "shuffle.focus":    { zh: "深呼吸，把注意力放在你的问题上", en: "Take a breath and hold your question in mind" },

  "pick.title":       { zh: "凭直觉选出 {n} 张牌", en: "Pick {n} cards by intuition" },
  "pick.titleOne":    { zh: "凭直觉选出一张牌", en: "Pick one card by intuition" },
  "pick.remaining":   { zh: "还需 {n} 张", en: "{n} to go" },
  "pick.done":        { zh: "已选满，正在摆牌……", en: "All picked. Laying out…" },
  "pick.auto":        { zh: "随机帮我选", en: "Pick for me" },

  "spread.revealAll": { zh: "全部翻开", en: "Reveal all" },
  "spread.tap":       { zh: "点击卡牌翻开", en: "Tap a card to reveal it" },
  "spread.again":     { zh: "再占一次", en: "New reading" },
  "spread.copy":      { zh: "复制解读", en: "Copy reading" },
  "spread.copied":    { zh: "已复制到剪贴板", en: "Copied to clipboard" },
  "spread.saved":     { zh: "已保存到历史记录", en: "Saved to history" },
  "spread.readonly":  { zh: "历史记录", en: "From history" },

  "orient.upright":   { zh: "正位", en: "Upright" },
  "orient.reversed":  { zh: "逆位", en: "Reversed" },

  "reading.title":    { zh: "解读", en: "Reading" },
  "reading.keywords": { zh: "关键词", en: "Keywords" },
  "reading.advice":   { zh: "建议", en: "Advice" },
  "reading.question": { zh: "问题", en: "Question" },
  "reading.topic":    { zh: "主题", en: "Topic" },
  "reading.waiting":  { zh: "翻开这张牌后显示解读", en: "Reveal the card to read it" },
  "reading.disclaimer": { zh: "塔罗是一面镜子，而不是预言。请把它当作整理思绪的工具。", en: "Tarot is a mirror, not a prophecy. Use it to think, not to decide for you." },

  "yesno.yes":        { zh: "是", en: "Yes" },
  "yesno.no":         { zh: "否", en: "No" },
  "yesno.maybe":      { zh: "尚不明朗", en: "Not yet clear" },
  "yesno.leanYes":    { zh: "这张牌的能量倾向于肯定。", en: "The energy of this card leans toward yes." },
  "yesno.leanNo":     { zh: "这张牌的能量倾向于否定，或提醒你先别急。", en: "The energy leans toward no, or asks you to wait." },
  "yesno.leanMaybe":  { zh: "答案尚未明朗，牌面提示你关注过程而非结果。", en: "The answer is not settled yet; the card points you to the process rather than the outcome." },

  "daily.for":        { zh: "{date} 的牌", en: "Card for {date}" },
  "daily.note":       { zh: "每天只抽一张，明天会有新的牌。", en: "One card a day. A new one arrives tomorrow." },
  "daily.position":   { zh: "今日指引", en: "Today's guidance" },

  "library.title":    { zh: "牌库", en: "Card Library" },
  "library.sub":      { zh: "78 张韦特塔罗，点击查看牌义", en: "All 78 Rider–Waite cards. Tap one to read it." },
  "library.search":   { zh: "搜索牌名……", en: "Search by name…" },
  "library.empty":    { zh: "没有找到匹配的牌。", en: "No cards match." },
  "filter.all":       { zh: "全部", en: "All" },
  "filter.major":     { zh: "大阿卡纳", en: "Major Arcana" },
  "filter.wands":     { zh: "权杖", en: "Wands" },
  "filter.cups":      { zh: "圣杯", en: "Cups" },
  "filter.swords":    { zh: "宝剑", en: "Swords" },
  "filter.pentacles": { zh: "星币", en: "Pentacles" },

  "arcana.major":     { zh: "大阿卡纳 · {n}", en: "Major Arcana · {n}" },
  "arcana.minor":     { zh: "小阿卡纳 · {suit}", en: "Minor Arcana · {suit}" },

  "history.title":    { zh: "历史记录", en: "History" },
  "history.sub":      { zh: "记录保存在这台设备的浏览器里", en: "Readings are stored in this browser only" },
  "history.empty":    { zh: "还没有记录。先去抽一张牌吧。", en: "Nothing here yet. Go draw a card." },
  "history.clear":    { zh: "清空全部", en: "Clear all" },
  "history.confirm":  { zh: "确定要清空所有历史记录吗？", en: "Clear all history?" },
  "history.delete":   { zh: "删除", en: "Delete" },
  "history.view":     { zh: "查看", en: "View" },
  "history.notFound": { zh: "找不到这条记录。", en: "That reading could not be found." },
  "history.backList": { zh: "返回历史列表", en: "Back to history" },

  "modal.close":      { zh: "关闭", en: "Close" },

  "footer.credit":    { zh: "牌面图像：Rider–Waite–Smith（1909，公有领域）· 仅供娱乐与自我反思", en: "Card art: Rider–Waite–Smith (1909, public domain) · For entertainment and reflection" },
  "footer.source":    { zh: "源码", en: "Source" },

  "nav.settings":     { zh: "设置", en: "Settings" },

  "ai.title":         { zh: "针对你的问题", en: "About your question" },
  "ai.generating":    { zh: "正在根据牌面解读你的问题……", en: "Reading the cards for your question…" },
  "ai.generate":      { zh: "用 AI 解读", en: "Interpret with AI" },
  "ai.regenerate":    { zh: "重新生成", en: "Regenerate" },
  "ai.retry":         { zh: "重试", en: "Retry" },
  "ai.cancel":        { zh: "取消", en: "Cancel" },
  "ai.by":            { zh: "由 {model} 生成 · 仅供参考", en: "Generated by {model} · for reflection only" },
  "ai.hint":          { zh: "以上是根据牌义整理的回应。想要更贴合问题的 AI 解读，可以在设置里填入你的 Claude API Key。", en: "This response was assembled from the card meanings. For a more personal AI reading, add your Claude API key in Settings." },
  "ai.hintLink":      { zh: "前往设置", en: "Open settings" },
  "ai.localNote":     { zh: "以下是根据牌义整理的回应。", en: "Here is a response assembled from the card meanings." },
  "ai.refused":       { zh: "AI 没有对这个问题给出回应，下面是根据牌义整理的回应。", en: "The AI did not answer this one; here is a response assembled from the card meanings." },
  "ai.err.sdk":       { zh: "无法加载 AI 组件，请检查网络后重试。", en: "Could not load the AI component. Check your connection and try again." },
  "ai.err.auth":      { zh: "API Key 无效或已过期，请到设置里检查。", en: "The API key is invalid or expired. Check it in Settings." },
  "ai.err.rate":      { zh: "请求太频繁，稍等片刻再试。", en: "Too many requests. Wait a moment and try again." },
  "ai.err.billing":   { zh: "账户余额不足或未开通付费，请到 Anthropic 控制台查看。", en: "Billing problem on the account. Check the Anthropic console." },
  "ai.err.busy":      { zh: "服务暂时繁忙，请稍后再试。", en: "The service is busy right now. Try again shortly." },
  "ai.err.network":   { zh: "网络连接失败，请检查网络后重试。", en: "Network error. Check your connection and try again." },
  "ai.err.generic":   { zh: "生成失败：{msg}", en: "Generation failed: {msg}" },

  "settings.title":   { zh: "设置", en: "Settings" },
  "settings.sub":     { zh: "AI 解读使用你自己的 Claude API Key", en: "AI readings use your own Claude API key" },
  "settings.keyLabel": { zh: "Claude API Key", en: "Claude API key" },
  "settings.keyHelp": { zh: "在 Anthropic 控制台创建：", en: "Create one in the Anthropic console:" },
  "settings.noKey":   { zh: "还没有填写 Key。没有 Key 时，针对问题的回应会由内置的牌义规则生成。", en: "No key yet. Without one, the response to your question is assembled from the built-in meanings." },
  "settings.keySet":  { zh: "已配置 Key（••••{last4}）", en: "Key configured (••••{last4})" },
  "settings.model":   { zh: "模型", en: "Model" },
  "settings.auto":    { zh: "翻完牌后自动生成", en: "Generate automatically after all cards are revealed" },
  "settings.autoHint": { zh: "关闭后需要手动点击「用 AI 解读」", en: "When off, click \"Interpret with AI\" yourself" },
  "settings.privacy": { zh: "Key 只保存在这台设备的浏览器里，解读请求直接从你的浏览器发给 Anthropic，不经过任何第三方服务器。每次解读大约消耗几千 token，用 Opus 约合两三美分。", en: "The key is stored only in this browser. Requests go straight from your browser to Anthropic; no third-party server is involved. Each reading uses a few thousand tokens, roughly two or three cents on Opus." },
  "settings.save":    { zh: "保存", en: "Save" },
  "settings.saved":   { zh: "已保存", en: "Saved" },
  "settings.test":    { zh: "保存并测试连接", en: "Save and test" },
  "settings.testing": { zh: "测试中……", en: "Testing…" },
  "settings.testOk":  { zh: "连接成功，模型：{model}", en: "Connected. Model: {model}" },
  "settings.clear":   { zh: "清除 Key", en: "Remove key" },
  "settings.show":    { zh: "显示", en: "Show" },
  "settings.hide":    { zh: "隐藏", en: "Hide" },
};

function readStored() {
  try { return localStorage.getItem("tarot.lang"); } catch { return null; }
}

let lang = readStored() || ((navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en");

export function getLang() { return lang; }

export function setLang(next) {
  lang = next === "zh" ? "zh" : "en";
  try { localStorage.setItem("tarot.lang", lang); } catch { /* private mode */ }
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
}

export function t(key, vars = {}) {
  const entry = STR[key];
  const s = entry ? (entry[lang] ?? entry.en) : key;
  return s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ""));
}

/** Pick the current-language value from a {zh, en} object. */
export function L(obj) {
  if (!obj) return "";
  return obj[lang] ?? obj.en ?? obj.zh ?? "";
}

/** The other language's value (used for the small secondary card name). */
export function other(obj) {
  if (!obj) return "";
  return lang === "zh" ? (obj.en ?? "") : (obj.zh ?? "");
}

export function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleString(lang === "zh" ? "zh-CN" : "en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

export function formatDay(isoDay) {
  const [y, m, d] = isoDay.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US", { year: "numeric", month: "long", day: "numeric", weekday: "short" });
}
