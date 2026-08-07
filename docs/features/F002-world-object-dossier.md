# F002: World Object Dossier

## Identifier and Status

- Identifier: F002
- Status: complete

## Objective

Allow World users to inspect a useful, static dossier for every current demo WorldObject: identity, known information, canon status, visibility, related records, source context, and relevant pending suggestions.

## User Problem

F001 lists static WorldObjects but cannot answer the campaign-memory question, "What do we know about this thing?" F002 provides inspection without authoring, persistence, or campaign customization.

## User Flow

1. Open /world and view grouped WorldObjects.
2. Follow a semantic, keyboard-accessible object link.
3. Inspect the /world/[id] dossier.
4. Follow related object links or return to World.
5. Receive controlled return-to-World navigation for an unknown ID.

## Scope

- Make every World index row a semantic Next.js link.
- Add static dossiers for known fixture IDs within CampaignShell, with World active.
- Show name, kind, summary/description, content status, visibility, known information, related records, source context, and relevant pending suggestions when supplied.
- Treat related IDs as static presentation references only; every ID must resolve and link to its dossier.
- Separate suggestions visibly and label them Pending suggestion and Not canon.
- Support rich and sparse records without object-specific UI.
- Add a deliberate not-found state and update project state.

## Non-Goals

No WorldObject CRUD, persistence, database, ORM, migrations, Dossier entity/schema, relationship persistence or graph, session-detail route, AI execution or suggestion actions, authentication, permissions, map work, cloud/local AI services, dependency changes, or F003+ work.

## Affected Modules

- docs/features/F002-world-object-dossier.md
- docs/07-project-state.md
- src/app/world/page.tsx
- src/app/world/[id]/page.tsx
- src/app/world/[id]/not-found.tsx
- src/fixtures/demo-campaign.ts
- src/app/globals.css

## Data Implications

No persistence or physical schema decision is introduced. WorldObject remains the conceptual object and a dossier remains its view. Static display-only fixture fields may cover description, known information, related object IDs, and source context. Suggestions may explicitly reference WorldObject IDs. Content status and visibility remain distinct; pending suggestions remain non-canon proposals.

## UI States

Navigable index rows with hover and visible keyboard focus; rich and sparse dossiers; canon/draft and public/private/hidden support; dossiers with and without suggestions; linked related records; controlled not-found state; usable desktop and narrow layouts.

## Accessibility

World and related records use native links. Heading hierarchy and focus-visible styling remain intact. Status, visibility, and pending/non-canon meaning use text as well as color. Decorative marks remain hidden from assistive technology.

## Tests

- npm ci
- npm run lint
- npm run build
- git diff --check
- Confirm package.json and package-lock.json are unchanged.
- Manually validate demo and unknown routes, related links, keyboard focus, and narrow layout when reliable browser tooling is available.

## Acceptance Criteria

1. Every current fixture WorldObject has a valid /world/[id] dossier.
2. Dossiers are generic views, not a Dossier entity.
3. Every dossier shows name, kind, status, visibility, and summary or description.
4. Rich and sparse dossiers render cleanly.
5. Suggestions are explicitly pending and non-canon.
6. Unknown IDs receive a controlled return-to-World state.
7. Semantic, keyboard-accessible navigation is used.
8. No persistence, CRUD, relationship infrastructure, AI execution, map work, or dependencies are added.
9. Lint, build, and diff checks pass with unchanged package files.

## Risks

A presentation view could become a Dossier data model; display-only fixture fields could be mistaken for a persistence schema; pending suggestions could appear as canon; static related references could be dangling; responsive changes could regress the F001 shell.

## Completion Report

Implementation summary:

- Added semantic WorldObject links on the World index and a generic static /world/[id] dossier route.
- Extended static display fixtures with description, optional known information, static related-record references, source context, and explicit suggestion WorldObject IDs.
- Added a controlled WorldObject not-found page and responsive dossier styling.
- Kept pending suggestions visibly separate as Pending suggestion / Not canon; no suggestion becomes an accepted relationship.

Changed files:

- docs/07-project-state.md
- docs/features/F002-world-object-dossier.md
- src/app/globals.css
- src/app/world/page.tsx
- src/app/world/[id]/page.tsx
- src/app/world/[id]/not-found.tsx
- src/fixtures/demo-campaign.ts

Validation performed:

- npm ci passed.
- npm run lint passed.
- npm run build passed and statically generated all six known dossier routes.
- git diff --check passed.
- package.json and package-lock.json are unchanged.
- Local HTTP checks returned 200 for World, all six known dossiers, and all existing F001 routes. The unknown object route returned the expected 404.

Manual verification and limitations:

- Browser-based visual, keyboard-focus, and narrow-viewport validation could not run because the browser-control runtime failed to initialize with the local workspace helper error.
- The local development server started successfully. Product Owner review should verify desktop/narrow visual layout and keyboard focus in a browser before merge.

Follow-up work:

- No persistence, editing, AI execution, relationship infrastructure, authentication, or map work was introduced. Those remain future features.
