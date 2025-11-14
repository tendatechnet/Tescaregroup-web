import React, { useState, useEffect } from 'react';
import { Card } from '../common/Card';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        quote: "TES Care Group has transformed our staffing operations. Their rapid response and consistently high-quality professionals have made them an indispensable partner for our facility.",
        author: "Jennifer Martinez",
        role: "Director of Care",
        location: "Perth, WA",
        rating: 5,
    },
    {
        quote: "The reliability and professionalism of TES Care Group's staff is unmatched. They understand the unique challenges of aged care and always deliver.",
        author: "Michael O'Brien",
        role: "Facility Manager",
        location: "Adelaide, SA",
        rating: 5,
    },
    {
        quote: "We've relied on TES Care Group for over three years. Their 24/7 support and compliance-driven approach gives us complete confidence in every placement.",
        author: "Dr. Sarah Chen",
        role: "Clinical Director",
        location: "Melbourne, VIC",
        rating: 5,
    },
    {
        quote: "TES Care Group's contract staffing solutions have been perfect for our medium-term needs. The quality of their registered nurses and AINs is exceptional.",
        author: "David Thompson",
        role: "Operations Manager",
        location: "Brisbane, QLD",
        rating: 5,
    },
    {
        quote: "Their emergency call-out service has saved us countless times. TES Care Group truly understands the urgency of aged-care staffing and responds immediately.",
        author: "Lisa Anderson",
        role: "Nurse Manager",
        location: "Sydney, NSW",
        rating: 5,
    },
];

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate carousel every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-powder-blue/30 via-white to-warm-beige/20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-royal-blue mb-4">
                            Trusted by Leading Aged-Care Providers Nationwide
                        </h2>
                        <p className="text-gray-700 text-lg font-medium">
                            Proudly supporting Residential Aged-Care, Home Care, and Healthcare Services across Australia.
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div className="max-w-4xl mx-auto relative">
                        <div className="relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card className="relative overflow-hidden bg-gradient-to-br from-powder-blue/40 to-powder-blue/70">
                                        {/* Quote icon background */}
                                        <Quote className="absolute top-4 right-4 text-royal-blue/5" size={80} />

                                        {/* Rating stars */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} size={18} className="fill-royal-blue text-royal-blue" />
                                            ))}
                                        </div>

                                        <p className="text-gray-800 italic mb-6 leading-relaxed relative z-10 font-medium text-lg">
                                            "{testimonials[currentIndex].quote}"
                                        </p>

                                        <div className="border-t border-gray-200 pt-4">
                                            <p className="font-heading font-semibold text-royal-blue mb-1 text-lg">
                                                {testimonials[currentIndex].author}
                                            </p>
                                            <p className="text-gray-700 text-sm font-medium mb-1">
                                                {testimonials[currentIndex].role}
                                            </p>
                                            <p className="text-gray-600 text-xs">
                                                {testimonials[currentIndex].location}
                                            </p>
                                        </div>
                                    </Card>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-royal-blue hover:text-white transition-all duration-300 z-20"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-royal-blue hover:text-white transition-all duration-300 z-20"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? 'bg-royal-blue w-8'
                                            : 'bg-gray-300 hover:bg-royal-blue/50'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
