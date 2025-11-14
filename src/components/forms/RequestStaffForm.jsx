import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Upload, CheckCircle, AlertCircle, Calendar, Users, Mail } from 'lucide-react';
import { submitStaffRequest, validateEmail, validatePhone, formatPhone } from '../../utils/api';

export const RequestStaffForm = () => {
  const [formData, setFormData] = useState({
    facilityName: '',
    contactPerson: '',
    phone: '',
    email: '',
    staffType: '',
    shiftStartDate: '',
    shiftStartTime: '',
    shiftEndDate: '',
    shiftEndTime: '',
    numberOfStaff: '1',
    additionalNotes: '',
    file: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (file.size > maxSize) {
        setErrors(prev => ({ ...prev, file: 'File size must be less than 5MB' }));
        return;
      }
      
      setFormData(prev => ({ ...prev, file }));
      if (errors.file) {
        setErrors(prev => ({ ...prev, file: '' }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.facilityName.trim()) {
      newErrors.facilityName = 'Facility name is required';
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Australian phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.staffType) {
      newErrors.staffType = 'Staff type is required';
    }

    if (!formData.shiftStartDate) {
      newErrors.shiftStartDate = 'Shift start date is required';
    } else {
      const startDate = new Date(formData.shiftStartDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (startDate < today) {
        newErrors.shiftStartDate = 'Start date cannot be in the past';
      }
    }

    if (!formData.shiftStartTime) {
      newErrors.shiftStartTime = 'Shift start time is required';
    }

    if (!formData.shiftEndDate) {
      newErrors.shiftEndDate = 'Shift end date is required';
    } else if (formData.shiftStartDate && formData.shiftEndDate) {
      const startDate = new Date(formData.shiftStartDate);
      const endDate = new Date(formData.shiftEndDate);
      if (endDate < startDate) {
        newErrors.shiftEndDate = 'End date must be after start date';
      }
    }

    if (!formData.shiftEndTime) {
      newErrors.shiftEndTime = 'Shift end time is required';
    }

    if (parseInt(formData.numberOfStaff) < 1) {
      newErrors.numberOfStaff = 'Number of staff must be at least 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitStaffRequest(formData, formData.file);
      setIsSubmitted(true);
      
      // Reset form after success
      setFormData({
        facilityName: '',
        contactPerson: '',
        phone: '',
        email: '',
        staffType: '',
        shiftStartDate: '',
        shiftStartTime: '',
        shiftEndDate: '',
        shiftEndTime: '',
        numberOfStaff: '1',
        additionalNotes: '',
        file: null,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to submit request. Please try again or contact us directly at +61 XXX XXX XXX');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto text-center py-12 bg-gradient-to-br from-powder-blue/30 to-powder-blue/60">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h2 className="text-3xl font-heading font-bold text-royal-blue mb-4">
          Request Received!
        </h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          Thank you for your staffing request. Our team will contact you shortly to confirm the details and arrange suitable professionals.
        </p>
        <p className="text-gray-600 mb-8 text-sm">
          For urgent requests, please call us at: <strong className="text-royal-blue">+61 XXX XXX XXX</strong>
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="primary">
          Submit Another Request
        </Button>
      </Card>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
      {submitError && (
        <Card className="bg-red-50 border border-red-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-red-800 font-medium">{submitError}</p>
            </div>
          </div>
        </Card>
      )}

      {/* Facility Information */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-royal-blue" size={24} />
          <h3 className="text-xl font-heading font-semibold text-royal-blue">
            Facility Information
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="facilityName" className="block text-sm font-medium text-gray-700 mb-1">
              Facility Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="facilityName"
              name="facilityName"
              required
              value={formData.facilityName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
                errors.facilityName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="Your Facility Name"
            />
            {errors.facilityName && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.facilityName}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Person <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              required
              value={formData.contactPerson}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
                errors.contactPerson ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="Your Name"
            />
            {errors.contactPerson && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.contactPerson}
              </p>
            )}
          </div>
        </div>
      </Card>

      {/* Contact Details */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <Mail className="text-royal-blue" size={24} />
          <h3 className="text-xl font-heading font-semibold text-royal-blue">
            Contact Details
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
                errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="+61 XXX XXX XXX or 0X XXXX XXXX"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
                errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.email}
              </p>
            )}
          </div>
        </div>
      </Card>

      {/* Staffing Requirements */}
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="text-royal-blue" size={24} />
          <h3 className="text-xl font-heading font-semibold text-royal-blue">
            Staffing Requirements
          </h3>
        </div>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="staffType" className="block text-sm font-medium text-gray-700 mb-1">
                Staff Type Required <span className="text-red-500">*</span>
              </label>
              <select
                id="staffType"
                name="staffType"
                required
                value={formData.staffType}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
                  errors.staffType ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Staff Type</option>
                <option value="Registered Nurse">Registered Nurse (RN)</option>
                <option value="Enrolled Nurse">Enrolled Nurse (EN)</option>
                <option value="Care Assistant">Personal Care Assistant (PCA)</option>
                <option value="Support Worker">Support Worker</option>
                <option value="Other">Other (Specify in notes)</option>
              </select>
              {errors.staffType && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.staffType}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="numberOfStaff" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Staff <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="numberOfStaff"
                name="numberOfStaff"
                required
                min="1"
                max="50"
                value={formData.numberOfStaff}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
                  errors.numberOfStaff ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.numberOfStaff && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.numberOfStaff}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="shiftStartDate" className="block text-sm font-medium text-gray-700 mb-1">
                Shift Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="shiftStartDate"
                name="shiftStartDate"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.shiftStartDate}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
                  errors.shiftStartDate ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.shiftStartDate && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.shiftStartDate}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="shiftStartTime" className="block text-sm font-medium text-gray-700 mb-1">
                Shift Start Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="shiftStartTime"
                name="shiftStartTime"
                required
                value={formData.shiftStartTime}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
                  errors.shiftStartTime ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.shiftStartTime && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.shiftStartTime}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="shiftEndDate" className="block text-sm font-medium text-gray-700 mb-1">
                Shift End Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="shiftEndDate"
                name="shiftEndDate"
                required
                min={formData.shiftStartDate || new Date().toISOString().split('T')[0]}
                value={formData.shiftEndDate}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
                  errors.shiftEndDate ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.shiftEndDate && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.shiftEndDate}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="shiftEndTime" className="block text-sm font-medium text-gray-700 mb-1">
                Shift End Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                id="shiftEndTime"
                name="shiftEndTime"
                required
                value={formData.shiftEndTime}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
                  errors.shiftEndTime ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
              />
              {errors.shiftEndTime && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.shiftEndTime}
                </p>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Additional Information */}
      <Card>
        <h3 className="text-xl font-heading font-semibold text-royal-blue mb-4">
          Additional Information
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes or Special Requirements
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              rows={4}
              value={formData.additionalNotes}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white resize-none"
              placeholder="Any specific requirements, certifications, or additional information..."
            />
          </div>
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
              Attach File (Optional)
            </label>
            <div className="relative">
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              <label
                htmlFor="file"
                className={`flex items-center justify-center w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-all bg-white ${
                  errors.file ? 'border-red-300 hover:border-red-400' : 'border-gray-300 hover:border-royal-blue'
                }`}
              >
                <Upload className="mr-2 text-royal-blue" size={20} />
                <span className={`${errors.file ? 'text-red-600' : 'text-gray-600'}`}>
                  {formData.file ? formData.file.name : 'Click to upload file'}
                </span>
              </label>
            </div>
            <div className="flex items-center justify-between mt-1">
              {errors.file && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.file}
                </p>
              )}
              <p className="text-sm text-gray-500 ml-auto">
                Accepted: PDF, DOC, DOCX, JPG, PNG (Max 5MB)
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="min-w-64"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⏳</span>
              Submitting...
            </>
          ) : (
            'Submit Request'
          )}
        </Button>
      </div>
      </form>
    </div>
  );
};
