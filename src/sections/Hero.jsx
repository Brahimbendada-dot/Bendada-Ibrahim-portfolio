import React from 'react';
import { MapPin, Github, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-950 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 space-y-8"
                    >
                        <h1 className="text-4xl md:text-6xl font-semibold text-white">
                            Hi, I’m Ibrahim Bendada
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 max-w-xl">
                            I’m a full-stack developer with experience in web and mobile development, specializing in React.js, Node.js, and Flutter (Dart). I focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and fully responsive across platforms—with more than 5 years of experience building web and mobile applications.
                        </p>

                        <div className="space-y-2 text-gray-300">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                <span>Sétif, Algeria</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>Available for new projects</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/Brahimbendada-dot" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.facebook.com/brahim.bendada.54?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/ibrahim-bendada-5021a2243/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 flex justify-center md:justify-end relative"
                    >
                        <div className="relative w-64 h-72 md:w-80 md:h-96">
                            <div className="absolute inset-0 bg-gray-700 border-8 border-gray-900 transform translate-x-4 translate-y-4 z-0"></div>
                            <div className="absolute inset-0 bg-gray-600 border-8 border-gray-900 z-10 overflow-hidden">
                                <img
                                    src="/assets/profile.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = 'https://placehold.co/400x500?text=Profile' }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
