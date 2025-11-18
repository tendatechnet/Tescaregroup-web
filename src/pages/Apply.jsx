import React, { useState } from 'react';
import SEO from '../components/common/SEO';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Upload, FileText, User, Briefcase, GraduationCap, Award, Check, AlertCircle } from 'lucide-react';
import { submitJobApplication, validateEmail, validatePhone } from '../utils/api';

export const Apply = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postcode: '',

    // Position Information
    positionType: '',
    preferredStartDate: '',
    availability: '',

    // Employment History
    currentEmployer: '',
    currentPosition: '',
    employmentStartDate: '',
    employmentEndDate: '',
    previousEmployer: '',
    previousPosition: '',
    previousStartDate: '',
    previousEndDate: '',
    responsibilities: '',

    // Education
    qualification: '',
    institution: '',
    graduationYear: '',
    additionalQualifications: '',

    // Certifications & Licenses
    certifications: '',
    licenseNumber: '',
    expiryDate: '',

    // References
    ref1Name: '',
    ref1Position: '',
    ref1Phone: '',
    ref1Email: '',
    ref2Name: '',
    ref2Position: '',
    ref2Phone: '',
    ref2Email: '',

    // Documents
    resume: null,
    coverLetter: null,
    certificationsFile: null,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const steps = [
    { number: 1, title: 'Personal Information' },
    { number: 2, title: 'Position & Availability' },
    { number: 3, title: 'Employment History' },
    { number: 4, title: 'Education & Qualifications' },
    { number: 5, title: 'References' },
    { number: 6, title: 'Documents & Submit' },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone is required';
      if (formData.email && !validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (formData.phone && !validatePhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid Australian phone number';
      }
    }

    if (step === 2) {
      if (!formData.positionType) newErrors.positionType = 'Position type is required';
      if (!formData.availability) newErrors.availability = 'Availability is required';
    }

    if (step === 6) {
      if (!formData.resume) newErrors.resume = 'Resume is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateStep(6)) return;

    setIsSubmitting(true);

    try {
      await submitJobApplication(
        formData,
        formData.resume,
        formData.coverLetter,
        formData.certificationsFile
      );

      setIsSubmitting(false);
      setShowSuccess(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', address: '', city: '', state: '', postcode: '',
          positionType: '', preferredStartDate: '', availability: '',
          currentEmployer: '', currentPosition: '', employmentStartDate: '', employmentEndDate: '',
          previousEmployer: '', previousPosition: '', previousStartDate: '', previousEndDate: '', responsibilities: '',
          qualification: '', institution: '', graduationYear: '', additionalQualifications: '',
          certifications: '', licenseNumber: '', expiryDate: '',
          ref1Name: '', ref1Position: '', ref1Phone: '', ref1Email: '',
          ref2Name: '', ref2Position: '', ref2Phone: '', ref2Email: '',
          resume: null, coverLetter: null, certificationsFile: null,
        });
        setCurrentStep(1);
        setShowSuccess(false);
        setSubmitError(null);
      }, 5000);
    } catch (error) {
      console.error('Application submission error:', error);
      setIsSubmitting(false);
      setSubmitError(error.message || 'Failed to submit application. Please try again or contact us directly.');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-royal-blue mb-6 flex items-center gap-3">
              <User size={28} className="text-royal-blue" />
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                >
                  <option value="">Select State</option>
                  <option value="NSW">NSW</option>
                  <option value="VIC">VIC</option>
                  <option value="QLD">QLD</option>
                  <option value="WA">WA</option>
                  <option value="SA">SA</option>
                  <option value="TAS">TAS</option>
                  <option value="NT">NT</option>
                  <option value="ACT">ACT</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Postcode</label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-royal-blue mb-6 flex items-center gap-3">
              <Briefcase size={28} className="text-royal-blue" />
              Position & Availability
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Position Type *</label>
                <select
                  name="positionType"
                  value={formData.positionType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue ${errors.positionType ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Position Type</option>
                  <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                  <option value="Enrolled Nurse (EN)">Enrolled Nurse (EN)</option>
                  <option value="Personal Care Assistant (PCA)">Personal Care Assistant (PCA)</option>
                  <option value="Allied Health Professional">Allied Health Professional</option>
                  <option value="Support Worker">Support Worker</option>
                  <option value="Other">Other</option>
                </select>
                {errors.positionType && <p className="text-red-500 text-sm mt-1">{errors.positionType}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Start Date</label>
                <input
                  type="date"
                  name="preferredStartDate"
                  value={formData.preferredStartDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Availability *</label>
                <textarea
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Please describe your availability (e.g., Full-time, Part-time, Casual, Weekends, Night shifts, etc.)"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue ${errors.availability ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-royal-blue mb-6 flex items-center gap-3">
              <Briefcase size={28} className="text-royal-blue" />
              Employment History
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-powder-blue/30 rounded-lg border border-powder-blue/50">
                <h4 className="font-semibold text-royal-blue mb-4">Current or Most Recent Employment</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Employer Name</label>
                    <input
                      type="text"
                      name="currentEmployer"
                      value={formData.currentEmployer}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Position</label>
                    <input
                      type="text"
                      name="currentPosition"
                      value={formData.currentPosition}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Start Date</label>
                    <input
                      type="date"
                      name="employmentStartDate"
                      value={formData.employmentStartDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">End Date (if applicable)</label>
                    <input
                      type="date"
                      name="employmentEndDate"
                      value={formData.employmentEndDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-powder-blue/30 rounded-lg border border-powder-blue/50">
                <h4 className="font-semibold text-royal-blue mb-4">Previous Employment</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Employer Name</label>
                    <input
                      type="text"
                      name="previousEmployer"
                      value={formData.previousEmployer}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Position</label>
                    <input
                      type="text"
                      name="previousPosition"
                      value={formData.previousPosition}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Start Date</label>
                    <input
                      type="date"
                      name="previousStartDate"
                      value={formData.previousStartDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">End Date</label>
                    <input
                      type="date"
                      name="previousEndDate"
                      value={formData.previousEndDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Key Responsibilities & Achievements</label>
                <textarea
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your key responsibilities and achievements in your previous roles..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-royal-blue mb-6 flex items-center gap-3">
              <GraduationCap size={28} className="text-royal-blue" />
              Education & Qualifications
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="e.g., Bachelor of Nursing, Certificate III in Aged Care"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Institution</label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Graduation Year</label>
                  <input
                    type="text"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Qualifications</label>
                <textarea
                  name="additionalQualifications"
                  value={formData.additionalQualifications}
                  onChange={handleChange}
                  rows={4}
                  placeholder="List any additional qualifications, certifications, or training..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                />
              </div>
              <div className="p-4 bg-powder-blue/30 rounded-lg border border-powder-blue/50">
                <h4 className="font-semibold text-royal-blue mb-4 flex items-center gap-2">
                  <Award size={20} />
                  Certifications & Licenses
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Certifications (e.g., AHPRA Registration, First Aid)</label>
                    <input
                      type="text"
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleChange}
                      placeholder="List your certifications"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">License/Registration Number</label>
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="date"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-royal-blue mb-6 flex items-center gap-3">
              <User size={28} className="text-royal-blue" />
              Professional References
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-powder-blue/30 rounded-lg border border-powder-blue/50">
                <h4 className="font-semibold text-royal-blue mb-4">Reference 1</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="ref1Name"
                      value={formData.ref1Name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Position</label>
                    <input
                      type="text"
                      name="ref1Position"
                      value={formData.ref1Position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="ref1Phone"
                      value={formData.ref1Phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="ref1Email"
                      value={formData.ref1Email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-powder-blue/30 rounded-lg border border-powder-blue/50">
                <h4 className="font-semibold text-royal-blue mb-4">Reference 2</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="ref2Name"
                      value={formData.ref2Name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Position</label>
                    <input
                      type="text"
                      name="ref2Position"
                      value={formData.ref2Position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="ref2Phone"
                      value={formData.ref2Phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="ref2Email"
                      value={formData.ref2Email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-blue focus:border-royal-blue"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-royal-blue mb-6 flex items-center gap-3">
              <FileText size={28} className="text-royal-blue" />
              Documents & Submission
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Resume/CV * <span className="text-gray-500 text-xs">(PDF, DOC, DOCX - Max 5MB)</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-royal-blue transition-colors">
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                    <p className="text-sm text-gray-600">
                      {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                    </p>
                  </label>
                </div>
                {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cover Letter <span className="text-gray-500 text-xs">(Optional - PDF, DOC, DOCX - Max 5MB)</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-royal-blue transition-colors">
                  <input
                    type="file"
                    name="coverLetter"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="hidden"
                    id="cover-letter-upload"
                  />
                  <label htmlFor="cover-letter-upload" className="cursor-pointer">
                    <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                    <p className="text-sm text-gray-600">
                      {formData.coverLetter ? formData.coverLetter.name : 'Click to upload or drag and drop'}
                    </p>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Certifications & Licenses <span className="text-gray-500 text-xs">(Optional - PDF, JPG, PNG - Max 5MB)</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-royal-blue transition-colors">
                  <input
                    type="file"
                    name="certificationsFile"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleChange}
                    className="hidden"
                    id="certifications-upload"
                  />
                  <label htmlFor="certifications-upload" className="cursor-pointer">
                    <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                    <p className="text-sm text-gray-600">
                      {formData.certificationsFile ? formData.certificationsFile.name : 'Click to upload or drag and drop'}
                    </p>
                  </label>
                </div>
              </div>
              <div className="p-4 bg-powder-blue/30 rounded-lg border border-powder-blue/50">
                <p className="text-sm text-gray-700">
                  By submitting this application, you confirm that all information provided is accurate and complete.
                  You consent to TES Care Group contacting your references and conducting necessary background checks.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SEO
        title="Apply for Nursing & Care Jobs - TES Care Group"
        description="Join TES Care Group as a healthcare professional. Apply for nursing and care positions across Australia."
        url="/apply"
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-powder-blue/5 to-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-royal-blue to-royal-blue-dark text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                Apply for Nursing & Care Jobs
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Join our team of dedicated healthcare professionals making a difference in aged care across Australia
              </p>
            </motion.div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${currentStep >= step.number
                          ? 'bg-royal-blue text-white'
                          : 'bg-gray-200 text-gray-500'
                          }`}
                      >
                        {step.number}
                      </div>
                      <p className={`text-xs mt-2 text-center ${currentStep >= step.number ? 'text-royal-blue font-semibold' : 'text-gray-500'}`}>
                        {step.title}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 transition-all duration-300 ${currentStep > step.number ? 'bg-royal-blue' : 'bg-gray-200'
                          }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <Card variant="elevated" className="p-8 md:p-12">
              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-royal-blue mb-4">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Thank you for your interest in joining TES Care Group. We'll review your application and get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                      <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-red-800 font-medium">{submitError}</p>
                        <p className="text-red-600 text-sm mt-1">
                          You can also contact us at{' '}
                          <a href="mailto:tescaregroup@tescaregroup.com.au" className="underline font-semibold">
                            tescaregroup@tescaregroup.com.au
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                  {renderStepContent()}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        onClick={handlePrevious}
                        variant="outline"
                        size="lg"
                      >
                        Previous
                      </Button>
                    )}
                    <div className="ml-auto">
                      {currentStep < steps.length ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                          variant="primary"
                          size="lg"
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

