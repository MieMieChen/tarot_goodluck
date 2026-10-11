# 塔罗 · Tarot

一个纯静态的在线塔罗抽牌网站：78 张韦特塔罗（Rider–Waite–Smith），中英双语牌义，无需后端，直接托管在 GitHub Pages。

A static tarot-reading web app: all 78 Rider–Waite–Smith cards with bilingual (简体中文 / English) meanings, no backend, hosted on GitHub Pages.

**Live:** https://miemiechen.github.io/tarot_goodluck/

## 玩法 · Spreads

| 牌阵 | Spread | 张数 | 说明 |
| --- | --- | --- | --- |
| 每日一牌 | Card of the Day | 1 | 每台设备每天固定一张，作为今天的提醒 |
| 是 / 否 | Yes or No | 1 | 对一个明确问题给出倾向性答案（正逆位会翻转结果） |
| 三牌阵 | Three Cards | 3 | 过去/现在/未来、情况/行动/结果、你/对方/关系、身/心/灵，或自定义三个相关问题 |
| 凯尔特十字 | Celtic Cross | 10 | 经典深度牌阵 |

其他功能 · Also included:

- 洗牌动画 → 从整副 78 张牌里凭直觉挑牌（或一键随机）→ 逐张翻开 → 解读
- 可开关逆位（开启后每张约 1/3 概率逆位）
- 牌库：浏览全部 78 张牌的正逆位牌义，支持按花色筛选和搜索
- 历史记录：保存在浏览器 localStorage，可回看、删除
- 一键复制解读文本
- 中 / EN 一键切换，记住你的选择
- 响应式，手机可用

## 本地运行 · Run locally

没有构建步骤，但 ES modules 需要通过 HTTP 访问（不能直接双击打开 `index.html`）：

```bash
git clone https://github.com/MieMieChen/tarot_goodluck.git
cd tarot
python3 -m http.server 8000
# 打开 http://localhost:8000/
```

## 项目结构 · Layout

```
index.html          页面骨架
css/style.css       样式（深色主题，无依赖）
js/app.js           路由、抽牌流程、牌库、历史、弹窗
js/i18n.js          界面文案（zh / en）
js/spreads.js       牌阵定义与凯尔特十字布局
js/data/            78 张牌的双语牌义（大阿卡纳 + 四个花色）
img/cards/          牌面图（450px 宽 JPEG）
tools/fetch_cards.py  从 Wikimedia Commons 重新下载牌面图
```

## 部署 · Deploy

仓库 Settings → Pages → Source 选 **Deploy from a branch**，分支 `main`，目录 `/ (root)`。推送到 `main` 后约一分钟生效。

## 许可 · License

代码：MIT。牌面图像为 1909 年 Rider–Waite–Smith 塔罗（Pamela Colman Smith 绘），来自 Wikimedia Commons，属于公有领域。

仅供娱乐与自我反思，不构成任何建议。For entertainment and reflection only.
