import React from 'react';
import SEO from '../components/common/SEO';
import { Card } from '../components/common/Card';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const Terms = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions - TES Care Group"
        description="Terms and conditions for using TES Care Group's staffing services."
        url="/terms"
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-powder-blue/5 to-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-royal-blue mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <Card variant="elevated" className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using TES Care Group's services, you agree to be bound by these Terms and Conditions. 
                  If you do not agree with any part of these terms, you must not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">2. Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TES Care Group provides healthcare staffing services including temporary staffing, contract staffing, 
                  emergency call-outs, and specialized care roles across Australia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All staff provided by TES Care Group are qualified, vetted, and comply with relevant healthcare 
                  regulations and standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">3. Client Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Provide accurate information when requesting staff</li>
                  <li>Ensure a safe working environment for our staff</li>
                  <li>Comply with all relevant workplace health and safety regulations</li>
                  <li>Provide necessary facilities and equipment for staff to perform their duties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  Payment terms will be agreed upon in writing before services commence. Invoices are due within 
                  the agreed payment period. Late payments may incur additional charges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">5. Cancellation Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cancellation policies vary by service type. Please refer to your service agreement for specific 
                  cancellation terms. Emergency call-outs may have different cancellation requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  TES Care Group's liability is limited to the value of services provided. We are not liable for 
                  indirect, consequential, or incidental damages arising from the use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">7. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms & Conditions, please contact us at:
                </p>
                <p className="text-gray-700 mt-2">
                  Email: <a href="mailto:info@tescaregroup.com.au" className="text-royal-blue hover:underline">info@tescaregroup.com.au</a><br />
                  Phone: <a href="tel:+61-XXX-XXX-XXX" className="text-royal-blue hover:underline">+61 XXX XXX XXX</a>
                </p>
              </section>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

