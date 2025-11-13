import React from 'react';
import { Card } from '../common/Card';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        quote: "TES Care Group consistently provides us with highly qualified staff. Their response time is exceptional, and the quality of care professionals they send is outstanding.",
        author: "Sarah Mitchell",
        role: "Facility Manager",
        location: "Melbourne, VIC",
        rating: 5,
        image: "https://images.unsplash.com/photo-1603129473525-4cd6f36fe057?q=80&w=200",
    },
    {
        quote: "We've been working with TES Care Group for over two years. Their 24/7 availability has been a lifesaver for our emergency staffing needs.",
        author: "Dr. James Chen",
        role: "Director of Nursing",
        location: "Sydney, NSW",
        rating: 5,
        image: "https://images.unsplash.com/photo-1589104759909-e355f8999f7e?q=80&w=200",
    },
    {
        quote: "Professional, reliable, and always available when we need them. TES Care Group has become an essential partner in delivering quality care to our residents.",
        author: "Rebecca Thompson",
        role: "Care Coordinator",
        location: "Brisbane, QLD",
        rating: 5,
        image: "https://images.unsplash.com/photo-1739932885175-5fdaa1bd5989?q=80&w=200",
    },
];

export const Testimonials = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
                            Trusted by Aged-Care Providers
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Across Australia
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card className="h-full relative overflow-hidden">
                                    {/* Quote icon background */}
                                    <Quote className="absolute top-4 right-4 text-gold/10" size={80} />

                                    {/* Rating stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={18} className="fill-gold text-gold" />
                                        ))}
                                    </div>

                                    <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">
                                        "{testimonial.quote}"
                                    </p>

                                    <div className="border-t pt-4 flex items-center gap-3">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className="w-12 h-12 rounded-full object-cover"
                                            loading="lazy"
                                        />
                                        <div>
                                            <p className="font-heading font-semibold text-navy">
                                                {testimonial.author}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                {testimonial.role}
                                            </p>
                                            <p className="text-gray-500 text-xs">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
