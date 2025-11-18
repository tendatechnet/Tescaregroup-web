import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Footer';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Footer', () => {
  it('renders company name', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('TES Care Group')).toBeInTheDocument();
  });

  it('renders all quick links', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /request staff/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders contact information', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/\+61 430 186 328/i)).toBeInTheDocument();
    expect(screen.getByText(/info@tescaregroup.com.au/i)).toBeInTheDocument();
    expect(screen.getByText(/NSW, VIC, QLD, WA, SA/i)).toBeInTheDocument();
  });

  it('renders Request Staff button', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('link', { name: /request staff/i })).toBeInTheDocument();
  });

  it('displays current year in copyright', () => {
    renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });
});

