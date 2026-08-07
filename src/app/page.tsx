import { CampaignShell } from "@/components/campaign-shell/campaign-shell";
import { PageHeading, SectionHeading, StatusBadge } from "@/components/workspace/primitives";
import {
  aiSuggestions,
  demoCampaign,
  recentActivity,
  recentSession,
  worldObjects,
} from "@/fixtures/demo-campaign";

export default function OverviewPage() {
  const highlightedRegion = worldObjects.find(
    (worldObject) => worldObject.name === demoCampaign.currentRegion,
  );

  return (
    <CampaignShell active="Overview">
      <PageHeading
        eyebrow="Campaign overview"
        title={demoCampaign.name}
        description={demoCampaign.premise}
      />

      <section className="overview-feature-grid" aria-labelledby="orientation-heading">
        <div className="campaign-brief">
          <p className="eyebrow">At the table</p>
          <h3 id="orientation-heading">The campaign is currently converging on Glass Harbor.</h3>
          <p>
            The latest session surfaced a transit ledger, a harbor blackout, and a
            possible connection to The Archive.
          </p>
          <dl className="campaign-stats">
            <div>
              <dt>World objects</dt>
              <dd>{worldObjects.length}</dd>
            </div>
            <div>
              <dt>Open thread</dt>
              <dd>01</dd>
            </div>
            <div>
              <dt>AI proposals</dt>
              <dd>{aiSuggestions.length}</dd>
            </div>
          </dl>
        </div>

        <article className="region-focus">
          <div className="region-focus-topline">
            <span className="eyebrow">Highlighted region</span>
            {highlightedRegion ? <StatusBadge status={highlightedRegion.status} /> : null}
          </div>
          <h3>{demoCampaign.currentRegion}</h3>
          <p>{demoCampaign.currentRegionSummary}</p>
          <p className="region-focus-caption">Map context is a future workspace view.</p>
        </article>
      </section>

      <section className="content-band two-column-band" aria-label="Campaign memory">
        <div>
          <SectionHeading title="Recent session" detail="Display-only campaign memory" />
          <article className="session-preview">
            <div>
              <p className="eyebrow">Session {recentSession.number}</p>
              <h3>{recentSession.title}</h3>
              <p className="muted-copy">{recentSession.date}</p>
            </div>
            <p>{recentSession.summary}</p>
            <ul className="inline-object-list" aria-label="Related world objects">
              {recentSession.relatedObjects.map((object) => (
                <li key={object}>{object}</li>
              ))}
            </ul>
          </article>
        </div>

        <div>
          <SectionHeading title="Campaign memory" detail="Recent activity" />
          <ol className="activity-list">
            {recentActivity.map((activity, index) => (
              <li key={activity}>
                <span aria-hidden="true">0{index + 1}</span>
                <p>{activity}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-band unresolved-band" aria-labelledby="unresolved-heading">
        <div>
          <p className="eyebrow">Unresolved thread</p>
          <h3 id="unresolved-heading">Blackout at Gate Seven</h3>
          <p>A transit outage, a missing ledger, and a route through Glass Harbor remain connected but unresolved.</p>
        </div>
        <div className="pending-summary">
          <p className="eyebrow">Review queue</p>
          <strong>{aiSuggestions.length} pending suggestions</strong>
          <p>Suggestions are proposals only. They have not become canon.</p>
        </div>
      </section>
    </CampaignShell>
  );
}
