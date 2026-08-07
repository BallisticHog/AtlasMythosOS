import { createDatabaseConnection } from "../src/db/client";
import { createCampaignIfAbsent } from "../src/db/repositories/campaign-repository";
import { createWorldObjectIfAbsent } from "../src/db/repositories/world-object-repository";
import { demoCampaignRecord, demoWorldObjectRecords } from "./demo-seed-data";

const connection = createDatabaseConnection();

try {
  const inserted = connection.db.transaction((tx) => {
    const campaignResult = createCampaignIfAbsent(tx, demoCampaignRecord);
    let worldObjectCount = 0;

    for (const worldObject of demoWorldObjectRecords) {
      worldObjectCount += createWorldObjectIfAbsent(tx, worldObject).changes;
    }

    return {
      campaigns: campaignResult.changes,
      worldObjects: worldObjectCount,
    };
  });

  console.log(
    `Seed complete for ${connection.databasePath}: inserted ${inserted.campaigns} campaign(s) and ${inserted.worldObjects} WorldObject(s).`,
  );
} finally {
  connection.close();
}
