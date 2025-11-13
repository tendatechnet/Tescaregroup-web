import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies primary variant styles by default', () => {
    render(<Button>Test</Button>);
    const button = screen.getByText('Test');
    expect(button.className).toContain('bg-navy');
  });

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByText('Test');
    expect(button.className).toContain('bg-gold');
  });

  it('renders as link when to prop is provided', () => {
    render(<Button to="/test">Link</Button>);
    const link = screen.getByText('Link');
    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toBe('/test');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });
});

