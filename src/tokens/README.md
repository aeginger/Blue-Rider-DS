# Blue Rider DS — Token Pipeline

```
source/                      ← EDIT HERE (DTCG format, W3C design tokens)
  primitives.tokens.json     raw values: color ramps, space, radius, type…
  semantic.dark.tokens.json  intent layer, dark mode (default theme)
  semantic.light.tokens.json intent layer, light mode
build.mjs                    zero-dependency compiler
dist/                        ← GENERATED, do not edit
  tokens.css                 CSS custom properties (import once, app-wide)
  tokens.js / tokens.d.ts    JS/TS token maps + breakpoints
semantics/, *.tokens.json    raw Figma variable exports (input reference)
```

## Usage

```bash
npm run build:tokens
```

```css
@import './src/tokens/dist/tokens.css';
.my-card {
  background: var(--br-color-bg-secondary);
  padding: var(--br-space-med);
  border-radius: var(--br-radius-med);
}
```

Dark is the default (`:root`). Light mode: `<html data-theme="light">`.
Components never branch on theme — semantic variables re-map automatically.

## Three tiers

1. **Primitives** (`--br-color-primary-500`) — raw values. Only the semantic
   layer may reference them.
2. **Semantic** (`--br-color-bg-action-primary`) — intent, theme-aware.
   Components consume these.
3. **Component tokens** — add only when a component needs to diverge; alias
   semantic tokens.

## Updating from Figma

1. In Figma, export variables (Semantics collection) and replace the files in
   `semantics/`.
2. Reflect changes in `source/semantic.*.tokens.json` (names kebab-cased 1:1:
   `Background/Action-Primary` → `bg.action-primary`).
3. `npm run build:tokens` — the build fails if light/dark token sets diverge.
4. Commit source + dist together.

Figma owns values; code owns structure. Never change a value only in code.
