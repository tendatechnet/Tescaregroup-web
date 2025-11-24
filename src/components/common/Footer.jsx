import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, UserPlus } from 'lucide-react';
import tesCareGroupLogo from '../../assets/tes-care-group-logo.png';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-royal-blue via-royal-blue-dark to-royal-blue-light text-white">
            <div className="container mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <img
                            src={tesCareGroupLogo}
                            alt="TES Care Group - Together Empowering Support"
                            className="h-16 mb-6 w-auto object-contain brightness-0 invert"
                        />
                        <p className="text-white/90 leading-relaxed text-base">
                            Dedicated healthcare staffing across Australia. We connect qualified, compassionate professionals with aged-care facilities, disability services, and community organisations nationwide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-white/90 hover:text-white transition-colors duration-300 inline-block hover:translate-x-1">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white/90 hover:text-white transition-colors duration-300 inline-block hover:translate-x-1">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-white/90 hover:text-white transition-colors duration-300 inline-block hover:translate-x-1">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/request-staff" className="text-white/90 hover:text-white transition-colors duration-300 inline-block hover:translate-x-1">
                                    Request Staff
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white/90 hover:text-white transition-colors duration-300 inline-block hover:translate-x-1">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-6 text-white">Our Services</h4>
                        <ul className="space-y-3 text-white/90">
                            <li className="hover:text-white transition-colors duration-300">Temporary Staffing</li>
                            <li className="hover:text-white transition-colors duration-300">Contract Staffing</li>
                            <li className="hover:text-white transition-colors duration-300">Emergency Call-Outs</li>
                            <li className="hover:text-white transition-colors duration-300">Specialized Care Roles</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='lg:col-span-2'>
                        <h4 className="text-lg font-heading font-semibold mb-6 text-white lg:col-span-2">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="flex-shrink-0 mt-1 text-white/80" size={20} />
                                <a href="tel:+61430186328" className="text-white/90 hover:text-white transition-colors duration-300">
                                    +61 430 186 328
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="flex-shrink-0 mt-1 text-white/80" size={20} />
                                <a href="mailto:info@tescaregroup.com.au" className="text-white/90 hover:text-white transition-colors duration-300 break-all">
                                    info@tescaregroup.com.au
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="flex-shrink-0 mt-1 text-white/80" size={20} />
                                <span className="text-white/90">
                                    Serving NSW, VIC, QLD, WA, SA
                                </span>
                            </li>
                            <li className="text-white/80 text-sm">
                                Available 24/7 for staffing support
                            </li>
                        </ul>
                        <div className="mt-6">
                            <Link to="/request-staff" size="lg" className="inline-flex items-center gap-2 bg-[#fcaf50] hover:bg-[#fcaf50]/90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                                <UserPlus size={20} className="mr-2" />
                                Request Staff
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/80 text-sm">
                            TES Care Group © {currentYear}. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            <Link to="/terms" className="text-white/80 hover:text-white text-sm transition-colors duration-300">
                                Terms & Conditions
                            </Link>
                            <Link to="/privacy" className="text-white/80 hover:text-white text-sm transition-colors duration-300">
                                Privacy
                            </Link>
                            <Link to="/cookies" className="text-white/80 hover:text-white text-sm transition-colors duration-300">
                                Cookies
                            </Link>
                            <Link to="/disclaimer" className="text-white/80 hover:text-white text-sm transition-colors duration-300">
                                Disclaimer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
