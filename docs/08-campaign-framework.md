# Campaign Framework Clarification

## Purpose

Atlas Mythos OS must support campaign worlds with very different genres, structures, and
vocabularies without hard-coding any one of them into the core application. A superhero
city, a fantasy realm, and a future campaign should use the same durable campaign spine
while presenting relevant information in their own language.

## Campaign as Project

Each Campaign is a self-contained project/world. Over time, a campaign may define its
name, ruleset or system label, genre, era, premise, visual identity, terminology,
important world-object types, custom collections or registries, maps, and assets.

These are not all required MVP campaign-creation fields. Prefer progressive
configuration over a large mandatory setup wizard: a campaign should become more
described only when its owner needs it.

## Generic Core, Campaign-Specific Presentation

The core data model remains generic. Do not introduce core concepts such as `Villain`,
`Superhero`, `Dragon`, `God`, or `NobleHouse` unless future evidence proves they need
genuinely distinct behavior. Prefer generic WorldObjects with campaign-specific
metadata, presentation, tags, relationships, or schemas.

The exact mechanism for custom fields and presentation is intentionally undecided. This
framework records the need without choosing a storage model, schema language, or editor.

## Dossiers

A dossier is a view of a WorldObject, not a new canonical entity type. It can present
the same object differently according to campaign context.

Illustrative superhero dossier fields include aliases, threat tier, origin, abilities,
weaknesses, affiliations, known encounters, and current status. Illustrative fantasy
dossier fields include title, ancestry, allegiance, occupation, known magic, and
reputation. These examples are presentation ideas, not hard-coded MVP requirements.

## Registries, Collections, and Rankings

A campaign should eventually support curated collections of WorldObject references.
Examples include a Global Threat Index, Top 100 Villains, Registered Heroes, or
Government Agencies; a fantasy campaign might instead have Most Wanted, Great Houses,
Known Dragons, Major Kingdoms, or Ancient Artifacts.

A ranked villain list must not require a `TopVillain` entity or table. Conceptually, a
registry contains object references and may later support a title, description, ordering,
ranking, filters, visibility, and campaign-specific display configuration. Its database
schema is not finalized by this document.

## Map Hierarchy

Maps should conceptually support parent/child relationships. A campaign can move from:

```text
World -> continent -> nation -> megacity -> district -> stronghold -> interior
```

The experience may eventually feel like progressive zooming, but Atlas does not need
one infinitely generated map. Each level can have its own map asset or generated
representation. Maps remain views over structured campaign data, not the source of
campaign meaning.

## Visual Identity and Inheritance

Campaign and region visual identity must remain separate from campaign lore. A visual
profile may eventually include reference images, palette, architecture cues, density,
lighting, terrain, atmosphere, and material or style descriptors. These guide
presentation and later image-generation workflows; they are not automatically facts
about the world.

Child areas should be able to follow parent visual identity while allowing local
overrides. For example, a near-future superhero campaign can contain a dense megacity,
then a neon, wet-street, vertical district; a street can inherit that district identity
and add local traits. This is a future capability, not an F001 requirement.

Future campaign-specific presentation must not encode categories or status through color
alone. Text labels, icons, structure, and accessible contrast must communicate meaning.

## Source Images and AI

DM-supplied reference images may eventually be analyzed to propose visual tags, palettes,
environmental traits, architecture cues, mood, or generated-style parameters. Analysis
creates suggestions; it must not silently create campaign canon.

Generated imagery is visual or decorative content unless explicitly linked to accepted
campaign facts. Future local processing may use ComfyUI, Stable Diffusion, or other
local workers, but Atlas core remains usable when those systems are unavailable.

## Canon Boundary

The boundary between presentation and lore is explicit:

- An AI-generated building in a district image is decoration, not automatically a real location.
- AI detecting an "industrial district" is a suggestion until a human accepts it.
- When a DM creates "Black Harbor Power Station", it is a campaign object and becomes canon according to its explicit status.

## Player and New-Player Experience

Players should primarily experience maps, dossiers, collections, timelines,
relationships, and information they are allowed to know. Campaign configuration belongs
primarily to the DM or owner, so players do not need to understand the configuration
system to use the campaign.

Atlas should eventually help inexperienced tabletop players understand campaign or
rules terminology in context when useful. It must not become a rules engine or replace
official rules material.

## Boundaries and Risks

DOC-001 does not implement code, a database schema, custom fields, registries, map
hierarchy, procedural generation, AI, ComfyUI, or any F001 expansion. It must not
hard-code the illustrative superhero campaign into Atlas.

Future design must avoid overwhelming setup through excessive configurability, drifting
into a generic no-code database, fragmenting the data model through custom fields,
treating generated visual material as canon, or attempting seamless generated map zoom
before the campaign-memory workflow is proven.
