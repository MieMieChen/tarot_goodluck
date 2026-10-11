// Combines the five card files into one deck (78 cards) and exposes lookup helpers.
import major from "./cards-major.js";
import wands from "./cards-wands.js";
import cups from "./cards-cups.js";
import swords from "./cards-swords.js";
import pentacles from "./cards-pentacles.js";

export const CARDS = [...major, ...wands, ...cups, ...swords, ...pentacles];
export const CARD_BY_ID = Object.fromEntries(CARDS.map((c) => [c.id, c]));
export const imgSrc = (card) => `img/cards/${card.id}.jpg`;
