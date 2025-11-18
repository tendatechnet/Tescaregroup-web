import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_STAFF_REQUEST_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_STAFF_REQUEST_TEMPLATE_ID || '';
const EMAILJS_JOB_APPLICATION_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_JOB_APPLICATION_TEMPLATE_ID || '';

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/**
 * Submit contact form data via EmailJS
 * @param {Object} formData - Contact form data { name, email, message }
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
      message: formData.message,
      to_email: 'tescaregroup@tescaregroup.com.au', // Recipient email
      reply_to: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
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
 * Submit job application form data via EmailJS
 * @param {Object} formData - Job application form data
 * @param {File|null} resume - Resume file
 * @param {File|null} coverLetter - Cover letter file
 * @param {File|null} certificationsFile - Certifications file
 * @returns {Promise<Object>} Response from EmailJS
 */
export const submitJobApplication = async (formData, resume = null, coverLetter = null, certificationsFile = null) => {
  try {
    // Validate EmailJS configuration
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_JOB_APPLICATION_TEMPLATE_ID) {
      throw new Error('EmailJS is not configured. Please add your EmailJS credentials to .env file.');
    }

    // Format employment history
    const currentEmployment = formData.currentEmployer 
      ? `Current/Most Recent:\nEmployer: ${formData.currentEmployer}\nPosition: ${formData.currentPosition || 'N/A'}\nStart Date: ${formData.employmentStartDate || 'N/A'}\nEnd Date: ${formData.employmentEndDate || 'Current'}\n`
      : 'None provided';

    const previousEmployment = formData.previousEmployer
      ? `Previous:\nEmployer: ${formData.previousEmployer}\nPosition: ${formData.previousPosition || 'N/A'}\nStart Date: ${formData.previousStartDate || 'N/A'}\nEnd Date: ${formData.previousEndDate || 'N/A'}\n`
      : 'None provided';

    // Format references
    const reference1 = formData.ref1Name
      ? `Reference 1:\nName: ${formData.ref1Name}\nPosition: ${formData.ref1Position || 'N/A'}\nPhone: ${formData.ref1Phone || 'N/A'}\nEmail: ${formData.ref1Email || 'N/A'}\n`
      : 'Not provided';

    const reference2 = formData.ref2Name
      ? `Reference 2:\nName: ${formData.ref2Name}\nPosition: ${formData.ref2Position || 'N/A'}\nPhone: ${formData.ref2Phone || 'N/A'}\nEmail: ${formData.ref2Email || 'N/A'}\n`
      : 'Not provided';

    // Format file information
    const filesInfo = [
      resume ? `Resume: ${resume.name} (${(resume.size / 1024).toFixed(2)} KB)` : null,
      coverLetter ? `Cover Letter: ${coverLetter.name} (${(coverLetter.size / 1024).toFixed(2)} KB)` : null,
      certificationsFile ? `Certifications: ${certificationsFile.name} (${(certificationsFile.size / 1024).toFixed(2)} KB)` : null,
    ].filter(Boolean).join('\n') || 'No files attached';

    const templateParams = {
      // Personal Information
      first_name: formData.firstName,
      last_name: formData.lastName,
      full_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      address: formData.address || 'Not provided',
      city: formData.city || 'Not provided',
      state: formData.state || 'Not provided',
      postcode: formData.postcode || 'Not provided',
      full_address: formData.address 
        ? `${formData.address}, ${formData.city || ''}, ${formData.state || ''} ${formData.postcode || ''}`.trim()
        : 'Not provided',
      
      // Position Information
      position_type: formData.positionType || 'Not specified',
      preferred_start_date: formData.preferredStartDate || 'Not specified',
      availability: formData.availability || 'Not specified',
      
      // Employment History
      current_employment: currentEmployment,
      previous_employment: previousEmployment,
      responsibilities: formData.responsibilities || 'None provided',
      
      // Education
      qualification: formData.qualification || 'Not provided',
      institution: formData.institution || 'Not provided',
      graduation_year: formData.graduationYear || 'Not provided',
      additional_qualifications: formData.additionalQualifications || 'None',
      
      // Certifications & Licenses
      certifications: formData.certifications || 'None',
      license_number: formData.licenseNumber || 'Not provided',
      expiry_date: formData.expiryDate || 'Not provided',
      
      // References
      reference_1: reference1,
      reference_2: reference2,
      
      // Files
      files_info: filesInfo,
      resume_attached: resume ? 'Yes' : 'No',
      cover_letter_attached: coverLetter ? 'Yes' : 'No',
      certifications_attached: certificationsFile ? 'Yes' : 'No',
      
      // Email settings
      to_email: 'tescaregroup@tescaregroup.com.au',
      reply_to: formData.email,
      subject: `New Job Application from ${formData.firstName} ${formData.lastName} - ${formData.positionType || 'Position Not Specified'}`,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_JOB_APPLICATION_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      // Note: EmailJS free tier doesn't support file attachments directly
      // File information is included in the email template
      return { success: true, message: 'Job application submitted successfully!', response };
    } else {
      throw new Error('Failed to send job application via EmailJS');
    }
  } catch (error) {
    console.error('Error submitting job application:', error);
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

