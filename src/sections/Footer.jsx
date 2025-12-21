import React from 'react';
import { Mail, Phone, Copy, Github, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-950 py-12 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-8">
                    <div className="bg-gray-700 px-4 py-1 rounded-full">
                        <span className="text-sm font-medium text-gray-300">
                            Get in touch
                        </span>
                    </div>

                    <p className="text-lg text-center text-gray-300 max-w-xl">
                        What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                    </p>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                        <div className="flex items-center space-x-3 text-white text-xl md:text-2xl font-bold">
                            <Mail className="w-6 h-6 md:w-8 md:h-8" />
                            <span>brahimbendada024@gmail.com</span>
                            <Copy className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-200" />
                        </div>
                        <div className="flex items-center space-x-3 text-white text-xl md:text-2xl font-bold">
                            <Phone className="w-6 h-6 md:w-8 md:h-8" />
                            <span>+213 555 92 45 31</span>
                            <Copy className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-200" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-gray-300">
                            You may also find me on these platforms!
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/Brahimbendada-dot" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.facebook.com/brahim.bendada.54?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/ibrahim-bendada-5021a2243/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div className="text-sm text-gray-400 text-center">
                        <p>© 2023 | Designed and coded with by Ibrahim Bendada</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
