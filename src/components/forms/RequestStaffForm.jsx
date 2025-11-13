import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Upload, CheckCircle } from 'lucide-react';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (in production, this would send to backend)
    // For now, we'll just show a success message after a brief delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);

    // TODO: Implement actual backend integration
    // This would send email to admin@tescaregroup.com.au
    // and optionally store in database (Firebase/MySQL/Backend)

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto text-center py-12">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h2 className="text-3xl font-heading font-bold text-navy mb-4">
          Request Received!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your staffing request. Our team will contact you shortly to confirm the details and arrange suitable professionals.
        </p>
        <p className="text-gray-600 mb-8">
          For urgent requests, please call us at: <strong>+61 XXX XXX XXX</strong>
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="primary">
          Submit Another Request
        </Button>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Facility Information */}
      <Card>
        <h3 className="text-xl font-heading font-semibold text-navy mb-4">
          Facility Information
        </h3>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              placeholder="Your Facility Name"
            />
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              placeholder="Your Name"
            />
          </div>
        </div>
      </Card>

      {/* Contact Details */}
      <Card>
        <h3 className="text-xl font-heading font-semibold text-navy mb-4">
          Contact Details
        </h3>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              placeholder="+61 XXX XXX XXX"
            />
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
      </Card>

      {/* Staffing Requirements */}
      <Card>
        <h3 className="text-xl font-heading font-semibold text-navy mb-4">
          Staffing Requirements
        </h3>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              >
                <option value="">Select Staff Type</option>
                <option value="Registered Nurse">Registered Nurse (RN)</option>
                <option value="Enrolled Nurse">Enrolled Nurse (EN)</option>
                <option value="Care Assistant">Personal Care Assistant (PCA)</option>
                <option value="Support Worker">Support Worker</option>
                <option value="Other">Other (Specify in notes)</option>
              </select>
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
                value={formData.numberOfStaff}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              />
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
                value={formData.shiftStartDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              />
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
                value={formData.shiftEndDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              />
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Additional Information */}
      <Card>
        <h3 className="text-xl font-heading font-semibold text-navy mb-4">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent"
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
                className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-navy transition"
              >
                <Upload className="mr-2" size={20} />
                <span className="text-gray-600">
                  {formData.file ? formData.file.name : 'Click to upload file'}
                </span>
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)
            </p>
          </div>
        </div>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-center">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="min-w-64"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </Button>
      </div>
    </form>
  );
};
