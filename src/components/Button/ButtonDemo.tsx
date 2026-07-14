import React, { useState } from 'react';
import { Button } from './Button';
import { Icon } from '../Icon';
import './ButtonDemo.css';

/**
 * Button Demo Component
 * Showcases all button variants, sizes, and states from the Blue Rider Design System
 */
export const ButtonDemo: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const variants = ['primary', 'destructive', 'secondary', 'outline', 'flat'] as const;
  const sizes = ['lg', 'sm'] as const;
  const states = ['Default', 'Hover', 'Pressed', 'Focus', 'Disabled'] as const;

  return (
    <div className="button-demo" data-theme={theme}>
      <header className="button-demo__header">
        <h1>Blue Rider Design System</h1>
        <h2>Button Components</h2>
        <button onClick={toggleTheme} className="theme-toggle">
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
        </button>
      </header>

      {/* Text Buttons with Icons */}
      <section className="button-demo__section">
        <h3>Text Buttons</h3>
        <p className="button-demo__description">
          Buttons with label text and optional left/right icons — LG (48px) and SM (32px)
        </p>

        {sizes.map((size) => (
          <table className="button-demo__table" key={size}>
            <thead>
              <tr>
                <th>{size.toUpperCase()}</th>
                {states.map((state) => (
                  <th key={state}>{state}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {variants.map((variant) => (
                <tr key={variant}>
                  <td className="button-demo__variant-label">{variant}</td>
                  <td>
                    <Button
                      variant={variant}
                      size={size}
                      iconLeft={<Icon name="settings" />}
                      iconRight={<Icon name="chevron-right" />}
                    >
                      Button
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant={variant}
                      size={size}
                      iconLeft={<Icon name="settings" />}
                      iconRight={<Icon name="chevron-right" />}
                      className="force-hover"
                    >
                      Button
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant={variant}
                      size={size}
                      iconLeft={<Icon name="settings" />}
                      iconRight={<Icon name="chevron-right" />}
                      className="force-active"
                    >
                      Button
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant={variant}
                      size={size}
                      iconLeft={<Icon name="settings" />}
                      iconRight={<Icon name="chevron-right" />}
                      className="force-focus"
                    >
                      Button
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant={variant}
                      size={size}
                      iconLeft={<Icon name="settings" />}
                      iconRight={<Icon name="chevron-right" />}
                      disabled
                    >
                      Button
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </section>

      {/* Icon-Only Buttons */}
      <section className="button-demo__section">
        <h3>Icon-Only Buttons</h3>
        <p className="button-demo__description">
          Compact square buttons containing only an icon (icon-only is automatic
          when no label is passed — remember aria-label)
        </p>

        <table className="button-demo__table">
          <thead>
            <tr>
              <th></th>
              {states.map((state) => (
                <th key={state}>{state}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {variants.map((variant) => (
              <tr key={variant}>
                <td className="button-demo__variant-label">{variant}</td>
                <td>
                  <Button variant={variant} iconLeft={<Icon name="settings" />} aria-label="Settings" />
                </td>
                <td>
                  <Button variant={variant} iconLeft={<Icon name="settings" />} className="force-hover" aria-label="Settings" />
                </td>
                <td>
                  <Button variant={variant} iconLeft={<Icon name="settings" />} className="force-active" aria-label="Settings" />
                </td>
                <td>
                  <Button variant={variant} iconLeft={<Icon name="settings" />} className="force-focus" aria-label="Settings" />
                </td>
                <td>
                  <Button variant={variant} iconLeft={<Icon name="settings" />} disabled aria-label="Settings" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Usage Examples */}
      <section className="button-demo__section">
        <h3>Usage Examples</h3>

        <div className="button-demo__examples">
          <div className="button-demo__example">
            <h4>Call to Action</h4>
            <Button variant="primary" iconRight={<Icon name="arrow-right" />}>
              Get Started
            </Button>
          </div>

          <div className="button-demo__example">
            <h4>Secondary Action</h4>
            <Button variant="secondary">
              Learn More
            </Button>
          </div>

          <div className="button-demo__example">
            <h4>Compact (SM)</h4>
            <Button variant="secondary" size="sm">
              Filter
            </Button>
          </div>

          <div className="button-demo__example">
            <h4>Cancel Action</h4>
            <Button variant="flat">
              Cancel
            </Button>
          </div>

          <div className="button-demo__example">
            <h4>Loading State</h4>
            <Button variant="primary" isLoading>
              Saving...
            </Button>
          </div>

          <div className="button-demo__example">
            <h4>Icon Actions</h4>
            <div style={{ display: 'flex', gap: 'var(--br-space-xs)' }}>
              <Button variant="primary" iconLeft={<Icon name="plus" />} aria-label="Add" />
              <Button variant="secondary" iconLeft={<Icon name="check" />} aria-label="Confirm" />
              <Button variant="flat" iconLeft={<Icon name="x" />} aria-label="Close" />
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="button-demo__section">
        <h3>Code Example</h3>
        <pre className="button-demo__code">
{`import { Button } from './components/Button';
import { Icon } from './components/Icon';

// Primary button with icons (LG, 48px — default size)
<Button
  variant="primary"
  iconLeft={<Icon name="settings" />}
  iconRight={<Icon name="chevron-right" />}
>
  Button
</Button>

// Small button (SM, 32px)
<Button variant="secondary" size="sm">
  Filter
</Button>

// Flat button
<Button variant="flat">
  Cancel
</Button>

// Icon-only button (automatic when no label — aria-label required)
<Button
  variant="primary"
  iconLeft={<Icon name="plus" />}
  aria-label="Add item"
/>

// Loading state
<Button variant="primary" isLoading>
  Saving...
</Button>

// Disabled state
<Button variant="primary" disabled>
  Disabled
</Button>`}
        </pre>
      </section>
    </div>
  );
};

export default ButtonDemo;
