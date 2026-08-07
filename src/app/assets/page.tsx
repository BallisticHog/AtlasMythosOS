import { CampaignShell } from "@/components/campaign-shell/campaign-shell";
import { PageHeading } from "@/components/workspace/primitives";

export default function AssetsPage() {
  return (
    <CampaignShell active="Assets">
      <PageHeading
        eyebrow="Asset library"
        title="Campaign visuals will gather here."
        description="This demo campaign has no stored assets yet. The empty state is intentional."
      />

      <section className="assets-empty-state" aria-labelledby="assets-empty-title">
        <div className="empty-state-marker" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="eyebrow">No campaign assets</p>
        <h3 id="assets-empty-title">The library is ready for reference material.</h3>
        <p>
          Campaign maps, DM reference images, and generated visual material will appear here in a future capability.
          Visual assets remain separate from accepted campaign lore unless explicitly linked.
        </p>
      </section>
    </CampaignShell>
  );
}
