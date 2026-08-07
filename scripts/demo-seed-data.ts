import type { NewCampaign, NewWorldObject } from "../src/db/schema";

export const demoCampaignId = "the-crossroads";
export const demoWorldObjectIds = [
  "north-quarter",
  "glass-harbor",
  "old-transit-ward",
  "mara-vale",
  "the-archive",
  "blackout-gate-seven",
] as const;

const seedTimestamp = new Date("2026-08-08T00:00:00.000Z");

export const demoCampaignRecord: NewCampaign = {
  id: demoCampaignId,
  name: "The Crossroads",
  description:
    "A group is uncovering connections between several districts, organizations, and recent events.",
  systemLabel: "Custom Campaign",
  createdAt: seedTimestamp,
  updatedAt: seedTimestamp,
};

export const demoWorldObjectRecords: NewWorldObject[] = [
  {
    id: "north-quarter",
    campaignId: demoCampaignId,
    type: "location",
    name: "North Quarter",
    summary: "A residential district divided by old survey walls.",
    description:
      "North Quarter is a close-set residential district where older survey walls still decide which streets meet and which stories stay separate.",
    status: "canon",
    visibility: "public",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "glass-harbor",
    campaignId: demoCampaignId,
    type: "location",
    name: "Glass Harbor",
    summary: "A working waterfront where missing manifests keep returning.",
    description:
      "Glass Harbor is a working waterfront of tide warehouses, civic cranes, and old berths. Its manifests have a habit of reappearing after the evening tide, usually missing the same pages.",
    status: "canon",
    visibility: "public",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "old-transit-ward",
    campaignId: demoCampaignId,
    type: "location",
    name: "Old Transit Ward",
    summary: "Disused platforms beneath a busy civic exchange.",
    description:
      "Old Transit Ward is a draft campaign location beneath a busy civic exchange, where sealed platforms and abandoned signage suggest a route that no longer appears on public maps.",
    status: "draft",
    visibility: "public",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "mara-vale",
    campaignId: demoCampaignId,
    type: "person",
    name: "Mara Vale",
    summary: "Courier, witness, and the only known reader of the Gate Seven notices.",
    description:
      "Mara Vale is a courier who arrived at the harbor meeting carrying a damp ledger fragment. She is the only known person able to read the unusual notices recovered near Gate Seven.",
    status: "canon",
    visibility: "private",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "the-archive",
    campaignId: demoCampaignId,
    type: "faction",
    name: "The Archive",
    summary: "A civic records organization with a careful public face.",
    description:
      "The Archive maintains civic records and public history with meticulous care. Its internal work, motives, and possible knowledge of the missing manifests are not yet established as campaign facts.",
    status: "canon",
    visibility: "public",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
  {
    id: "blackout-gate-seven",
    campaignId: demoCampaignId,
    type: "event",
    name: "Blackout at Gate Seven",
    summary: "An unresolved outage tied to a missing transit ledger.",
    description:
      "The Gate Seven blackout interrupted the civic exchange and left a transit ledger unaccounted for. It remains an unresolved campaign thread rather than a settled explanation.",
    status: "canon",
    visibility: "public",
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp,
  },
];
