/**
 * API Service Utilities
 * 
 * Supabase integration for form submissions and file storage.
 * 
 * All form data is stored in Supabase database and files are stored in Supabase Storage.
 * 
 * To set up Supabase:
 * 1. Create a project at https://supabase.com
 * 2. Run the SQL schema from SUPABASE_MIGRATION.md
 * 3. Create storage buckets
 * 4. Add your credentials to .env file
 */

import { supabase, uploadFile } from './supabase';

/**
 * Submit contact form data to Supabase
 * @param {Object} formData - Contact form data { name, email, message }
 * @returns {Promise<Object>} Response from Supabase
 */
export const submitContactForm = async (formData) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          status: 'new',
        },
      ])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to submit contact form: ${error.message}`);
    }

    return { 
      success: true, 
      message: 'Message sent successfully!', 
      data,
      id: data.id 
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

/**
 * Submit staff request form data to Supabase
 * @param {Object} formData - Staff request form data
 * @param {File|null} file - Optional attached file
 * @returns {Promise<Object>} Response from Supabase
 */
export const submitStaffRequest = async (formData, file = null) => {
  try {
    let fileUrl = null;
    let fileName = null;

    // Upload file if provided
    if (file) {
      try {
        const uploadResult = await uploadFile(file, 'staff-request-files', 'attachments');
        fileUrl = uploadResult.url;
        fileName = uploadResult.name;
      } catch (uploadError) {
        console.error('File upload error:', uploadError);
        // Continue with submission even if file upload fails
      }
    }

    const { data, error } = await supabase
      .from('staff_requests')
      .insert([
        {
          facility_name: formData.facilityName.trim(),
          contact_person: formData.contactPerson.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          staff_type: formData.staffType,
          number_of_staff: parseInt(formData.numberOfStaff) || 1,
          shift_start_date: formData.shiftStartDate || null,
          shift_start_time: formData.shiftStartTime || null,
          shift_end_date: formData.shiftEndDate || null,
          shift_end_time: formData.shiftEndTime || null,
          additional_notes: formData.additionalNotes?.trim() || null,
          file_url: fileUrl,
          file_name: fileName,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to submit staff request: ${error.message}`);
    }

    return { 
      success: true, 
      message: 'Staff request submitted successfully!', 
      data,
      id: data.id 
    };
  } catch (error) {
    console.error('Error submitting staff request:', error);
    throw error;
  }
};

/**
 * Submit job application form data to Supabase
 * @param {Object} formData - Job application form data
 * @param {File|null} resume - Resume file
 * @param {File|null} coverLetter - Cover letter file
 * @param {File|null} certificationsFile - Certifications file
 * @returns {Promise<Object>} Response from Supabase
 */
export const submitJobApplication = async (formData, resume = null, coverLetter = null, certificationsFile = null) => {
  try {
    let resumeUrl = null;
    let resumeName = null;
    let coverLetterUrl = null;
    let coverLetterName = null;
    let certificationsFileUrl = null;
    let certificationsFileName = null;

    // Upload files if provided
    const uploadPromises = [];

    if (resume) {
      uploadPromises.push(
        uploadFile(resume, 'job-applications', 'resumes')
          .then(result => {
            resumeUrl = result.url;
            resumeName = result.name;
          })
          .catch(error => {
            console.error('Resume upload error:', error);
            // Continue even if upload fails
          })
      );
    }

    if (coverLetter) {
      uploadPromises.push(
        uploadFile(coverLetter, 'job-applications', 'cover-letters')
          .then(result => {
            coverLetterUrl = result.url;
            coverLetterName = result.name;
          })
          .catch(error => {
            console.error('Cover letter upload error:', error);
            // Continue even if upload fails
          })
      );
    }

    if (certificationsFile) {
      uploadPromises.push(
        uploadFile(certificationsFile, 'job-applications', 'certifications')
          .then(result => {
            certificationsFileUrl = result.url;
            certificationsFileName = result.name;
          })
          .catch(error => {
            console.error('Certifications upload error:', error);
            // Continue even if upload fails
          })
      );
    }

    // Wait for all uploads to complete (or fail)
    await Promise.allSettled(uploadPromises);

    // Insert application data
    const { data, error } = await supabase
      .from('job_applications')
      .insert([
        {
          first_name: formData.firstName.trim(),
          last_name: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          address: formData.address?.trim() || null,
          city: formData.city?.trim() || null,
          state: formData.state || null,
          postcode: formData.postcode?.trim() || null,
          position_type: formData.positionType,
          preferred_start_date: formData.preferredStartDate || null,
          availability: formData.availability?.trim() || null,
          current_employer: formData.currentEmployer?.trim() || null,
          current_position: formData.currentPosition?.trim() || null,
          employment_start_date: formData.employmentStartDate || null,
          employment_end_date: formData.employmentEndDate || null,
          previous_employer: formData.previousEmployer?.trim() || null,
          previous_position: formData.previousPosition?.trim() || null,
          previous_start_date: formData.previousStartDate || null,
          previous_end_date: formData.previousEndDate || null,
          responsibilities: formData.responsibilities?.trim() || null,
          qualification: formData.qualification?.trim() || null,
          institution: formData.institution?.trim() || null,
          graduation_year: formData.graduationYear?.trim() || null,
          additional_qualifications: formData.additionalQualifications?.trim() || null,
          certifications: formData.certifications?.trim() || null,
          license_number: formData.licenseNumber?.trim() || null,
          expiry_date: formData.expiryDate || null,
          ref1_name: formData.ref1Name?.trim() || null,
          ref1_position: formData.ref1Position?.trim() || null,
          ref1_phone: formData.ref1Phone?.trim() || null,
          ref1_email: formData.ref1Email?.trim() || null,
          ref2_name: formData.ref2Name?.trim() || null,
          ref2_position: formData.ref2Position?.trim() || null,
          ref2_phone: formData.ref2Phone?.trim() || null,
          ref2_email: formData.ref2Email?.trim() || null,
          resume_url: resumeUrl,
          resume_name: resumeName,
          cover_letter_url: coverLetterUrl,
          cover_letter_name: coverLetterName,
          certifications_file_url: certificationsFileUrl,
          certifications_file_name: certificationsFileName,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to submit job application: ${error.message}`);
    }

    return { 
      success: true, 
      message: 'Job application submitted successfully!', 
      data,
      id: data.id 
    };
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

