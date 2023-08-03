# Perfect Next.js Stack (PNS) for small and medium projects

Not the greatest acronym, but that's what it comes to.

## Getting Started

`pnpm install && pnpm prepare`

`pnpm dev`

### Testing (unit)

Tests files are in the `tests/` folder in the root directory, but files with `*.test.ts` patterns will be recognized by Vitest anywhere else (execpt inside `e2e/`).

To run the unit testing:

`pnpm test`

### Testing (e2e)

Using Playwright, you can test in **headless** mode with:

`pnpm e2e:headless`

and you can test in **UI** mode with:

`pnpm e2e:ui`

### Database

Databases are managed by Prisma and the default provider is mysql.

You can edit the `schema.prisma` file and make your first migration with the following command:
`npx prisma migrate dev --name init`

See the [Official Prisma Quickstart](https://www.prisma.io/docs/getting-started/quickstart) for more details

You can also see this page for more information on [how to use Prisma in your Next.js app](https://www.prisma.io/nextjs)

## Workflow

### Formatting and linting

Prettier and ESlint automatically do their magic on each commit so you don't have to worry about this.

### Testing

Husky will run the unit test files before the lint-staged and the commit.

Husky can be configure to run the e2e tests before each commit, but it is not by default (add `pnpm e2e:headless &&` before `pnpm test`)

On push, if using GitHub, `.github` workflows are configured to run playwright e2e tests.

## Tech Stack

This application uses:

- Next.js (with the app folder)
- TailwindCSS (styling framework)
- Vitest (unit testing)
- Playwright (e2e testing)
- RadixUI (UI headless library)
- CVA (UI custom variants for components)
- T3 Env (env variables)
