import React from 'react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { UserCheck, BriefcaseMedical, AlertCircle, Stethoscope } from 'lucide-react';

const services = [
    {
        icon: UserCheck,
        title: 'Temporary Staffing',
        description: 'Flexible short-term staffing solutions to cover roster gaps, sick leave, shifts, holidays, and unexpected absences.',
        image: 'https://images.unsplash.com/photo-1631558556874-1d127211f574?q=80&w=600',
    },
    {
        icon: BriefcaseMedical,
        title: 'Contract Staffing',
        description: 'Reliable medium- to long-term care professionals available on contract to support your facility\'s ongoing needs.',
        image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?q=80&w=600',
    },
    {
        icon: AlertCircle,
        title: 'Emergency Call-Outs',
        description: '24/7 rapid-response emergency staffing service for last-minute and urgent care needs in high-demand care situations.',
        image: 'https://images.unsplash.com/photo-1623852516990-b92586f7dd5c?q=80&w=600',
    },
    {
        icon: Stethoscope,
        title: 'Specialized Care Roles',
        description: 'Registered nurses, AINs, support workers, and specialized healthcare professionals.',
        image: 'https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?q=80&w=600',
    },
];

export const ServiceHighlights = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white via-powder-blue/10 to-white">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-royal-blue mb-6">
                            Our Services
                        </h2>
                        <p className="text-center text-gray-700 text-lg md:text-xl mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
                            Flexible, reliable, and fully compliant staffing solutions for aged-care and healthcare providers across Australia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <Card variant="elevated" className="h-full overflow-hidden p-0">
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/60 via-royal-blue/20 to-transparent"></div>
                                        <div className="absolute top-4 left-4">
                                            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                                                <service.icon className="text-royal-blue" size={24} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-heading font-bold text-royal-blue mb-2 group-hover:text-royal-blue-dark transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed text-sm">
                                            {service.description}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button to="/services" variant="primary" size="lg" className="text-lg px-10 py-4">
                            View All Services
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
