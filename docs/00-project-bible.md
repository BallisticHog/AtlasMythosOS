# Project Bible

## Working Title

Atlas Mythos OS

The name can change later, but the current folder and repository should use this title
until there is a strong reason to rename it.

## One-Sentence Pitch

Atlas Mythos OS is a campaign companion that turns scattered tabletop roleplaying ideas,
session events, places, NPCs, factions, maps, and AI suggestions into a shared living
world that the group can see, search, and build on.

## What It Is

Atlas Mythos OS is a companion layer for roleplaying campaigns.

It should feel like:

- a shared campaign atlas
- a lore notebook that organizes itself
- a visual world board
- a memory system for Discord-based play
- a DM assistant for preparing and expanding regions
- a player-facing reference surface for known information

## What It Is Not

It is not primarily:

- a tactical combat VTT
- a character sheet replacement
- a dice roller as the main product
- a rules engine
- a generic AI chatbot
- a campaign wiki that depends on manual upkeep

Those features may eventually connect to it, but they are not the heart of the product.

## Product Center

The center of the product is campaign understanding.

The app should answer:

- Where are we?
- Who do we know?
- What happened here?
- What changed because of us?
- What is public knowledge versus DM-only knowledge?
- What has been suggested by AI but not accepted into canon?
- What does this region feel like?

## Table Model

The social game remains in the chat, voice call, or table.

Atlas Mythos OS supports that game by giving everyone a synchronized mental model. The
app should not force players to stop roleplaying in order to manage software.

## Canon Rule

The database is the source of truth.

AI may:

- propose
- summarize
- classify
- decorate
- generate images
- extract entities
- notice contradictions
- suggest links

AI must not silently decide what is canon.

Every AI-created fact should have a status:

- suggestion
- accepted canon
- rejected
- decoration
- private DM note

## Map Rule

Maps are views over campaign data.

A map region, city, road, stronghold, forest, or ruin should be backed by an object in
the database. The visual layer helps people navigate the world, but the underlying
object holds the meaning.

## Region-Level Maps

The expected DM-provided maps are often broad regional maps rather than close tactical
maps.

Example:

- northern kingdom
- western forest
- eastern coast
- central plains
- southern desert

AI can help populate these regions visually with decorative terrain, roads, rivers,
ruins, settlements, and mood elements. These decorations are not automatically lore.

## Stronghold-Level Maps

Detailed tactical or location maps can exist for special places, such as:

- castles
- dungeons
- villages
- temples
- strongholds
- lairs
- interiors

These are useful, but they should not drag the product into being only a combat VTT.

## AI And Local Generation

The user has a PC with an RTX 2080 Ti and experience with ComfyUI and Stable Diffusion.
This is a meaningful resource.

The architecture should allow local AI workers for:

- image generation
- style transfer
- upscaling
- map decoration
- segmentation
- OCR
- embeddings
- possible local LLM tasks

Cloud AI can still be used for high-quality reasoning, planning, language, and complex
analysis, but the system should not be designed around expensive cloud calls for every
repeatable creative task.

## First User Experience Goal

A DM should be able to create a campaign, add a few regions, add a few NPCs or factions,
and see a simple shared campaign board that already feels useful.

The first version does not need procedural map generation. It needs a clean spine that
can grow into procedural map generation without being rewritten.

