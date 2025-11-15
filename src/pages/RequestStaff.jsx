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
        <section 
          className="text-white py-12 relative"
          style={{
            background: 'linear-gradient(to bottom right, #162660, #1d3577, #0f1a3f)'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
                Request Staff
              </h1>
              <p className="text-xl text-white/90 font-medium">
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
                  <Card className="bg-gradient-to-br from-powder-blue/30 to-powder-blue/60">
                    <h3 className="text-xl font-heading font-semibold text-royal-blue mb-4">
                      Need Immediate Assistance?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="text-royal-blue mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium text-gray-900">Emergency Hotline</p>
                          <a href="tel:+61-XXX-XXX-XXX" className="text-royal-blue hover:text-royal-blue-dark font-semibold">
                            +61 XXX XXX XXX
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="text-royal-blue mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <a href="mailto:admin@tescaregroup.com.au" className="text-royal-blue hover:text-royal-blue-dark break-all font-semibold">
                            admin@tescaregroup.com.au
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="text-royal-blue mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-medium text-gray-900">Availability</p>
                          <p className="text-gray-700 font-medium">24/7 for staffing requests</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* What Happens Next */}
                  <div 
                    className="text-white rounded-xl shadow-xl p-6"
                    style={{
                      background: 'linear-gradient(to bottom right, #162660, #0f1a3f)',
                      border: 'none'
                    }}
                  >
                    <h3 className="text-xl font-heading font-semibold mb-4 text-white">
                      What Happens Next?
                    </h3>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li className="text-white/90 font-medium">
                        We review your request within 30 minutes
                      </li>
                      <li className="text-white/90 font-medium">
                        Our team contacts you to confirm details
                      </li>
                      <li className="text-white/90 font-medium">
                        We match and assign qualified professionals
                      </li>
                      <li className="text-white/90 font-medium">
                        Staff arrives on time, ready to deliver care
                      </li>
                    </ol>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
