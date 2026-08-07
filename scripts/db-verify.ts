import { createDatabaseConnection } from "../src/db/client";
import { getCampaignById } from "../src/db/repositories/campaign-repository";
import {
  getWorldObjectById,
  listWorldObjectsForCampaign,
} from "../src/db/repositories/world-object-repository";
import { demoCampaignId, demoWorldObjectIds } from "./demo-seed-data";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`Persistence verification failed: ${message}`);
  }
}

const connection = createDatabaseConnection();

try {
  const campaign = getCampaignById(connection.db, demoCampaignId);
  assert(campaign, `campaign ${demoCampaignId} is missing`);
  assert(campaign.name === "The Crossroads", "demo campaign has an unexpected name");

  const worldObjects = listWorldObjectsForCampaign(connection.db, demoCampaignId);
  assert(
    worldObjects.length === demoWorldObjectIds.length,
    `expected ${demoWorldObjectIds.length} demo WorldObjects, found ${worldObjects.length}`,
  );

  for (const id of demoWorldObjectIds) {
    const worldObject = getWorldObjectById(connection.db, demoCampaignId, id);
    assert(worldObject, `WorldObject ${id} is missing`);
    assert(
      worldObject.campaignId === demoCampaignId,
      `WorldObject ${id} references the wrong campaign`,
    );
    assert(typeof worldObject.status === "string", `WorldObject ${id} status is unreadable`);
    assert(
      typeof worldObject.visibility === "string",
      `WorldObject ${id} visibility is unreadable`,
    );
  }

  const foreignKeys = connection.sqlite.pragma("foreign_keys", { simple: true });
  assert(foreignKeys === 1, "SQLite foreign-key enforcement is not enabled");
  const foreignKeyViolations = connection.sqlite.pragma("foreign_key_check");
  assert(Array.isArray(foreignKeyViolations), "SQLite foreign-key check was unreadable");
  assert(
    foreignKeyViolations.length === 0,
    "SQLite reports a foreign-key integrity violation",
  );

  let invalidReferenceRejected = false;
  connection.sqlite.exec("SAVEPOINT verify_foreign_key_rejection");
  try {
    connection.sqlite
      .prepare(
        `insert into world_objects
          (id, campaign_id, type, name, visibility, status, created_at, updated_at)
         values (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        "verification-invalid-reference",
        "missing-campaign",
        "verification",
        "Invalid reference probe",
        "private",
        "draft",
        Date.now(),
        Date.now(),
      );
  } catch (error) {
    invalidReferenceRejected =
      error instanceof Error && error.message.includes("FOREIGN KEY constraint failed");
  } finally {
    connection.sqlite.exec("ROLLBACK TO verify_foreign_key_rejection");
    connection.sqlite.exec("RELEASE verify_foreign_key_rejection");
  }
  assert(invalidReferenceRejected, "an invalid campaign reference was not rejected");

  console.log(
    `Persistence verified at ${connection.databasePath}: 1 campaign and ${worldObjects.length} WorldObjects; status and visibility are separate and readable; foreign keys are enforced.`,
  );
} finally {
  connection.close();
}
