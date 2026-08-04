# AI Agent Brief

Use this brief when asking ChatGPT, Claude, Codex, or another AI agent to help with
Atlas Mythos OS.

## Project

Atlas Mythos OS is an AI-assisted campaign companion for tabletop roleplaying groups.
It helps DMs and players maintain a shared understanding of a campaign world through
world objects, maps, session notes, assets, and reviewable AI suggestions.

## Essential Product Rules

- Discord or the real table remains where play happens.
- The app is a campaign memory and world-understanding layer.
- The database is the source of truth.
- AI never silently creates canon.
- AI outputs must be suggestions, decorations, drafts, or explicitly accepted canon.
- Maps are views over structured world data.
- Broad region maps matter more than tactical combat maps in the MVP.
- Local AI through ComfyUI or similar tools should be supported later, but not required
  for the core app to work.

## Current Stage

The project is at the foundation stage. The next recommended implementation milestone
is the app shell.

## Recommended Next Implementation

Build a local web app shell with:

- campaign workspace layout
- navigation for World, Map, Notes, AI Queue, and Assets
- placeholder data that demonstrates the product concept
- design that feels like a calm campaign operations surface
- no landing page
- no required cloud AI
- no tactical combat system

## Development Constraints

- Keep changes scoped.
- Read the docs before implementing.
- Do not introduce major frameworks without justification.
- Keep lore state, visibility state, and AI suggestion state distinct.
- Prefer boring, inspectable architecture.
- Add tests when behavior is non-trivial.
- Summarize changed files and verification steps.

## Non-Goals For Early Development

- full VTT replacement
- combat automation
- multiplayer realtime complexity
- full Discord bot integration
- production auth
- advanced procedural generation
- ruleset-specific automation

## Acceptance Criteria For The First App Shell

- The app opens locally.
- The first screen is the usable campaign workspace.
- Navigation exposes the planned core areas.
- Placeholder content shows regions, NPCs, factions, notes, and AI suggestions.
- The UI makes the campaign-world concept obvious.
- The implementation does not depend on real AI services.

