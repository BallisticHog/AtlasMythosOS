import { CampaignShell } from "@/components/campaign-shell/campaign-shell";
import { PageHeading, SectionHeading } from "@/components/workspace/primitives";
import { recentSession } from "@/fixtures/demo-campaign";

export default function SessionsPage() {
  return (
    <CampaignShell active="Sessions">
      <PageHeading
        eyebrow="Session memory"
        title="What happened, where it happened, and what changed."
        description="Sessions are structured campaign records. Notes, transcripts, summaries, and future extraction results belong to them."
      />

      <section className="session-record" aria-labelledby="session-title">
        <header className="session-record-heading">
          <div>
            <p className="eyebrow">Session {recentSession.number}</p>
            <h3 id="session-title">{recentSession.title}</h3>
          </div>
          <p>{recentSession.date}</p>
        </header>
        <div className="session-record-grid">
          <div>
            <SectionHeading title="Raw-note excerpt" detail="Display only" />
            <blockquote>{recentSession.rawExcerpt}</blockquote>
          </div>
          <div>
            <SectionHeading title="Session summary" />
            <p>{recentSession.summary}</p>
          </div>
        </div>
        <footer className="session-record-footer">
          <span className="eyebrow">Related world objects</span>
          <ul className="inline-object-list">
            {recentSession.relatedObjects.map((object) => <li key={object}>{object}</li>)}
          </ul>
        </footer>
      </section>
    </CampaignShell>
  );
}
