import path from "node:path";

import { migrate } from "drizzle-orm/better-sqlite3/migrator";

import { createDatabaseConnection } from "../src/db/client";

const connection = createDatabaseConnection();

try {
  migrate(connection.db, { migrationsFolder: path.resolve(process.cwd(), "drizzle") });
  console.log(`Applied database migrations to ${connection.databasePath}`);
} finally {
  connection.close();
}
