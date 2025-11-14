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
                                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-navy/10 rounded-full blur-3xl -z-10"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto space-y-12">
                            {/* Mission Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card className="bg-gradient-to-br from-warm-beige to-powder-blue border-none">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-royal-blue rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Heart size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-heading font-bold text-royal-blue mb-4">
                                                Our Mission
                                            </h3>
                                            <p className="text-gray-800 leading-relaxed text-lg mb-6 font-medium">
                                                To ensure every aged-care facility has reliable access to skilled professionals when they need them, enabling consistent, high-quality care for residents across Australia.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-royal-blue rounded-full mt-2 flex-shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-semibold text-royal-blue mb-1">Reliable Access</h4>
                                                        <p className="text-gray-700 text-sm">Ensuring facilities always have access to qualified staff when needed</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-royal-blue rounded-full mt-2 flex-shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-semibold text-royal-blue mb-1">Skilled Professionals</h4>
                                                        <p className="text-gray-700 text-sm">Connecting facilities with fully vetted, qualified healthcare workers</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-royal-blue rounded-full mt-2 flex-shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-semibold text-royal-blue mb-1">Consistent Support</h4>
                                                        <p className="text-gray-700 text-sm">Providing ongoing, reliable staffing solutions for long-term success</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-royal-blue rounded-full mt-2 flex-shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-semibold text-royal-blue mb-1">Quality Care</h4>
                                                        <p className="text-gray-700 text-sm">Enabling facilities to deliver exceptional care through consistent staffing</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Vision Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <Card className="h-full bg-gradient-to-br from-navy to-navy-dark text-white border-none">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 bg-warm-beige rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Award size={24} className="text-royal-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-heading font-bold mb-4">
                                                Our Vision
                                            </h3>
                                            <p className="text-gray-100 leading-relaxed text-lg mb-6">
                                                To be Australia's most trusted staffing partner for aged-care providers, setting the industry standard for reliability, compliance, and comprehensive service coverage.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-warm-beige rounded-full mt-2 flex-shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-semibold text-warm-beige mb-1">Industry Leadership</h4>
                                                        <p className="text-gray-300 text-sm">Setting the standard for aged-care staffing excellence</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-warm-beige rounded-full mt-2 flex-shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-semibold text-warm-beige mb-1">National Coverage</h4>
                                                        <p className="text-gray-300 text-sm">Serving facilities across all Australian states and territories</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-warm-beige rounded-full mt-2 flex-shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-semibold text-warm-beige mb-1">Trusted Partnership</h4>
                                                        <p className="text-gray-300 text-sm">Building long-term relationships with aged-care providers</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-warm-beige rounded-full mt-2 flex-shrink-0"></div>
                                                    <div>
                                                        <h4 className="font-semibold text-warm-beige mb-1">Comprehensive Service</h4>
                                                        <p className="text-gray-300 text-sm">Offering complete staffing solutions from temporary to contract roles</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
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
                                Our Core Values
                            </h2>
                            <p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
                                The principles behind our commitment to quality aged-care
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {values.map((value, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="relative group"
                                    >
                                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2">
                                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} text-white mb-6 shadow-lg`}>
                                                <value.icon size={32} />
                                            </div>
                                            <h3 className="text-xl font-heading font-semibold text-white mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
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
                                TES Care Group provides comprehensive staffing solutions across New South Wales, Victoria, Queensland, Western Australia, and South Australia. Our extensive national network ensures we can meet your staffing needs in metropolitan, regional, and rural areas, providing consistent, reliable support wherever your facility is located.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <ContactStrip />
            </div>
        </>
    );
};
