# Future Experience Notes

> **Exploratory status:** These notes are exploratory product ideas. They are not approved
> features, roadmap commitments, physical data-model contracts, or implementation
> specifications.

## Status and Purpose

DOC-002 preserves ideas raised during the F002 review so future design work can understand
their intent. It does not approve a capability, assign an implementation feature number, or
select how any idea will be built.

The categories in this document remain distinct:

- An **exploratory idea** records an experience worth considering.
- An **architectural principle** protects a durable product boundary already established by
  the project documentation.
- An **approved feature** requires its own explicit approval and feature specification.
- An **implementation decision** selects a concrete technical or product mechanism during
  approved feature work.

Nothing described below becomes an approved feature or implementation decision merely by
appearing in DOC-002.

## Context-Aware Dossier Navigation

A future dossier experience may distinguish stable section navigation from contextual or
history navigation. For example, **World** could remain a stable destination at `/world`,
while a user's path might be:

```text
World -> Mara Vale -> Glass Harbor
```

In that context, a Back action from Glass Harbor could return to Mara Vale rather than
always returning directly to the World index. The stable World destination should remain
available independently.

This records only the user-experience intent. It does not choose browser history, an
application navigation stack, breadcrumbs, explicit route state, or another navigation
model. Any future feature must account for predictable browser Back behavior, direct-linked
dossier URLs, deep links, accessibility, and keyboard navigation.

## Personal Annotations, DM Notes, and Canon Edits

Future authoring likely needs an explicit conceptual separation among authorship, privacy,
review state, visibility, and canon. These concepts must inform later persistence, CRUD,
collaboration, and permission design without preselecting those designs.

### Personal Annotation

A personal annotation captures an individual user's thoughts, theories, suspicions,
reminders, interpretation, or planning. It conceptually belongs to that user, does not alter
campaign canon, should not automatically become visible to others, and must not be confused
with a canonical WorldObject field.

For example, "I think Mara is lying about when she arrived" can remain a personal thought
even when it is visually attached to Mara Vale's dossier.

### DM-Private Campaign Note

A DM-private campaign note captures campaign-owner or DM planning and hidden material, such
as future intent, secrets, encounter ideas, adjudication notes, hidden motives, or planned
changes. DM authorship alone does not make content canon. A DM-private note remains distinct
from an accepted campaign fact, player-visible information, a draft change, and an AI
suggestion.

### Draft or Proposed Change

A draft or proposed change contains information or an edit that has not been accepted as
campaign truth. It is not an accepted fact merely because a user, including a DM, authored
it.

### Canonical Edit

A canonical edit is a deliberate change to accepted campaign information. It deliberately
changes campaign truth, remains independently subject to visibility, and is materially
different from a personal annotation or DM planning note.

### AI Suggestion

An AI suggestion remains a separate, reviewable proposal. It must not be conflated with a
personal annotation, DM-private note, draft, or accepted canon, and it does not become canon
without human acceptance.

DOC-002 does not decide an annotation or note schema, permission or collaboration tables,
ownership storage, an event-sourcing model, or whether notes are embedded or separate
entities.

## Knowledge-Aware Map Rendering

An exploratory future map experience may visually communicate how much of the world a
particular audience currently knows:

- **Known:** crisp, richly resolved terrain with readable geography, established labels,
  known landmarks, and known routes.
- **Partially known:** broad geography may remain visible while detail, labels, and certainty
  are reduced through haze, fog, atmospheric obscurity, incomplete detail, or another visual
  treatment.
- **Unknown:** strongly obscured or unresolved geography whose labels may be absent and whose
  terrain may disappear beneath mist or another campaign-appropriate effect, even though the
  underlying campaign data exists.
- **Edge of current knowledge:** the visible world need not end at a hard rectangular image
  boundary. It could transition through haze, fog, fading geometry, particle dissolution,
  pixel fragmentation, ink fade, blank parchment, magical mist, or another campaign-specific
  treatment.

These are view states driven by structured campaign knowledge, visibility, or discovery
information. Pixels are not the source of truth. A region can exist as a WorldObject while
remaining hidden, undiscovered, partially known, or visually obscured to a particular
audience. DOC-002 does not define a discovery, knowledge-state, or audience-reveal schema.

Future map interactions must remain keyboard-accessible, and knowledge or visibility meaning
must not be communicated through color alone. This is an accessibility requirement for
future design, not an implementation prescription.

## 3D Tabletop / Diorama Map North Star

An exploratory map north star, inspired by the Product Owner's external visual references,
is a pannable digital campaign table, terrain model, or world diorama rather than merely a
flat dashboard image. This is an experience direction, not a promise of a rendering
technology.

Illustrative characteristics include visible elevation and terrain relief; mountains and
forests with spatial volume; rivers and coastlines shaping terrain; readable settlements,
roads, strongholds, landmarks, and major features; high-definition terrain in known regions;
labels and markers anchored visually to the world; panning as a primary interaction; zooming
between levels of campaign geography; and a spatial, tactile feeling.

The purpose is campaign exploration, spatial understanding, world memory, discovering
relationships between places, navigating from place to place, and accessing associated
campaign information. Camera behavior is undecided. This document does not promise a free
camera, rotation, tilt, first-person navigation, 360-degree orbit, or full true-3D terrain.

### Holographic or Projected Table Example

One possible visual profile presents richly illustrated fantasy terrain as if projected on a
physical or digital campaign table. It might use a subtle cyan or magical projection
boundary, restrained grid or scan lines, under-lit terrain, atmospheric volumetric haze,
mist over unknown regions, particles or pixels dissolving at map edges, labels hovering or
sitting above terrain, points-of-interest markers, visible depth, and fully resolved known
geography dissolving into uncertainty.

This could create the impression of a campaign world being revealed on a table. It is only
one possible campaign visual profile, not the universal Atlas aesthetic. The external
concept images that inspired it are not repository assets, and DOC-002 neither copies nor
creates them; the useful design principles are recorded here in text.

## Campaign-Specific Map Presentation

The same underlying knowledge state may use radically different visual presentations:

- A near-future, superhero, or science-fiction campaign might use holographic projection,
  pixel dissolve, scan noise, luminous boundaries, or volumetric data haze.
- A fantasy campaign might use parchment, ink fading, magical fog, blank vellum,
  illustrated atlas borders, or unfinished cartographic detail.
- A modern or investigative campaign might use satellite imagery, intelligence-map
  overlays, scanned documents, topographic data, or classified-region treatments.
- Other campaigns may use entirely different presentation styles.

Campaign-specific aesthetics are presentation layered over a generic core. Concepts such as
hologram, fantasy parchment, superhero map, magic fog, and cyber grid must not become
mandatory core WorldObject fields. A future visual-reference system may separately decide
how reference imagery is stored.

## Map Hierarchy and Structured World Data

These ideas remain compatible with a hierarchy such as:

```text
World -> continent -> nation -> city or major settlement -> district -> stronghold or location -> interior
```

The experience may eventually feel like progressive exploration or zooming, but Atlas does
not require one infinitely continuous generated 3D world. Different levels may use separate
map assets, generated representations, authored maps, hybrid representations, or different
levels of detail. That flexibility is intentional.

The architectural separation is:

```text
Structured world
  WorldObjects, regions, locations, accepted facts, visibility,
  and future knowledge or reveal state
        |
        v
Map representation
  Terrain, geometry, region boundaries, labels, POIs, routes,
  and elevation representation
        |
        v
Visual presentation
  Hologram, parchment, haze, pixels, magical mist, lighting,
  and campaign visual style
```

The map is a view over structured campaign data. A renderer can be replaced or visually
reskinned without changing the campaign facts beneath it. A settlement marker should
reference a WorldObject when it represents a real campaign location, while a structured
region may remain unknown to players. Generated forests, mountains, buildings, roads, or
decorative terrain are not automatically canonical facts. A generated tower visible in
terrain art is decoration unless explicitly linked to accepted campaign data.

## World Understanding, Not Tactical VTT

The 3D or diorama idea exists primarily for world exploration, campaign memory, spatial
understanding, navigation, discovery, and access to campaign information. It must not
silently redefine Atlas as a tactical VTT, battle-map engine, miniature movement system,
combat grid, initiative tracker, or combat-rules engine.

Future maps may contain decorative people, tokens, landmarks, settlements, or illustrative
markers without requiring tactical movement mechanics. Nothing in DOC-002 approves tactical
gameplay.

## Cross-Cutting Principles

- Canon remains explicit.
- Visibility and canon or status remain separate.
- Personal thoughts are not campaign truth.
- DM-private planning is not automatically canon.
- Draft edits are not accepted facts.
- AI suggestions remain proposals until accepted.
- Maps remain views over structured campaign data.
- Generated imagery and terrain are decorative unless linked to accepted facts.
- Visual presentation does not create lore.
- Campaign-specific visual identity is layered over a generic core.
- World data should survive a change of map renderer or visual skin.
- Atlas remains useful without cloud AI or a local AI worker.
- The map improves world understanding; it does not turn Atlas into a combat VTT.

## Explicit Non-Decisions

DOC-002 does not decide or approve:

- a personal-note, DM-note, or annotation entity schema;
- permission architecture, collaboration behavior, ownership schema, or event sourcing;
- persistence technology, database engine, or ORM;
- a map engine, Three.js, WebGL, WebGPU, 2.5D, or true 3D;
- terrain mesh generation, procedural-generation technology, tile architecture,
  level-of-detail systems, or texture generation;
- a camera model or camera controls;
- fog-of-war implementation, knowledge or discovery schema, or audience-specific reveal
  schema;
- a map asset format;
- a ComfyUI or Stable Diffusion workflow;
- a local AI requirement or any other AI dependency;
- a campaign visual-profile schema;
- whether terrain is generated, authored, uploaded, or hybrid;
- tactical map functionality; or
- the next implementation feature number.

All of these remain future design decisions requiring separate approval where applicable.
