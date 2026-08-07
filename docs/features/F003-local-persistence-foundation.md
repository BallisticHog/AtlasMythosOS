# F003: Local Persistence Foundation

## Identifier and Status

- Identifier: F003
- Status: approved

## Objective

Establish a durable, production-quality-enough local persistence foundation with a real SQLite database, repeatable migrations, and persistent Campaign and WorldObject records that survive application and process restarts. Keep the physical schema intentionally small so later approved features can extend it without treating the full conceptual Atlas model as settled.

## User Problem

Atlas currently reads fixture and in-memory data only. A future DM cannot safely create or edit campaign data until campaigns and world objects have durable storage. F003 solves the persistence prerequisite; it does not make Atlas an authoring tool or switch the current UI to database reads.

## User Flow

1. Clone or update Atlas, run `nvm use`, and install with `npm ci`.
2. Run `npm run db:setup`.
3. Atlas explicitly applies committed migrations and creates the demo campaign and its six core WorldObjects if absent.
4. Run `npm run db:verify` and receive a non-zero exit if expected persisted records or constraints are missing.
5. End the process and run `npm run db:verify` again in a separate process.
6. The same records remain available. No UI authoring is introduced.

## Scope

- Configure repository-local SQLite using Drizzle ORM, Drizzle Kit, and `better-sqlite3`.
- Add an explicit database connection boundary that creates a missing parent directory, enables foreign keys, and deliberately configures journaling without running migrations on import.
- Define only Campaign and WorldObject tables and commit versioned SQL migration history.
- Provide focused Campaign and WorldObject query repositories with `getCampaignById`, `listWorldObjectsForCampaign`, and `getWorldObjectById` capabilities.
- Provide explicit migrate, seed, setup, and verification commands.
- Seed The Crossroads and the six existing demo WorldObjects at the approved core persistence level using stable IDs and create-if-absent behavior.
- Verify campaign presence, exactly six expected demo WorldObjects, their campaign references, separate readable status and visibility values, foreign-key enforcement, idempotent setup, and survival across process executions.
- Ignore the local database and SQLite runtime companion files.
- Document the developer workflow and the transitional fixture-backed UI boundary.

## Non-Goals

F003 does not add or change application UI, switch `/world` or `/world/[id]` to database reads, remove fixtures, or introduce Campaign/WorldObject creation, editing, deletion, forms, server actions, or CRUD API routes. It does not add authentication, users, permissions, CampaignMember, PersonalAnnotation, DMPrivateNote, WorldRelationship, AISuggestion, Session, Map, MapElement, Asset, Registry, KnowledgeState, DiscoveryState, VisualProfile, custom-field schema, search, filtering, import/export, backup UI, cloud databases, remote synchronization, PostgreSQL, Turso, Supabase, realtime, AI providers, map generation, ComfyUI, Stable Diffusion, or F004 work. No speculative placeholder tables, genre-specific entities, generic `notes` field, or JSON columns that mirror presentation fixtures are included.

## Affected Modules

- `docs/features/F003-local-persistence-foundation.md`
- `docs/decisions/ADR-001-local-persistence.md`
- `docs/03-technical-architecture.md`
- `docs/07-project-state.md`
- `README.md`
- `AGENTS.md`
- `.gitignore`
- `package.json` and `package-lock.json`
- `drizzle.config.ts` and committed `drizzle/` migration files
- `src/db/schema.ts`, `src/db/client.ts`, and focused repository modules
- small TypeScript scripts for migrate, seed, and verification

No application pages, components, styles, or fixture modules should change.

## Data Implications

### Campaign

Persist `id`, required `name`, nullable `description`, nullable `systemLabel`, required `createdAt`, and required `updatedAt`. IDs are stable text identifiers and timestamps are stored as required integer timestamps.

### WorldObject

Persist `id`, required `campaignId`, generic required text `type`, required `name`, nullable `summary`, nullable `description`, required `visibility`, required `status`, required `createdAt`, and required `updatedAt`. `campaignId` references Campaign and cascades on campaign deletion as documented by ADR-001. Check constraints limit status to `draft`, `canon`, `suggestion`, or `archived`, and visibility to `public`, `private`, or `hidden`; the two concepts remain separate columns. A campaign index supports scoped reads.

The conceptual model remains broader than this physical subset. No other conceptual entity or placeholder table is persisted. In particular, WorldObject has no generic `notes` field and no presentation-only arrays or AI references.

## UI States

No user-facing loading, populated, selected, or disabled states are added. The existing F001/F002 UI remains visually and functionally unchanged and fixture-backed.

Database command states are explicit:

- A missing parent directory is created safely by the connection boundary.
- A missing database file is created by migration/setup commands.
- An empty migrated database is valid before seeding.
- Migration, inaccessible/read-only database, or invalid foreign-key errors surface and exit non-zero; commands do not silently fall back to fixtures or delete/recreate an existing database.
- Repeated seeding creates no duplicate rows and does not overwrite existing rows.
- Verification reports useful failures and exits non-zero when expected records are absent.

## Accessibility

F003 introduces no UI and must not alter existing accessibility behavior. Future authoring UI remains responsible for semantic controls, keyboard and focus behavior, responsive layout, and non-color communication of state.

## Dependencies

- Runtime: `drizzle-orm` for typed schema and query access; `better-sqlite3` for the local SQLite connection.
- Development: `drizzle-kit` for migration generation, `@types/better-sqlite3` for driver types, and `tsx` only as the minimal TypeScript runner needed by database scripts.
- Existing framework, React, TypeScript, styling, ESLint, and Node versions remain unchanged.

## Tests

- `npm ci` using native WSL Node 24.14.0 and npm 11.9.0.
- Run setup against a clean temporary `ATLAS_DB_PATH` so existing state cannot cause a false pass.
- Run seed/setup twice and confirm no duplicate or overwritten rows.
- Run verification, then run it again as a separate process against the same path.
- Confirm verification exits non-zero against an empty migrated database.
- Confirm an invalid WorldObject campaign reference is rejected by SQLite.
- Run `npm run lint`, `npm run build`, and `git diff --check`.
- Inspect migrations, schema, changed files, dependency changes, and Git status.
- Confirm DB/WAL/SHM runtime files are ignored and untracked and no application UI source changed.

## Acceptance Criteria

1. The F003 feature specification exists.
2. ADR-001 records the accepted SQLite, Drizzle ORM, Drizzle Kit, and `better-sqlite3` decision.
3. SQLite is configured locally with no external service requirement.
4. The Drizzle schema contains only the approved Campaign and WorldObject scope plus tooling-owned migration metadata.
5. Campaign and WorldObject have a valid foreign-key relationship.
6. WorldObject status and visibility are separate.
7. WorldObject type remains generic and genre-neutral.
8. No PersonalAnnotation table exists.
9. No DMPrivateNote table exists.
10. No WorldRelationship table exists.
11. No AISuggestion table exists.
12. No User or CampaignMember table exists.
13. No Map or MapElement table exists.
14. No speculative future tables exist.
15. No generic WorldObject `notes` field is added.
16. A committed initial SQL migration exists.
17. A fresh database can be created from committed migrations.
18. The demo campaign can be seeded explicitly.
19. Six demo WorldObjects can be seeded.
20. Seeding is idempotent and create-if-absent.
21. A verification command confirms persisted records through the data-access boundary.
22. Verification succeeds in a separate subsequent process.
23. Verification exits non-zero if expected data is missing.
24. Runtime database files are ignored by Git.
25. Runtime DB, WAL, and SHM files are not committed.
26. README and AGENTS document the persistence workflow.
27. Current Atlas application UI remains functionally and visually unchanged.
28. The fixture-backed World and dossier UI is not falsely described as database-backed.
29. No authoring CRUD is introduced.
30. No authentication or permissions are introduced.
31. No AI or map functionality is introduced.
32. `npm run lint` passes.
33. `npm run build` passes.
34. `git diff --check` passes.
35. Package changes contain only persistence-related dependencies and scripts.
36. `docs/07-project-state.md` accurately records F003 completion and the transitional fixture-backed UI condition after validation.

## Risks

- The narrow schema could be mistaken for the final Atlas schema. The ADR and this specification identify it as an initial persisted subset and require feature-driven expansion.
- Notes, AI suggestions, private planning, and canon could be collapsed. F003 adds neither catch-all notes nor speculative tables and preserves separate status and visibility.
- WorldObject type could become genre-specific. It remains generic text.
- A database artifact could be committed. Explicit ignore rules and Git validation cover DB/WAL/SHM files.
- Migration setup could become non-repeatable. Committed SQL migrations and clean-path verification prove setup.
- A repeated seed could overwrite future user changes. Create-if-absent transactions preserve existing records.
- The native driver could be built through Windows tooling. Installation and validation use only native WSL Node/npm.
- Scope could drift into authoring. Application routes/components and fixture-backed reads remain untouched.

## Completion Checklist

- [x] Latest `main`, repository state, and required documents inspected.
- [x] Feature branch created.
- [x] ADR and approved feature specification written before implementation.
- [x] Project state marks F003 as the current approved implementation feature.
- [ ] Spec/ADR commit created before implementation.
- [ ] Stable dependency versions inspected and persistence packages installed.
- [ ] SQLite and Drizzle configured with committed migration.
- [ ] Only Campaign and WorldObject tables created with required constraints.
- [ ] Runtime database artifacts ignored.
- [ ] Idempotent seed and verification workflows created.
- [ ] Fresh setup, repeated seed, failure path, and separate-process persistence verified.
- [ ] README/AGENTS and final project state updated.
- [ ] Lint, build, diff check, and scope/Git audits passed.
- [ ] Feature marked complete with a completion report.
- [ ] Implementation commit created, branch pushed, and remote ref verified.

## Completion Report

Pending implementation and validation. Do not treat F003 as complete while its status is approved.
