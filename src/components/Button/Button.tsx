import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'flat';
export type ButtonSize = 'default' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style variant of the button */
  variant?: ButtonVariant;
  /** Whether this is an icon-only button */
  size?: ButtonSize;
  /** Icon to display before the label */
  iconLeft?: React.ReactNode;
  /** Icon to display after the label */
  iconRight?: React.ReactNode;
  /** Whether the button is in a loading state */
  isLoading?: boolean;
  /** The content of the button */
  children?: React.ReactNode;
}

/**
 * Button component following the Blue Rider Design System
 * Supports Primary, Secondary, and Flat variants with full state management
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      iconLeft,
      iconRight,
      isLoading = false,
      disabled = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const isIconOnly = size === 'icon' || (!children && (iconLeft || iconRight));

    const buttonClasses = [
      'br-button',
      `br-button--${variant}`,
      isIconOnly ? 'br-button--icon-only' : '',
      isLoading ? 'br-button--loading' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="br-button__spinner" aria-hidden="true">
            <svg
              className="br-button__spinner-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="32"
                strokeDashoffset="12"
              />
            </svg>
          </span>
        ) : (
          <>
            {iconLeft && (
              <span className="br-button__icon br-button__icon--left" aria-hidden="true">
                {iconLeft}
              </span>
            )}
            {children && <span className="br-button__label">{children}</span>}
            {iconRight && (
              <span className="br-button__icon br-button__icon--right" aria-hidden="true">
                {iconRight}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
