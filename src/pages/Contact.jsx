import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { ContactStrip } from '../components/common/ContactStrip';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us - TES Care Group"
        description="Get in touch with TES Care Group for your aged-care staffing needs. We're available 24/7 to assist with emergency staffing requests and answer your questions."
        url="/contact"
      />
      <ContactContent />
    </>
  );
};

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Contact form submitted:', formData);

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1631558556874-1d127211f574?q=80&w=1920"
            alt="Healthcare professional consultation"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/90 to-royal-blue/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-white">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Get in touch with our team — we're here to help
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gradient-to-br from-powder-blue/20 via-white to-powder-blue/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-heading font-bold text-royal-blue mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Whether you need urgent staffing support or want to learn more about our services, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-powder-blue/30 to-powder-blue/60">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-royal-blue to-royal-blue-dark text-white rounded-xl flex items-center justify-center shadow-lg">
                      <MapPin size={26} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-royal-blue mb-2 text-lg">Address</h3>
                      <p className="text-gray-700">
                        TES Care Group<br />
                        [Address to be provided]<br />
                        Australia
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-powder-blue/30 to-powder-blue/60">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-royal-blue to-royal-blue-dark text-white rounded-xl flex items-center justify-center shadow-lg">
                      <Phone size={26} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-royal-blue mb-2 text-lg">Phone</h3>
                      <p className="text-gray-700">
                        Emergency Hotline: <a href="tel:+61-XXX-XXX-XXX" className="text-royal-blue hover:text-royal-blue-dark font-semibold">+61 XXX XXX XXX</a><br />
                        General Inquiries: <a href="tel:+61-XXX-XXX-XXX" className="text-royal-blue hover:text-royal-blue-dark font-semibold">+61 XXX XXX XXX</a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-powder-blue/30 to-powder-blue/60">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-royal-blue to-royal-blue-dark text-white rounded-xl flex items-center justify-center shadow-lg">
                      <Mail size={26} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-royal-blue mb-2 text-lg">Email</h3>
                      <p className="text-gray-700">
                        General: <a href="mailto:info@tescaregroup.com.au" className="text-royal-blue hover:text-royal-blue-dark font-semibold">info@tescaregroup.com.au</a><br />
                        Staffing Requests: <a href="mailto:admin@tescaregroup.com.au" className="text-royal-blue hover:text-royal-blue-dark font-semibold">admin@tescaregroup.com.au</a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-powder-blue/30 to-powder-blue/60">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-royal-blue to-royal-blue-dark text-white rounded-xl flex items-center justify-center shadow-lg">
                      <Clock size={26} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-royal-blue mb-2 text-lg">Operating Hours</h3>
                      <p className="text-gray-700">
                        Available 24/7 for staffing requests<br />
                        Office Hours: Mon-Fri, 9am-5pm AEST
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-xl bg-gradient-to-br from-powder-blue/30 to-powder-blue/60">
                <h3 className="text-3xl font-heading font-bold text-royal-blue mb-6">
                  Send Us a Message
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                    <p className="text-xl text-gray-700">
                      Thank you! We'll be in touch soon.
                    </p>
                  </div>
                ) : (
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white"
                        placeholder="John Smith"
                      />
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-blue focus:border-royal-blue transition-all bg-white"
                        placeholder="john@example.com"
                      />
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-navy focus:border-transparent transition-all resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button type="submit" variant="primary" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section with Image Placeholder */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1739932885175-5fdaa1bd5989?q=80&w=1920"
          alt="Service area map"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-royal-blue/60 flex items-center justify-center">
          <div className="text-center px-4">
            <MapPin className="w-16 h-16 text-white mx-auto mb-4" />
            <p className="text-white text-2xl font-heading font-semibold mb-2">
              Serving NSW, VIC, QLD, WA, SA
            </p>
            <p className="text-white/90 text-lg">
              Google Maps Embed - To be configured with actual location
            </p>
          </div>
        </div>
      </section>

      <ContactStrip />
    </div>
  );
};
