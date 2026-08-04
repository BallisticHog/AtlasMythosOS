# AI Team Workflow

## Goal

Use AI as a structured development team without allowing the project to drift into
conflicting architectures or messy generated code.

## Human Role

The human is the product owner and creative director.

Responsibilities:

- decide what the app should feel like
- accept or reject product ideas
- decide what is canon for the product
- test whether flows feel fun or annoying
- approve major scope changes
- keep the table experience central

## ChatGPT Role

ChatGPT acts as system architect and product strategist.

Responsibilities:

- product planning
- architecture design
- data model review
- roadmap sequencing
- UX exploration
- AI-agent briefs
- trade-off analysis
- high-level code review

ChatGPT should create clarity before code is written.

## Claude Role

Claude can act as a senior engineer and reviewer when useful.

Responsibilities:

- reason about large code changes
- review implementation approaches
- suggest refactors
- compare architectural options
- explain complex trade-offs

Claude should not independently rewrite the project without a precise brief.

## Codex Role

Codex is the implementation engineer.

Responsibilities:

- read the local repository
- implement scoped changes
- follow existing patterns
- create tests when useful
- run checks
- commit or prepare changes when requested
- keep the working tree understandable

Codex should work from detailed specs and avoid inventing broad new product direction
while coding.

## Rule For AI Handoffs

Every AI handoff should include:

- current product goal
- relevant documents
- exact requested output
- constraints
- non-goals
- acceptance criteria

## Rule For AI-Written Code

AI-written code should be:

- small in scope
- easy to inspect
- consistent with the repo
- covered by tests when behavior matters
- committed in meaningful chunks

Avoid huge "build the whole app" prompts. They create hidden technical debt.

## Suggested Cadence

1. Human and ChatGPT refine the feature.
2. ChatGPT produces a short implementation brief.
3. Codex implements the feature.
4. Codex runs checks and summarizes changed files.
5. Claude or ChatGPT reviews if the change is risky.
6. Human tests the flow and decides what comes next.

## Prompt Template For Implementation

```text
We are building Atlas Mythos OS.

Read:
- docs/00-project-bible.md
- docs/03-technical-architecture.md
- docs/04-mvp-roadmap.md

Task:
[specific task]

Constraints:
- Keep scope limited to [area].
- Do not introduce a new framework unless necessary.
- Preserve the canon/suggestion distinction.
- Keep the app usable without cloud AI.

Acceptance criteria:
- [criteria 1]
- [criteria 2]
- [criteria 3]

After implementation:
- summarize files changed
- run relevant checks
- list remaining risks
```

