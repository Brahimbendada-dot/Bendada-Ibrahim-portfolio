import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-950 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4 mb-12">
                    <div className="bg-gray-700 px-4 py-1 rounded-full">
                        <span className="text-sm font-medium text-gray-300">
                            About me
                        </span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between gap-12">
                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 flex justify-center md:justify-start relative w-full"
                    >
                        <div className="relative w-64 h-72 md:w-[400px] md:h-[480px] mx-auto md:mx-0">
                            <div className="absolute inset-0 bg-gray-700 border-8 border-gray-900 transform -translate-x-4 translate-y-4 z-0"></div>
                            <div className="absolute inset-0 bg-gray-600 border-8 border-gray-900 z-10 overflow-hidden">
                                <img
                                    src="/assets/ibrahim_bendada.png"
                                    alt="About Me"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = 'https://placehold.co/400x500?text=About+Me' }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 space-y-6"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Curious about me? Here you have it:
                        </h2>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                I'm a passionate <a href="#" className="underline decoration-green-500 underline-offset-4">Computer Science</a> and full-stack developer specializing in both <strong>web</strong> and <strong>mobile</strong> development. I work primarily with <strong>React.js, Node.js</strong>, and <strong>Flutter (Dart)</strong>, and I love bringing together the technical and visual aspects of digital products. User experience, pixel-perfect design, accessibility, and writing clean, readable, high-performance code truly matter to me.
                            </p>

                            <p>
                                I began my journey as a web developer in 2020 and since then, I’ve continuously grown and evolved by taking on new challenges and learning modern technologies. With over <strong>5 years of experience</strong>, I now build scalable and high-quality web and mobile applications using tools and frameworks such as <strong>React, Next.js, TypeScript, Node.js, Flutter, Tailwind CSS</strong>, and more.
                            </p>

                            <p>
                                I’m a progressive thinker who enjoys working on products end-to-end—from ideation and system design all the way to development, optimization, and deployment.
                            </p>

                            <p>
                                When I’m not in full-on developer mode, you’ll usually find me exploring startup ecosystems, following tech discussions, or learning from other builders. I enjoy discovering how products are built and scaled, and I like sharing knowledge and ideas within the developer community.
                            </p>

                            <p>
                                Finally, some quick bits about me.
                            </p>

                            <div className="grid grid-cols-2 gap-2 list-disc pl-4">
                                <li>Master’s degree in Computer Engineering</li>
                                <li>Full-stack Web & Mobile Developer</li>
                                <li>Freelancer / Startup Builder</li>
                                <li>Continuous learner</li>
                            </div>

                            <p>
                                One last thing — I’m available for freelance and contract work. If you have an idea or a project in mind, feel free to reach out and say hello.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
