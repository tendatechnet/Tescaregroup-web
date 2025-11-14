import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { RequestStaffForm } from './RequestStaffForm';
import * as api from '../../utils/api';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

// Mock the API module
vi.mock('../../utils/api', () => ({
  submitStaffRequest: vi.fn(),
  validateEmail: vi.fn((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)),
  validatePhone: vi.fn((phone) => {
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');
    return /^(\+61|0)[2-9]\d{8}$/.test(cleaned);
  }),
  formatPhone: vi.fn((phone) => phone),
}));

describe('RequestStaffForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all form sections', () => {
    renderWithRouter(<RequestStaffForm />);
    
    expect(screen.getByText(/facility information/i)).toBeInTheDocument();
    expect(screen.getByText(/contact details/i)).toBeInTheDocument();
    expect(screen.getByText(/staffing requirements/i)).toBeInTheDocument();
    expect(screen.getByText(/additional information/i)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    renderWithRouter(<RequestStaffForm />);
    
    const submitButton = screen.getByRole('button', { name: /submit request/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/facility name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/contact person is required/i)).toBeInTheDocument();
      expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/staff type is required/i)).toBeInTheDocument();
    });
  });

  it('validates phone number format', async () => {
    const user = userEvent.setup();
    renderWithRouter(<RequestStaffForm />);
    
    const phoneInput = screen.getByLabelText(/phone number/i);
    await user.type(phoneInput, '123');
    
    const submitButton = screen.getByRole('button', { name: /submit request/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/valid australian phone number/i)).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    const user = userEvent.setup();
    renderWithRouter(<RequestStaffForm />);
    
    const emailInput = screen.getByLabelText(/email address/i);
    await user.type(emailInput, 'invalid-email');
    
    const submitButton = screen.getByRole('button', { name: /submit request/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/valid email address/i)).toBeInTheDocument();
    });
  });

  it('validates date cannot be in the past', async () => {
    const user = userEvent.setup();
    renderWithRouter(<RequestStaffForm />);
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const pastDate = yesterday.toISOString().split('T')[0];
    
    const startDateInput = screen.getByLabelText(/shift start date/i);
    await user.type(startDateInput, pastDate);
    
    const submitButton = screen.getByRole('button', { name: /submit request/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/cannot be in the past/i)).toBeInTheDocument();
    });
  });

  it('validates end date is after start date', async () => {
    const user = userEvent.setup();
    renderWithRouter(<RequestStaffForm />);
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    
    const startDateInput = screen.getByLabelText(/shift start date/i);
    const endDateInput = screen.getByLabelText(/shift end date/i);
    
    await user.type(startDateInput, dayAfter.toISOString().split('T')[0]);
    await user.type(endDateInput, tomorrow.toISOString().split('T')[0]);
    
    const submitButton = screen.getByRole('button', { name: /submit request/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/end date must be after start date/i)).toBeInTheDocument();
    });
  });

  it('validates file size limit', async () => {
    const user = userEvent.setup();
    renderWithRouter(<RequestStaffForm />);
    
    // Create a mock file larger than 5MB
    const largeFile = new File(['x'.repeat(6 * 1024 * 1024)], 'large-file.pdf', { type: 'application/pdf' });
    
    const fileInput = screen.getByLabelText(/attach file/i);
    await user.upload(fileInput, largeFile);
    
    await waitFor(() => {
      expect(screen.getByText(/file size must be less than 5mb/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    vi.mocked(api.submitStaffRequest).mockResolvedValue({ success: true });
    
    renderWithRouter(<RequestStaffForm />);
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    
    await user.type(screen.getByLabelText(/facility name/i), 'Test Facility');
    await user.type(screen.getByLabelText(/contact person/i), 'John Doe');
    await user.type(screen.getByLabelText(/phone number/i), '+61 2 1234 5678');
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
    await user.selectOptions(screen.getByLabelText(/staff type/i), 'Registered Nurse');
    await user.type(screen.getByLabelText(/shift start date/i), tomorrow.toISOString().split('T')[0]);
    await user.type(screen.getByLabelText(/shift start time/i), '09:00');
    await user.type(screen.getByLabelText(/shift end date/i), dayAfter.toISOString().split('T')[0]);
    await user.type(screen.getByLabelText(/shift end time/i), '17:00');
    
    const submitButton = screen.getByRole('button', { name: /submit request/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(api.submitStaffRequest).toHaveBeenCalled();
    });
  });

  it('shows success message after submission', async () => {
    const user = userEvent.setup();
    vi.mocked(api.submitStaffRequest).mockResolvedValue({ success: true });
    
    renderWithRouter(<RequestStaffForm />);
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    
    await user.type(screen.getByLabelText(/facility name/i), 'Test Facility');
    await user.type(screen.getByLabelText(/contact person/i), 'John Doe');
    await user.type(screen.getByLabelText(/phone number/i), '+61 2 1234 5678');
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com');
    await user.selectOptions(screen.getByLabelText(/staff type/i), 'Registered Nurse');
    await user.type(screen.getByLabelText(/shift start date/i), tomorrow.toISOString().split('T')[0]);
    await user.type(screen.getByLabelText(/shift start time/i), '09:00');
    await user.type(screen.getByLabelText(/shift end date/i), dayAfter.toISOString().split('T')[0]);
    await user.type(screen.getByLabelText(/shift end time/i), '17:00');
    
    const submitButton = screen.getByRole('button', { name: /submit request/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/request received/i)).toBeInTheDocument();
    });
  });
});

