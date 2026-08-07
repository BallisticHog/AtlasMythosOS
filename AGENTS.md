# Repository Guidelines

## Project Structure & Module Organization

This repository contains the Atlas Mythos OS product foundation and the Phase 1 Next.js application shell.

- `README.md` gives the project entry point.
- `docs/00-project-bible.md` is the source of truth for product principles and scope.
- `docs/01-product-vision.md` through `docs/06-ai-agent-brief.md` define the experience, architecture, MVP, data model, and AI workflow.

Application code lives under `src/`, with the current Next.js App Router routes, reusable components, and fixture data following that structure. Keep reusable UI in `src/components/`; add feature logic in `src/features/` when that directory is needed. Put static images and map assets in `public/`.

The canonical repository is https://github.com/BallisticHog/AtlasMythosOS. The repository and committed `/docs` are the permanent source of truth; conversation or chat context must not override repository documentation.

## Build, Test, and Development Commands

Use the current native WSL workflow to install dependencies and run the application:

```bash
nvm use
npm ci
npm run dev
```

Run validation with:

```bash
npm run lint
npm run build
```

No automated test command currently exists. Do not document or run `npm test` unless a test script is added to `package.json`.

## Local Development Environment

- Use Ubuntu in WSL as the primary development shell. Keep the working repository on the native WSL filesystem, not a Windows or OneDrive-mounted path.
- Use native WSL Node.js and npm only. The required Node version is defined in `.nvmrc`; npm is the package manager and `package-lock.json` is authoritative.
- Before JavaScript work, initialize NVM and select the version in `.nvmrc`. Automated or non-interactive shells may need to source `$NVM_DIR/nvm.sh` explicitly:

  ```bash
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  if [ ! -s "$NVM_DIR/nvm.sh" ]; then
    echo "Native WSL NVM is unavailable."
    exit 1
  fi
  . "$NVM_DIR/nvm.sh"
  nvm use
  ```

- Verify the active toolchain before JavaScript work:

  ```bash
  command -v nvm
  which node
  which npm
  node --version
  npm --version
  ```

- Do not silently fall back to Windows `node.exe`, `npm.cmd`, or `npx.cmd`. If native WSL Node/npm is unavailable, stop and report it.

## Coding Style & Naming Conventions

Follow the repository's existing Next.js, React, and TypeScript toolchain rather than adding ad hoc formatters. Use two spaces for JSON, Markdown, YAML, and TypeScript. Prefer:

- `PascalCase.tsx` for React components, such as `CampaignSidebar.tsx`.
- `kebab-case` for route folders and non-component files, such as `world-map/` or `campaign-store.ts`.
- `camelCase` for variables and functions; `PascalCase` for types, interfaces, and components.

Keep AI integrations behind explicit service boundaries. The database is canonical; generated suggestions must be reviewable before becoming campaign facts.

## Testing Guidelines

Add focused automated tests with each behavior change once test tooling exists. Name tests after observable behavior, for example `campaign-store.test.ts` or `MapPanel.test.tsx`. Cover data validation, permission boundaries, and AI suggestion approval flows before visual polish. Run the project's documented lint and test commands before opening a pull request.

## Commit & Pull Request Guidelines

Existing history uses short, imperative summaries, such as `Add founding project docs`. Continue that pattern: `Add campaign workspace shell` or `Fix region visibility filter`. Keep commits single-purpose.

Pull requests should explain the user-facing change, note affected docs or data contracts, link the relevant issue when one exists, and include screenshots for UI changes. Call out migrations, configuration changes, and any AI-safety implications explicitly.

## Documentation Discipline

Update the relevant `docs/` file when a product decision, architecture boundary, or data-model contract changes. Resolve disagreements with the project bible before implementing a new direction.

## Required Agent Workflow

Before implementation, read `docs/00-project-bible.md`, `docs/03-technical-architecture.md`, `docs/04-mvp-roadmap.md`, `docs/05-data-model.md`, and the current approved feature specification in `docs/features/`. Treat them as the implementation contract.

- Keep AI suggestions as reviewable proposals until a human accepts canon.
- Keep map visuals and generated decoration separate from campaign lore.
- Do not introduce cloud AI dependencies into the core app; providers must remain optional adapters.
- Avoid broad, unrelated refactors and keep work within the active feature specification.
- Run relevant available checks before reporting completion.
- Report all changed files, checks run, and remaining risks.
- Report material execution failures and recovery actions, not only final success. Include observable failed commands or tooling failures, unexpected environment or repository-state findings, affected files or state, recovery actions, residual risks or warnings, and validation results. Do not request or expose private chain-of-thought; report only observable execution events, errors, state changes, and recovery actions.
- Never commit secrets, API keys, generated model files, or local environment data.

Update the appropriate product, architecture, data-model, state, feature, or decision document when a durable contract changes.
