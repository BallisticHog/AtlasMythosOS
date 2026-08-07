import { mkdirSync } from "node:fs";
import path from "node:path";

import Database from "better-sqlite3";
import { drizzle, type BetterSQLite3Database } from "drizzle-orm/better-sqlite3";

import * as schema from "./schema";

export const defaultDatabasePath = path.resolve(process.cwd(), "data/atlas.db");

export type AtlasDatabase = BetterSQLite3Database<typeof schema>;

export type DatabaseConnection = {
  databasePath: string;
  sqlite: Database.Database;
  db: AtlasDatabase;
  close: () => void;
};

export function resolveDatabasePath() {
  return path.resolve(process.env.ATLAS_DB_PATH ?? defaultDatabasePath);
}

export function createDatabaseConnection(): DatabaseConnection {
  const databasePath = resolveDatabasePath();
  mkdirSync(path.dirname(databasePath), { recursive: true });

  const sqlite = new Database(databasePath);
  sqlite.pragma("foreign_keys = ON");
  sqlite.pragma("journal_mode = WAL");

  return {
    databasePath,
    sqlite,
    db: drizzle(sqlite, { schema }),
    close: () => sqlite.close(),
  };
}
