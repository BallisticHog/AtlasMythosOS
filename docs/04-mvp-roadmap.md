# MVP Roadmap

## Phase 0: Foundation

Goal: create enough shared documentation and repo structure that AI-assisted development
has a stable direction.

Deliverables:

- project bible
- product vision
- architecture notes
- AI workflow
- MVP roadmap
- initial data model
- repository initialized and connected to GitHub

Exit criteria:

- a new AI agent can read the docs and understand what the project is
- the repo has an initial commit
- next implementation task is clear

## Phase 1: App Shell

Goal: create the first usable local app shell.

Deliverables:

- Next.js app scaffold
- campaign workspace layout
- sidebar navigation
- campaign overview screen
- static in-memory example data only; no persistence mechanism selected
- basic styling system

Exit criteria:

- user can open the app locally
- there is a real first screen, not a landing page
- workspace navigation exposes Overview, World, Map, Sessions, AI Queue, and Assets

## Phase 2: Campaign And World Objects

Goal: create the core campaign memory system.

Deliverables:

- create campaign
- create/edit/delete world objects
- object types: region, location, NPC, faction, event, quest
- object visibility: public, private, hidden
- object status: draft, canon, suggestion, archived
- object detail panel
- search/filter

Exit criteria:

- DM can create a small campaign world manually
- players can browse public known information

## Phase 3: Map-Linked World View

Goal: make maps a visual view of the database.

Deliverables:

- upload or create a campaign map
- add region boundaries or simple shapes
- add pins
- link map elements to world objects
- click map element to open object detail
- support broad region maps first

Exit criteria:

- the map helps users understand the world
- map objects remain connected to structured data

## Phase 4: Session Notes And AI Suggestions

Goal: turn play notes into reviewable campaign memory.

Deliverables:

- add session notes
- generate summary
- extract possible NPCs, locations, events, and unresolved threads
- create AI suggestion queue
- accept/edit/reject suggestions
- link accepted suggestions to source notes

Exit criteria:

- the app can help maintain campaign memory without blindly changing canon

## Phase 5: Local Image And Map Decoration

Goal: use the RTX 2080 Ti and ComfyUI as a local creative engine.

Deliverables:

- local worker prototype
- ComfyUI health check
- submit a generation workflow
- store generated image assets
- attach generated assets to regions
- distinguish decoration from canon

Exit criteria:

- DM can generate region mood or decoration assets locally
- app remains usable when local worker is offline

## Phase 6: Collaboration And Sharing

Goal: support the group experience.

Deliverables:

- player-facing campaign view
- account/auth plan
- basic sharing permissions
- optional realtime updates
- export/import campaign archive

Exit criteria:

- group members can view shared campaign knowledge without seeing DM-only information

## First Build Task

After this docs foundation, the recommended next task is:

Create the app shell for Atlas Mythos OS with a campaign workspace, navigation for
Overview, World, Map, Sessions, AI Queue, and Assets, and placeholder screens that match the product
vision.

