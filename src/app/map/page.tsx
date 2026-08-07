import { CampaignShell } from "@/components/campaign-shell/campaign-shell";
import { PageHeading, SectionHeading } from "@/components/workspace/primitives";

export default function MapPage() {
  return (
    <CampaignShell active="Map">
      <PageHeading
        eyebrow="Map workspace"
        title="A future spatial view of campaign data."
        description="This contained surface is illustrative only. It is not a canonical map, coordinate system, or interactive map tool."
      />

      <section className="map-workspace" aria-label="Demo map placeholder">
        <div className="map-stage">
          <p className="map-watermark">DEMO / PLACEHOLDER</p>
          <div className="map-territory territory-north"><span>North Quarter</span></div>
          <div className="map-territory territory-harbor"><span>Glass Harbor</span></div>
          <div className="map-territory territory-transit"><span>Old Transit Ward</span></div>
          <div className="map-route" aria-hidden="true" />
          <div className="map-key" aria-hidden="true"><span /> Unverified visual arrangement</div>
        </div>
        <aside className="map-note">
          <SectionHeading title="Map placeholder" detail="F001 boundary" />
          <p>
            Future maps will connect regions and other visual elements to structured campaign objects.
            Decorative geometry does not define campaign geography.
          </p>
          <dl>
            <div><dt>Linked examples</dt><dd>3 regions</dd></div>
            <div><dt>Interaction</dt><dd>Not implemented</dd></div>
            <div><dt>Map source</dt><dd>Static demo surface</dd></div>
          </dl>
        </aside>
      </section>
    </CampaignShell>
  );
}
