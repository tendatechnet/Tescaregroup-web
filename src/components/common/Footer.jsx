import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold mb-4">TES Care Group</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Reliable aged-care staffing solutions across Australia. Connecting qualified professionals with facilities that need them.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-gold transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-gold transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-300 hover:text-gold transition">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/request-staff" className="text-gray-300 hover:text-gold transition">
                                    Request Staff
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-gold transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Temporary Staffing</li>
                            <li>Permanent Placements</li>
                            <li>Emergency Call-Outs</li>
                            <li>Specialized Care Roles</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Phone className="flex-shrink-0 mt-1" size={18} />
                                <a href="tel:+61-XXX-XXX-XXX" className="text-gray-300 hover:text-gold transition">
                                    +61 XXX XXX XXX
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="flex-shrink-0 mt-1" size={18} />
                                <a href="mailto:info@tescaregroup.com.au" className="text-gray-300 hover:text-gold transition break-all">
                                    info@tescaregroup.com.au
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-300">
                                    Serving VIC, QLD & NSW
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-300">
                        © {currentYear} TES Care Group. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
