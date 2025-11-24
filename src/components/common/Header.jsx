import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import tesCareGroupLogo from '../../assets/tes-care-group-logo.png';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Request Staff', path: '/request-staff' },
    // { name: 'Apply', path: '/apply' },
    { name: 'Contact', path: '/contact' }
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <nav className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={tesCareGroupLogo}
                            alt="TES Care Group - Together Empowering Support"
                            className="h-12 md:h-16 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`
                  font-heading font-medium transition-all duration-300 px-4 py-2 rounded-lg
                  ${isActive(link.path)
                                        ? 'text-royal-blue bg-powder-blue/30 font-semibold'
                                        : 'text-gray-700 hover:text-royal-blue hover:bg-powder-blue/10'
                                    }
                `}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-royal-blue hover:bg-powder-blue/20 rounded-lg transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-3 bg-white">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`
                      block py-3 px-4 rounded-lg font-heading font-medium transition-all
                      ${isActive(link.path)
                                                ? 'bg-royal-blue text-white'
                                                : 'text-gray-700 hover:bg-powder-blue'
                                            }
                    `}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};
