# Atlas Mythos OS

Atlas Mythos OS is an AI-assisted campaign companion for tabletop roleplaying groups.
It is not trying to replace Discord, Foundry, Roll20, or the social table. Its first job
is to make a campaign world easier to understand, remember, explore, and build together.

The core idea:

- Discord or voice chat remains where play happens.
- Atlas Mythos OS is the shared world board beside the table.
- The database is the source of truth.
- AI helps organize, suggest, decorate, summarize, and generate, but it does not silently own canon.
- Maps are views over world objects, not the whole product.

## Current Status

This repository is in the foundation phase. The first deliverables are product and
architecture documents that keep future AI-assisted development coherent.

Start here:

- [Project Bible](docs/00-project-bible.md)
- [Product Vision](docs/01-product-vision.md)
- [AI Team Workflow](docs/02-ai-team-workflow.md)
- [Technical Architecture](docs/03-technical-architecture.md)
- [MVP Roadmap](docs/04-mvp-roadmap.md)
- [Data Model](docs/05-data-model.md)
- [AI Agent Brief](docs/06-ai-agent-brief.md)
- [Project State](docs/07-project-state.md)
- [Campaign Framework](docs/08-campaign-framework.md)

## Working Principles

- Build the smallest useful companion first.
- Keep lore, decoration, generated suggestions, and session notes distinct.
- Treat every AI output as a proposal until accepted by a human.
- Prefer inspectable data structures over hidden magic.
- Keep the product usable without local image generation or cloud AI.
- Add advanced AI only after the base campaign workflow is solid.

## Repository Setup

Recommended first git flow:

```bash
git init
git add .
git commit -m "Add founding project docs"
```

Then connect to GitHub:

```bash
git remote add origin git@github.com:YOUR_USERNAME/atlas-mythos-os.git
git branch -M main
git push -u origin main
```

## Application Commands

Run the local campaign workspace from Ubuntu in WSL. NVM and the Node version specified
by `.nvmrc` must be installed inside WSL:

```bash
nvm use
npm ci
npm run dev
```

Run the required verification and production commands:

```bash
npm run lint
npm run build
npm run start
```

## Development Workflow

The workflow foundation keeps AI-assisted implementation small, reviewable, and aligned
with the product documents.

- [Contributor Guidelines](AGENTS.md)
- [Feature Specifications](docs/features/)
- [Architecture Decisions](docs/decisions/)
- [Independent Review Charter](docs/prompts/claude-reviewer.md)
- [Pull Request Template](.github/pull_request_template.md)
