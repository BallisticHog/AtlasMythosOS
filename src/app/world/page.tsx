import { CampaignShell } from "@/components/campaign-shell/campaign-shell";
import { PageHeading, SectionHeading, StatusBadge } from "@/components/workspace/primitives";
import { worldObjects } from "@/fixtures/demo-campaign";

const groups = ["Region / location", "Person", "Faction", "Event / thread"] as const;

export default function WorldPage() {
  return (
    <CampaignShell active="World">
      <PageHeading
        eyebrow="World objects"
        title="A shared record of places, people, and consequences."
        description="Demo objects are grouped by role in the campaign, not by a fixed genre-specific schema."
      />

      <div className="world-groups">
        {groups.map((group) => {
          const items = worldObjects.filter((worldObject) => worldObject.kind === group);

          return (
            <section className="world-group" key={group} aria-labelledby={`${group}-heading`}>
              <SectionHeading id={`${group}-heading`} title={group} detail={`${items.length} demo item${items.length === 1 ? "" : "s"}`} />
              <div className="object-list">
                {items.map((worldObject) => (
                  <article className="object-row" key={worldObject.id}>
                    <div className="object-row-mark" aria-hidden="true" />
                    <div>
                      <h3>{worldObject.name}</h3>
                      <p>{worldObject.summary}</p>
                    </div>
                    <StatusBadge status={worldObject.status} />
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </CampaignShell>
  );
}
