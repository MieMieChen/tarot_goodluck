// Minor Arcana — Suit of Swords (Rider-Waite-Smith), bilingual card meanings (zh-CN / en)
export default [
  {
    id: "s01",
    arcana: "minor",
    suit: "swords",
    rank: 1,
    name: { zh: "宝剑王牌", en: "Ace of Swords" },
    keywords: {
      upright: { zh: ["清晰", "突破", "真相", "新想法"], en: ["clarity", "breakthrough", "truth", "new idea"] },
      reversed: { zh: ["思绪混乱", "误判", "言语伤人"], en: ["confusion", "misjudgment", "harsh words"] }
    },
    meaning: {
      upright: {
        zh: "一只手从云中伸出，紧握一把直立的宝剑，剑尖套着王冠。这是理智与真相的种子：一个清晰的念头、一个果断的决定，或一次拨云见日的突破。感情中意味着坦诚沟通、看清关系的本质；工作上适合提出新方案、敲定协议；内心则迎来久违的清明。",
        en: "A hand emerges from a cloud gripping an upright sword crowned with a wreath, the seed of clear thought and truth. The Ace brings a breakthrough: a sharp new idea, a decision finally made, or a fact that cuts through confusion. In love it favors honest conversation and seeing a relationship as it is; at work, new plans and agreements; inwardly, a welcome sense of mental clarity."
      },
      reversed: {
        zh: "剑尖朝下，王冠滑落，清明的力量被扭曲或闷住。思路混乱、判断失准，或是道理虽对却说得太狠，伤了人。感情里可能话赶话、各执一词；工作上方案尚不成熟，容易误判局势；内心常被纷杂念头占满，难以静下来。",
        en: "With the sword pointing down and the crown slipping, the Ace's clarity is muddled or misused. Thoughts run in circles, judgments miss the mark, or a true point is made so bluntly that it wounds. In love, arguments spiral and no one listens; at work a plan is half-formed and the situation misread; inwardly the mind feels crowded and restless, unable to settle."
      }
    },
    advice: { zh: "先把问题说清楚，再决定如何出手。", en: "Name the problem plainly before acting; clarity first, then the cut." },
    yesNo: "yes"
  },
  {
    id: "s02",
    arcana: "minor",
    suit: "swords",
    rank: 2,
    name: { zh: "宝剑二", en: "Two of Swords" },
    keywords: {
      upright: { zh: ["两难", "僵局", "回避", "暂时平衡"], en: ["dilemma", "stalemate", "avoidance", "uneasy balance"] },
      reversed: { zh: ["真相浮现", "打破僵局", "仓促决定"], en: ["truth surfacing", "breaking the deadlock", "rushed decision"] }
    },
    meaning: {
      upright: {
        zh: "一位蒙眼女子端坐海边，双手交叉握着两把剑，身后月色清冷。她刻意不看，也不动，把一个两难的选择悬在半空。感情里常是明知有问题却回避谈开；工作上是举棋不定、暂时搁置决定；内心则是用理智筑起堤坝，把情绪挡在门外，换取片刻平静。",
        en: "A blindfolded woman sits by the sea, arms crossed, holding two swords in perfect balance under a thin moon. She has chosen not to look and not to move, suspending a difficult choice. In love this is knowing something is wrong yet avoiding the talk; at work, a decision stalled in deliberation; inwardly, a truce held by reason alone, with emotion kept carefully out of sight."
      },
      reversed: {
        zh: "蒙眼布松动，交叉的双剑终于放下，僵局开始松动。可能是被迫面对一直回避的信息，也可能是在压力下仓促做了决定。感情中隐藏的矛盾浮出水面，反而有了谈开的机会；工作上拖延的事情到了非做不可的时刻；内心积压的情绪也开始找到出口。",
        en: "The blindfold loosens and the crossed swords come down; the stalemate breaks. Sometimes this means being forced to face information you avoided, sometimes a hasty decision made under pressure. In love, hidden tension surfaces and can finally be discussed; at work, a postponed matter can no longer wait; inwardly, feelings held at bay begin to find their way out."
      }
    },
    advice: { zh: "摘下眼罩，看清事实，再做选择。", en: "Take off the blindfold, gather the facts, and let yourself choose." },
    yesNo: "maybe"
  },
  {
    id: "s03",
    arcana: "minor",
    suit: "swords",
    rank: 3,
    name: { zh: "宝剑三", en: "Three of Swords" },
    keywords: {
      upright: { zh: ["心碎", "分离", "背叛", "残酷真相"], en: ["heartbreak", "separation", "betrayal", "painful truth"] },
      reversed: { zh: ["疗愈", "释怀", "压抑的痛"], en: ["healing", "letting go", "suppressed pain"] }
    },
    meaning: {
      upright: {
        zh: "三把剑刺穿一颗悬在雨云中的红心，画面直白得令人心痛。这是伤心、分离与残酷真相的牌：被背叛、被拒绝，或听到不想听的话。感情中多指失恋、第三者或深深的失望；工作上是被排挤或受挫；内心则要允许自己好好痛一场，不必假装无事。",
        en: "Three swords pierce a red heart hanging in a stormy sky, an image as direct as the pain it names. This is heartbreak, separation, and truth that cuts: betrayal, rejection, or words you did not want to hear. In love it often marks a breakup or a deep disappointment; at work, exclusion or a hard blow; inwardly, a grief that deserves to be felt rather than hidden."
      },
      reversed: {
        zh: "剑开始从心口拔出，雨势渐歇。逆位多指疗愈与释怀：旧伤慢慢结痂，可以谈论过去而不再崩溃。但也可能是压抑痛苦、迟迟不肯放下。感情中是走出失恋、原谅对方或自己；工作上是从挫折中恢复；内心则学会与伤痕共处，不再被它定义。",
        en: "The swords begin to withdraw and the rain thins. Reversed, this card most often speaks of healing and release: old wounds scabbing over, the past becoming something you can mention without breaking. It can also warn of grief pushed down and refusing to fade. In love, moving on or forgiving; at work, recovery after a setback; inwardly, living with the scar rather than being defined by it."
      }
    },
    advice: { zh: "让自己难过一阵，但别在伤口里安家。", en: "Let yourself hurt for a while, but do not make the wound your home." },
    yesNo: "no"
  },
  {
    id: "s04",
    arcana: "minor",
    suit: "swords",
    rank: 4,
    name: { zh: "宝剑四", en: "Four of Swords" },
    keywords: {
      upright: { zh: ["休息", "恢复", "静养", "暂时退出"], en: ["rest", "recovery", "retreat", "quiet pause"] },
      reversed: { zh: ["重新出发", "过度疲劳", "坐立不安"], en: ["re-emergence", "burnout", "restlessness"] }
    },
    meaning: {
      upright: {
        zh: "骑士平躺在教堂的石棺上，双手合十，三把剑挂在墙上，一把置于身下。这是休整与静养的牌：经历一场消耗之后，需要安静地恢复。感情中是暂时冷静、各自喘息；工作上是停下来复盘而非硬撑；内心则是冥想、睡眠与独处带来的修复。",
        en: "A knight lies in effigy on a chapel tomb, hands pressed in prayer, three swords hung on the wall and one beneath him. This is rest, retreat, and quiet recovery after exertion, not death but a deliberate pause. In love it suggests space to cool down and breathe; at work, stepping back to reflect instead of pushing through; inwardly, the repair that comes from sleep, solitude, and stillness."
      },
      reversed: {
        zh: "骑士从石棺上坐起，休息被打断，或已经歇够了该起身。逆位可能是过度疲劳却不肯停下，也可能是休养结束、重新投入。感情中或是冷静期拖得太久，或终于准备重新联系；工作上是带着恢复的精力复工；内心则是走出退缩，重新面对世界。",
        en: "The knight sits up from the tomb: rest has been interrupted, or it has lasted long enough. Reversed, this can mean exhaustion you keep ignoring and a restlessness that will not let you recover, or the end of a retreat and a return to activity. In love, a cooling-off period that either drags on or finally ends; at work, re-engaging with restored energy; inwardly, stepping back into the world after withdrawal."
      }
    },
    advice: { zh: "给自己一段真正的休息，不必愧疚。", en: "Give yourself real rest without guilt; recovery is part of the work." },
    yesNo: "maybe"
  },
  {
    id: "s05",
    arcana: "minor",
    suit: "swords",
    rank: 5,
    name: { zh: "宝剑五", en: "Five of Swords" },
    keywords: {
      upright: { zh: ["冲突", "惨胜", "羞辱", "不择手段"], en: ["conflict", "hollow victory", "humiliation", "winning at any cost"] },
      reversed: { zh: ["和解", "放下争斗", "积怨未消"], en: ["reconciliation", "ending the fight", "lingering resentment"] }
    },
    meaning: {
      upright: {
        zh: "男子抱着三把剑，得意地回望两个垂头离去的人，乌云翻滚。这是赢了争吵却输了关系的牌：冲突、羞辱、不择手段的胜利，或明知打不赢的仗。感情中是互相伤害、争个高低；工作上是办公室斗争或被人算计；内心则是对自尊和“正确”的执念。",
        en: "A smirking man gathers three swords while two others walk away defeated under a ragged sky. This is a victory that costs more than it wins: conflict, humiliation, tactics that cross a line, or a fight no one can truly win. In love it shows mutual wounding and scorekeeping; at work, office politics, being outmaneuvered or doing the outmaneuvering; inwardly, a stubborn need to be right at any price."
      },
      reversed: {
        zh: "乌云散开，有人放下了剑。逆位意味着冲突的收尾：求和、道歉，或终于决定不再纠缠。也可能是积怨未消、暗中伺机。感情中是争吵后的和解，或承认一段关系已无法挽回；工作上是退出不值得的斗争；内心则是放下赢的执念，换回自己的平静。",
        en: "The clouds thin and someone sets down a sword. Reversed, the Five points toward the end of a conflict: an apology, a truce, or the decision to stop fighting altogether. It can also mean resentment lingering underground, waiting. In love, reconciliation after a quarrel, or admitting a relationship cannot be saved; at work, walking away from a fight not worth winning; inwardly, trading the need to win for peace."
      }
    },
    advice: { zh: "问问自己，这场胜利值得付出的代价吗？", en: "Ask whether winning this is worth what it costs you; sometimes walking away is wiser." },
    yesNo: "no"
  },
  {
    id: "s06",
    arcana: "minor",
    suit: "swords",
    rank: 6,
    name: { zh: "宝剑六", en: "Six of Swords" },
    keywords: {
      upright: { zh: ["过渡", "离开困境", "旅程", "渐趋平静"], en: ["transition", "moving on", "journey", "calmer waters"] },
      reversed: { zh: ["过渡受阻", "旧事纠缠", "未完成的事"], en: ["stalled transition", "baggage", "unfinished business"] }
    },
    meaning: {
      upright: {
        zh: "船夫撑篙，载着蒙头的女子与孩子驶向对岸，六把剑插在船头，水面渐渐平静。这是离开困境、过渡到新阶段的牌：搬家、旅行，或走出一段艰难。感情中是带伤前行，或一起渡过难关；工作上是转岗、换环境；内心是平复，不欢快，但安稳。",
        en: "A ferryman poles a boat carrying a shrouded woman and child toward a calmer shore, six swords standing in the bow. This is passage out of difficulty: a move, a journey, or a gradual transition from troubled waters to quieter ones. In love it may be leaving a hard chapter behind or weathering one together; at work, a change of role or setting; inwardly, a subdued but genuine sense of relief."
      },
      reversed: {
        zh: "小船在原地打转，或被迫回头。逆位是过渡受阻：想离开却走不了，旧问题阴魂不散，或逃避太久反而无法前进。感情中是分不开又好不了，反复拉扯；工作上是变动延误、迁移不顺；内心则是明知该放下，却被过去拖着，需要先处理未完成的事。",
        en: "The boat circles or is forced back toward the shore it left. Reversed, the transition stalls: you want to leave but cannot, old troubles follow you, or running has gone on so long it has become its own trap. In love, a bond that neither ends nor heals; at work, delays in a move or change; inwardly, unfinished business from the past that must be dealt with before you can go on."
      }
    },
    advice: { zh: "带上必要的，其余放下，慢慢往前走。", en: "Take what you need, leave the rest, and keep moving toward calmer water." },
    yesNo: "yes"
  },
  {
    id: "s07",
    arcana: "minor",
    suit: "swords",
    rank: 7,
    name: { zh: "宝剑七", en: "Seven of Swords" },
    keywords: {
      upright: { zh: ["策略", "隐瞒", "单干", "逃避责任"], en: ["strategy", "secrecy", "going it alone", "evasion"] },
      reversed: { zh: ["坦白", "回归团队", "谎言败露"], en: ["confession", "rejoining the group", "exposed deception"] }
    },
    meaning: {
      upright: {
        zh: "男子踮脚抱着五把剑溜出营地，回头张望，身后还留着两把。这是策略、隐瞒与单干的牌：绕过正面冲突，用巧劲办事，也可能是欺骗、逃避责任。感情中要留意隐瞒和不坦诚；工作上是暗中布局，或有人背后动作；内心则是不愿示人的自我保护。",
        en: "A man tiptoes away from a camp with five swords in his arms, glancing back, two swords left standing behind him. This is strategy, stealth, and going it alone: sidestepping confrontation, using cunning rather than force, or, less kindly, deceit and dodged responsibility. In love it asks about secrets and half-truths; at work, quiet maneuvering or someone acting behind your back; inwardly, a guardedness that hides what you really think."
      },
      reversed: {
        zh: "偷剑的人停下脚步，可能是良心发现，也可能是被当场抓住。逆位指向坦白、回归团队与承担后果，或是继续自欺欺人。感情中是把秘密说开，重建信任；工作上是放弃单干、寻求合作，或谎言被揭穿；内心则是不再骗自己，承认真正想要什么。",
        en: "The thief stops in his tracks, whether from conscience or because he has been caught. Reversed, the Seven leans toward confession, rejoining the group, and accepting consequences, though it can also mean a deception that keeps circling back on itself. In love, a secret brought into the open and trust rebuilt; at work, giving up the solo scheme or a cover story falling apart; inwardly, ending self-deception and admitting what you truly want."
      }
    },
    advice: { zh: "走正道也许更慢，但不用回头张望。", en: "The straight path may be slower, but you will not have to keep looking back." },
    yesNo: "no"
  },
  {
    id: "s08",
    arcana: "minor",
    suit: "swords",
    rank: 8,
    name: { zh: "宝剑八", en: "Eight of Swords" },
    keywords: {
      upright: { zh: ["自我设限", "受困", "焦虑", "无力感"], en: ["self-imposed limits", "feeling trapped", "anxiety", "powerlessness"] },
      reversed: { zh: ["挣脱", "看清出路", "重拾信心"], en: ["release", "new perspective", "regained confidence"] }
    },
    meaning: {
      upright: {
        zh: "女子被绑住蒙眼，站在八把插地的剑之间，脚下泥泞，远处有城堡。绳索并不紧，剑也没围死，她只是不知道能走出去。这是自我设限、困于思维的牌。感情中是困在原地看不到出路；工作上是被想象的困难吓住；内心是焦虑和“我不行”的声音。",
        en: "A bound and blindfolded woman stands among eight swords planted in marshy ground, a castle visible on the hill behind her. The ropes are loose and the swords leave a gap; what holds her is believing she cannot move. This is self-imposed restriction and a mind that traps itself. In love it feels like being stuck with no way out; at work, paralysis before imagined obstacles; inwardly, anxiety and the voice that says \"I can't.\""
      },
      reversed: {
        zh: "绑绳松脱，眼罩滑落，她终于看见剑之间的缝隙。逆位多指挣脱与清醒：看穿恐惧的虚张声势，拿回选择权。也可能是把自己越缠越紧。感情中是走出受害者心态，主动改变；工作上是看到被忽略的出路；内心则是从自我批评中松绑，恢复信心。",
        en: "The ropes slip and the blindfold falls; she sees the space between the swords at last. Reversed, the Eight usually means release and perspective: recognizing fear for the bluff it was and reclaiming the power to choose. Occasionally it shows the opposite, binding yourself tighter. In love, leaving the role of victim and acting; at work, noticing an exit you had overlooked; inwardly, easing self-criticism and recovering confidence."
      }
    },
    advice: { zh: "动一动手脚，你会发现绳子没那么紧。", en: "Test the ropes; they are looser than they feel, and the path is open." },
    yesNo: "no"
  },
  {
    id: "s09",
    arcana: "minor",
    suit: "swords",
    rank: 9,
    name: { zh: "宝剑九", en: "Nine of Swords" },
    keywords: {
      upright: { zh: ["焦虑", "失眠", "自责", "噩梦"], en: ["anxiety", "sleepless nights", "guilt", "dread"] },
      reversed: { zh: ["走出深渊", "寻求帮助", "自我宽恕"], en: ["emerging from despair", "asking for help", "self-forgiveness"] }
    },
    meaning: {
      upright: {
        zh: "深夜有人从床上惊坐起来，双手掩面，九把剑挂在黑暗的墙上，被子上绣着玫瑰与星象。这是焦虑、失眠与自责的牌，担忧往往比现实更可怕。感情中是胡思乱想、患得患失；工作上是压力大得喘不过气；内心则反复咀嚼最坏的可能，被恐惧耗尽。",
        en: "Someone sits bolt upright in bed at night, face buried in their hands, nine swords lined along the dark wall above a quilt stitched with roses and zodiac signs. This is anxiety, insomnia, and guilt, a dread that usually outruns reality. In love it brings spiraling doubt and overthinking; at work, pressure that feels crushing; inwardly, replaying worst-case scenarios until fear wears you down."
      },
      reversed: {
        zh: "天色渐亮，掩面的手放了下来。逆位多是从深渊中抬头：说出心事、寻求帮助，发现恐惧没那么实在。有时也指焦虑已重到影响生活，需要正视。感情中是把担忧说出口，得到安慰；工作上压力有所松动；内心则与噩梦和解，恢复睡眠与自我宽恕。",
        en: "Dawn creeps in and the hands come down from the face. Reversed, the Nine most often marks the first step out of the pit: speaking the fear aloud, asking for help, finding it smaller in daylight. It can also warn that anxiety has grown heavy enough to need real attention. In love, confiding worries and being reassured; at work, pressure beginning to ease; inwardly, sleep returning and self-forgiveness taking root."
      }
    },
    advice: { zh: "把担心说给人听，夜里的恐惧经不起白天。", en: "Say the worry out loud to someone; night fears rarely survive daylight." },
    yesNo: "no"
  },
  {
    id: "s10",
    arcana: "minor",
    suit: "swords",
    rank: 10,
    name: { zh: "宝剑十", en: "Ten of Swords" },
    keywords: {
      upright: { zh: ["痛苦的结束", "谷底", "背叛", "崩溃"], en: ["painful ending", "rock bottom", "betrayal", "collapse"] },
      reversed: { zh: ["劫后重生", "慢慢复原", "不肯放手"], en: ["survival", "slow recovery", "refusing to let go"] }
    },
    meaning: {
      upright: {
        zh: "有人俯卧在地，背上插着十把剑，天空漆黑，地平线却已透出一线晨光。这是跌到谷底、彻底结束的牌：背叛、崩溃、一败涂地。感情中是一段关系的终局；工作上是项目失败或被辞退；内心是被彻底击垮，但正因无路可退，新的开始才成为可能。",
        en: "A figure lies face down with ten swords driven into his back, the sky black above him, yet a pale line of dawn edges the horizon. This is rock bottom and a painful, final ending: betrayal, collapse, a defeat with nothing held back. In love, the definitive close of a relationship; at work, a failed project or dismissal; inwardly, feeling utterly undone, and because there is nowhere further to fall, a new beginning becomes possible."
      },
      reversed: {
        zh: "剑一把把被拔出，晨光慢慢铺开。逆位多指劫后重生：最坏的已经过去，伤口开始愈合，可以重新站起来。也可能是不肯承认结束，把痛苦拖得太久。感情中是放下旧伤、重新相信；工作上是吸取教训、东山再起；内心则是把灾难变成转折点。",
        en: "The swords are drawn out one by one and the dawn spreads. Reversed, the Ten usually means survival and slow recovery: the worst has passed, wounds are closing, and you can get back on your feet. It can also point to refusing to accept an ending and prolonging the drama. In love, letting old hurt go and daring to trust again; at work, learning from failure and rebuilding; inwardly, turning catastrophe into a turning point."
      }
    },
    advice: { zh: "谷底已到，剩下的路只能向上。", en: "You have hit bottom; the only direction left is up, so start there." },
    yesNo: "no"
  },
  {
    id: "s11",
    arcana: "minor",
    suit: "swords",
    rank: 11,
    name: { zh: "宝剑侍从", en: "Page of Swords" },
    keywords: {
      upright: { zh: ["好奇", "机敏", "直言", "新消息"], en: ["curiosity", "quick wit", "candor", "new information"] },
      reversed: { zh: ["言语刻薄", "闲话", "虎头蛇尾"], en: ["cutting remarks", "gossip", "all talk"] }
    },
    meaning: {
      upright: {
        zh: "年轻侍从高举宝剑站在山丘上，衣袍翻飞，警觉地望向远方。这是好奇、机敏与直言的牌：新想法、新消息、旺盛的求知欲，也带几分急躁和锋芒。感情中是聊得来但还不深的关系；工作上是学新技能、留意情报；内心则头脑活跃，什么都想弄明白。",
        en: "A young page stands on a windy hilltop, sword raised, cloak whipping, eyes scanning the horizon with alert curiosity. This is quick thinking, candor, and fresh information: new ideas, news arriving, an appetite for learning, along with some restlessness and sharp edges. In love it suggests lively conversation that has not yet deepened; at work, picking up skills and keeping watch; inwardly, a busy mind eager to understand everything."
      },
      reversed: {
        zh: "风把侍从吹得站不稳，剑挥得没有章法。逆位是聪明用错了地方：说话刻薄、爱打探、传闲话，或者光说不做、虎头蛇尾。感情中是过度试探和言语伤人；工作上是计划缺乏跟进，或轻率传递消息；内心则是想得多做得少，焦躁而缺乏耐心。",
        en: "The wind knocks the page off balance and the sword swings without aim. Reversed, cleverness goes astray: cutting remarks, prying, gossip, or plenty of talk with little follow-through. In love it shows constant testing and words that sting; at work, plans abandoned halfway or news passed on carelessly; inwardly, a mind that races ahead of action, impatient and scattered."
      }
    },
    advice: { zh: "保持好奇，但先听完，再开口。", en: "Stay curious, but listen all the way through before you speak." },
    yesNo: "maybe"
  },
  {
    id: "s12",
    arcana: "minor",
    suit: "swords",
    rank: 12,
    name: { zh: "宝剑骑士", en: "Knight of Swords" },
    keywords: {
      upright: { zh: ["果断", "冲劲", "直奔目标", "锋利言辞"], en: ["decisiveness", "drive", "direct action", "sharp words"] },
      reversed: { zh: ["冲动", "好斗", "横冲直撞"], en: ["impulsiveness", "aggression", "recklessness"] }
    },
    meaning: {
      upright: {
        zh: "骑士挥剑策马疾驰，披风与云朵被风撕成碎片，连马都透着急切。这是果断与冲劲的牌：行动迅速、言辞犀利、为信念直奔目标。感情中是热烈却欠细腻的追求；工作上是雷厉风行、迅速推进；内心是信念坚定、不容拖延，但要防止横冲直撞。",
        en: "A knight charges at full gallop, sword thrust forward, cloak and clouds torn ragged by the wind, even the horse wide-eyed with urgency. This is decisiveness, drive, and a straight line to the goal: fast action, sharp speech, a cause worth fighting for. In love it brings an ardent but sometimes tactless pursuit; at work, rapid, forceful progress; inwardly, firm conviction that brooks no delay but may trample whatever lies in its path."
      },
      reversed: {
        zh: "马失前蹄，骑士冲得太猛收不住。逆位是冲动与鲁莽：不计后果地开口或行动，好斗、咄咄逼人，或者相反，空有气势却四处碰壁。感情中是争执不休、攻击性强；工作上是草率决策、树敌太多；内心则是被怒气和急躁驱动，需要慢下来想清楚再动。",
        en: "The horse stumbles; the knight has charged too hard to stop. Reversed, this is impulsiveness and aggression: speaking or acting without weighing the cost, picking fights, bulldozing others, or, at the other extreme, all momentum and no direction. In love, constant arguments and a combative tone; at work, hasty decisions and needless enemies; inwardly, being driven by anger and haste, needing to slow down and think."
      }
    },
    advice: { zh: "冲劲可贵，但先看清路上站着谁。", en: "Your momentum is valuable; just check who is standing in the road first." },
    yesNo: "yes"
  },
  {
    id: "s13",
    arcana: "minor",
    suit: "swords",
    rank: 13,
    name: { zh: "宝剑王后", en: "Queen of Swords" },
    keywords: {
      upright: { zh: ["清醒", "独立", "直言不讳", "阅历"], en: ["clear sight", "independence", "honesty", "experience"] },
      reversed: { zh: ["冷硬", "挑剔", "愤世嫉俗"], en: ["coldness", "fault-finding", "bitterness"] }
    },
    meaning: {
      upright: {
        zh: "王后高坐宝座，一手持剑直立，另一手前伸，神情严肃，身后云层聚拢。她是清醒、独立与直率的化身：阅历丰富，看透人心，不被情绪左右。感情中是有边界、要求坦诚的伴侣，或伤痛后的清醒；工作上是公正的判断者；内心理性而不冷酷。",
        en: "The queen sits high on her throne, sword upright in one hand, the other extended as if inviting you to speak, clouds gathering behind her stern face. She embodies clear sight, independence, and honesty without ornament: experienced, perceptive, unswayed by sentiment. In love she is a partner with firm boundaries who asks for truth, or someone wiser after loss; at work, an impartial judge; inwardly, composure that is rational without being cold."
      },
      reversed: {
        zh: "王后的剑压得更低，伸出的手收了回去。逆位是清醒走向冷硬：挑剔、尖酸、用理智筑墙把人推开，或被旧伤浸透而愤世嫉俗。感情中是过于苛刻、不肯示弱；工作上是刻薄的批评和偏见；内心则是孤独与防备，需要允许自己再次柔软一些。",
        en: "The queen's sword tilts lower and her open hand withdraws. Reversed, clarity hardens into coldness: fault-finding, bitterness, walls of logic built to keep people out, or a cynicism soaked in old hurt. In love, harsh standards and a refusal to show vulnerability; at work, cutting criticism and prejudice; inwardly, loneliness behind the armor, and a need to let yourself soften again."
      }
    },
    advice: { zh: "说真话，也留一点温度给对方。", en: "Tell the truth, and leave a little warmth in it for the other person." },
    yesNo: "maybe"
  },
  {
    id: "s14",
    arcana: "minor",
    suit: "swords",
    rank: 14,
    name: { zh: "宝剑国王", en: "King of Swords" },
    keywords: {
      upright: { zh: ["理性权威", "公正", "原则", "深思熟虑"], en: ["rational authority", "fairness", "principle", "clear judgment"] },
      reversed: { zh: ["专断", "冷酷", "滥用权力"], en: ["tyranny", "coldness", "abuse of power"] }
    },
    meaning: {
      upright: {
        zh: "国王正面端坐，手中宝剑微微倾斜，目光坚定，王座上刻着蝴蝶与新月。他代表理性的权威与公正的裁决：专业、有原则、深思熟虑，情绪从不凌驾于判断。感情中是可靠却内敛的人；工作上是法律、分析与管理上的成功；内心清明而有担当。",
        en: "The king faces forward on a throne carved with butterflies and crescents, sword slightly tilted, gaze steady and unflinching. He stands for rational authority, fair judgment, and decisions made with care: professional, principled, reasoned, never letting emotion override his verdict. In love he is dependable but reserved in showing feeling; at work, success in law, analysis, and leadership; inwardly, a clear mind that takes responsibility."
      },
      reversed: {
        zh: "宝剑倒转，权威失了分寸。逆位是理性走向专断：控制欲、冷酷、滥用权力，或用聪明操纵他人，也可能是优柔寡断、丧失原则。感情中是独断、缺乏共情的伴侣；工作上是强硬上司或不公裁决；内心用冰冷的逻辑否定自己的感受，需要找回温度。",
        en: "The sword inverts and authority loses its measure. Reversed, reason turns into tyranny: control, coldness, abuse of power, or intelligence used to manipulate and silence others; sometimes instead a weak, unprincipled indecision. In love, a partner who dictates and does not empathize; at work, a hard-line boss or an unjust ruling; inwardly, freezing out your own feelings with logic and needing to find your warmth again."
      }
    },
    advice: { zh: "用原则判断，也用同理心说话。", en: "Judge by your principles, but speak with empathy; both are strengths." },
    yesNo: "yes"
  }
];
