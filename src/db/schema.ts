import { sql } from "drizzle-orm";
import { check, index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const campaigns = sqliteTable("campaigns", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  systemLabel: text("system_label"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
});

export const worldObjects = sqliteTable(
  "world_objects",
  {
    id: text("id").primaryKey(),
    campaignId: text("campaign_id")
      .notNull()
      .references(() => campaigns.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    name: text("name").notNull(),
    summary: text("summary"),
    description: text("description"),
    visibility: text("visibility").notNull(),
    status: text("status").notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
  },
  (table) => [
    index("world_objects_campaign_id_idx").on(table.campaignId),
    check(
      "world_objects_visibility_check",
      sql`${table.visibility} in ('public', 'private', 'hidden')`,
    ),
    check(
      "world_objects_status_check",
      sql`${table.status} in ('draft', 'canon', 'suggestion', 'archived')`,
    ),
  ],
);

export type Campaign = typeof campaigns.$inferSelect;
export type NewCampaign = typeof campaigns.$inferInsert;
export type WorldObject = typeof worldObjects.$inferSelect;
export type NewWorldObject = typeof worldObjects.$inferInsert;
