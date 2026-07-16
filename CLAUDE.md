# Vietnam Tour Booking — Project Instructions

## Pre-Completion Checklist

**Before marking ANY task complete, run through this:**

- [ ] Code compiles with no TypeScript errors
- [ ] All GraphQL queries include required fields
- [ ] No `any` types used
- [ ] Interfaces defined for component state
- [ ] Error handling in place for async operations
- [ ] **Run code-reviewer subagent on the diff**
- [ ] Review findings and fix critical issues
- [ ] Verify feature works end-to-end

**Do not report task complete until code-reviewer passes.**

---

## Coding Process

**Before implementing any feature:**

1. Present a table with one row per change
2. Wait for explicit approval ("it is approved")
3. Only then begin coding

**During implementation:**

4. Code step-by-step with Carlos looped in
5. For every major change (function, component, resolver, GraphQL modification), explain what's being added and show the code
6. Don't batch multiple changes — show each piece, wait for feedback
7. Only execute after approval

**After implementation:**

8. Run code-reviewer subagent before reporting complete (see Pre-Completion Checklist above)
9. Fix anything clearly wrong; surface ambiguous findings to Carlos

## What counts as "major changes"?

- New functions or utilities
- New components or React hooks
- GraphQL mutations, queries, or schema changes
- Significant logic in existing components
- Changes to data flow or state management

## What does NOT need approval per-change?

- Styling tweaks to existing components
- Small updates to existing functions (same scope)
- Imports and integration (once the main piece is approved)

## Communication Style

Use Carlos's dyslexia-friendly format:
- Short sentences, one idea per sentence
- Numbered steps
- Code blocks with clear labels
- Bold action words (**Create**, **Update**, **Add**)

## Tech Stack

- Next.js (React)
- GraphQL (Apollo)
- TypeScript
- TailwindCSS
- Prisma (ORM)

## Project Structure

- `src/app/` — Next.js app router pages
- `src/components/` — React components
- `src/lib/` — Utility functions
- `src/types/` — TypeScript types
- `src/graphql/` — GraphQL schema, resolvers, queries
