import React from 'react';
import SEO from '../components/common/SEO';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { ClipboardCheck } from 'lucide-react';

const services = [
  {
    title: 'Temporary Staffing',
    description: 'Flexible short-term staffing solutions to cover last-minute shifts, holidays, sick leave, and unexpected absences. Our pool of qualified and compliant aged-care professionals is ready to step in whenever your facility needs support.',
    features: [
      'Same-day and urgent placements available',
      'Shift-by-shift or multi-day coverage',
      'Fully vetted, qualified, and compliant professionals',
      'Flexible scheduling to suit your facility\'s needs',
    ],
    image: 'https://images.unsplash.com/photo-1631558556874-1d127211f574?q=80&w=800',
  },
  {
    title: 'Contract Placements',
    description: 'Reliable medium to long-term staffing support for aged-care facilities needing consistent coverage. Our contract professionals deliver stability, continuity of care, and seamless integration with your team.',
    features: [
      'Ideal for extended leave or ongoing roster gaps',
      'Multi-week or multi-month coverage available',
      'Qualified, compliant aged-care professionals',
      'Enhances continuity of care and team consistency',
    ],
    image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?q=80&w=800',
  },
  {
    title: 'Emergency Call-Outs',
    description: '24/7 urgent staffing support for last-minute shortages, unexpected absences, and critical care needs. We understand that emergencies don\'t wait for business hours, and our team is ready to respond whenever you need us.',
    features: [
      'Available 24/7 for urgent staffing needs',
      'Fast-response team ready to assist anytime',
      'Dedicated urgent staffing hotline',
      'Priority handling for emergency requests',
    ],
    image: 'https://images.unsplash.com/photo-1623852516990-b92586f7dd5c?q=80&w=800',
  },
  {
    title: 'Specialised Care Roles',
    description: 'Access to a wide range of specialised aged-care professionals, including registered nurses, enrolled nurses, personal care assistants, and allied health staff. All professionals are fully vetted, qualified, and prepared to support your facility\'s care requirements.',
    features: [
      'Registered Nurses (RN)',
      'Enrolled Nurses (EN)',
      'Personal Care Worker (PCW)',
      'Allied Health Professionals',
    ],
    image: 'https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?q=80&w=800',
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Facility Requests Staff',
    description: 'Submit your staffing requirements via our online form or contact our 24/7 urgent staffing hotline.',
  },
  {
    number: '2',
    title: 'TES Care Confirms',
    description: 'We review your request, match qualified and compliant professionals, and confirm availability.',
  },
  {
    number: '3',
    title: 'Staff Assigned',
    description: 'Vetted professionals are dispatched promptly and arrive prepared to deliver quality care.',
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
                Trusted staffing solutions for aged-care facilities across Australia
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24 bg-gradient-to-b from-white via-powder-blue/10 to-white">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/60 via-royal-blue/20 to-transparent"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <Card className="bg-gradient-to-br from-white to-powder-blue/30 border border-powder-blue/50 p-8 shadow-xl">
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-royal-blue mb-6">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                          {service.description}
                        </p>
                        <ul className="space-y-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-8 h-8 bg-powder-blue/70 rounded-lg flex items-center justify-center mt-0.5">
                                <ClipboardCheck className="text-royal-blue" size={18} />
                              </div>
                              <span className="text-gray-700 text-base leading-relaxed pt-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-royal-blue via-royal-blue-dark to-royal-blue-light relative overflow-hidden">
          {/* Decorative background pattern */}
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
                How It Works
              </h2>
              <p className="text-center text-white/90 text-lg mb-16 max-w-2xl mx-auto">
                A simple, reliable process to get qualified aged-care staff when you need them.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative text-center h-full flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/95 backdrop-blur-sm p-8 shadow-2xl border-0 h-full flex flex-col">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-royal-blue to-royal-blue-light text-white rounded-2xl text-3xl font-bold mb-6 shadow-xl mx-auto">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-heading font-semibold text-royal-blue mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed flex-grow">
                        {step.description}
                      </p>
                    </Card>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-16 -right-4 w-8 h-0.5 bg-white/30"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-powder-blue/30 via-white to-powder-blue/20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-white to-powder-blue/40 border border-powder-blue/50 p-12 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-royal-blue mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                  Let us help you secure qualified, reliable aged-care professionals for your facility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button to="/request-staff" variant="primary" size="lg" className="text-lg px-8 py-4">
                    Request Staff Now
                  </Button>
                  <Button to="/contact" variant="outline" size="lg" className="text-lg px-8 py-4">
                    Contact Us
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};
