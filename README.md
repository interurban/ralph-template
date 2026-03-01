# Ralph Template

A Cursor-native development template that implements the Ralph Loop pattern for disciplined, iterative AI-assisted development. Built on Next.js, deployable to Vercel.

## Stack

- **Next.js 16** (App Router, TypeScript, Tailwind CSS)
- **shadcn/ui** (component library)
- **Vitest** (unit/integration tests)
- **Playwright** (E2E tests)
- **Vercel** (deployment)

## Quick Start

```bash
# Clone this template for a new project
cp -r !-ralph-template my-project
cd my-project
npm install
npm run dev
```

## Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run test:unit` | Run Vitest unit tests |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run test` | Run all tests (unit + E2E) |
| `npm run validate` | Full pipeline: TypeScript + lint + unit + E2E |

## Ralph Loop: How It Works

The Ralph pattern treats the AI agent as a stateless worker that forgets everything between sessions. State lives in files, not in the model's memory.

### Core Files

| File | Purpose |
|------|---------|
| `PROMPT.md` | Iteration instructions — read at session start |
| `tasks/BACKLOG.md` | All planned work, ordered by priority |
| `tasks/CURRENT.md` | Tasks being worked on this cycle |
| `specs/` | Feature specifications (use `specs/TEMPLATE.md`) |
| `DEV_LOG.md` | Append-only log of completed iterations |

### One Iteration

1. Read `PROMPT.md` and `tasks/CURRENT.md`
2. Pick the next pending task
3. Implement (code + tests)
4. Run `npm run validate`
5. If pass: commit, mark task complete, log it
6. If fail: fix and retry (max 3x), then mark blocked
7. Stop — one task per session

### Cursor Integration

The template includes Cursor-specific files that enforce the Ralph discipline:

**Rules** (`.cursor/rules/`):
- `ralph-discipline.mdc` — Core iteration protocol (always active)
- `nextjs-patterns.mdc` — App Router conventions
- `testing-standards.mdc` — Test requirements
- `task-management.mdc` — Task file format
- `commit-standards.mdc` — Conventional commit format

**Subagents** (`.cursor/agents/`):
- `planner` — Breaks specs into atomic tasks (does not write code)
- `implementer` — Picks a task and delivers working, tested code
- `reviewer` — Reviews the latest diff for quality and security

**Skills** (`.cursor/skills/`):
- `ralph-iteration` — Full iteration workflow checklist

### Running an Iteration

Start a new Cursor agent session and say:

> "Read PROMPT.md and do the next task"

Or use the implementer subagent:

> "Use the implementer to do the next task in tasks/CURRENT.md"

### Planning Work

To break down a feature into tasks:

1. Write a spec in `specs/` using `specs/TEMPLATE.md`
2. Ask the planner: "Use the planner to break down specs/my-feature.md into tasks"
3. Review the generated tasks in `tasks/BACKLOG.md`
4. Move ready tasks to `tasks/CURRENT.md`

## Starting a New Project From This Template

1. Copy this directory
2. Update `package.json` name
3. Update `src/app/layout.tsx` metadata
4. Clear `tasks/BACKLOG.md`, `tasks/CURRENT.md`, and `DEV_LOG.md`
5. Write your first spec in `specs/`
6. Use the planner to generate tasks
7. Start iterating
