import Link from "next/link";
import { demoCampaign } from "@/fixtures/demo-campaign";

const navigation = [
  { href: "/", label: "Overview", index: "01" },
  { href: "/world", label: "World", index: "02" },
  { href: "/map", label: "Map", index: "03" },
  { href: "/sessions", label: "Sessions", index: "04" },
  { href: "/ai-queue", label: "AI Queue", index: "05" },
  { href: "/assets", label: "Assets", index: "06" },
] as const;

type CampaignShellProps = {
  active: (typeof navigation)[number]["label"];
  children: React.ReactNode;
};

function WorkspaceNavigation({ active }: Pick<CampaignShellProps, "active">) {
  return (
    <nav aria-label="Campaign workspace">
      <ol className="workspace-navigation">
        {navigation.map((item) => {
          const isActive = item.label === active;

          return (
            <li key={item.href}>
              <Link
                aria-current={isActive ? "page" : undefined}
                className="workspace-navigation-link"
                data-active={isActive}
                href={item.href}
              >
                <span aria-hidden="true" className="navigation-index">
                  {item.index}
                </span>
                <span>{item.label}</span>
                {isActive ? <span className="active-label">Current</span> : null}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function CampaignShell({ active, children }: CampaignShellProps) {
  return (
    <div className="workspace-frame">
      <aside className="campaign-sidebar">
        <div className="campaign-mark" aria-hidden="true">
          AM
        </div>
        <div className="campaign-sidebar-heading">
          <p className="eyebrow">Campaign workspace</p>
          <h1>{demoCampaign.name}</h1>
          <p>{demoCampaign.systemLabel}</p>
        </div>
        <WorkspaceNavigation active={active} />
        <p className="sidebar-note">Shared campaign memory beside the table.</p>
      </aside>

      <div className="workspace-main">
        <header className="workspace-header">
          <div className="workspace-context">
            <span className="context-mark" aria-hidden="true" />
            <span>Atlas Mythos OS</span>
            <span aria-hidden="true">/</span>
            <strong>{active}</strong>
          </div>
          <details className="mobile-navigation">
            <summary aria-label="Open campaign navigation">
              <span>Browse workspace</span>
              <span aria-hidden="true" className="menu-glyph">+</span>
            </summary>
            <div className="mobile-navigation-panel">
              <WorkspaceNavigation active={active} />
            </div>
          </details>
        </header>
        <main className="workspace-content">{children}</main>
      </div>
    </div>
  );
}
