import { cards } from "../../data/cards";
import type { CharacterCard, Rarity } from "../../types/game";

export const rarityRates: Record<Rarity, number> = { C:60, R:25, SR:10, SSR:4, UR:1 };
export function openPack(count = 1): CharacterCard[] {
  const results: CharacterCard[] = [];
  for (let i = 0; i < count; i++) {
    const roll = Math.random() * 100;
    let total = 0;
    const rarity = (Object.entries(rarityRates).find(([,rate]) => { total += rate; return roll < total; })?.[0] ?? "C") as Rarity;
    const pool = cards.filter(card => card.rarity === rarity);
    const fallback = cards.filter(card => card.rarity !== "C");
    const eligible = pool.length ? pool : (rarity === "C" ? cards.filter(card => card.rarity === "C") : fallback);
    results.push(eligible[Math.floor(Math.random() * eligible.length)] ?? cards[0]);
  }
  return results;
}
// DEMO ONLY: randomness and inventory are client-side. Production openings must
// run in a trusted server function with atomic balance + inventory transactions.
