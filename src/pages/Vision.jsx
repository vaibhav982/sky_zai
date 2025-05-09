import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FiFeather, FiGlobe, FiUsers, FiZap, FiActivity } from "react-icons/fi";

import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import AnimatedText from "../components/ui/AnimatedText";

const VisionPoint = ({ title, description, icon, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 * index }}
            className="flex flex-col"
        >
            <div className="bg-gradient-to-br from-dark-800 to-dark-700 p-8 md:p-10 rounded-3xl backdrop-blur-lg border border-light-100/5 h-full flex flex-col group hover:border-primary-500/20 transition-all duration-500">
                <div className="mb-6 p-4 rounded-2xl bg-primary-500/10 w-fit group-hover:bg-primary-500/15 transition-all duration-500">
                    {React.cloneElement(icon, { size: 28 })}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                    {title}
                </h3>
                <p className="text-light-300 leading-relaxed flex-grow">{description}</p>
            </div>
        </motion.div>
    );
};

const Vision = () => {
    // Refs for scroll animations
    const heroRef = useRef(null);
    const keyComponentsRef = useRef(null);
    const fullVisionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    // Vision points data
    const visionPoints = [
        {
            title: "Decentralized Global Intelligence",
            description: "A true global Noosphere that emerges from the contributions of a worldwide network, creating collective intelligence beyond what any centralized system could achieve.",
            icon: <FiGlobe className="text-primary-400" />,
        },
        {
            title: "Energy as Currency",
            description: "Grounding our economy in energy—the most fundamental unit of exchange in both natural and artificial systems—creates a direct link between computation and tangible value.",
            icon: <FiZap className="text-primary-400" />,
        },
        {
            title: "Transparent Governance",
            description: "Open, fair, and distributed power structures ensure our systems remain resistant to centralization, with transparent processes that align incentives across all participants.",
            icon: <FiUsers className="text-primary-400" />,
        },
        {
            title: "Ecological Harmony",
            description: "Systems designed to operate in symbiotic harmony with Earth's biosphere, actively contributing to understanding, preserving, and regenerating natural ecosystems.",
            icon: <FiFeather className="text-primary-400" />,
        },
        {
            title: "Human Empowerment",
            description: "Technology that enhances and extends human capabilities, augmenting creativity and enabling new forms of collaboration that allow individuals to reach their full potential.",
            icon: <FiActivity className="text-primary-400" />,
        },
        {
            title: "Sustainable Co-Evolution",
            description: "A future where human society, technology, and the natural world advance together in balance, enriching all life on Earth through a new layer of planetary intelligence.",
            icon: <FiActivity className="text-primary-400" />,
        },
    ];

    // Full vision sections
    const fullVisionSections = [
        {
            title: "Self-Sustaining Intelligence",
            content: "The Noosphere emerges from the collective contributions of a worldwide community, creating a system that continuously learns, adapts, and evolves beyond what any individual or centralized organization could achieve."
        },
        {
            title: "Energy as the Fundamental Unit",
            content: "We ground our economy in the physical reality of energy. By transmuting energy into collective wisdom through verified useful work, we create a direct link between computational effort and value creation rooted in physical reality."
        },
        {
            title: "Transparent and Equitable Economy",
            content: "Our ecosystem fosters a transparent energy-credit economy that democratizes access to advanced AI capabilities, ensures fair compensation for contributors, and creates a stable foundation for sustainable growth."
        },
        {
            title: "Human Empowerment",
            content: "Our technology exists to amplify human potential, extending capabilities, augmenting creativity, and enabling new forms of collaboration and problem-solving that enhance rather than replace human intelligence."
        },
        {
            title: "Biospheric Harmony",
            content: "SkyZai operates in symbiotic harmony with Earth's biosphere, actively contributing to understanding, preserving, and regenerating natural ecosystems by directing the Noosphere's intelligence toward ecological challenges."
        },
        {
            title: "Sustainable Co-Evolution",
            content: "Our vision is one of sustainable co-evolution where human society, technology, and the natural world advance together in balance, creating a new layer of planetary intelligence that enriches all life on Earth."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="h-screen relative overflow-hidden flex items-center justify-center" ref={heroRef}>
                <motion.div
                    style={{ opacity: heroOpacity, y: heroY }}
                    className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-800 z-0"
                />

                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,47,189,0.1),transparent_50%)]" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl opacity-60" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6"
                        >
                            <span className="inline-block px-6 py-2 rounded-full bg-primary-500/10 text-primary-400 font-medium text-sm tracking-wider backdrop-blur-sm border border-primary-500/20">
                                OUR VISION
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                                A decentralized<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                                    global intelligence
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-light-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light"
                        >
                            Where energy transforms into collective wisdom, fostering a transparent economy that empowers humanity in harmony with Earth's biosphere.
                        </motion.p>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-12 left-0 right-0 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-light-400 text-sm mb-2">Scroll to explore</span>
                        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L12 10L22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            {/* Vision Points Section */}
            <Section className="py-32" ref={keyComponentsRef}>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="mb-4"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium backdrop-blur-sm border border-primary-500/20">
                                KEY COMPONENTS
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            Building blocks of our vision
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-light-300 text-lg leading-relaxed max-w-3xl mx-auto"
                        >
                            Our vision is built on interconnected pillars that together form the foundation of the SkyZai ecosystem, creating a harmonious balance between technology, humanity, and nature.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visionPoints.map((point, index) => (
                            <VisionPoint
                                key={point.title}
                                title={point.title}
                                description={point.description}
                                icon={point.icon}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Full Vision Statement */}
            <Section className="py-32 bg-gradient-to-b from-dark-900 to-dark-800" ref={fullVisionRef}>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="mb-4"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium backdrop-blur-sm border border-primary-500/20">
                                THE FULL VISION
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            A new paradigm for collective intelligence
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-light-300 text-lg leading-relaxed max-w-3xl mx-auto"
                        >
                            Our vision represents a fundamental reimagining of how humans, technology, and nature can interact in harmony to create unprecedented value.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        {fullVisionSections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 * index }}
                                viewport={{ once: true, margin: "-100px 0px" }}
                                className="max-w-xl"
                            >
                                <h3 className="text-2xl font-semibold text-primary-400 mb-4 tracking-tight">
                                    {section.title}
                                </h3>
                                <p className="text-light-300 text-lg leading-relaxed">
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Hexagon graphic */}
                    <div className="mt-32 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="relative w-full max-w-lg aspect-square"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full animate-pulse-slow" />
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 577 555"
                                        className="relative z-10 fill-primary-300"
                                    >
                                        <path d="M336.339 83.2135L432.354 138.648C432.37 95.648 432.38 70.7173 432.39 27.7173L336.339 83.2135ZM336.339 83.2135L432.354 138.648L336.303 194.144L336.339 83.2135Z" />
                                        <path d="M480.433 221.923L480.433 332.792C512.433 315.075 544.52 295.358 576.52 277.358L480.433 221.923ZM480.433 221.923L480.433 332.792L384.346 277.358L480.433 221.923Z" />
                                        <path d="M432.354 416.067L336.339 471.502C368.365 489.25 400.39 509.998 432.39 526.998L432.354 416.067ZM432.354 416.067L336.339 471.502L336.303 360.571L432.354 416.067Z" />
                                        <path d="M240.181 471.502L144.165 416.067C144.155 459.533 144.14 483.998 144.13 526.998L240.181 471.502ZM240.181 471.502L144.166 416.067L240.217 360.571L240.181 471.502Z" />
                                        <path d="M96.0866 332.792L96.0866 221.923C64.0433 239.64 32.0 259.358 0 277.358L96.0866 332.792ZM96.0867 332.792L96.0867 221.923L192.173 277.358L96.0867 332.792Z" />
                                        <path d="M144.165 138.648L240.181 83.2134C208.155 65.4654 176.13 45.7173 144.13 27.7173L144.165 138.648ZM144.165 138.648L240.181 83.2135L240.216 194.144L144.165 138.648Z" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <div className="mt-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button to="/mission" variant="primary" size="lg">
                                Explore Our Mission
                            </Button>
                            <Button to="/join" variant="glass" size="lg">
                                Join the Movement
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Vision; 