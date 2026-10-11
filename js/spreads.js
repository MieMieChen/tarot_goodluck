// Spread definitions: positions (bilingual), position hints, and layouts.

export const THREE_SETS = [
  {
    id: "ppf",
    name: { zh: "过去 · 现在 · 未来", en: "Past · Present · Future" },
    positions: [
      { name: { zh: "过去", en: "Past" },     hint: { zh: "影响现在的根源", en: "The roots of the present" } },
      { name: { zh: "现在", en: "Present" },  hint: { zh: "你此刻所处的状态", en: "Where you stand right now" } },
      { name: { zh: "未来", en: "Future" },   hint: { zh: "事情可能的走向", en: "Where things are heading" } },
    ],
  },
  {
    id: "sao",
    name: { zh: "情况 · 行动 · 结果", en: "Situation · Action · Outcome" },
    positions: [
      { name: { zh: "情况", en: "Situation" }, hint: { zh: "当前局面的本质", en: "The nature of the situation" } },
      { name: { zh: "行动", en: "Action" },    hint: { zh: "你可以采取的行动", en: "What you can do about it" } },
      { name: { zh: "结果", en: "Outcome" },   hint: { zh: "可能的结果", en: "The likely result" } },
    ],
  },
  {
    id: "you",
    name: { zh: "你 · 对方 · 关系", en: "You · Them · The Bond" },
    positions: [
      { name: { zh: "你", en: "You" },        hint: { zh: "你在这段关系中的状态", en: "Where you are in this relationship" } },
      { name: { zh: "对方", en: "Them" },     hint: { zh: "对方的状态与感受", en: "Where they are, and how they feel" } },
      { name: { zh: "关系", en: "The Bond" }, hint: { zh: "这段关系的走向", en: "Where the relationship is going" } },
    ],
  },
  {
    id: "mbs",
    name: { zh: "身 · 心 · 灵", en: "Body · Mind · Spirit" },
    positions: [
      { name: { zh: "身", en: "Body" },   hint: { zh: "身体与现实层面", en: "The physical and practical level" } },
      { name: { zh: "心", en: "Mind" },   hint: { zh: "想法与情绪", en: "Thoughts and feelings" } },
      { name: { zh: "灵", en: "Spirit" }, hint: { zh: "更深的需要与方向", en: "Deeper needs and direction" } },
    ],
  },
  {
    id: "custom",
    name: { zh: "自定义三个相关问题", en: "Three questions of my own" },
    positions: [],   // filled from the user's questions
  },
];

export const CELTIC_POSITIONS = [
  { name: { zh: "现状", en: "The Present" },          hint: { zh: "问题的核心，你此刻所处的位置", en: "The heart of the matter and where you stand now" } },
  { name: { zh: "挑战", en: "The Challenge" },        hint: { zh: "横在面前的阻碍，或需要整合的力量", en: "What crosses you: the obstacle, or the force to reconcile" } },
  { name: { zh: "根基", en: "The Foundation" },       hint: { zh: "潜意识里的动机，事情的根源", en: "The root of the situation, what lies beneath" } },
  { name: { zh: "过去", en: "Recent Past" },          hint: { zh: "正在消退的影响", en: "Influences now passing away" } },
  { name: { zh: "目标", en: "Conscious Goal" },       hint: { zh: "你想达到的，或可能达到的最好结果", en: "What you aim for, or the best you can hope for" } },
  { name: { zh: "近未来", en: "Near Future" },        hint: { zh: "接下来会出现的发展", en: "What is coming next" } },
  { name: { zh: "自我", en: "Your Attitude" },        hint: { zh: "你看待这件事的方式", en: "How you see yourself in this" } },
  { name: { zh: "环境", en: "External Influences" }, hint: { zh: "周围的人与环境的影响", en: "People and circumstances around you" } },
  { name: { zh: "希望与恐惧", en: "Hopes and Fears" }, hint: { zh: "你内心最期待也最害怕的", en: "What you most hope for and most dread" } },
  { name: { zh: "结果", en: "Outcome" },              hint: { zh: "若保持现状，事情可能的结局", en: "Where things are heading if the course holds" } },
];

// Celtic Cross geometry in card-width units: card = 1 × 1.68, gap 0.15.
// Container is 4.95 wide × 7.17 tall; each entry is the top-left corner of a slot.
export const CELTIC_LAYOUT = {
  width: 4.95, height: 7.17, cardH: 1.68,
  slots: [
    { x: 1.15, y: 2.745 },                  // 1 present (center)
    { x: 1.15, y: 2.745, crossing: true },  // 2 challenge (rotated across 1)
    { x: 1.15, y: 4.575 },                  // 3 foundation (below)
    { x: 0.00, y: 2.745 },                  // 4 past (left)
    { x: 1.15, y: 0.915 },                  // 5 goal (above)
    { x: 2.30, y: 2.745 },                  // 6 near future (right)
    { x: 3.95, y: 5.49 },                   // 7 self (staff bottom)
    { x: 3.95, y: 3.66 },                   // 8 environment
    { x: 3.95, y: 1.83 },                   // 9 hopes and fears
    { x: 3.95, y: 0.00 },                   // 10 outcome (staff top)
  ],
};

export const SPREADS = {
  daily: {
    id: "daily", count: 1, icon: "☀",
    name: { zh: "每日一牌", en: "Card of the Day" },
    desc: { zh: "一天一张，作为今天的提醒", en: "One card each day, a note to carry with you" },
    positions: [{ name: { zh: "今日指引", en: "Today's guidance" }, hint: { zh: "今天值得留意的主题", en: "A theme worth noticing today" } }],
  },
  yesno: {
    id: "yesno", count: 1, icon: "⚖",
    name: { zh: "是 / 否", en: "Yes or No" },
    desc: { zh: "针对一个明确的问题，得到倾向性的答案", en: "A quick lean on one clear question" },
    positions: [{ name: { zh: "答案", en: "Answer" }, hint: { zh: "牌面对问题的倾向", en: "Which way the card leans" } }],
  },
  three: {
    id: "three", count: 3, icon: "☽",
    name: { zh: "三牌阵", en: "Three Cards" },
    desc: { zh: "三个位置，一条线索：过去现在未来，或你自己的三个问题", en: "Three positions, one thread: past, present, future, or three questions of your own" },
    sets: THREE_SETS,
  },
  celtic: {
    id: "celtic", count: 10, icon: "✦",
    name: { zh: "凯尔特十字", en: "Celtic Cross" },
    desc: { zh: "十张牌的经典深度牌阵，适合复杂的处境", en: "The classic ten-card deep dive for a complex situation" },
    positions: CELTIC_POSITIONS,
    layout: CELTIC_LAYOUT,
  },
};

export const SPREAD_ORDER = ["daily", "yesno", "three", "celtic"];
