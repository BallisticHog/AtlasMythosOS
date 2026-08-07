import Link from "next/link";
import { CampaignShell } from "@/components/campaign-shell/campaign-shell";
import { PageHeading, SectionHeading, StatusBadge } from "@/components/workspace/primitives";
import { worldObjects } from "@/fixtures/demo-campaign";

const groups = [
  { id: "regions-locations", label: "Region / location" },
  { id: "people", label: "Person" },
  { id: "factions", label: "Faction" },
  { id: "events-threads", label: "Event / thread" },
] as const;

export default function WorldPage() {
  return (
    <CampaignShell active="World">
      <PageHeading eyebrow="World objects" title="A shared record of places, people, and consequences." description="Demo objects are grouped by role in the campaign, not by a fixed genre-specific schema." />
      <div className="world-groups">
        {groups.map((group) => {
          const items = worldObjects.filter((worldObject) => worldObject.kind === group.label);
          return (
            <section className="world-group" key={group.id} aria-labelledby={group.id + "-heading"}>
              <SectionHeading id={group.id + "-heading"} title={group.label} detail={items.length + " demo item" + (items.length === 1 ? "" : "s")} />
              <div className="object-list">
                {items.map((worldObject) => (
                  <Link className="object-row" href={"/world/" + worldObject.id} key={worldObject.id}>
                    <span className="object-row-mark" aria-hidden="true" />
                    <div><h3>{worldObject.name}</h3><p>{worldObject.summary}</p></div>
                    <div className="object-row-meta"><StatusBadge value={worldObject.status} /><StatusBadge value={worldObject.visibility} /></div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </CampaignShell>
  );
}
