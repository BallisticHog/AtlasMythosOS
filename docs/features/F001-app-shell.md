# F001: App Shell

## Identifier and Status

- Identifier: `F001`
- Status: completed and merged into `main`

## Objective

Create a first local application shell that makes Atlas Mythos OS understandable as a campaign workspace from the first screen.

## User Problem

A DM or player needs one calm, shared surface for campaign understanding instead of scattered chat history and disconnected notes.

## User Flow

Open the local app, arrive directly in a campaign workspace, use sidebar navigation, select a destination, and inspect static campaign examples.

## Scope

- Campaign workspace is the first screen; there is no marketing landing page.
- Sidebar destinations: Overview, World, Map, Sessions, AI Queue, and Assets.
- Small static placeholder data for regions, NPCs, factions, session notes, and pending AI suggestions.
- Calm, readable campaign-operations appearance with responsive layouts.
- Clear empty states where no content exists and selected states for active navigation and inspected content.

## Design Constraint

Placeholder UI must not imply Atlas is hard-coded for fantasy, D&D, superheroes, or any single ruleset.

## Non-Goals

- Authentication, database, persistence, external AI calls, ComfyUI connection, combat, dice, or rules automation.
- Real campaign creation, editing, uploads, collaboration, or provider integration.

## Affected Modules

The initial web-app scaffold, workspace layout, navigation, static fixture data, page views, styling, and project scripts. Update README command documentation when the scaffold exists.

## Data Implications

Static in-memory placeholders only. Model status visibly: pending AI suggestions are proposals, not accepted canon. Map visuals shown as placeholders must not claim campaign-lore facts.

## UI States

- Selected sidebar destination and selected example item.
- Empty state for destinations with no sample items.
- Responsive sidebar behavior for narrow screens.
- No loading, auth, network, or provider-error states are required in F001.

## Accessibility

Use semantic navigation and headings, visible keyboard focus, labelled controls, sufficient color contrast, and layouts usable at narrow desktop and mobile widths.

## Tests

Add focused tests for initial workspace rendering and all navigation destinations when test tooling is introduced. Manually verify responsive navigation, selected and empty states.

## Acceptance Criteria

- The app can be started locally.
- The first screen is the campaign workspace.
- Overview, World, Map, Sessions, AI Queue, and Assets are all accessible.
- Placeholder content makes regions, NPCs, factions, session notes, and pending AI suggestions understandable.
- The interface is calm, readable, responsive, and includes clear empty and selected states.
- Linting passes.
- A production build passes.
- The implementation contains no required external service.

## Risks

- A static shell may be mistaken for a data contract; label fixtures clearly in code.
- The interface could drift toward a full VTT; preserve the campaign-memory focus.
- Premature provider or persistence wiring would exceed the approved scope.

## Completion Report

Implementation summary:

- Added a Next.js App Router workspace with Overview, World, Map, Sessions, AI Queue, and Assets routes.
- Added one static, genre-neutral demo campaign fixture and a shared responsive shell.
- Kept pending AI proposals visibly separate from canon and left Assets as an intentional empty state.

Important files:

- `src/fixtures/demo-campaign.ts`
- `src/components/campaign-shell/campaign-shell.tsx`
- `src/components/workspace/primitives.tsx`
- `src/app/` route files and `globals.css`

Checks run:

- `npm install`
- `npm install --package-lock-only --foreground-scripts`
- `npm run lint`
- `npm run build`
- `git diff --check`

Manual verification:

- Started the local development server and inspected the desktop Overview route through a local Edge screenshot.
- The production build statically rendered all six required routes.
- Confirmed the six live routes returned HTTP 200 from the local development server.
- Further automated browser captures were limited by the local browser command timing out after the first screenshot; they require follow-up visual review before merge.

Limitations and follow-up work:

- Map is a static placeholder with no pan, zoom, coordinates, or canonical geometry.
- No persistence, editing, uploads, authentication, AI provider, or provider actions are implemented.
- Complete desktop and narrow-viewport route-by-route visual review remains a merge-review task.
