import React, { useState } from 'react';
import { Button } from './Button';
import { Icon } from '../Icon';
import './ButtonDemo.css';

/**
 * Button Demo Component
 * Showcases all button variants and states from the Blue Rider Design System
 */
export const ButtonDemo: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const variants = ['primary', 'secondary', 'flat'] as const;
  const states = ['Default', 'Hover', 'Pressed', 'Focus', 'Disabled'] as const;

  return (
    <div className={`button-demo ${theme === 'light' ? 'br-theme-light' : ''}`} data-theme={theme}>
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
          Buttons with label text and optional left/right icons
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
                  <Button
                    variant={variant}
                    iconLeft={<Icon name="settings" />}
                    iconRight={<Icon name="chevron-right" />}
                  >
                    Button
                  </Button>
                </td>
                <td>
                  <Button
                    variant={variant}
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
      </section>

      {/* Icon-Only Buttons */}
      <section className="button-demo__section">
        <h3>Icon-Only Buttons</h3>
        <p className="button-demo__description">
          Compact square buttons containing only an icon
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
                  <Button variant={variant} size="icon" iconLeft={<Icon name="settings" />} aria-label="Settings" />
                </td>
                <td>
                  <Button variant={variant} size="icon" iconLeft={<Icon name="settings" />} className="force-hover" aria-label="Settings" />
                </td>
                <td>
                  <Button variant={variant} size="icon" iconLeft={<Icon name="settings" />} className="force-active" aria-label="Settings" />
                </td>
                <td>
                  <Button variant={variant} size="icon" iconLeft={<Icon name="settings" />} className="force-focus" aria-label="Settings" />
                </td>
                <td>
                  <Button variant={variant} size="icon" iconLeft={<Icon name="settings" />} disabled aria-label="Settings" />
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
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="primary" size="icon" iconLeft={<Icon name="plus" />} aria-label="Add" />
              <Button variant="secondary" size="icon" iconLeft={<Icon name="check" />} aria-label="Confirm" />
              <Button variant="flat" size="icon" iconLeft={<Icon name="x" />} aria-label="Close" />
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

// Primary button with icons
<Button 
  variant="primary"
  iconLeft={<Icon name="settings" />}
  iconRight={<Icon name="chevron-right" />}
>
  Button
</Button>

// Secondary button
<Button variant="secondary">
  Learn More
</Button>

// Flat button
<Button variant="flat">
  Cancel
</Button>

// Icon-only button
<Button 
  variant="primary" 
  size="icon"
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
