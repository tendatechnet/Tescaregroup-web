import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-powder-blue/5 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1631217868204-db1ed6bdd224?q=80&w=1080"
                alt="Professional healthcare team consultation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/40 via-royal-blue/10 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-powder-blue/30 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-royal-blue mb-8">
              About TES Care Group
            </h2>
            <div className="space-y-6 text-lg md:text-xl  leading-relaxed">
              <p>
                TES Care Group is a dedicated healthcare staffing provider connecting qualified, compassionate professionals with aged-care facilities across Australia.
              </p>
              <p className="">
                We exist to solve one of the industry's biggest challenges — consistent, reliable staffing.
              </p>

              {/* Focus Areas */}
              <div className="mt-6">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-royal-blue mb-2">
                  At TES Care Group, we focus on:
                </h3>
                <div className="bg-royal-blue rounded-xl p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold text-white text-base">Quality:</span>
                      <span className="text-white/90 ml-2 text-base">selecting skilled, verified staff who meet industry standards.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold text-white text-base">Reliability:</span>
                      <span className="text-white/90 ml-2 text-base">fast response, short-notice availability, and ongoing support.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold text-white text-base">Professionalism:</span>
                      <span className="text-white/90 ml-2 text-base">clear communication and ethical service delivery.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold text-white text-base">Care:</span>
                      <span className="text-white/90 ml-2 text-base">because people are at the heart of everything we do.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-powder-blue/30 to-powder-blue/50">
                <div className="text-3xl font-bold text-royal-blue mb-1">24/7</div>
                <div className="text-xs text-gray-700 font-semibold">Available</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-powder-blue/30 to-powder-blue/50">
                <div className="text-3xl font-bold text-royal-blue mb-1">500+</div>
                <div className="text-xs text-gray-700 font-semibold">Professionals</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-powder-blue/30 to-powder-blue/50">
                <div className="text-3xl font-bold text-royal-blue mb-1">5</div>
                <div className="text-xs text-gray-700 font-semibold">States</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Concluding Paragraph - Full Width Below Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-7xl mx-auto"
        >
          <div className="grid gap-16">
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Whether you need agency nurses, support workers, or personal care assistants, TES Care Group is committed to delivering staffing solutions that enhance your service and protect the wellbeing of those you support.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
