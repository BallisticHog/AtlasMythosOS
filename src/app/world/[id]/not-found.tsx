import Link from "next/link";
import { CampaignShell } from "@/components/campaign-shell/campaign-shell";

export default function WorldObjectNotFound() {
  return (
    <CampaignShell active="World">
      <section className="world-not-found" aria-labelledby="world-object-not-found-title">
        <p className="eyebrow">World object record</p>
        <h2 id="world-object-not-found-title">That record could not be found.</h2>
        <p>The requested WorldObject is not part of the current campaign record. Return to World to inspect the available objects.</p>
        <Link className="dossier-back-link" href="/world">← Return to World</Link>
      </section>
    </CampaignShell>
  );
}
