# Technical Architecture

## Architecture Principles

- The database is the source of truth.
- AI outputs are reviewable records, not hidden mutations.
- Maps are views over world objects.
- Local-first development is preferred early.
- Cloud services should be replaceable behind adapters.
- The MVP should be simple enough to run on one developer machine.

## Suggested Starting Stack

This stack is a recommendation, not a final law.

- App: Next.js with TypeScript
- UI: React, Tailwind CSS, shadcn/ui or equivalent component primitives
- Data: PostgreSQL when production matters, SQLite for very early local prototyping if speed matters
- ORM: Prisma or Drizzle
- Realtime: later, likely WebSockets or hosted realtime service
- Auth: later, likely provider-based auth
- Local AI bridge: small worker service that talks to ComfyUI or other local tools
- Cloud AI bridge: adapter layer for OpenAI, Anthropic, or other providers

## Initial Local Persistence Decision

F003 accepts SQLite with Drizzle ORM, Drizzle Kit migrations, and `better-sqlite3` for the initial local persistence foundation. The physical schema begins deliberately with only Campaign and WorldObject, and committed SQL migrations provide repeatable history. See `docs/decisions/ADR-001-local-persistence.md`.

This selection resolves the early local-prototyping choice, not the later production or multi-user persistence architecture. PostgreSQL remains a possible future choice when hosting and collaboration requirements are known. The current fixture-backed UI is not switched to database reads by F003.

## High-Level Modules

### Campaign Core

Owns campaigns, users, permissions, visibility, and campaign settings.

### World Model

Owns regions, locations, NPCs, factions, events, artifacts, quests, and relationships.

### Session Memory

Owns session logs, summaries, transcript imports, extracted entities, and timeline entries.

### Map Layer

Owns map canvases, region boundaries, pins, overlays, generated decorations, and map-object
links.

### AI Review Queue

Owns AI-generated suggestions and their review status.

### Asset Library

Owns uploaded maps, inspiration images, generated images, icons, and derived assets.

### AI Providers

Owns provider adapters for local and cloud AI tools.

## AI Provider Boundary

The rest of the app should ask for a capability, not a specific model.

Examples:

- summarize session notes
- extract mentioned NPCs
- suggest region decorations
- generate regional style concept
- embed lore document
- compare new fact against existing canon

Provider adapters can route those tasks to:

- local ComfyUI
- local LLM
- OpenAI
- Anthropic
- future services

## Local AI Worker

The local worker should be optional.

The app should work if the worker is offline. In that case, AI image features can show
as unavailable, queued, or disabled.

Possible worker responsibilities:

- submit ComfyUI workflows
- monitor generation jobs
- store generated files
- return asset metadata
- run local image processing
- provide health/status information

## Data Integrity Rules

AI must not directly overwrite accepted lore.

Instead, AI creates suggestions that reference source material and target objects.

Examples:

- "Create NPC: Marra Voss"
- "Link Marra Voss to Eastgate"
- "Mark Eastgate as controlled by the Lantern Guild"
- "Add timeline event from session 3"

A human accepts, edits, or rejects each suggestion.

## First Technical Milestone

The first app milestone should include:

- local project scaffold
- campaign creation
- world object creation
- simple object list and detail view
- basic map canvas with pins or regions
- persistent storage
- no required AI dependency

AI features should begin as a review queue and mocked provider before adding real model
calls.
