import type { CanonStatus } from "@/fixtures/demo-campaign";

export function StatusBadge({ status }: { status: CanonStatus }) {
  const tone = status.toLowerCase().replaceAll(" ", "-");

  return <span className={`status-badge status-${tone}`}>{status}</span>;
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
}

export function SectionHeading({
  title,
  detail,
  id,
}: {
  title: string;
  detail?: string;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <h3 id={id}>{title}</h3>
      {detail ? <p>{detail}</p> : null}
    </div>
  );
}
