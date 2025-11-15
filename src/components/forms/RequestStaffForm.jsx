import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Upload, CheckCircle, AlertCircle, Calendar, Users, Mail, ChevronRight, ChevronLeft, FileText, Check } from 'lucide-react';
import { submitStaffRequest, validateEmail, validatePhone } from '../../utils/api';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
  { id: 1, title: 'Facility Info', icon: Users },
  { id: 2, title: 'Contact Details', icon: Mail },
  { id: 3, title: 'Staffing Needs', icon: Calendar },
  { id: 4, title: 'Additional Info', icon: FileText },
  { id: 5, title: 'Review', icon: CheckCircle },
];

export const RequestStaffForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
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
      const maxSize = 5 * 1024 * 1024;
      
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

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.facilityName.trim()) {
        newErrors.facilityName = 'Facility name is required';
      }
      if (!formData.contactPerson.trim()) {
        newErrors.contactPerson = 'Contact person is required';
      }
    }

    if (step === 2) {
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
    }

    if (step === 3) {
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
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleStepClick = (step) => {
    if (completedSteps.has(step - 1) || step < currentStep) {
      setCurrentStep(step);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateStep(5)) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitStaffRequest(formData, formData.file);
      setIsSubmitted(true);
      
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
      setCurrentStep(1);
      setCompletedSteps(new Set());
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
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        </motion.div>
        <h2 className="text-3xl font-heading font-bold text-royal-blue mb-4">
          Request Received!
        </h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          Thank you for your staffing request. Our team will contact you shortly to confirm the details and arrange suitable professionals.
        </p>
        <p className="text-gray-600 mb-8 text-sm">
          For urgent requests, please call us at: <strong className="text-royal-blue">+61 XXX XXX XXX</strong>
        </p>
        <Button onClick={() => {
          setIsSubmitted(false);
          setCurrentStep(1);
          setCompletedSteps(new Set());
        }} variant="primary">
          Submit Another Request
        </Button>
      </Card>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <Users className="w-16 h-16 text-royal-blue mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-royal-blue mb-2">
                Facility Information
              </h3>
              <p className="text-gray-600">Tell us about your facility</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="facilityName" className="block text-sm font-medium text-gray-700 mb-2">
                  Facility Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="facilityName"
                  name="facilityName"
                  required
                  value={formData.facilityName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white text-lg ${
                    errors.facilityName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your Facility Name"
                />
                {errors.facilityName && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.facilityName}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  required
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white text-lg ${
                    errors.contactPerson ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your Name"
                />
                {errors.contactPerson && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.contactPerson}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <Mail className="w-16 h-16 text-royal-blue mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-royal-blue mb-2">
                Contact Details
              </h3>
              <p className="text-gray-600">How can we reach you?</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white text-lg ${
                    errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+61 XXX XXX XXX"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white text-lg ${
                    errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <Calendar className="w-16 h-16 text-royal-blue mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-royal-blue mb-2">
                Staffing Requirements
              </h3>
              <p className="text-gray-600">Tell us what you need</p>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="staffType" className="block text-sm font-medium text-gray-700 mb-2">
                    Staff Type Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="staffType"
                    name="staffType"
                    required
                    value={formData.staffType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white text-lg ${
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
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.staffType}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="numberOfStaff" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white text-lg ${
                      errors.numberOfStaff ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.numberOfStaff && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.numberOfStaff}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="shiftStartDate" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white text-lg ${
                      errors.shiftStartDate ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.shiftStartDate && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.shiftStartDate}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="shiftStartTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Shift Start Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    id="shiftStartTime"
                    name="shiftStartTime"
                    required
                    value={formData.shiftStartTime}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white text-lg ${
                      errors.shiftStartTime ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.shiftStartTime && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.shiftStartTime}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="shiftEndDate" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white text-lg ${
                      errors.shiftEndDate ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.shiftEndDate && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.shiftEndDate}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="shiftEndTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Shift End Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    id="shiftEndTime"
                    name="shiftEndTime"
                    required
                    value={formData.shiftEndTime}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white text-lg ${
                      errors.shiftEndTime ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.shiftEndTime && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.shiftEndTime}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <FileText className="w-16 h-16 text-royal-blue mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-royal-blue mb-2">
                Additional Information
              </h3>
              <p className="text-gray-600">Any additional details or requirements?</p>
            </div>
            <div className="space-y-6">
              <div>
                <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes or Special Requirements
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={6}
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white resize-none text-lg"
                  placeholder="Any specific requirements, certifications, or additional information..."
                />
              </div>
              <div>
                <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className={`flex items-center justify-center w-full px-6 py-4 border-2 border-dashed rounded-xl cursor-pointer transition-all bg-white hover:bg-powder-blue/10 ${
                      errors.file ? 'border-red-300 hover:border-red-400' : 'border-gray-300 hover:border-royal-blue'
                    }`}
                  >
                    <Upload className="mr-3 text-royal-blue" size={24} />
                    <span className={`text-lg ${errors.file ? 'text-red-600' : 'text-gray-600'}`}>
                      {formData.file ? formData.file.name : 'Click to upload file'}
                    </span>
                  </label>
                </div>
                <div className="flex items-center justify-between mt-2">
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
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-royal-blue mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-royal-blue mb-2">
                Review Your Request
              </h3>
              <p className="text-gray-600">Please review all information before submitting</p>
            </div>

            <div className="space-y-4">
              <Card variant="elevated" className="bg-powder-blue/20">
                <h4 className="font-heading font-semibold text-royal-blue mb-3 flex items-center gap-2">
                  <Users size={20} />
                  Facility Information
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <span className="text-sm text-gray-600">Facility Name:</span>
                    <p className="font-medium">{formData.facilityName || 'Not provided'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Contact Person:</span>
                    <p className="font-medium">{formData.contactPerson || 'Not provided'}</p>
                  </div>
                </div>
              </Card>

              <Card variant="elevated" className="bg-powder-blue/20">
                <h4 className="font-heading font-semibold text-royal-blue mb-3 flex items-center gap-2">
                  <Mail size={20} />
                  Contact Details
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <span className="text-sm text-gray-600">Phone:</span>
                    <p className="font-medium">{formData.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Email:</span>
                    <p className="font-medium">{formData.email || 'Not provided'}</p>
                  </div>
                </div>
              </Card>

              <Card variant="elevated" className="bg-powder-blue/20">
                <h4 className="font-heading font-semibold text-royal-blue mb-3 flex items-center gap-2">
                  <Calendar size={20} />
                  Staffing Requirements
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <span className="text-sm text-gray-600">Staff Type:</span>
                    <p className="font-medium">{formData.staffType || 'Not provided'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Number of Staff:</span>
                    <p className="font-medium">{formData.numberOfStaff}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Start:</span>
                    <p className="font-medium">{formData.shiftStartDate} at {formData.shiftStartTime || 'Not set'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">End:</span>
                    <p className="font-medium">{formData.shiftEndDate} at {formData.shiftEndTime || 'Not set'}</p>
                  </div>
                </div>
              </Card>

              {formData.additionalNotes && (
                <Card variant="elevated" className="bg-powder-blue/20">
                  <h4 className="font-heading font-semibold text-royal-blue mb-3 flex items-center gap-2">
                    <FileText size={20} />
                    Additional Notes
                  </h4>
                  <p className="text-gray-700">{formData.additionalNotes}</p>
                </Card>
              )}

              {formData.file && (
                <Card variant="elevated" className="bg-powder-blue/20">
                  <h4 className="font-heading font-semibold text-royal-blue mb-3 flex items-center gap-2">
                    <Upload size={20} />
                    Attached File
                  </h4>
                  <p className="text-gray-700">{formData.file.name}</p>
                </Card>
              )}
            </div>

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
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card variant="elevated" className="p-8 lg:p-12">
        {/* Progress Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10">
              <div 
                className="h-full bg-royal-blue transition-all duration-500"
                style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
              ></div>
            </div>

            {STEPS.map((step, index) => {
              const StepIcon = step.icon;
              const isCompleted = completedSteps.has(step.id);
              const isCurrent = currentStep === step.id;
              const isAccessible = completedSteps.has(step.id - 1) || step.id < currentStep;

              return (
                <div key={step.id} className="flex flex-col items-center flex-1 relative">
                  <button
                    onClick={() => handleStepClick(step.id)}
                    disabled={!isAccessible && !isCurrent}
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                      ${isCurrent 
                        ? 'bg-royal-blue text-white scale-110 shadow-lg' 
                        : isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isAccessible
                        ? 'bg-powder-blue text-royal-blue hover:scale-105'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }
                    `}
                  >
                    {isCompleted && !isCurrent ? (
                      <Check size={24} />
                    ) : (
                      <StepIcon size={24} />
                    )}
                  </button>
                  <span className={`mt-2 text-xs font-medium text-center ${
                    isCurrent ? 'text-royal-blue font-semibold' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {renderStepContent()}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft size={20} />
              Previous
            </Button>

            <div className="text-sm text-gray-600 font-medium">
              Step {currentStep} of {STEPS.length}
            </div>

            {currentStep < STEPS.length ? (
              <Button
                type="button"
                onClick={handleNext}
                variant="primary"
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight size={20} />
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle size={20} />
                    Submit Request
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
};
