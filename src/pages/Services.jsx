import React from 'react';
import SEO from '../components/common/SEO';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { ContactStrip } from '../components/common/ContactStrip';
import { UserCheck, BriefcaseMedical, AlertCircle, Stethoscope, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: UserCheck,
    title: 'Temporary Staffing',
    description: 'Flexible short-term staffing solutions to cover shifts, holidays, sick leave, and unexpected absences. Our pool of qualified professionals is ready to step in when you need them most.',
    features: [
      'Same-day placement available',
      'Shift-by-shift or week-long coverage',
      'Pre-vetted and qualified professionals',
      'Flexible scheduling options',
    ],
    image: 'https://images.unsplash.com/photo-1631558556874-1d127211f574?q=80&w=800',
  },
  {
    icon: BriefcaseMedical,
    title: 'Permanent Placements',
    description: 'Find the perfect long-term care professionals to join your team permanently. We carefully match candidates to your facility\'s culture and requirements.',
    features: [
      'Thorough candidate screening',
      'Cultural fit assessment',
      'Reference and qualification checks',
      'Ongoing support during transition',
    ],
    image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?q=80&w=800',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Call-Outs',
    description: '24/7 emergency staffing service for last-minute and urgent care needs. We understand that emergencies don\'t wait for business hours.',
    features: [
      'Available 24/7/365',
      'Rapid response team',
      'Emergency contact hotline',
      'Prioritized urgent requests',
    ],
    image: 'https://images.unsplash.com/photo-1623852516990-b92586f7dd5c?q=80&w=800',
  },
  {
    icon: Stethoscope,
    title: 'Specialized Care Roles',
    description: 'Access to a wide range of specialized healthcare professionals including registered nurses, enrolled nurses, care assistants, and support workers.',
    features: [
      'Registered Nurses (RN)',
      'Enrolled Nurses (EN)',
      'Personal Care Assistants (PCA)',
      'Allied Health Professionals',
    ],
    image: 'https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?q=80&w=800',
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Facility Requests Staff',
    description: 'Submit your staffing needs through our online form or call our 24/7 hotline',
  },
  {
    number: '2',
    title: 'TES Care Confirms',
    description: 'We review requirements, match qualified professionals, and confirm availability',
  },
  {
    number: '3',
    title: 'Staff Assigned',
    description: 'Vetted professionals arrive on-time, ready to deliver exceptional care',
  },
];

export const Services = () => {
  return (
    <>
      <SEO
        title="Our Services - TES Care Group"
        description="Comprehensive staffing solutions for aged-care facilities including temporary staffing, permanent placements, emergency call-outs, and specialized care roles."
        url="/services"
      />
      <div className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?q=80&w=1920"
              alt="Healthcare team professionals working together"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-100">
                Comprehensive staffing solutions for aged-care facilities across Australia
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-6 left-6 inline-flex items-center justify-center w-16 h-16 bg-powder-blue/90 backdrop-blur-sm text-royal-blue rounded-xl shadow-lg border-2 border-white/50">
                          <service.icon size={32} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h3 className="text-3xl font-heading font-bold text-royal-blue mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ClipboardCheck className="text-royal-blue mt-1 flex-shrink-0" size={22} />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-royal-blue text-center mb-4">
                How It Works
              </h2>
              <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
                Simple, fast, and reliable process to get the staff you need
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl text-3xl font-bold mb-6 shadow-xl">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-royal-blue mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-navy to-transparent"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-bold text-royal-blue mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-gray-700 text-lg mb-10">
                Let us help you find the perfect care professionals for your facility
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/request-staff" variant="primary" size="lg">
                  Request Staff Now
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactStrip />
      </div>
    </>
  );
};
