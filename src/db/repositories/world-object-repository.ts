import { and, eq } from "drizzle-orm";

import type { AtlasDatabase } from "../client";
import { worldObjects, type NewWorldObject } from "../schema";

export function listWorldObjectsForCampaign(db: AtlasDatabase, campaignId: string) {
  return db
    .select()
    .from(worldObjects)
    .where(eq(worldObjects.campaignId, campaignId))
    .all();
}

export function getWorldObjectById(
  db: AtlasDatabase,
  campaignId: string,
  id: string,
) {
  return db
    .select()
    .from(worldObjects)
    .where(and(eq(worldObjects.campaignId, campaignId), eq(worldObjects.id, id)))
    .get();
}

export function createWorldObjectIfAbsent(
  db: AtlasDatabase,
  worldObject: NewWorldObject,
) {
  return db.insert(worldObjects).values(worldObject).onConflictDoNothing().run();
}
