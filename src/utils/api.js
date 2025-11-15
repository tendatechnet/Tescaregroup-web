/**
 * API Service Utilities
 * 
 * Ready for integration with:
 * - Google Sheets API
 * - Email services (SendGrid, Mailgun, etc.)
 * - Backend APIs
 * - Webhooks
 * 
 * To integrate, simply update the API endpoints and add your keys to .env
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
const GOOGLE_SHEETS_WEBHOOK = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK || '';
const CONTACT_EMAIL_API = import.meta.env.VITE_CONTACT_EMAIL_API || '';
const STAFF_REQUEST_API = import.meta.env.VITE_STAFF_REQUEST_API || '';

/**
 * Submit contact form data
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} Response from API
 */
export const submitContactForm = async (formData) => {
  try {
    // Option 1: Google Sheets Webhook
    if (GOOGLE_SHEETS_WEBHOOK) {
      const response = await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          timestamp: new Date().toISOString(),
          ...formData,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to submit contact form');
      return await response.json();
    }

    // Option 2: Custom API endpoint
    if (CONTACT_EMAIL_API) {
      const response = await fetch(CONTACT_EMAIL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Failed to submit contact form');
      return await response.json();
    }

    // Option 3: Generic API endpoint
    if (API_BASE_URL) {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Failed to submit contact form');
      return await response.json();
    }

    // Fallback: Log to console (for development)
    console.log('Contact form submission (no API configured):', formData);
    return { success: true, message: 'Form submitted (development mode)' };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

/**
 * Submit staff request form data
 * @param {Object} formData - Staff request form data
 * @param {File|null} file - Optional attached file
 * @returns {Promise<Object>} Response from API
 */
export const submitStaffRequest = async (formData, file = null) => {
  try {
    // Prepare form data
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
      fileAttached: !!file,
      fileName: file?.name || null,
    };

    // Option 1: Google Sheets Webhook (with file handling)
    if (GOOGLE_SHEETS_WEBHOOK) {
      // For Google Sheets, we'll send file as base64 if small enough
      let fileData = null;
      if (file && file.size < 5 * 1024 * 1024) { // 5MB limit
        fileData = await fileToBase64(file);
      }

      const response = await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'staff_request',
          ...submissionData,
          fileData,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to submit staff request');
      return await response.json();
    }

    // Option 2: FormData for file uploads
    if (STAFF_REQUEST_API) {
      const formDataToSend = new FormData();
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '') {
          formDataToSend.append(key, formData[key]);
        }
      });
      
      // Add file if present
      if (file) {
        formDataToSend.append('file', file);
      }

      const response = await fetch(STAFF_REQUEST_API, {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (!response.ok) throw new Error('Failed to submit staff request');
      return await response.json();
    }

    // Option 3: Generic API endpoint
    if (API_BASE_URL) {
      const formDataToSend = new FormData();
      
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '') {
          formDataToSend.append(key, formData[key]);
        }
      });
      
      if (file) {
        formDataToSend.append('file', file);
      }

      const response = await fetch(`${API_BASE_URL}/api/staff-request`, {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (!response.ok) throw new Error('Failed to submit staff request');
      return await response.json();
    }

    // Fallback: Log to console (for development)
    console.log('Staff request submission (no API configured):', submissionData);
    return { success: true, message: 'Request submitted (development mode)' };
  } catch (error) {
    console.error('Error submitting staff request:', error);
    throw error;
  }
};

/**
 * Convert file to base64 string
 * @param {File} file - File to convert
 * @returns {Promise<string>} Base64 string
 */
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Australian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} Is valid phone
 */
export const validatePhone = (phone) => {
  // Remove spaces, dashes, and parentheses
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // Check for Australian phone format (+61 or 0 followed by 9 digits)
  const phoneRegex = /^(\+61|0)[2-9]\d{8}$/;
  return phoneRegex.test(cleaned);
};

/**
 * Format phone number for display
 * @param {string} phone - Phone number to format
 * @returns {string} Formatted phone number
 */
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  if (cleaned.startsWith('+61')) {
    return cleaned.replace(/(\+61)(\d{1})(\d{4})(\d{4})/, '+61 $2 $3 $4');
  }
  if (cleaned.startsWith('0')) {
    return cleaned.replace(/(0)(\d{1})(\d{4})(\d{4})/, '0$2 $3 $4');
  }
  return phone;
};

