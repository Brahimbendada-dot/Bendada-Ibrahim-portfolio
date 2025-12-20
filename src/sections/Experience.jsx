import React from 'react';
import { experiences } from '../data/experiences';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="work" className="py-16 md:py-24 bg-gray-950 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4 mb-12">
                    <div className="bg-gray-700 px-4 py-1 rounded-full">
                        <span className="text-sm font-medium text-gray-300">
                            Experience
                        </span>
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
                        Here is a quick summary of my most recent experiences:
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-700"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                <div className="flex-shrink-0">
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="h-10 w-10 object-contain"
                                        onError={(e) => { e.target.src = 'https://placehold.co/100x32?text=Logo' }}
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row md:justify-between w-full gap-2 md:gap-8">
                                    <h3 className="text-xl font-bold text-white">
                                        {exp.role}
                                    </h3>
                                    <span className="text-gray-400 font-medium whitespace-nowrap">
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>
                            </div>

                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-0 md:ml-32">
                                {exp.summary.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
