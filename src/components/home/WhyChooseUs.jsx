import React from 'react';
import { Clock, Users, Shield, ThumbsUp } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Quick turnaround times to meet your urgent staffing needs',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Experienced Staff',
    description: 'All professionals are thoroughly vetted and qualified',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Shield,
    title: '24/7 Availability',
    description: 'Round-the-clock support for emergency staffing requests',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: ThumbsUp,
    title: 'Quality Assurance',
    description: 'Ongoing training and compliance monitoring',
    color: 'from-orange-500 to-orange-600',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Modern background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy-light"></div>
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
            Why Choose TES Care Group?
          </h2>
          <p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
            Dedicated to excellence in aged-care staffing across Australia
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg`}>
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
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
