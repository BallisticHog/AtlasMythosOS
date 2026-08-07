import { CampaignShell } from "@/components/campaign-shell/campaign-shell";
import { PageHeading } from "@/components/workspace/primitives";
import { aiSuggestions } from "@/fixtures/demo-campaign";

export default function AiQueuePage() {
  return (
    <CampaignShell active="AI Queue">
      <PageHeading
        eyebrow="AI review queue"
        title="Suggestions remain outside campaign canon until reviewed."
        description="These display-only examples demonstrate the review boundary. No accept, reject, or edit action is implemented in F001."
      />

      <section className="suggestion-stack" aria-label="Pending AI suggestions">
        {aiSuggestions.map((suggestion, index) => (
          <article className="suggestion-record" key={suggestion.id}>
            <div className="suggestion-index" aria-hidden="true">0{index + 1}</div>
            <div className="suggestion-content">
              <div className="suggestion-heading">
                <p className="eyebrow">Pending suggestion</p>
                <span className="non-canon-label">Not canon</span>
              </div>
              <h3>{suggestion.title}</h3>
              <p>{suggestion.proposal}</p>
              <dl>
                <dt>Source context</dt>
                <dd>{suggestion.source}</dd>
              </dl>
            </div>
          </article>
        ))}
      </section>
    </CampaignShell>
  );
}
