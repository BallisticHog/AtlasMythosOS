# ADR-001: Local Persistence Foundation

## Status

accepted

## Context

Atlas needs durable local persistence before authoring features can safely create or edit campaign data. The repository already prefers local-first development and identifies SQLite as appropriate for early local prototyping. F003 needs a small, inspectable foundation that survives process restarts without pretending the complete future Atlas schema is known.

## Decision

Use SQLite with Drizzle ORM, Drizzle Kit migrations, and `better-sqlite3` for the initial local persistence foundation. Store the default runtime database at `data/atlas.db`, allow `ATLAS_DB_PATH` to override it, and keep database files untracked.

The initial physical schema is intentionally limited to Campaign and WorldObject. WorldObject uses generic text for `type`, keeps `status` and `visibility` separate, and references Campaign with a foreign key. Deleting a Campaign cascades to its WorldObjects because those records cannot belong outside their campaign; application authoring and deletion behavior remain outside F003.

Schema changes use explicit, committed SQL migrations. Importing the database client does not run migrations. Connections enable SQLite foreign-key enforcement and WAL journaling; the connection module may create the containing runtime directory.

## Alternatives Considered

- Prisma with SQLite is viable and has strong tooling. It was not selected because F003 benefits from Drizzle's smaller, TypeScript-native schema layer and explicit SQL migration footprint.
- Drizzle with `node:sqlite` is a viable future option. It was not selected because the repository is pinned to Node 24.14.0 and this foundation should use the more mature `better-sqlite3` driver rather than depend on a less mature built-in SQLite API.
- PostgreSQL will likely be relevant when production or multi-user hosting matters. It adds unnecessary operational complexity to the current local-first milestone, so that decision remains open.
- Raw SQLite without an ORM minimizes dependencies. It was not selected because typed schema and query support plus repeatable migration tooling improve future implementation and review.

## Consequences

- Atlas gains a repository-local database file and explicit versioned migrations without requiring a cloud service or secret.
- `better-sqlite3` adds a native SQLite dependency that must be installed with the repository's native WSL Node.js toolchain.
- Database files and SQLite WAL/SHM companions remain ignored and untracked.
- A future PostgreSQL migration remains possible, but is not promised to be automatic.
- Future entities are added only when an approved feature requires them. F003 does not freeze the conceptual data model or establish the complete final schema.
- Personal annotations, DM-private notes, AI suggestions, relationships, maps, users, permissions, and other undecided concepts receive no tables or catch-all fields in F003.
- The existing UI remains fixture-backed until a successor read-path or authoring feature deliberately changes it.

## Date

2026-08-08
