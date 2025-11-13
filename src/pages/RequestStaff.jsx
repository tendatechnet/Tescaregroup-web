import React from 'react';
import SEO from '../components/common/SEO';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { RequestStaffForm } from '../components/forms/RequestStaffForm';
import { Card } from '../components/common/Card';
import { Phone, Mail, Clock } from 'lucide-react';

export const RequestStaff = () => {
  return (
    <>
      <SEO
        title="Request Staff - TES Care Group"
        description="Request qualified healthcare professionals for your aged-care facility. Fast response times and 24/7 availability for emergency staffing needs."
        url="/request-staff"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white py-12">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Request Staff
              </h1>
              <p className="text-xl text-gray-200">
                Fill out the form below and our team will respond promptly
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <RequestStaffForm />
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  className="space-y-6 sticky top-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Contact Information */}
                  <Card>
                    <h3 className="text-xl font-heading font-semibold text-navy mb-4">
                      Need Immediate Assistance?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="text-navy mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium text-gray-900">Emergency Hotline</p>
                          <a href="tel:+61-XXX-XXX-XXX" className="text-navy hover:text-navy-dark">
                            +61 XXX XXX XXX
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="text-navy mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <a href="mailto:admin@tescaregroup.com.au" className="text-navy hover:text-navy-dark break-all">
                            admin@tescaregroup.com.au
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="text-navy mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium text-gray-900">Availability</p>
                          <p className="text-gray-600">24/7 for staffing requests</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* What Happens Next */}
                  <Card className="bg-navy text-white">
                    <h3 className="text-xl font-heading font-semibold mb-4">
                      What Happens Next?
                    </h3>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li className="text-gray-200">
                        We review your request within 30 minutes
                      </li>
                      <li className="text-gray-200">
                        Our team contacts you to confirm details
                      </li>
                      <li className="text-gray-200">
                        We match and assign qualified professionals
                      </li>
                      <li className="text-gray-200">
                        Staff arrives on time, ready to deliver care
                      </li>
                    </ol>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
