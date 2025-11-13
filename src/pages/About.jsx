import React from 'react';
import SEO from '../components/common/SEO';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card } from '../components/common/Card';
import { ContactStrip } from '../components/common/ContactStrip';
import { Heart, Users, Award, MapPin } from 'lucide-react';

const values = [
    {
        icon: Heart,
        title: 'Care',
        description: 'We prioritize compassionate, person-centered care in everything we do',
        gradient: 'from-red-500 to-pink-500',
    },
    {
        icon: Users,
        title: 'Professionalism',
        description: 'Maintaining the highest standards of conduct and expertise',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Award,
        title: 'Reliability',
        description: 'Consistent, dependable service you can count on',
        gradient: 'from-amber-500 to-orange-500',
    },
    {
        icon: MapPin,
        title: 'Community',
        description: 'Building strong partnerships with facilities and care providers',
        gradient: 'from-green-500 to-emerald-500',
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
                                Your trusted partner in aged-care staffing excellence
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
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                                    Who We Are
                                </h2>
                                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        TES Care Group is a leading aged-care staffing agency with a singular mission: to connect qualified healthcare professionals with facilities that need them, ensuring the highest quality of care for Australia's elderly community.
                                    </p>
                                    <p>
                                        Founded on the principles of excellence, reliability, and compassion, we've built our reputation by consistently delivering skilled professionals who share our commitment to outstanding aged care.
                                    </p>
                                    <p>
                                        Our team understands the challenges faced by aged-care facilities in maintaining adequate staffing levels. That's why we've developed streamlined processes, maintain a robust network of qualified professionals, and offer 24/7 support to ensure you're never left short-handed.
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
                                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-navy/10 rounded-full blur-3xl -z-10"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card className="h-full bg-gradient-to-br from-navy to-navy-dark text-white border-none">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Award size={24} className="text-navy" />
                                        </div>
                                        <h3 className="text-3xl font-heading font-bold">
                                            Our Vision
                                        </h3>
                                    </div>
                                    <p className="text-gray-100 leading-relaxed text-lg">
                                        To be Australia's most trusted aged-care staffing partner, setting the industry standard for quality, reliability, and compassionate care delivery.
                                    </p>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <Card className="h-full bg-gradient-to-br from-gold to-gold-light border-none">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Heart size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-3xl font-heading font-bold text-navy">
                                            Our Mission
                                        </h3>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        To ensure every aged-care facility has access to qualified, compassionate professionals when they need them, enabling exceptional care for residents across Australia.
                                    </p>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy text-center mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {values.map((value, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <Card className="text-center h-full group hover:shadow-2xl transition-all duration-300">
                                            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                <value.icon size={36} />
                                            </div>
                                            <h3 className="text-2xl font-heading font-semibold text-navy mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {value.description}
                                            </p>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

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
                                TES Care Group provides comprehensive staffing solutions across Victoria, Queensland, and New South Wales, serving aged-care facilities in metropolitan and regional areas. Our extensive network ensures we can meet your staffing needs wherever you are.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <ContactStrip />
            </div>
        </>
    );
};
