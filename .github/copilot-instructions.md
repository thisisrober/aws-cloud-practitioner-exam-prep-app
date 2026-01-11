**Repository Onboarding — Copilot Instructions**

Summary:
- **What this app does:** A small single-page React app (Vite) that provides an AWS Cloud Practitioner practice exam. Questions live under `src/data/questions.js` and the UI is under `src/components`.

Tech stack:
- Frontend: React 19 (functional components + hooks)
- Bundler: Vite
- Styling: Tailwind CSS + PostCSS
- Icons: lucide / lucide-react
- Linting: ESLint
- Package manager: npm (uses `package.json` scripts)

Quick project map:
- `index.html` — app entry
- `src/main.jsx` — React boot
- `src/App.jsx` — top-level app
- `src/components/*` — UI components (Header, Menu, Sidebar, QuestionPanel, Result)
- `src/data/questions.js` — question dataset
- `src/utils/*` — helper utilities
- `public/` — static assets
- Config: `vite.config.js`, `tailwind.config.js`, `postcss.config.cjs`, `eslint.config.js`

Key npm scripts:
- `npm run dev` — run local dev server (Vite)
- `npm run build` — production build
- `npm run preview` — preview build locally
- `npm run lint` — run ESLint

Agent operating guidelines:
- Environment: Use Node 18+ (LTS) on the host. If Node is not present, do not try exotic system package manager commands; ask first.
- Install: prefer `npm ci` for CI-like reproducible installs. If `package-lock.json` is missing or you need to add deps, use `npm install`.
- Start: never run ad-hoc or non-existent npm scripts. If a CI/previous dev used `start:mcp` (not present), use `npm run dev` instead.
- Platform: repository lives on Windows in this workspace. Avoid assuming Unix-only shells. Use npm scripts rather than raw bash where possible.

Coding guidelines & conventions:
- Language: modern ES modules (`type: module`), React JSX. Use `import`/`export`.
- Components: functional components with hooks. Keep components small and focused.
- Styling: Tailwind utility classes in `className`. Prefer descriptive, accessible markup (buttons, ARIA where needed).
- Linting: run `npm run lint` and fix issues before creating PRs. The repo uses ESLint; follow its rules.
- Formatting: there is no dedicated Prettier config — keep consistent with existing files (semicolons present). If unsure, run `npx prettier --check .` after asking to add Prettier.
- Commits/PRs: small, single-purpose changes; include testing steps and screenshots for UI changes.

Developer ergonomics & common pitfalls:
- JSON imports: Vite supports importing JSON. It's acceptable to `import pkg from '../../package.json'` from components for non-sensitive info like `version`.
- Avoid running arbitrary scripts; use the scripts listed in `package.json`.
- Watch for path issues on Windows when workspace path contains special characters (e.g., +). If builds fail with strange path errors, try moving workspace to a simpler path.
- If dependency install fails, prefer deleting `node_modules` and running `npm ci`.

Where to look for tests or workarounds:
- There is no test harness present. Use the app UI and `npm run build` + `npm run preview` to validate changes.
- Search for `TODO`, `FIXME`, `HACK` if you need to find fragile areas.

How to make a small UI change (example flow):
1. Install deps: `npm ci`.
2. Start dev server: `npm run dev` and open the URL Vite reports.
3. Make code edits under `src/components` and verify hot-reload.
4. Run `npm run lint` and address reported issues.
5. Build to confirm production output: `npm run build` then `npm run preview`.

When stuck or before running risky commands:
- If a command isn't in `package.json`, ask first.
- When encountering environment errors, report the Node version, npm version, exact command run, and the terminal output.

Contacts / next steps for agent use:
- Primary files to inspect first: `src/main.jsx`, `src/App.jsx`, `src/components/Header.jsx`, `src/data/questions.js`.
- If adding dependencies, update `package.json` and run `npm install` locally — verify `npm run dev` still works.

This file is intentionally concise; if you need more context or I should expand a section (e.g., lint rules, CI steps), ask and I will update.
