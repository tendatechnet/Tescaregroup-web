import React from 'react';
import SEO from '../components/common/SEO';
import { Card } from '../components/common/Card';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - TES Care Group"
        description="Privacy policy for TES Care Group's staffing services."
        url="/privacy"
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-powder-blue/5 to-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-royal-blue mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <Card variant="elevated" className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  TES Care Group is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Personal information (name, email, phone number, facility details)</li>
                  <li>Staffing requirements and preferences</li>
                  <li>Communication records</li>
                  <li>Website usage data and cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>To provide and improve our staffing services</li>
                  <li>To communicate with you about your requests</li>
                  <li>To process payments and manage accounts</li>
                  <li>To comply with legal obligations</li>
                  <li>To send you relevant updates and information (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">4. Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                  <li>Qualified healthcare professionals for staffing assignments</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">5. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">6. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">7. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  For privacy-related inquiries, please contact us at:
                </p>
                <p className="text-gray-700 mt-2">
                  Email: <a href="mailto:privacy@tescaregroup.com.au" className="text-royal-blue hover:underline">privacy@tescaregroup.com.au</a><br />
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

