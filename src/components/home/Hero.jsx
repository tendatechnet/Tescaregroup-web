import React from 'react';
import { Button } from '../common/Button';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603839834958-ae04ebbb3ec1?q=80&w=1920"
          alt="Compassionate elderly care professional with senior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight text-white">
              Reliable Staffing for Aged-Care Facilities
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-10 text-gray-100 font-body leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We connect qualified care professionals with facilities that need them — fast
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button to="/request-staff" variant="secondary" size="lg">
              Request Staff Now
            </Button>
            <Button to="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-12 md:h-20">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};
