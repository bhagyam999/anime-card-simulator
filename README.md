# Cardbound — Anime Card Simulator

A free, mobile-first collectible card simulator with anime-inspired and original characters.

## Current status

**Prototype v0.1.0** — frontend scaffold and client-side demo pack opening.

- React + TypeScript + Vite
- Responsive dark-fantasy interface
- Eight original sample characters covering all eight elements
- Five rarity tiers and sample shared/unique ability data
- Pack opening, reveal results, collection and Carddex screens

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Important prototype limitations

The current pack opening is a frontend-only demonstration. Its random selection and inventory are stored in browser memory and reset when the page reloads. Do not use it for competitive play or valuable accounts.

Before public launch, move pack selection, reward issuance, currency changes and inventory writes into trusted Supabase Edge Functions with database transactions and server-side randomness. Add Supabase Auth (anonymous guest sessions), PostgreSQL Row Level Security, persistent inventory and opening history.

## Planned game systems

- 1,000 unique launch cards: proposed 600 anime characters and 400 original characters
- Eight elements: Fire, Water, Nature, Lightning, Ice, Earth, Light and Darkness
- Character stats, roles, basic/active/ultimate/passive abilities and status effects
- Pack catalogues, transparent published odds and collection progression
- Admin tools for adding cards and managing packs
- Optional future PvE/PvP battle system

Anime character names and artwork will only be included when suitable rights or permissions are available. Original characters and artwork can be created for this project.

## Deployment

Configured for a static Vite deployment. Netlify build command: `npm run build`; publish directory: `dist`.

Set environment variables only when the Supabase integration is implemented. Never commit service-role keys or other secrets.
