# Blue Rider Design System — AI Agent Rules

Rules for any AI agent (or human) writing code in this repo. These mirror the
Blue Rider Figma library (`gC6FXvx1JSBuav9ywQIAej`).

## Non-negotiable rules

1. **Never hardcode hex colors, px spacing, or px radius.** Always use the
   generated CSS variables from `src/tokens/dist/tokens.css`.
2. **Components consume SEMANTIC tokens only** (`--br-color-bg-*`,
   `--br-color-text-*`, `--br-color-stroke-*`, `--br-color-icon-*`).
   Primitives (`--br-color-primary-500`, `--br-color-neutral-800`) are for the
   token layer only.
3. **Never edit `src/tokens/dist/`** — it is generated. Edit
   `src/tokens/source/*.tokens.json` and run `npm run build:tokens`.
4. **Dark is the default theme.** Never write per-theme component CSS; the
   semantic variables re-map under `[data-theme="light"]` automatically.
5. **Text/icons on the teal primary action are DARK** (`--br-color-text-on-action-primary`
   resolves to near-black), not white.
6. **No divider lines.** Create hierarchy with spacing (`--br-space-*`), not
   borders between sections.
7. **Snap all spacing to the scale**: 1, 4, 8, 12, 16, 24, 32, 64, 256
   (`--br-space-xxxs` … `--br-space-xxxl`). Default internal padding is
   `--br-space-med` (16px).
8. **Variant and size prop names match Figma variant names exactly**
   (e.g. `variant="primary" | "secondary" | "flat"`).
9. **Button icons are optional and independent** (`iconLeft` / `iconRight` —
   none, either, or both). Leading icon = the action's subject (plus, check,
   x, settings); trailing icon = direction (arrow-right, chevron-right).
   Default is no icons. Icons inherit color and size automatically — never
   set them manually. Vocabulary: `src/components/Icon/component.json`.
   Icon-only buttons (no label) require `aria-label`.

## Token naming grammar

```
--br-{category}-{element}-{role}-{prominence?}-{state?}
```

Examples: `--br-color-bg-action-primary-hover`, `--br-color-text-caption`,
`--br-color-stroke-focus`, `--br-radius-med`, `--br-space-lg`,
`--br-font-size-heading-2`.

Categories: `color` (with elements `text`, `bg`, `stroke`, `icon`, `shadow`),
`space`, `radius`, `border-width`, `breakpoint`, `elevation`, `font`,
`duration`, `easing`.

## Typography

- Body/UI: Instrument Sans (`--br-font-family-sans`)
- Display (56px only): Clash Grotesk (`--br-font-family-display`)
- Code: IBM Plex Mono (`--br-font-family-mono`)
- Sizes: caption 12 / sm 14 / med 16 / lg 20 / h3 24 / h2 32 / h1 40 / display 56

## Component architecture

- Atoms → molecules → organisms. Molecules import atoms; organisms import
  molecules. Never rebuild an existing component.
- Each component: `Component.tsx` + `Component.css` + `index.ts`, exported
  from `src/components/index.ts`.
- Props typed with JSDoc; use `forwardRef`; support `focus-visible`,
  `prefers-reduced-motion`, and `forced-colors`. `Button/` is the reference
  implementation.

## Figma ↔ code sync

- Figma owns token VALUES; code owns structure. To update values, re-export
  variables from Figma into `src/tokens/figma-exports/`, update
  `src/tokens/source/`, and rebuild. Never change a value only in code.
