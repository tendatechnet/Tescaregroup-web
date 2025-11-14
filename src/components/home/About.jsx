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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-royal-blue mb-8">
              About TES Care Group
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed">
              <p>
                TES Care Group is a dedicated healthcare staffing provider connecting qualified, compassionate professionals with aged-care facilities across Australia.
              </p>
              <p className="font-semibold text-royal-blue">
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
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-powder-blue/30 to-powder-blue/50">
                <div className="text-5xl font-bold text-royal-blue mb-2">24/7</div>
                <div className="text-sm text-gray-700 font-semibold">Available</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-powder-blue/30 to-powder-blue/50">
                <div className="text-5xl font-bold text-royal-blue mb-2">500+</div>
                <div className="text-sm text-gray-700 font-semibold">Professionals</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-powder-blue/30 to-powder-blue/50">
                <div className="text-5xl font-bold text-royal-blue mb-2">5</div>
                <div className="text-sm text-gray-700 font-semibold">States</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
