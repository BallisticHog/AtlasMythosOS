import { eq } from "drizzle-orm";

import type { AtlasDatabase } from "../client";
import { campaigns, type NewCampaign } from "../schema";

export function getCampaignById(db: AtlasDatabase, id: string) {
  return db.select().from(campaigns).where(eq(campaigns.id, id)).get();
}

export function createCampaignIfAbsent(db: AtlasDatabase, campaign: NewCampaign) {
  return db.insert(campaigns).values(campaign).onConflictDoNothing().run();
}
