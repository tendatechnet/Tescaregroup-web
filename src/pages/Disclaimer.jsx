import React from 'react';
import SEO from '../components/common/SEO';
import { Card } from '../components/common/Card';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const Disclaimer = () => {
  return (
    <>
      <SEO
        title="Disclaimer - TES Care Group"
        description="Disclaimer for TES Care Group's staffing services."
        url="/disclaimer"
      />
      <div className="min-h-screen bg-gradient-to-b from-white via-powder-blue/5 to-white py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-royal-blue mb-4">
              Disclaimer
            </h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <Card variant="elevated" className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">1. General Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  The information on this website is provided on an "as is" basis. While TES Care Group strives to 
                  ensure the accuracy of information, we make no representations or warranties of any kind, express or 
                  implied, about the completeness, accuracy, reliability, or suitability of the information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">2. Professional Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  TES Care Group provides staffing services and connects healthcare facilities with qualified professionals. 
                  While we ensure all staff are qualified and vetted, the ultimate responsibility for patient care and 
                  facility operations remains with the client facility.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">3. Availability</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to provide 24/7 staffing support; however, availability may vary based on demand, location, 
                  and other factors. We cannot guarantee immediate availability in all circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">4. External Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to external websites. We have no control over the nature, content, and 
                  availability of those sites. The inclusion of any links does not necessarily imply a recommendation or 
                  endorse the views expressed within them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  TES Care Group shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages resulting from the use of or inability to use our services or website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-royal-blue mb-4">6. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about this disclaimer, please contact us at:
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

