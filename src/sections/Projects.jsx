import React, { useRef, useEffect, useState } from 'react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Scroll to specific index
    const scrollToIndex = (index) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.children[0].offsetWidth;
            const gap = 32; // 2rem gap
            const scrollPosition = index * (cardWidth + gap);

            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.children[0].offsetWidth;
            const gap = 32;
            const scrollPosition = container.scrollLeft;
            const index = Math.round(scrollPosition / (cardWidth + gap));

            if (index !== activeIndex && index >= 0 && index < projects.length) {
                setActiveIndex(index);
            }
        }
    };

    const scroll = (direction) => {
        const newIndex = direction === 'left'
            ? Math.max(0, activeIndex - 1)
            : Math.min(projects.length - 1, activeIndex + 1);
        scrollToIndex(newIndex);
    };

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                const newIndex = (activeIndex + 1) % projects.length;
                scrollToIndex(newIndex);
            }, 4000);
        }
        return () => clearInterval(interval);
    }, [activeIndex, isHovered]);

    return (
        <section id="projects" className="py-16 md:py-24 bg-gray-950 transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 mb-12">
                    <div className="bg-gray-700 px-4 py-1 rounded-full">
                        <span className="text-sm font-medium text-gray-300">
                            Projects
                        </span>
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
                        Some of the noteworthy projects I have built:
                    </p>
                </div>

                <div className="relative group/container max-w-5xl mx-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover/container:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed"
                        disabled={activeIndex === 0}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover/container:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed"
                        disabled={activeIndex === projects.length - 1}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto gap-8 pb-12 pt-12 px-4 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projects.map((project, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`flex-shrink-0 w-full md:w-[400px] snap-center relative transition-all duration-500 ease-out ${isActive ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-40 grayscale-[50%] z-0'
                                        }`}
                                >
                                    {/* Spotlight Shadow Effect */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gray-800/20 blur-3xl rounded-xl -z-10 transform scale-110 transition-all duration-500"></div>
                                    )}

                                    <div className={`bg-gray-900 rounded-xl overflow-hidden border flex flex-col h-full transition-all duration-500 ${isActive ? 'shadow-2xl shadow-gray-900/50 border-gray-700' : 'shadow-none border-gray-800'
                                        }`}>
                                        {/* Project Image */}
                                        <div className="relative aspect-video overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Project+Screenshot' }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                                        </div>

                                        {/* Project Content */}
                                        <div className="p-6 flex flex-col flex-grow relative">
                                            <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.slice(0, 5).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium border border-gray-700"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-4 mt-auto">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-2 transition-colors text-sm font-medium ${isActive ? 'text-gray-300 hover:text-white' : 'text-gray-500'
                                                        }`}
                                                >
                                                    <Github className="w-5 h-5" />
                                                    <span>Code</span>
                                                </a>
                                                <div className="flex-grow"></div>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`p-2 rounded-lg transition-colors ${isActive ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-500 cursor-default'
                                                        }`}
                                                    title="Live Demo"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-gray-200 w-6' : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
