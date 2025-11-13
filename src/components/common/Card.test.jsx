import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Test</Card>);
    const card = screen.getByText('Test').parentElement;
    expect(card.className).toContain('custom-class');
  });

  it('applies hover styles by default', () => {
    render(<Card>Test</Card>);
    const card = screen.getByText('Test').parentElement;
    expect(card.className).toContain('hover:shadow-xl');
  });

  it('does not apply hover styles when hover is false', () => {
    render(<Card hover={false}>Test</Card>);
    const card = screen.getByText('Test').parentElement;
    expect(card.className).not.toContain('hover:shadow-xl');
  });
});

