/**
 * API Service Utilities
 * 
 * EmailJS integration for sending emails from contact and staff request forms.
 * 
 * To set up EmailJS:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Add an email service and create email templates
 * 3. Add your keys to .env file
 * 
 * See README.md for detailed setup instructions.
 */

import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_STAFF_REQUEST_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_STAFF_REQUEST_TEMPLATE_ID || '';

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/**
 * Submit contact form data via EmailJS
 * @param {Object} formData - Contact form data { name, email, subject, message }
 * @returns {Promise<Object>} Response from EmailJS
 */
export const submitContactForm = async (formData) => {
  try {
    // Validate EmailJS configuration
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      throw new Error('EmailJS is not configured. Please add your EmailJS credentials to .env file.');
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'General Enquiry',
      message: formData.message,
      to_email: 'tescaregroup@tescaregroup.com.au', // Recipient email
      reply_to: formData.email,
      email_subject: `New Contact Form: ${formData.subject || 'General Enquiry'} - from ${formData.name}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return { success: true, message: 'Message sent successfully!', response };
    } else {
      throw new Error('Failed to send email via EmailJS');
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

/**
 * Submit staff request form data via EmailJS
 * @param {Object} formData - Staff request form data
 * @param {File|null} file - Optional attached file (Note: EmailJS free tier doesn't support file attachments)
 * @returns {Promise<Object>} Response from EmailJS
 */
export const submitStaffRequest = async (formData, file = null) => {
  try {
    // Validate EmailJS configuration
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_STAFF_REQUEST_TEMPLATE_ID) {
      throw new Error('EmailJS is not configured. Please add your EmailJS credentials to .env file.');
    }

    const templateParams = {
      facility_name: formData.facilityName,
      contact_person: formData.contactPerson,
      phone: formData.phone,
      email: formData.email,
      staff_type: formData.staffType,
      number_of_staff: formData.numberOfStaff,
      shift_start_date: formData.shiftStartDate,
      shift_start_time: formData.shiftStartTime,
      shift_end_date: formData.shiftEndDate,
      shift_end_time: formData.shiftEndTime,
      additional_notes: formData.additionalNotes || 'None',
      file_attached: file ? `Yes - ${file.name} (${(file.size / 1024).toFixed(2)} KB)` : 'No',
      to_email: 'tescaregroup@tescaregroup.com.au', // Recipient email
      reply_to: formData.email,
      subject: `New Staff Request from ${formData.facilityName}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_STAFF_REQUEST_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      // Note: EmailJS free tier doesn't support file attachments directly
      // File information is included in the email template
      return { success: true, message: 'Staff request submitted successfully!', response };
    } else {
      throw new Error('Failed to send staff request via EmailJS');
    }
  } catch (error) {
    console.error('Error submitting staff request:', error);
    throw error;
  }
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
  const cleaned = phone.replace(/[\s\-()]/g, '');
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
  const cleaned = phone.replace(/[\s\-()]/g, '');
  if (cleaned.startsWith('+61')) {
    return cleaned.replace(/(\+61)(\d{1})(\d{4})(\d{4})/, '+61 $2 $3 $4');
  }
  if (cleaned.startsWith('0')) {
    return cleaned.replace(/(0)(\d{1})(\d{4})(\d{4})/, '0$2 $3 $4');
  }
  return phone;
};

