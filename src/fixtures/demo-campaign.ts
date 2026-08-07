// Illustrative display data only; this is not a persistence schema.
export type ContentStatus = "Canon" | "Draft";
export type Visibility = "Public" | "Private" | "Hidden";

export type WorldObject = {
  id: string;
  name: string;
  kind: "Region / location" | "Person" | "Faction" | "Event / thread";
  summary: string;
  description: string;
  status: ContentStatus;
  visibility: Visibility;
  knownInformation?: string[];
  relatedObjectIds?: string[];
  sourceContext?: string[];
};

export type AISuggestion = {
  id: string;
  title: string;
  source: string;
  proposal: string;
  worldObjectIds: string[];
};

export const demoCampaign = {
  name: "The Crossroads",
  systemLabel: "Custom Campaign",
  premise: "A group is uncovering connections between several districts, organizations, and recent events.",
  currentRegion: "Glass Harbor",
  currentRegionSummary: "A working waterfront where sealed archive crates surface after the evening tide.",
};

export const worldObjects: WorldObject[] = [
  { id: "north-quarter", name: "North Quarter", kind: "Region / location", summary: "A residential district divided by old survey walls.", description: "North Quarter is a close-set residential district where older survey walls still decide which streets meet and which stories stay separate.", status: "Canon", visibility: "Public", relatedObjectIds: ["glass-harbor"], sourceContext: ["Campaign overview: District survey"] },
  { id: "glass-harbor", name: "Glass Harbor", kind: "Region / location", summary: "A working waterfront where missing manifests keep returning.", description: "Glass Harbor is a working waterfront of tide warehouses, civic cranes, and old berths. Its manifests have a habit of reappearing after the evening tide, usually missing the same pages.", knownInformation: ["The harbor bell rang twice during the Gate Seven blackout.", "A damp ledger fragment was brought ashore after the latest tide.", "The current investigation began at a waterfront meeting."], relatedObjectIds: ["north-quarter"], sourceContext: ["Session 04: The Harbor Meeting", "Campaign overview: Current region"], status: "Canon", visibility: "Public" },
  { id: "old-transit-ward", name: "Old Transit Ward", kind: "Region / location", summary: "Disused platforms beneath a busy civic exchange.", description: "Old Transit Ward is a draft campaign location beneath a busy civic exchange, where sealed platforms and abandoned signage suggest a route that no longer appears on public maps.", status: "Draft", visibility: "Public" },
  { id: "mara-vale", name: "Mara Vale", kind: "Person", summary: "Courier, witness, and the only known reader of the Gate Seven notices.", description: "Mara Vale is a courier who arrived at the harbor meeting carrying a damp ledger fragment. She is the only known person able to read the unusual notices recovered near Gate Seven.", knownInformation: ["Mara arrived after the harbor bell rang twice.", "She carried a ledger fragment damaged by saltwater.", "Her reading of the Gate Seven notices has not been independently verified."], relatedObjectIds: ["glass-harbor", "blackout-gate-seven"], sourceContext: ["Session 04: The Harbor Meeting", "Session 04 raw notes"], status: "Canon", visibility: "Private" },
  { id: "the-archive", name: "The Archive", kind: "Faction", summary: "A civic records organization with a careful public face.", description: "The Archive maintains civic records and public history with meticulous care. Its internal work, motives, and possible knowledge of the missing manifests are not yet established as campaign facts.", knownInformation: ["It maintains the public records used by harbor authorities.", "The group agreed to seek an Archive contact after Session 04."], sourceContext: ["Session 04: The Harbor Meeting"], status: "Canon", visibility: "Public" },
  { id: "blackout-gate-seven", name: "Blackout at Gate Seven", kind: "Event / thread", summary: "An unresolved outage tied to a missing transit ledger.", description: "The Gate Seven blackout interrupted the civic exchange and left a transit ledger unaccounted for. It remains an unresolved campaign thread rather than a settled explanation.", knownInformation: ["The lights failed when the harbor bell rang twice.", "A missing transit ledger is part of the unresolved record."], relatedObjectIds: ["old-transit-ward"], sourceContext: ["Session 04: The Harbor Meeting"], status: "Canon", visibility: "Public" },
];

export const recentSession = {
  number: "04", title: "The Harbor Meeting", date: "Illustrative date: 18 Rainfall",
  rawExcerpt: "Mara arrived late, carrying a damp ledger fragment. The lights failed when the harbor bell rang twice.",
  summary: "The group traced the Gate Seven blackout to a shipment routed through Glass Harbor and agreed to seek an Archive contact.",
  relatedObjects: ["Mara Vale", "Glass Harbor", "Blackout at Gate Seven", "The Archive"],
};

export const aiSuggestions: AISuggestion[] = [
  { id: "suggestion-mara-archive", title: "Possible relationship", source: "Session 04: The Harbor Meeting", proposal: "Mara Vale may be connected to The Archive.", worldObjectIds: ["mara-vale", "the-archive"] },
  { id: "suggestion-blackout-harbor", title: "Possible event link", source: "Session 04 raw notes", proposal: "Blackout at Gate Seven may be linked to Glass Harbor.", worldObjectIds: ["blackout-gate-seven", "glass-harbor"] },
];

export function getWorldObjectById(id: string) {
  return worldObjects.find((worldObject) => worldObject.id === id);
}

export function getRelatedWorldObjects(worldObject: WorldObject) {
  return (worldObject.relatedObjectIds ?? []).map((id) => {
    const relatedObject = getWorldObjectById(id);
    if (!relatedObject) {
      throw new Error("Fixture integrity error: related WorldObject ID " + id + " does not resolve.");
    }
    return relatedObject;
  });
}

export function getPendingSuggestionsForWorldObject(id: string) {
  return aiSuggestions.filter((suggestion) => suggestion.worldObjectIds.includes(id));
}

export const recentActivity = [
  "Session 04 added to campaign memory",
  "Glass Harbor highlighted as the current region",
  "Two AI proposals are awaiting review",
];
