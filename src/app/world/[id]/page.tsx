import Link from "next/link";
import { notFound } from "next/navigation";
import { CampaignShell } from "@/components/campaign-shell/campaign-shell";
import { PageHeading, SectionHeading, StatusBadge } from "@/components/workspace/primitives";
import { getPendingSuggestionsForWorldObject, getRelatedWorldObjects, getWorldObjectById, worldObjects } from "@/fixtures/demo-campaign";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return worldObjects.map((worldObject) => ({ id: worldObject.id }));
}

export default async function WorldObjectDossierPage({ params }: Props) {
  const { id } = await params;
  const worldObject = getWorldObjectById(id);
  if (!worldObject) notFound();

  const relatedObjects = getRelatedWorldObjects(worldObject);
  const pendingSuggestions = getPendingSuggestionsForWorldObject(worldObject.id);

  return (
    <CampaignShell active="World">
      <Link className="dossier-back-link" href="/world">← Back to World</Link>
      <PageHeading eyebrow={worldObject.kind} title={worldObject.name} description={worldObject.summary} />
      <article className="dossier-record" aria-label={worldObject.name + " dossier"}>
        <header className="dossier-record-header">
          <div><p className="eyebrow">World object record</p><p className="dossier-description">{worldObject.description}</p></div>
          <dl className="dossier-facts">
            <div><dt>Content status</dt><dd><StatusBadge value={worldObject.status} /></dd></div>
            <div><dt>Visibility</dt><dd><StatusBadge value={worldObject.visibility} /></dd></div>
          </dl>
        </header>
        {worldObject.knownInformation?.length ? <section className="dossier-section" aria-labelledby="known-information"><SectionHeading id="known-information" title="Known information" /><ul className="dossier-list">{worldObject.knownInformation.map((item) => <li key={item}>{item}</li>)}</ul></section> : null}
        {relatedObjects.length ? <section className="dossier-section" aria-labelledby="related-records"><SectionHeading id="related-records" title="Related records" detail="Static dossier references" /><ul className="related-record-list">{relatedObjects.map((relatedObject) => <li key={relatedObject.id}><Link href={"/world/" + relatedObject.id}><span><strong>{relatedObject.name}</strong><small>{relatedObject.kind}</small></span><span aria-hidden="true">→</span></Link></li>)}</ul></section> : null}
        {worldObject.sourceContext?.length ? <section className="dossier-section" aria-labelledby="source-context"><SectionHeading id="source-context" title="Source context" detail="Display context only" /><ul className="source-context-list">{worldObject.sourceContext.map((source) => <li key={source}>{source}</li>)}</ul></section> : null}
        {pendingSuggestions.length ? <section className="dossier-section dossier-pending-section" aria-labelledby="pending-suggestions"><div className="dossier-pending-heading"><SectionHeading id="pending-suggestions" title="Pending suggestions" detail="Reviewable proposals, not accepted facts" /><span className="non-canon-label">Not canon</span></div><div className="dossier-suggestion-list">{pendingSuggestions.map((suggestion) => <article className="dossier-suggestion" key={suggestion.id}><div><p className="eyebrow">Pending suggestion</p><h3>{suggestion.title}</h3><p>{suggestion.proposal}</p></div><p className="muted-copy">Source: {suggestion.source}</p></article>)}</div></section> : null}
      </article>
    </CampaignShell>
  );
}
