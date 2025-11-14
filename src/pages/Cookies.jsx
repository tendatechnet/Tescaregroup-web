import React from 'react';
import SEO from '../components/common/SEO';
import { Card } from '../components/common/Card';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const Cookies = () => {
  return (
    <>
      <SEO
        title="Cookie Policy - TES Care Group"
        description="Cookie policy for TES Care Group's website."
        url="/cookies"
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-powder-blue/5 to-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-royal-blue mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <Card variant="elevated" className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">1. What Are Cookies?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small text files that are placed on your device when you visit our website. They help 
                  us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">2. Types of Cookies We Use</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-royal-blue mb-2">Essential Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies are necessary for the website to function properly. They enable core functionality 
                      such as security, network management, and accessibility.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-heading font-semibold text-royal-blue mb-2">Analytics Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting and reporting 
                      information anonymously.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-heading font-semibold text-royal-blue mb-2">Functional Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies allow the website to remember choices you make and provide enhanced, personalized features.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">3. Managing Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                  <li>Browser extensions: Use privacy-focused extensions to manage cookies</li>
                  <li>Our cookie consent banner: Accept or reject non-essential cookies when prompted</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. 
                  Please refer to the third-party's privacy policy for more information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">5. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about our use of cookies, please contact us at:
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

