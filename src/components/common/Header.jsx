import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Request Staff', path: '/request-staff' },
    { name: 'Contact', path: '/contact' }
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <h1 className="text-2xl md:text-3xl font-heading font-bold text-[#162660] tracking-tight">
                            TES Care Group
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`
                  font-heading font-medium transition-all pb-1
                  ${isActive(link.path)
                                        ? 'text-[#162660] border-b-2 border-[#162660]'
                                        : 'text-gray-700 hover:text-[#162660]'
                                    }
                `}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-[#162660]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
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
                                                ? 'bg-[#162660] text-white'
                                                : 'text-gray-700 hover:bg-[#D0E6FD]'
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
