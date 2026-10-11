// Major Arcana (22 cards) — bilingual meanings, Rider-Waite-Smith tradition.
export default [
  {
    id: "m00", arcana: "major", number: 0,
    name: { zh: "愚者", en: "The Fool" },
    keywords: {
      upright:  { zh: ["新的开始", "冒险", "纯真", "自由"], en: ["new beginnings", "adventure", "innocence", "freedom"] },
      reversed: { zh: ["鲁莽", "犹豫不前", "逃避责任"], en: ["recklessness", "hesitation", "avoiding responsibility"] }
    },
    meaning: {
      upright: {
        zh: "年轻人背着行囊站在悬崖边，仰头望天，小狗在脚边雀跃。愚者代表一段旅程的起点：带着好奇与信任向未知迈步，不被过去束缚。在感情中是心动与不设防的开始，在工作中是敢于尝试新方向。内心层面，它提醒你保留一点天真，允许自己从零开始。",
        en: "A young traveler stands at the cliff's edge with a small pack and a white dog at his heels, eyes lifted to the sky. The Fool marks the start of a journey: stepping into the unknown with curiosity and trust, unburdened by the past. In love it is a fresh, open-hearted spark; at work, the courage to try a new direction. Inwardly, it asks you to keep a little innocence and let yourself begin again."
      },
      reversed: {
        zh: "逆位的愚者，那一步要么迈得太急，要么迟迟迈不出去。可能是没看清风险就纵身一跃，也可能是被恐惧困在原地，用“还没准备好”拖延。感情里要留意一时冲动或不负责任，工作上避免草率承诺。问问自己：是在逃避，还是真的需要更多准备？",
        en: "Reversed, the Fool's step is either taken too fast or not at all. You may be leaping without looking at the risks, or standing frozen at the edge, telling yourself you are not ready yet. In love, watch for impulsiveness or a reluctance to commit; at work, avoid hasty promises. Ask honestly whether you are avoiding something, or genuinely need more preparation."
      }
    },
    advice: { zh: "带着准备去冒险，但别让恐惧替你决定。", en: "Prepare, then take the leap; don't let fear decide for you." },
    yesNo: "yes"
  },
  {
    id: "m01", arcana: "major", number: 1,
    name: { zh: "魔术师", en: "The Magician" },
    keywords: {
      upright:  { zh: ["行动力", "创造", "资源整合", "意志"], en: ["willpower", "manifestation", "skill", "resourcefulness"] },
      reversed: { zh: ["操控", "才能浪费", "言过其实"], en: ["manipulation", "untapped talent", "deception"] }
    },
    meaning: {
      upright: {
        zh: "魔术师一手指天、一手指地，桌上摆着权杖、圣杯、宝剑与星币。他手握所有工具，象征把想法化为现实的能力。此刻你拥有实现目标所需的资源与技巧，关键在于专注与行动。感情中是主动表达与吸引力，工作上是展现才华、推动项目落地的好时机。",
        en: "One hand raised to the heavens, the other pointing to the earth, the Magician stands before a table holding a wand, a cup, a sword, and a pentacle. He has every tool he needs, and so do you. This is a card of focused will and manifestation: the skills and resources to turn an idea into reality are already in your hands. In love it brings confident, magnetic energy; at work, the moment to act and deliver."
      },
      reversed: {
        zh: "逆位时，魔术师的技巧可能用错了方向。或许是有才华却缺乏行动，让计划停留在空谈；或许是过度包装、用话术掩盖真相，甚至被人操控。感情里留意对方言行是否一致，工作上警惕只说不做。把注意力拉回真正的目标，诚实地使用你的能力。",
        en: "Reversed, the Magician's skill is pointed in the wrong direction. Talent may be sitting idle while plans stay as talk, or cleverness may be slipping into manipulation, overpromising, or sleight of hand, yours or someone else's. In relationships, check whether words and actions line up; at work, beware of style without substance. Bring your attention back to what you truly want and use your abilities honestly."
      }
    },
    advice: { zh: "你已经拥有工具，现在就开始动手。", en: "You already have the tools; start building now." },
    yesNo: "yes"
  },
  {
    id: "m02", arcana: "major", number: 2,
    name: { zh: "女祭司", en: "The High Priestess" },
    keywords: {
      upright:  { zh: ["直觉", "潜意识", "静默", "奥秘"], en: ["intuition", "the subconscious", "stillness", "mystery"] },
      reversed: { zh: ["忽视直觉", "秘密", "表面化"], en: ["ignored intuition", "hidden agendas", "superficiality"] }
    },
    meaning: {
      upright: {
        zh: "女祭司端坐在黑白两根柱子之间，身后的帷幕隐藏着更深的水域。她代表直觉与尚未显露的真相，提醒你答案不在外界的喧嚣里，而在内心的安静处。感情中有些事还未说出口，需要耐心感受；工作上适合观察、倾听，先别急着下结论。信任你的第一感觉。",
        en: "Seated between a black and a white pillar, with a veil behind her hiding deeper waters, the High Priestess guards what is not yet revealed. She stands for intuition and the knowledge that comes from stillness rather than noise. Something in love may be felt but not yet spoken; at work, this is a time to observe and listen before concluding. Trust your first, quiet sense of things."
      },
      reversed: {
        zh: "逆位的女祭司意味着你可能把内心的声音关掉了，只用理性或别人的意见做决定。也可能是有人隐瞒了什么，或者你自己在回避某个真相。感情中留意未说出口的疑虑，工作上不要忽略那种“哪里不对”的感觉。给自己一点独处的时间，重新连接直觉。",
        en: "Reversed, the High Priestess suggests that your inner voice has been switched off, with decisions made only by logic or by what others say. Something may be hidden from you, or you may be avoiding a truth you already sense. In love, notice the doubts left unspoken; at work, do not dismiss the feeling that something is off. Take some quiet time alone and reconnect with your intuition."
      }
    },
    advice: { zh: "安静下来，答案已经在你心里。", en: "Be still; the answer is already within you." },
    yesNo: "maybe"
  },
  {
    id: "m03", arcana: "major", number: 3,
    name: { zh: "皇后", en: "The Empress" },
    keywords: {
      upright:  { zh: ["丰饶", "滋养", "创造力", "美与感官"], en: ["abundance", "nurturing", "creativity", "sensuality"] },
      reversed: { zh: ["依赖", "过度付出", "创造力受阻"], en: ["dependence", "smothering", "creative block"] }
    },
    meaning: {
      upright: {
        zh: "皇后斜倚在繁茂的田野间，金色麦穗环绕，象征生命的丰饶与滋养。她带来成长、舒适与感官的愉悦：感情会在温柔的照料中深化，工作上的项目正在结果，创造力充沛。也常与孕育、家庭和自然相关。此刻请允许自己享受，而不是只顾付出。",
        en: "Reclining among ripe wheat and flowing water, crowned with stars, the Empress embodies abundance and the nurturing power of life. She brings growth, comfort, and sensual pleasure. Relationships deepen through tenderness and care; projects at work are bearing fruit, and creative energy runs high. She is also linked with fertility, home, and nature. Let yourself receive and enjoy, not only give."
      },
      reversed: {
        zh: "逆位的皇后，滋养变成了负担或匮乏。可能是过度操心、以爱为名的控制，也可能是忽略了自己的需要，身心都感到枯竭。感情中留意依赖与界限的失衡，工作上创意可能卡住，需要休息而非硬撑。先照顾好自己，丰盛才会回来。",
        en: "Reversed, nurturing turns into burden or lack. You may be over-caring, controlling in the name of love, or so busy looking after others that your own needs have gone unmet, leaving you drained. In relationships, watch for imbalances of dependence and boundaries; at work, creativity may be stuck and rest is needed rather than pushing on. Tend to yourself first, and abundance will return."
      }
    },
    advice: { zh: "先滋养自己，才有能力滋养他人。", en: "Nourish yourself first; then you can nourish others." },
    yesNo: "yes"
  },
  {
    id: "m04", arcana: "major", number: 4,
    name: { zh: "皇帝", en: "The Emperor" },
    keywords: {
      upright:  { zh: ["权威", "秩序", "稳定", "责任"], en: ["authority", "structure", "stability", "leadership"] },
      reversed: { zh: ["专制", "僵化", "权威受挫"], en: ["domination", "rigidity", "loss of control"] }
    },
    meaning: {
      upright: {
        zh: "皇帝端坐在石砌王座上，手持权杖与宝球，背后是坚硬的山峦。他代表秩序、规则与承担责任的力量。工作上适合建立制度、做出果断决定，或遇到一位有分量的领导者；感情中体现为稳定与保护，但也可能偏重理性。用纪律和长远眼光来经营你在意的事。",
        en: "Seated on a stone throne with a scepter and orb, mountains rising behind him, the Emperor rules through structure and discipline. He stands for order, authority, and the willingness to take responsibility. At work, this favors building systems, making firm decisions, or dealing with a powerful leader. In love it shows up as stability and protection, though sometimes more head than heart. Bring discipline and a long view to what matters."
      },
      reversed: {
        zh: "逆位的皇帝，秩序走向僵化或失控。可能是独断专行、不听他人意见，也可能是缺乏自律、责任被推卸。感情里留意控制欲或冷漠，工作上警惕过度管控或对权威的抗拒。真正的力量是有弹性的：坚持原则，也要留出空间让别人参与。",
        en: "Reversed, structure hardens into rigidity or slips into chaos. There may be domination and a refusal to hear other views, or the opposite: a lack of discipline and responsibility avoided. In relationships, watch for controlling behavior or emotional coldness; at work, be wary of micromanagement or a knee-jerk resistance to authority. Real strength is flexible: hold your principles, yet leave room for others."
      }
    },
    advice: { zh: "立好规则，但别让规则变成牢笼。", en: "Set clear rules, but don't let them become a cage." },
    yesNo: "yes"
  },
  {
    id: "m05", arcana: "major", number: 5,
    name: { zh: "教皇", en: "The Hierophant" },
    keywords: {
      upright:  { zh: ["传统", "信仰", "学习", "正式承诺"], en: ["tradition", "spiritual guidance", "learning", "commitment"] },
      reversed: { zh: ["教条", "叛逆", "质疑权威"], en: ["dogma", "rebellion", "questioning convention"] }
    },
    meaning: {
      upright: {
        zh: "教皇坐在两根柱子之间，为两位信徒祝福，手中权杖带着三重十字。他象征传统、体制与通过学习传承的智慧。工作上适合向导师请教、进入正规系统；感情中可能指向正式的承诺，如订婚或家人认可。当你迷茫时，经过验证的方法和可靠的指引比标新立异更有用。",
        en: "Between two pillars the Hierophant blesses two kneeling followers, his staff bearing a triple cross. He represents tradition, institutions, and wisdom passed down through teaching. At work, seek a mentor or follow established procedures; in love, this often points toward formal commitment, such as engagement or family approval. When you feel lost, proven methods and trusted guidance serve better than novelty."
      },
      reversed: {
        zh: "逆位的教皇，传统变成了束缚。你可能受够了规则与他人的期待，想要走自己的路；也可能是过度迷信权威，失去了独立判断。感情中留意来自家庭或世俗标准的压力，工作上质疑那些“一直如此”的做法。打破常规没有错，但先想清楚什么值得保留。",
        en: "Reversed, tradition becomes a constraint. You may be tired of rules and others' expectations and ready to find your own path, or you may be leaning so hard on authority that your own judgment has faded. In love, notice pressure from family or social norms; at work, question practices kept only because they have always been that way. Breaking convention is fine, but decide first what is worth keeping."
      }
    },
    advice: { zh: "尊重传统，但用自己的头脑判断。", en: "Respect tradition, but think for yourself." },
    yesNo: "maybe"
  },
  {
    id: "m06", arcana: "major", number: 6,
    name: { zh: "恋人", en: "The Lovers" },
    keywords: {
      upright:  { zh: ["爱", "结合", "价值观一致", "选择"], en: ["love", "union", "alignment of values", "choice"] },
      reversed: { zh: ["失衡", "价值冲突", "犹豫不决"], en: ["disharmony", "misaligned values", "indecision"] }
    },
    meaning: {
      upright: {
        zh: "天使展开双翼，为相望的男女祝福，身后分别是知识之树与生命之树。恋人牌代表深刻的连接与基于真心的选择。感情中是互相吸引、关系走向更深的承诺；工作上是找到志同道合的伙伴。它也提醒你：真正的选择要忠于自己的价值观，而非迎合外界。",
        en: "An angel spreads its wings over a man and a woman who gaze at each other, the Tree of Knowledge and the Tree of Life behind them. The Lovers speaks of deep connection and a choice made from the heart. In love it is mutual attraction and a relationship moving toward real commitment; at work, finding partners who share your vision. It also reminds you that a true choice must honor your own values, not outside pressure."
      },
      reversed: {
        zh: "逆位的恋人，关系中出现了裂痕，或者你站在十字路口却迟迟不愿选择。可能是沟通失衡、价值观不合，也可能是把别人的期待当成自己的意愿。感情里诚实面对分歧，工作上留意合作中的不信任。先回到内心，弄清你真正想要什么，再做决定。",
        en: "Reversed, cracks appear in a relationship, or you stand at a crossroads unable to choose. Communication may be lopsided, values may not match, or you may be mistaking someone else's wishes for your own. In love, face the disagreement honestly; at work, notice where trust in a partnership has frayed. Return to yourself, get clear about what you truly want, and then decide."
      }
    },
    advice: { zh: "忠于内心的价值观，做出真正属于你的选择。", en: "Choose according to your own values, not someone else's." },
    yesNo: "yes"
  },
  {
    id: "m07", arcana: "major", number: 7,
    name: { zh: "战车", en: "The Chariot" },
    keywords: {
      upright:  { zh: ["意志力", "胜利", "掌控", "前进"], en: ["willpower", "victory", "control", "determination"] },
      reversed: { zh: ["失控", "方向迷失", "咄咄逼人"], en: ["lack of direction", "aggression", "loss of control"] }
    },
    meaning: {
      upright: {
        zh: "战士立于战车之上，驾驭一黑一白两只狮身兽，用意志而非缰绳引导它们。战车代表凭借专注与自律克服阻力、赢得胜利。工作上是推进目标、争取成果的时刻；感情中需要主动与坚定，或面临远距离的奔赴。相互拉扯的力量只有被整合才能向前，坚持住你的方向。",
        en: "A warrior stands in his chariot, steering a black and a white sphinx by will alone, with no reins in hand. The Chariot is victory won through focus and self-discipline, pushing through resistance toward a clear goal. At work it is the moment to drive results; in love, it calls for initiative and resolve, and sometimes travel or distance. Opposing forces only move forward when you hold them together. Stay the course."
      },
      reversed: {
        zh: "逆位的战车，缰绳松了。你可能被内心互相矛盾的欲望拉扯而原地打转，也可能用蛮力硬冲，伤了人也伤了自己。工作上留意计划缺乏方向、推进受阻；感情里警惕控制欲与争强好胜。慢下来，先搞清楚你究竟要去哪里，再重新出发。",
        en: "Reversed, the reins have slipped. Conflicting desires may have you spinning in place, or you may be forcing your way through with brute strength, hurting others and yourself. At work, watch for plans without direction and progress that keeps stalling; in love, be wary of control and the need to win. Slow down, work out where you are actually going, and then set off again."
      }
    },
    advice: { zh: "收束心神，朝一个方向坚定前进。", en: "Gather your focus and move firmly in one direction." },
    yesNo: "yes"
  },
  {
    id: "m08", arcana: "major", number: 8,
    name: { zh: "力量", en: "Strength" },
    keywords: {
      upright:  { zh: ["内在力量", "勇气", "温柔的坚定", "耐心"], en: ["inner strength", "courage", "gentle resolve", "patience"] },
      reversed: { zh: ["自我怀疑", "怯懦", "情绪失控"], en: ["self-doubt", "weakness", "raw emotion"] }
    },
    meaning: {
      upright: {
        zh: "头戴花环的女子轻轻合上狮子的嘴，没有挣扎，只有温柔与信任。力量牌讲的是以柔克刚：真正的勇气来自内心的平静，而不是硬碰硬。感情中是用耐心和包容化解冲突，工作上是沉着应对压力与难缠的人。驯服内心的野兽，不靠压制，靠理解。",
        en: "A woman crowned with flowers gently closes the jaws of a lion; there is no struggle, only calm and trust. Strength is the art of mastering force with softness: real courage comes from inner steadiness rather than confrontation. In love it shows as patience and compassion that dissolve conflict; at work, as composure under pressure and with difficult people. Tame the beast within not by suppressing it but by understanding it."
      },
      reversed: {
        zh: "逆位的力量，信心动摇了。可能是被恐惧和自我怀疑压住，不敢面对挑战；也可能是情绪失控，冲动地发泄在他人身上。感情中留意缺乏安全感带来的猜忌，工作上警惕畏缩或过激反应。力量没有消失，只是暂时被遮住：从照顾自己的情绪开始，一点点找回它。",
        en: "Reversed, confidence has wavered. Fear and self-doubt may be holding you back from a challenge, or emotions may be boiling over and spilling onto others impulsively. In love, watch for insecurity turning into suspicion; at work, notice either shrinking away or overreacting. The strength is still there, only hidden for now. Begin by tending your own feelings, and reclaim it bit by bit."
      }
    },
    advice: { zh: "真正的力量是温柔而坚定的。", en: "True strength is gentle and unwavering." },
    yesNo: "yes"
  },
  {
    id: "m09", arcana: "major", number: 9,
    name: { zh: "隐士", en: "The Hermit" },
    keywords: {
      upright:  { zh: ["内省", "独处", "寻找真理", "智慧"], en: ["introspection", "solitude", "inner search", "wisdom"] },
      reversed: { zh: ["孤立", "逃避", "过度封闭"], en: ["isolation", "withdrawal", "loneliness"] }
    },
    meaning: {
      upright: {
        zh: "隐士站在雪山之巅，提着一盏六角星灯，独自照亮前路。他代表退回内心、在安静中寻找答案的阶段。感情上可能需要一段独处来理清想法，工作上适合深耕、研究，或向有经验的人求教。此刻的慢与静不是倒退，而是为了看得更清楚。",
        en: "On a snowy mountain peak the Hermit holds up a lantern with a six-pointed star, lighting his path alone. He marks a time of turning inward and seeking answers in quiet. In love you may need solitude to understand what you feel; at work, it favors deep study, research, or learning from someone more experienced. The slowness and stillness are not a retreat but a way to see more clearly."
      },
      reversed: {
        zh: "逆位的隐士，独处变成了孤立。可能是把自己关得太久，拒绝一切连接；也可能相反，是害怕面对内心，用忙碌来逃避反思。感情里留意是否在回避亲密，工作上别让“再想想”成为拖延的借口。独处有期限，看清了，就该带着灯回到人群。",
        en: "Reversed, solitude becomes isolation. You may have withdrawn so far that every connection is refused, or the reverse: afraid to look inward, you fill the days with busyness to avoid reflection. In love, notice whether you are avoiding intimacy; at work, do not let \"I need to think more\" become an excuse for delay. Retreat has its season. Once you see clearly, carry the lantern back to others."
      }
    },
    advice: { zh: "给自己安静的空间，但别忘了回来。", en: "Take quiet time for yourself, but remember to return." },
    yesNo: "maybe"
  },
  {
    id: "m10", arcana: "major", number: 10,
    name: { zh: "命运之轮", en: "Wheel of Fortune" },
    keywords: {
      upright:  { zh: ["转机", "周期", "命运", "好运"], en: ["turning point", "cycles", "destiny", "good fortune"] },
      reversed: { zh: ["逆境", "抗拒改变", "坏运气"], en: ["setbacks", "resistance to change", "bad luck"] }
    },
    meaning: {
      upright: {
        zh: "巨大的轮盘在云中转动，四角是四位守护者，轮上的生灵随之起落。命运之轮提醒你，一切都在周期里运行，而此刻轮子正向有利的方向转。工作上可能出现意外机会，感情中有命运般的相遇或关系的转折。顺势而为，抓住属于你的时机。",
        en: "A great wheel turns among the clouds, watched by four winged guardians, while creatures rise and fall along its rim. The Wheel of Fortune reminds you that everything moves in cycles, and right now the wheel is turning in your favor. At work an unexpected opportunity may arrive; in love, a fateful meeting or a decisive shift in a relationship. Move with the current and seize the moment that is yours."
      },
      reversed: {
        zh: "逆位的命运之轮，运势暂时走低，事情不如预期。可能是外部变化打乱了计划，也可能是你在抗拒必然的改变，反而被动受伤。感情中留意重复出现的老问题，工作上接受暂时的停滞。低谷同样是周期的一部分：与其抱怨，不如思考这次能学到什么。",
        en: "Reversed, luck has dipped and things are not going as planned. Outside changes may have upset your plans, or you may be resisting a change that is inevitable and getting hurt in the process. In love, notice old patterns repeating; at work, accept a temporary standstill. The low point is part of the cycle too. Rather than complaining, ask what this turn of the wheel is here to teach."
      }
    },
    advice: { zh: "顺应变化，低谷过后轮子仍会转动。", en: "Accept the turning; the wheel always moves on." },
    yesNo: "yes"
  },
  {
    id: "m11", arcana: "major", number: 11,
    name: { zh: "正义", en: "Justice" },
    keywords: {
      upright:  { zh: ["公正", "真相", "因果", "清晰的决定"], en: ["fairness", "truth", "cause and effect", "clear judgment"] },
      reversed: { zh: ["不公", "偏见", "逃避责任"], en: ["injustice", "bias", "avoiding accountability"] }
    },
    meaning: {
      upright: {
        zh: "正义女神端坐，一手举剑，一手持天平，目光笔直。她代表公正、真相与行为的后果：你如今收获的，正是过去所播下的。工作上适合处理合同、法律事务或做出理性决定；感情中要求诚实与对等。保持客观，权衡清楚再下判断，结果会是公平的。",
        en: "Justice sits upright, a sword raised in one hand and scales held level in the other, her gaze direct. She stands for fairness, truth, and consequence: what you reap now is what you sowed earlier. At work, this is a good time for contracts, legal matters, or decisions made with a clear head; in love, it asks for honesty and balance between partners. Stay objective, weigh carefully, and the outcome will be fair."
      },
      reversed: {
        zh: "逆位的正义，天平倾斜了。可能是遭遇不公，也可能是你在用偏见看待问题，或者不愿为自己的行为负责。感情中留意付出与回报的失衡，工作上警惕逃避责任或被不公正地对待。诚实地审视自己在其中的角色，真相虽然不舒服，却是回到平衡的起点。",
        en: "Reversed, the scales have tipped. You may be facing unfairness, or you may be seeing a situation through bias, or avoiding responsibility for your own part in it. In love, notice when giving and receiving are out of balance; at work, be alert to accountability dodged or to being treated unjustly. Look honestly at your own role. The truth may be uncomfortable, but it is where balance begins."
      }
    },
    advice: { zh: "诚实面对事实，为自己的选择负责。", en: "Face the facts honestly and own your choices." },
    yesNo: "maybe"
  },
  {
    id: "m12", arcana: "major", number: 12,
    name: { zh: "倒吊人", en: "The Hanged Man" },
    keywords: {
      upright:  { zh: ["暂停", "换个角度", "放手", "牺牲"], en: ["pause", "new perspective", "surrender", "sacrifice"] },
      reversed: { zh: ["无谓拖延", "抗拒放手", "停滞"], en: ["stalling", "resistance", "pointless sacrifice"] }
    },
    meaning: {
      upright: {
        zh: "一个人倒挂在树上，神情却平静，头顶散发光环。倒吊人代表主动的暂停：当你不再挣扎，世界会呈现出另一副面貌。工作上进展也许停滞，但这是重新审视的机会；感情中需要放下控制，耐心等待。有时放手比用力更有智慧。",
        en: "A man hangs upside down from a living tree, yet his face is calm and a halo glows around his head. The Hanged Man is a deliberate pause: when you stop struggling, the world shows you a different face. Work may stall, but this is a chance to re-examine your approach; in love, it asks you to release control and wait with patience. Sometimes letting go is wiser than pushing harder."
      },
      reversed: {
        zh: "逆位的倒吊人，暂停变成了无意义的拖延。你可能明明看清了却不愿行动，或者在一段毫无回报的付出里越陷越深。感情中留意单方面的牺牲，工作上别用“等时机”来逃避决定。如果这段悬挂已经没有新的领悟，就该松开绳子，落回地面。",
        en: "Reversed, the pause has become pointless delay. You may see clearly yet refuse to act, or sink deeper into a sacrifice that gives nothing back. In love, watch for one-sided giving; at work, stop hiding behind \"waiting for the right time.\" If hanging there no longer brings new insight, it is time to untie the rope and come back down to earth."
      }
    },
    advice: { zh: "停下来换个角度看，必要时果断放手。", en: "Pause and look from a new angle; let go when it's time." },
    yesNo: "maybe"
  },
  {
    id: "m13", arcana: "major", number: 13,
    name: { zh: "死神", en: "Death" },
    keywords: {
      upright:  { zh: ["结束", "转化", "新生", "告别"], en: ["endings", "transformation", "release", "rebirth"] },
      reversed: { zh: ["抗拒改变", "停滞", "无法放下"], en: ["resisting change", "stagnation", "clinging"] }
    },
    meaning: {
      upright: {
        zh: "骑着白马的骷髅骑士高举黑旗，远处太阳正从两座塔之间升起。死神极少指向肉体死亡，它讲的是彻底的结束与随之而来的新生。一段关系、一份工作或一种旧的自我正在落幕，为新的篇章腾出空间。悲伤是自然的，但请相信，告别之后必有黎明。",
        en: "A skeletal knight on a white horse carries a black banner, while in the distance the sun rises between two towers. Death rarely means physical death; it speaks of a complete ending and the rebirth that follows. A relationship, a job, or an old version of yourself is closing to make room for a new chapter. Grief is natural, yet trust that after the farewell comes the dawn."
      },
      reversed: {
        zh: "逆位的死神，该结束的还没结束。你可能紧紧抓着一段早已失去生命力的关系或处境，害怕改变而让一切停在半空。感情中留意拖延分手或无法走出过去，工作上警惕守着不再合适的位置。改变不会因为抗拒而消失，只会更艰难。允许它发生，你才能前进。",
        en: "Reversed, what should have ended has not. You may be clinging to a relationship or situation that lost its life long ago, so afraid of change that everything hangs in limbo. In love, notice a breakup put off or a past you cannot leave; at work, a role you have outgrown but will not release. Change does not vanish because you resist it; it only gets harder. Let it happen, and you can move forward."
      }
    },
    advice: { zh: "放下已经结束的，为新的开始腾出空间。", en: "Release what has ended to make room for what comes next." },
    yesNo: "no"
  },
  {
    id: "m14", arcana: "major", number: 14,
    name: { zh: "节制", en: "Temperance" },
    keywords: {
      upright:  { zh: ["平衡", "调和", "耐心", "中庸"], en: ["balance", "moderation", "patience", "harmony"] },
      reversed: { zh: ["失衡", "极端", "缺乏耐心"], en: ["imbalance", "excess", "impatience"] }
    },
    meaning: {
      upright: {
        zh: "天使一脚踏水、一脚踩地，在两只杯子之间从容地倾注水流。节制代表调和与中道：不急不躁，把看似对立的元素融合成新的东西。感情中是磨合期的耐心与包容，工作上是循序渐进、兼顾各方。你正在找到自己的节奏，保持这种平稳，结果会比急进更好。",
        en: "An angel stands with one foot in the water and one on land, calmly pouring water between two cups. Temperance is the art of blending and the middle path: neither rushing nor stalling, combining seemingly opposite elements into something new. In love it is patience and tolerance as two people adjust to each other; at work, steady progress that balances many needs. You are finding your rhythm. Keep it, and the result will outlast any sprint."
      },
      reversed: {
        zh: "逆位的节制，水洒出了杯子。生活可能失去了平衡：过度工作、过度消费或情绪大起大落，也可能是急于求成而失去耐心。感情中留意过度付出或冷热不定，工作上警惕走极端的决定。回到基本功：规律作息、适度，把节奏慢下来重新校准。",
        en: "Reversed, the water spills from the cups. Life may have lost its balance: overwork, overspending, or emotions that swing from one extreme to another, or an impatience that wants everything now. In love, watch for giving too much or running hot and cold; at work, beware of all-or-nothing decisions. Return to basics: regular rest, moderation, and a slower pace that lets you recalibrate."
      }
    },
    advice: { zh: "慢一点，在两端之间找到自己的节奏。", en: "Slow down and find your own rhythm between the extremes." },
    yesNo: "yes"
  },
  {
    id: "m15", arcana: "major", number: 15,
    name: { zh: "恶魔", en: "The Devil" },
    keywords: {
      upright:  { zh: ["束缚", "欲望", "成瘾", "阴影面"], en: ["bondage", "temptation", "addiction", "the shadow self"] },
      reversed: { zh: ["挣脱", "觉醒", "重获自由"], en: ["breaking free", "awakening", "reclaiming power"] }
    },
    meaning: {
      upright: {
        zh: "长角的恶魔高踞石座，脚下的男女被锁链拴住，但锁链其实松得可以自行挣脱。恶魔牌揭示让你不自由的东西：成瘾、依赖、恐惧，或一段消耗你的关系。感情中留意占有欲与不健康的纠缠，工作上警惕为了金钱或安全感而出卖自己。看清锁链，是解开它的第一步。",
        en: "A horned figure looms over a chained man and woman, yet the chains hang loosely enough to slip off. The Devil exposes whatever keeps you unfree: addiction, dependence, fear, or a relationship that drains you. In love, notice possessiveness and unhealthy entanglement; at work, be wary of selling yourself out for money or security. Seeing the chain clearly is the first step toward removing it."
      },
      reversed: {
        zh: "逆位的恶魔是挣脱的时刻。你开始意识到那些束缚自己的习惯和关系，并愿意松开锁链。可能是戒掉某种依赖、离开一段控制性的关系，或者直面曾经回避的阴影。过程不一定轻松，但你正在把力量拿回自己手里。坚持下去，自由就在眼前。",
        en: "Reversed, the Devil marks the moment of breaking free. You are becoming aware of the habits and ties that have held you and are willing to loosen the chain. It may mean giving up a dependence, leaving a controlling relationship, or finally facing a shadow you avoided. The process may not be easy, but you are taking your power back. Keep going; freedom is close."
      }
    },
    advice: { zh: "看清是什么在束缚你，锁链比你想的松。", en: "Name what binds you; the chains are looser than they seem." },
    yesNo: "no"
  },
  {
    id: "m16", arcana: "major", number: 16,
    name: { zh: "高塔", en: "The Tower" },
    keywords: {
      upright:  { zh: ["剧变", "崩塌", "真相揭露", "觉醒"], en: ["sudden upheaval", "collapse", "revelation", "awakening"] },
      reversed: { zh: ["避免灾难", "抗拒变化", "延迟的崩塌"], en: ["disaster averted", "fear of change", "delayed collapse"] }
    },
    meaning: {
      upright: {
        zh: "闪电击中塔顶，王冠坠落，人们从燃烧的高塔中坠下。高塔代表突如其来的剧变：建立在虚假基础上的东西轰然倒塌。可能是关系中隐藏的真相曝光、工作上的突变，或信念的动摇。它来得猛烈，却也带来清醒。废墟之上，才有机会重建更坚实的东西。",
        en: "Lightning strikes the tower, the crown topples, and figures fall from the burning height. The Tower is sudden upheaval: whatever was built on a false foundation comes crashing down. It may be a hidden truth exposed in a relationship, an abrupt change at work, or a belief that no longer holds. It arrives violently, yet it also brings clarity. On the ruins, you finally have the chance to build something that lasts."
      },
      reversed: {
        zh: "逆位的高塔，危机可能被避开了，或者正在被你强行压住。也许你已经感觉到基础在晃动，却不肯承认，用修修补补拖延真正的改变。感情中留意回避早该谈开的问题，工作上警惕掩盖隐患。主动拆掉不稳的部分，总好过等它自己倒下。",
        en: "Reversed, the crisis may have been averted, or it may be something you are holding back by force. You may feel the foundations shaking yet refuse to admit it, patching cracks instead of making the real change. In love, notice the conversation long overdue; at work, the risk being covered up. Dismantling what is unstable on your own terms is better than waiting for it to fall."
      }
    },
    advice: { zh: "让该倒的倒下，才能重建真正稳固的东西。", en: "Let what must fall fall; then build on solid ground." },
    yesNo: "no"
  },
  {
    id: "m17", arcana: "major", number: 17,
    name: { zh: "星星", en: "The Star" },
    keywords: {
      upright:  { zh: ["希望", "疗愈", "灵感", "宁静"], en: ["hope", "healing", "inspiration", "serenity"] },
      reversed: { zh: ["失去信心", "绝望", "自我怀疑"], en: ["discouragement", "lost faith", "disconnection"] }
    },
    meaning: {
      upright: {
        zh: "风暴过后，一位女子跪在水边，向池中与大地倾注清水，夜空中星光闪烁。星星是高塔之后的疗愈：伤口正在愈合，希望重新点亮。感情中是重建信任与温柔的时期，工作上是灵感回归、方向清晰。放松下来，相信自己正被宇宙温柔地托着。",
        en: "After the storm, a woman kneels by the water, pouring from two jugs onto the pool and the land while stars shine overhead. The Star is the healing that follows the Tower: wounds are closing and hope is lit again. In love it is a time of rebuilding trust and tenderness; at work, inspiration returns and the direction becomes clear. Relax, and trust that you are being gently held."
      },
      reversed: {
        zh: "逆位的星星，希望暗淡了。你可能被失望和疲惫压得看不见前路，怀疑一切是否值得。感情中留意封闭自己、不再相信爱，工作上警惕对目标失去热情。星光并没有熄灭，只是被乌云遮住。从小小的自我照顾开始，重新和让你安心的人与事连接。",
        en: "Reversed, hope has dimmed. Disappointment and exhaustion may be blocking your view of the road ahead, leaving you wondering whether any of it is worth it. In love, notice if you have closed off and stopped believing in connection; at work, if passion for the goal has faded. The stars have not gone out; clouds are only hiding them. Begin with small acts of self-care and reconnect with what grounds you."
      }
    },
    advice: { zh: "相信希望，温柔地修复自己。", en: "Trust in hope and heal yourself gently." },
    yesNo: "yes"
  },
  {
    id: "m18", arcana: "major", number: 18,
    name: { zh: "月亮", en: "The Moon" },
    keywords: {
      upright:  { zh: ["幻象", "不安", "潜意识", "直觉"], en: ["illusion", "anxiety", "the subconscious", "intuition"] },
      reversed: { zh: ["迷雾散去", "释放恐惧", "真相浮现"], en: ["clarity returning", "fears released", "truth revealed"] }
    },
    meaning: {
      upright: {
        zh: "月亮垂下阴郁的光，狗与狼对月长嚎，一只龙虾从水中爬出，小路蜿蜒通向远方。月亮代表不确定与幻象：事情并非表面所见，恐惧和想象可能放大了现实。感情中留意误解或隐瞒，工作上不要在信息不全时做决定。倾听直觉，但别被情绪牵着走，天亮之前请耐心。",
        en: "The moon casts an uneasy light; a dog and a wolf howl at it, a crayfish crawls from the pool, and a winding path leads into the distance. The Moon stands for uncertainty and illusion: things are not as they appear, and fear or imagination may be magnifying reality. In love, watch for misunderstanding or concealment; at work, avoid decisions made on incomplete information. Listen to your intuition, but do not let anxiety lead. Be patient until dawn."
      },
      reversed: {
        zh: "逆位的月亮，迷雾正在散去。曾经困扰你的焦虑、猜疑开始平息，隐藏的真相逐渐浮出水面。感情中可能是误会解开，或终于看清一个人的真面目；工作上，混乱的局面变得明朗。你也可能在压抑某种不安，此时可以安全地面对它。相信清醒过来的自己。",
        en: "Reversed, the fog is lifting. The anxiety and suspicion that troubled you begin to settle, and hidden truths rise to the surface. In love it may be a misunderstanding resolved, or finally seeing someone as they really are; at work, a confusing situation becomes clear. You may also have been suppressing a fear that is now safe to face. Trust the clarity that is returning."
      }
    },
    advice: { zh: "别急着下结论，等迷雾散开再行动。", en: "Don't rush to conclusions; wait for the fog to clear." },
    yesNo: "no"
  },
  {
    id: "m19", arcana: "major", number: 19,
    name: { zh: "太阳", en: "The Sun" },
    keywords: {
      upright:  { zh: ["喜悦", "成功", "活力", "清晰"], en: ["joy", "success", "vitality", "clarity"] },
      reversed: { zh: ["暂时的阴霾", "过度乐观", "失去热情"], en: ["temporary gloom", "overconfidence", "dimmed enthusiasm"] }
    },
    meaning: {
      upright: {
        zh: "阳光普照，一个孩子骑着白马，高举红旗，身后是盛开的向日葵。太阳是整副牌中最明亮的一张：成功、健康、真诚的快乐与清晰的头脑。感情中是坦诚相待、彼此温暖，工作上是成果被看见、计划顺利推进。尽情享受这份光亮，并把它分享出去。",
        en: "Beneath a radiant sun, a child rides a white horse and waves a red banner, with sunflowers blooming behind. The Sun is the brightest card in the deck: success, good health, genuine joy, and a clear mind. In love, it is openness and warmth between two people; at work, results recognized and plans moving smoothly. Enjoy this light fully, and share it with others."
      },
      reversed: {
        zh: "逆位的太阳并不是黑暗，只是云层暂时遮住了光。你可能感到低落、提不起劲，或者过度乐观而忽略了细节。感情中留意表面热情下的疏离，工作上警惕自满。成功依然在那里，只是需要你主动去找回那份单纯的快乐。试着做点让你真心开心的事。",
        en: "Reversed, the Sun is not darkness, only clouds passing in front of the light. You may feel flat and unmotivated, or so optimistic that details are being overlooked. In love, notice distance hiding behind surface cheer; at work, beware of complacency. Success is still within reach, but you need to go and find that simple joy again. Do something that genuinely delights you."
      }
    },
    advice: { zh: "拥抱喜悦，把你的光分享给别人。", en: "Embrace your joy and share your light with others." },
    yesNo: "yes"
  },
  {
    id: "m20", arcana: "major", number: 20,
    name: { zh: "审判", en: "Judgement" },
    keywords: {
      upright:  { zh: ["觉醒", "反思", "重生", "召唤"], en: ["awakening", "reckoning", "renewal", "a calling"] },
      reversed: { zh: ["自我批判", "逃避反省", "犹豫不前"], en: ["self-doubt", "avoiding reflection", "stalling"] }
    },
    meaning: {
      upright: {
        zh: "天使吹响号角，人们从墓中起身，张开双臂迎接召唤。审判代表觉醒与总结：回顾过去的一切，原谅、释怀，然后以全新的自己向前走。工作上可能是一次重要的评估或人生方向的转换，感情中是放下旧怨、重新开始。听从内心的召唤，它正在指引你。",
        en: "An angel sounds a trumpet and figures rise from their graves, arms open to the call. Judgement is awakening and reckoning: a review of all that has passed, followed by forgiveness, release, and a step forward as a renewed self. At work it may be a major evaluation or a change of life direction; in love, letting go of old grievances and beginning again. Heed the inner call; it is guiding you."
      },
      reversed: {
        zh: "逆位的审判，召唤来了，你却不敢回应。可能是过度苛责自己、困在悔恨里，也可能是拒绝面对过去，拖着不做决定。感情中留意无法原谅造成的隔阂，工作上警惕因自我怀疑错过机会。你已经学到了该学的，放过自己，然后行动。",
        en: "Reversed, the call has come but you hesitate to answer. You may be judging yourself harshly and stuck in regret, or refusing to face the past and putting off a decision. In love, notice the distance created by what cannot be forgiven; at work, the opportunity missed through self-doubt. You have learned what you needed to learn. Forgive yourself, and then act."
      }
    },
    advice: { zh: "原谅过去，回应内心的召唤。", en: "Forgive the past and answer your inner calling." },
    yesNo: "yes"
  },
  {
    id: "m21", arcana: "major", number: 21,
    name: { zh: "世界", en: "The World" },
    keywords: {
      upright:  { zh: ["完成", "圆满", "成就", "整合"], en: ["completion", "fulfillment", "achievement", "wholeness"] },
      reversed: { zh: ["未完成", "缺少收尾", "停滞"], en: ["incompletion", "loose ends", "lack of closure"] }
    },
    meaning: {
      upright: {
        zh: "舞者在桂冠花环中轻盈起舞，四角是守护的四大生灵。世界是大阿卡纳的终点：一段旅程圆满完成，你整合了所有经验，站在了新的高度。工作上是项目收官、目标达成，感情中是关系进入稳定圆满的阶段。庆祝这一刻，然后带着完整的自己，开启下一个循环。",
        en: "A dancer moves within a laurel wreath, the four living creatures watching from the corners. The World is the final card of the Major Arcana: a journey completed, every lesson integrated, a new height reached. At work it is a project brought to a close and a goal achieved; in love, a relationship settling into fulfillment. Celebrate this moment, and then, whole, begin the next cycle."
      },
      reversed: {
        zh: "逆位的世界，终点近在眼前却差了最后一步。可能是项目迟迟无法收尾，或是一段关系缺少真正的结束，让你无法翻篇。感情中留意旧事未了带来的牵绊，工作上检查是否有被忽略的细节。找到那个缺失的环节，把它补上，圆满才能真正到来。",
        en: "Reversed, the finish line is in sight but the last step is missing. A project may drag on without closing, or a relationship may lack a true ending that would let you turn the page. In love, notice the pull of unfinished business; at work, check for details that have been overlooked. Find the missing piece and complete it, and the sense of wholeness will finally arrive."
      }
    },
    advice: { zh: "把最后一步走完，然后庆祝。", en: "Take the final step, then celebrate." },
    yesNo: "yes"
  }
];
