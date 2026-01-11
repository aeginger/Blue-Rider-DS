/**
 * Blue Rider Design System - Grain Overlay
 * CSS-only utility for adding texture to backgrounds
 */

// Import styles
import './GrainOverlay.css';

// Export available class names for documentation
export const grainClasses = {
  // Base class
  base: 'br-grain',

  // Intensity variants
  subtle: 'br-grain--subtle',
  light: 'br-grain--light',
  medium: 'br-grain--medium',
  strong: 'br-grain--strong',
  heavy: 'br-grain--heavy',

  // Background type variants
  dark: 'br-grain--dark',
  lightBg: 'br-grain--light',

  // Pattern variants
  fine: 'br-grain--fine',
  coarse: 'br-grain--coarse',

  // Animation
  animated: 'br-grain--animated',

  // Page-level grain
  page: 'br-page-grain',
} as const;

export type GrainIntensity = 'subtle' | 'light' | 'medium' | 'strong' | 'heavy';
export type GrainPattern = 'default' | 'fine' | 'coarse';
export type GrainBackground = 'dark' | 'light';


