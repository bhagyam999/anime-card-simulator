export type Rarity = "C" | "R" | "SR" | "SSR" | "UR";
export type ElementType = "FIRE" | "WATER" | "NATURE" | "LIGHTNING" | "ICE" | "EARTH" | "LIGHT" | "DARKNESS";
export type AbilityType = "BASIC" | "ACTIVE" | "ULTIMATE" | "PASSIVE";
export type Role = "ATTACKER" | "DEFENDER" | "SUPPORT" | "CONTROL" | "HYBRID";

export interface CharacterStats {
  hp: number; attack: number; defense: number; speed: number;
  criticalChance: number; criticalDamage: number;
}
export interface Ability {
  id: string; name: string; description: string; type: AbilityType;
  element: ElementType; cooldown: number; power: number; effects: string[];
}
export interface CharacterCard {
  id: string; name: string; universe: string; source: "ANIME" | "ORIGINAL";
  rarity: Rarity; element: ElementType; role: Role; stats: CharacterStats;
  abilities: Ability[]; artwork?: string; edition: string; description: string;
}
export interface OwnedCard { cardId: string; quantity: number; obtainedAt: string; }
