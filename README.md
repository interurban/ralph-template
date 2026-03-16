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

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start dev server                              |
| `npm run build`     | Production build                              |
| `npm run lint`      | Run ESLint                                    |
| `npm run test:unit` | Run Vitest unit tests                         |
| `npm run test:e2e`  | Run Playwright E2E tests                      |
| `npm run test`      | Run all tests (unit + E2E)                    |
| `npm run validate`  | Full pipeline: TypeScript + lint + unit + E2E |

## Ralph Loop: How It Works

The Ralph pattern treats the AI agent as a stateless worker that forgets everything between sessions. State lives in files, not in the model's memory.

### Core Files

| File               | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| `PROMPT.md`        | Iteration instructions — read at session start   |
| `tasks/BACKLOG.md` | All planned work, ordered by priority            |
| `tasks/CURRENT.md` | Tasks being worked on this cycle                 |
| `specs/`           | Feature specifications (use `specs/TEMPLATE.md`) |
| `DEV_LOG.md`       | Append-only log of completed iterations          |

### One Iteration

1. Read `PROMPT.md` and `tasks/CURRENT.md`
2. Pick the next pending task
3. Implement (code + tests)
4. Run `npm run validate`
5. If pass: commit, mark task complete, log it
6. If fail: fix and retry (max 3x), then mark blocked
7. Stop — one task per session

### Dual-Agent Architecture

The Ralph pattern externalizes the agent's memory into files so it doesn't get confused over time. This template supports two styles of AI execution out-of-the-box:

**1. Cursor / Standard Agents (`.cursor/rules`)**
Cursor struggles with continuous multi-task autonomous loops due to context window degradation. For Cursor, this template enforces a **strict stop protocol**. The agent will complete _one_ task, commit, output a `<promise>TASK-XXX:DONE</promise>` tag, and force you to start a fresh agent session.

To run with Cursor:

> "Read PROMPT.md and do the next task"

**2. Antigravity (`.agents/workflows`)**
Antigravity is designed for continuous, long-running autonomous development loops. It utilizes native `task_boundary` tools to partition work without clearing the context window completely. Antigravity will loop through `tasks/CURRENT.md` continuously until it finishes the queue or runs into a problem.

To run with Antigravity:

> "/ralph-iteration"

### Planning Work

To break down a feature into tasks:

1. Write a spec in `specs/` using `specs/TEMPLATE.md`
2. Ask your agent to plan:
   - **Cursor**: "Use the planner agent to break down specs/my-feature.md into tasks"
   - **Antigravity**: "/planning"
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
