# Blue Rider Design System

A modern React-based design system with comprehensive UI components, design tokens, and theming support.

## Project Structure

```
blue-rider-ds/
├── src/
│   ├── components/         # React UI components
│   │   ├── Button/         # Button component with variants
│   │   ├── CaseStudyCard/  # Case study card component
│   │   ├── GrainOverlay/   # Grain texture overlay
│   │   ├── Icon/           # Icon component
│   │   ├── Label/          # Label component
│   │   ├── Typography/     # Typography utilities
│   │   └── index.ts        # Component exports
│   ├── config/             # Configuration files
│   │   └── firebase.js     # Firebase configuration
│   └── tokens/             # Design tokens
│       ├── design-system.tokens.json  # Core design tokens
│       ├── Mode 1.tokens.json         # Additional token modes
│       └── semantics/                  # Semantic theme tokens
│           ├── Dark.tokens.json       # Dark theme
│           └── Light.tokens.json      # Light theme
├── docs/                   # Documentation and previews
│   ├── index.html          # Main documentation
│   ├── preview.html        # Component preview
│   ├── grain-preview.html  # Grain overlay preview
│   └── typography-preview.html  # Typography preview
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

## Components

### Button

A versatile button component with multiple variants and states.

```tsx
import { Button } from './src/components';

<Button variant="primary">Click me</Button>
<Button variant="secondary" iconLeft={<Icon name="arrow" />}>With Icon</Button>
<Button variant="flat" isLoading>Loading</Button>
```

### Available Components

- **Button** - Primary, secondary, and flat button variants
- **Icon** - SVG icon component
- **Typography** - Type scale utilities
- **Label** - Label component with size variants
- **CaseStudyCard** - Card component for case studies
- **GrainOverlay** - Texture overlay effect

## Design Tokens

Design tokens are exported from Figma and organized in the `src/tokens/` directory:

- `design-system.tokens.json` - Core primitives (colors, spacing, typography)
- `semantics/Light.tokens.json` - Light theme semantic tokens
- `semantics/Dark.tokens.json` - Dark theme semantic tokens

## Development

Open the HTML files in `docs/` to preview components:

```bash
open docs/index.html
```

## License

Private - All rights reserved.
