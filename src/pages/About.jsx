import React from 'react';
import SEO from '../components/common/SEO';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card } from '../components/common/Card';
import { ContactStrip } from '../components/common/ContactStrip';
import { Heart, Users, Award, MapPin } from 'lucide-react';
import { Principles } from '../components/home/Princepal';

const values = [
    {
        icon: Heart,
        title: 'Quality',
        description: 'We prioritize excellence in every placement, ensuring all professionals meet the highest standards of care and compliance',
        gradient: 'from-purple-500 to-purple-600',
    },
    {
        icon: Users,
        title: 'Reliability',
        description: 'Consistent, dependable staffing solutions you can count on, available 24/7 to meet your facility\'s needs',
        gradient: 'from-purple-500 to-purple-600',
    },
    {
        icon: Award,
        title: 'Professionalism',
        description: 'Maintaining the highest standards of conduct, expertise, and compliance in all our staffing placements',
        gradient: 'from-purple-500 to-purple-600',
    },
    {
        icon: MapPin,
        title: 'Care',
        description: 'Compassionate, person-centered care is at the heart of every professional we connect with your facility',
        gradient: 'from-purple-500 to-purple-600',
    },
];

export const About = () => {
    return (
        <>
            <SEO
                title="About Us - TES Care Group"
                description="Learn about TES Care Group, a leading aged-care staffing agency dedicated to connecting qualified healthcare professionals with facilities across Australia."
                url="/about"
            />
            <div className="min-h-screen">
                {/* Hero Section with Image */}
                <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1631217868204-db1ed6bdd224?q=80&w=1920"
                            alt="Healthcare team collaboration"
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
                                About TES Care Group
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-100">
                                Supporting aged-care providers with consistent, reliable staffing across Australia.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Who We Are with Image */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-royal-blue mb-6">
                                    Who We Are
                                </h2>
                                <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                                    <p>
                                        TES Care Group is a dedicated healthcare staffing provider focused on solving one of the industry's biggest challenges — consistent, reliable staffing. We connect qualified, compassionate professionals with aged-care facilities across Australia.
                                    </p>
                                    <p>
                                        Our mission is to ensure every aged-care facility has reliable access to skilled professionals when they need them. We understand that staffing gaps can impact care quality, which is why we've built our entire operation around reliability, compliance, and consistent support.
                                    </p>
                                    <p>
                                        Through streamlined processes, a robust network of qualified professionals, and 24/7 availability, we provide the consistent staffing support that aged-care providers need to deliver exceptional care to their residents.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1603839834958-ae04ebbb3ec1?q=80&w=1080"
                                        alt="Compassionate care professional with elderly patient"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-royal-blue/10 rounded-full blur-3xl -z-10"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto space-y-24">
                            {/* Mission Section - Content on Right, Images on Left */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="grid lg:grid-cols-2 gap-12 items-center"
                            >
                                {/* Images on Left */}
                                <div className="relative h-[600px]">
                                    {/* Larger Image - Healthcare planning/blueprints */}
                                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1080"
                                            alt="Healthcare planning and documentation"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    {/* Smaller Overlapping Image - Healthcare professionals */}
                                    <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                        <img
                                            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1080"
                                            alt="Healthcare professionals collaborating"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* Content on Right */}
                                <div>
                                    <h3 className="text-5xl md:text-6xl font-heading font-bold text-black mb-6">
                                        Our Mission
                                    </h3>
                                    <p className="text-lg text-gray-800 leading-relaxed mb-8">
                                        To provide exceptional healthcare staffing services that exceed client expectations through innovation, quality professionalism, and a commitment to excellence. We aim to build lasting relationships and create staffing solutions that enhance care quality in aged-care facilities. We aim to create solutions that inspire and improve the lives of our clients and their residents. Through precision, expertise, and a customer-centric approach, we strive to exceed expectations in every placement. Our dedication to integrity and excellence drives us to build lasting relationships and a legacy of trust.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-800 text-lg">Fostering Sustainable Growth and Quality Development</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-800 text-lg">Innovating for a Sustainable Future</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-800 text-lg">Customer-Centric Approach</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-800 text-lg">Building Stronger Communities</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Vision Section - Content on Left, Images on Right */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="grid lg:grid-cols-2 gap-12 items-center"
                            >
                                {/* Content on Left */}
                                <div className="lg:order-1">
                                    <h3 className="text-5xl md:text-6xl font-heading font-bold text-black mb-6">
                                        Our Vision
                                    </h3>
                                    <p className="text-lg text-gray-800 leading-relaxed mb-8">
                                        At TES Care Group, our vision is to redefine the future of healthcare staffing through innovation, excellence, and reliability. We aim to create staffing solutions that not only inspire but also contribute to the well-being of aged-care facilities and their residents. By embracing cutting-edge technology and best practices, we strive to lead the industry toward a smarter, more efficient future. Our focus is on delivering value, quality, and longevity in every placement we make. Together, we envision a world where reliable staffing empowers progress and transforms care quality.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-800 text-lg">Inspiring Modern Healthcare Staffing</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-800 text-lg">Pioneering Sustainable Staffing Solutions</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Images on Right */}
                                <div className="relative h-[600px] lg:order-2">
                                    {/* Larger Image - Healthcare professional with technology */}
                                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1080"
                                            alt="Healthcare professional using technology"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    {/* Smaller Overlapping Image - Healthcare team collaboration */}
                                    <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                        <img
                                            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=600"
                                            alt="Healthcare team collaboration"
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}

                <Principles />
               

                {/* Service Area with Image */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1623852516990-b92586f7dd5c?q=80&w=1920"
                            alt="Map of Australia aged care service areas"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 to-navy-dark/90"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            className="max-w-3xl mx-auto text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                                Where We Operate
                            </h2>
                            <p className="text-xl text-gray-100 leading-relaxed">
                                TES Care Group provides comprehensive staffing solutions across New South Wales, Victoria, Queensland, Western Australia, and South Australia. Our extensive national network ensures we can meet your staffing needs in metropolitan, regional, and rural areas, providing consistent, reliable support wherever your facility is located.
                            </p>
                        </motion.div>
                    </div>
                </section>

            </div>
        </>
    );
};
