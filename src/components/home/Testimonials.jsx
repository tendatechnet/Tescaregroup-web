import React from 'react';
import { Card } from '../common/Card';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        quote: "TES Care Group has transformed our staffing operations. Their rapid response and consistently high-quality professionals have made them an indispensable partner for our facility.",
        author: "Jennifer Martinez",
        role: "Director of Care",
        location: "Perth, WA",
        rating: 5,
        image: "https://images.unsplash.com/photo-1603129473525-4cd6f36fe057?q=80&w=200",
    },
    {
        quote: "The reliability and professionalism of TES Care Group's staff is unmatched. They understand the unique challenges of aged care and always deliver.",
        author: "Michael O'Brien",
        role: "Facility Manager",
        location: "Adelaide, SA",
        rating: 5,
        image: "https://images.unsplash.com/photo-1589104759909-e355f8999f7e?q=80&w=200",
    },
    {
        quote: "We've relied on TES Care Group for over three years. Their 24/7 support and compliance-driven approach gives us complete confidence in every placement.",
        author: "Dr. Sarah Chen",
        role: "Clinical Director",
        location: "Melbourne, VIC",
        rating: 5,
        image: "https://images.unsplash.com/photo-1739932885175-5fdaa1bd5989?q=80&w=200",
    },
    {
        quote: "TES Care Group's contract staffing solutions have been perfect for our medium-term needs. The quality of their registered nurses and AINs is exceptional.",
        author: "David Thompson",
        role: "Operations Manager",
        location: "Brisbane, QLD",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    },
    {
        quote: "Their emergency call-out service has saved us countless times. TES Care Group truly understands the urgency of aged-care staffing and responds immediately.",
        author: "Lisa Anderson",
        role: "Nurse Manager",
        location: "Sydney, NSW",
        rating: 5,
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200",
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
                            Trusted by Leading Aged-Care Providers Nationwide
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Proudly supporting Residential Aged-Care, Home Care, and Healthcare Services across Australia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                                    <Quote className="absolute top-4 right-4 text-warm-beige/10" size={80} />

                                    {/* Rating stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={18} className="fill-warm-beige text-warm-beige" />
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
