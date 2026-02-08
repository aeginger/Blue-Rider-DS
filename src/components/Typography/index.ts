// Typography CSS exports
import './Typography.css';

// Export type scale values for programmatic use
export const typeScale = {
  fontFamily: {
    display: "'Clash Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
    primary: "'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'IBM Plex Mono', 'Menlo', 'Monaco', 'Consolas', monospace",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  fontSize: {
    display: 56,
    h1: 40,
    h2: 32,
    h3: 24,
    h4: 20,
    paragraphLg: 20,
    paragraphMd: 16,
    paragraphSm: 14,
    caption: 12,
  },
  lineHeight: {
    display: 96,
    h1: 48,
    h2: 40,
    h3: 36,
    h4: 32,
    paragraphLg: 32,
    paragraphMd: 24,
    paragraphSm: 22,
    caption: 16,
  },
} as const;

export type FontFamily = keyof typeof typeScale.fontFamily;
export type FontWeight = keyof typeof typeScale.fontWeight;
export type FontSize = keyof typeof typeScale.fontSize;
export type LineHeight = keyof typeof typeScale.lineHeight;
