// Label Component CSS
import './Label.css';

// Label variant types
export type LabelVariant = 'information' | 'success' | 'error' | 'warning' | 'neutral';
export type LabelSize = 'sm' | 'md' | 'lg';

// Export label configuration for programmatic use
export const labelConfig = {
  variants: ['information', 'success', 'error', 'warning', 'neutral'] as const,
  sizes: ['sm', 'md', 'lg'] as const,
  
  // CSS class mappings
  classes: {
    base: 'br-label',
    variants: {
      information: 'br-label--information',
      success: 'br-label--success',
      error: 'br-label--error',
      warning: 'br-label--warning',
      neutral: 'br-label--neutral',
    },
    sizes: {
      sm: 'br-label--sm',
      md: '', // default size, no modifier needed
      lg: 'br-label--lg',
    },
  },
  
  // Semantic color mappings
  colors: {
    information: {
      background: 'var(--br-color-information-100)',
      text: 'var(--br-color-information-700)',
      icon: 'var(--br-color-information-default)',
    },
    success: {
      background: 'var(--br-color-success-100)',
      text: 'var(--br-color-success-700)',
      icon: 'var(--br-color-success-default)',
    },
    error: {
      background: 'var(--br-color-error-100)',
      text: 'var(--br-color-error-700)',
      icon: 'var(--br-color-error-default)',
    },
    warning: {
      background: 'var(--br-color-warning-100)',
      text: 'var(--br-color-warning-700)',
      icon: 'var(--br-color-warning-default)',
    },
    neutral: {
      background: 'var(--br-color-neutrals-100)',
      text: 'var(--br-color-neutrals-700)',
      icon: 'var(--br-color-neutrals-default)',
    },
  },
} as const;

// Helper function to generate label class names
export function getLabelClassName(
  variant: LabelVariant = 'neutral',
  size: LabelSize = 'md'
): string {
  const classes = [labelConfig.classes.base, labelConfig.classes.variants[variant]];
  
  if (size !== 'md') {
    classes.push(labelConfig.classes.sizes[size]);
  }
  
  return classes.join(' ');
}


