import React from 'react';
import { Clock, Users, Shield, ThumbsUp } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: 'Immediate Staffing Support',
    description: 'Quick turnaround times to meet your urgent staffing needs',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Fully Vetted & Qualified Workforce',
    description: 'All professionals are thoroughly vetted and qualified',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Shield,
    title: 'Round-the-Clock Support',
    description: 'Round-the-clock support for emergency staffing requests',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: ThumbsUp,
    title: 'Compliance-Driven & Reliable',
    description: 'Ongoing training and compliance monitoring',
    color: 'from-orange-500 to-orange-600',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Modern background pattern */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom right, #162660, #0f1a3f, #1d3577)'
        }}
      ></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white text-center mb-4">
            TES Care Group delivers fast, reliable, and compliant staffing solutions tailored to the needs of aged-care providers across Australia.
          </h2>
          <p className="text-center text-white/90 text-lg mb-16 max-w-2xl mx-auto font-medium">
            Dedicated to excellence in aged-care staffing across Australia
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div 
                  className="rounded-xl p-6 h-full border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    backgroundColor: '#D0E6FD',
                    borderColor: 'rgba(22, 38, 96, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-md`}>
                      <feature.icon size={16} />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-royal-blue">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm font-medium w-full">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
