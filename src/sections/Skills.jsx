import React from 'react';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-24 bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4 mb-12">
                    <div className="bg-gray-700 px-4 py-1 rounded-full">
                        <span className="text-sm font-medium text-gray-300">
                            Skills
                        </span>
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
                        The skills, tools and technologies I am really good at:
                    </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-8 gap-x-4 md:gap-x-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center space-y-2 group"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                                    onError={(e) => {
                                        e.target.src = `https://placehold.co/64x64?text=${skill.name.charAt(0)}`;
                                    }}
                                />
                            </div>
                            <span className="text-base md:text-lg text-gray-300 font-medium">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
