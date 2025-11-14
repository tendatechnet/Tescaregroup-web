import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631217868204-db1ed6bdd224?q=80&w=1080"
                alt="Professional healthcare team consultation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-warm-beige/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              About TES Care Group
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                TES Care Group is a dedicated healthcare staffing provider connecting qualified, compassionate professionals with aged-care facilities across Australia.
              </p>
              <p className="font-semibold text-navy">
                We exist to solve one of the industry's biggest challenges — consistent, reliable staffing.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-warm-beige rounded-full"></div>
                  <span className="font-semibold">Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-warm-beige rounded-full"></div>
                  <span className="font-semibold">Reliability</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-warm-beige rounded-full"></div>
                  <span className="font-semibold">Professionalism</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-warm-beige rounded-full"></div>
                  <span className="font-semibold">Care</span>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-navy mb-1">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy mb-1">500+</div>
                <div className="text-sm text-gray-600">Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy mb-1">3</div>
                <div className="text-sm text-gray-600">States</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
