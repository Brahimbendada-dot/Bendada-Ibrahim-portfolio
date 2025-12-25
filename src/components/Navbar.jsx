import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-2xl font-bold text-white">
                            {'Ibrahim Bendada'}
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="h-6 w-px bg-gray-700"></div>
                        <a
                            href="/cv_ibrahim_bendada_2026.pdf"
                            download="cv_ibrahim_bendada.pdf"
                            className="bg-white text-gray-900 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden space-x-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-950 border-b border-gray-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4">
                                <a
                                    href="/cv_ibrahim_bendada_2026.pdf"
                                    download="cv_ibrahim_bendada.pdf"
                                    className="block w-full text-center bg-white text-gray-900 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
