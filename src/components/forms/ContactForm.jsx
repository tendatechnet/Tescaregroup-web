import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { CheckCircle, AlertCircle, Mail, Send } from 'lucide-react';
import { submitContactForm, validateEmail } from '../../utils/api';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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
      await submitContactForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="text-center py-12 bg-gradient-to-br from-powder-blue/30 to-powder-blue/60">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h2 className="text-3xl font-heading font-bold text-royal-blue mb-4">
          Message Sent!
        </h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          Thank you for contacting us. We'll get back to you as soon as possible.
        </p>
        <p className="text-gray-600 mb-8 text-sm">
          For urgent matters, please call us at: <strong className="text-royal-blue">+61 XXX XXX XXX</strong>
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="primary">
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-powder-blue/30 to-powder-blue/60">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-royal-blue rounded-xl flex items-center justify-center">
          <Mail className="text-white" size={24} />
        </div>
        <h3 className="text-3xl font-heading font-bold text-royal-blue">
          Send Us a Message
        </h3>
      </div>

      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="text-red-800 font-medium">{submitError}</p>
            <p className="text-red-600 text-sm mt-1">
              You can also reach us at{' '}
              <a href="mailto:info@tescaregroup.com.au" className="underline font-semibold">
                info@tescaregroup.com.au
              </a>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
              errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.name}
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
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white ${
              errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all resize-none bg-white ${
              errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
            placeholder="How can we help you?"
          />
          <div className="mt-1 flex items-center justify-between">
            {errors.message && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={14} />
                {errors.message}
              </p>
            )}
            <p className="text-xs text-gray-500 ml-auto">
              {formData.message.length} characters
            </p>
          </div>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⏳</span>
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2" size={20} />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};
