# Project Name

## Getting Started

> pnpm install && pnpm prepare

> pnpm dev

### Testing (unit)

Tests files are in the `tests/` folder in the root directory, but files with `*.test.ts` patterns will be recognized by Vitest anywhere else (execpt inside `e2e/`).

To run the unit testing:

> pnpm test

### Testing (e2e)

Using Playwright, you can test in **headless** mode with:

> pnpm e2e:headless

and you can test in **UI** mode with:

> pnpm e2e:ui

## Workflow

### Formatting and linting

Prettier and ESlint automatically do their magic on each commit so you don't have to worry about this.

The unit tests are also
