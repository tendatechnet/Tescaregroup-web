import React from 'react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Temporary Staffing',
        description: 'Flexible short-term staffing solutions to cover shifts, holidays, sick leave, and unexpected absences.',
        image: 'https://images.unsplash.com/photo-1631558556874-1d127211f574?q=80&w=600',
    },
    {
        title: 'Contract Placements',
        description: 'Reliable medium to long-term staffing support for aged-care facilities needing consistent coverage.',
        image: 'https://images.unsplash.com/photo-1589104759909-e355f8999f7e?q=80&w=600',
    },
    {
        title: 'Emergency Call-Outs',
        description: '24/7 urgent staffing support for last-minute shortages, unexpected absences, and critical care needs.',
        image: 'https://images.unsplash.com/photo-1623852516990-b92586f7dd5c?q=80&w=600',
    },
    {
        title: 'Specialised Care Roles',
        description: 'Access to a wide range of specialised aged-care professionals, including registered nurses, enrolled nurses, and more.',
        image: 'https://images.unsplash.com/photo-1653508311277-1ecf6ee52c5e?q=80&w=600',
    },
];

export const ServiceHighlights = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-royal-blue text-center mb-4">
                        Our Services
                    </h2>
                    <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
                        Flexible, reliable, and fully compliant staffing solutions for aged-care and healthcare
providers across Australia.                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <Card className="h-full overflow-hidden">
                                    <div className="relative h-48 mb-4 -m-6">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/70 to-transparent"></div>
                                    </div>
                                    <h3 className="text-xl font-heading font-semibold text-royal-blue mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button to="/services" variant="primary" size="lg">
                            View All Services
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
