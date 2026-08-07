export type CanonStatus = "Canon" | "Public" | "Private" | "Pending suggestion";

export type WorldObject = {
  id: string;
  name: string;
  kind: "Region / location" | "Person" | "Faction" | "Event / thread";
  summary: string;
  status: CanonStatus;
};

export const demoCampaign = {
  name: "The Crossroads",
  systemLabel: "Custom Campaign",
  premise:
    "A group is uncovering connections between several districts, organizations, and recent events.",
  currentRegion: "Glass Harbor",
  currentRegionSummary:
    "A working waterfront where sealed archive crates surface after the evening tide.",
};

export const worldObjects: WorldObject[] = [
  {
    id: "north-quarter",
    name: "North Quarter",
    kind: "Region / location",
    summary: "A residential district divided by old survey walls.",
    status: "Public",
  },
  {
    id: "glass-harbor",
    name: "Glass Harbor",
    kind: "Region / location",
    summary: "A working waterfront where missing manifests keep returning.",
    status: "Canon",
  },
  {
    id: "old-transit-ward",
    name: "Old Transit Ward",
    kind: "Region / location",
    summary: "Disused platforms beneath a busy civic exchange.",
    status: "Public",
  },
  {
    id: "mara-vale",
    name: "Mara Vale",
    kind: "Person",
    summary: "Courier, witness, and the only known reader of the Gate Seven notices.",
    status: "Private",
  },
  {
    id: "the-archive",
    name: "The Archive",
    kind: "Faction",
    summary: "A civic records organization with a careful public face.",
    status: "Canon",
  },
  {
    id: "blackout-gate-seven",
    name: "Blackout at Gate Seven",
    kind: "Event / thread",
    summary: "An unresolved outage tied to a missing transit ledger.",
    status: "Canon",
  },
];

export const recentSession = {
  number: "04",
  title: "The Harbor Meeting",
  date: "Illustrative date: 18 Rainfall",
  rawExcerpt:
    "Mara arrived late, carrying a damp ledger fragment. The lights failed when the harbor bell rang twice.",
  summary:
    "The group traced the Gate Seven blackout to a shipment routed through Glass Harbor and agreed to seek an Archive contact.",
  relatedObjects: ["Mara Vale", "Glass Harbor", "Blackout at Gate Seven", "The Archive"],
};

export const aiSuggestions = [
  {
    id: "suggestion-mara-archive",
    title: "Possible relationship",
    source: "Session 04: The Harbor Meeting",
    proposal: "Mara Vale may be connected to The Archive.",
  },
  {
    id: "suggestion-blackout-harbor",
    title: "Possible event link",
    source: "Session 04 raw notes",
    proposal: "Blackout at Gate Seven may be linked to Glass Harbor.",
  },
];

export const recentActivity = [
  "Session 04 added to campaign memory",
  "Glass Harbor highlighted as the current region",
  "Two AI proposals are awaiting review",
];
