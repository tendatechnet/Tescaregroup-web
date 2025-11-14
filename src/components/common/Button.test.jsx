import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from './Button';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Button', () => {
  it('renders button with children', () => {
    renderWithRouter(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies primary variant styles by default', () => {
    renderWithRouter(<Button>Test</Button>);
    const button = screen.getByText('Test');
    expect(button.className).toContain('bg-royal-blue');
  });

  it('applies secondary variant styles', () => {
    renderWithRouter(<Button variant="secondary">Test</Button>);
    const button = screen.getByText('Test');
    expect(button.className).toContain('bg-warm-beige');
  });

  it('renders as link when to prop is provided', () => {
    renderWithRouter(<Button to="/test">Link</Button>);
    const link = screen.getByText('Link');
    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toBe('/test');
  });

  it('is disabled when disabled prop is true', () => {
    renderWithRouter(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });
});

