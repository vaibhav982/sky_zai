import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    FiZap,
    FiUsers,
    FiGlobe,
    FiShield,
    FiCpu,
    FiServer,
    FiArrowRight
} from "react-icons/fi";

import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import AnimatedText from "../components/ui/AnimatedText";

// Reusable mission pillar component
const MissionPillar = ({ title, description, icon, points, variant, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 * index }}
            className="flex flex-col"
        >
            <div className={`h-full p-8 md:p-10 rounded-3xl backdrop-blur-lg border border-light-100/5 transition-all duration-500 hover:border-primary-500/20 ${variant === "primary" ? "bg-gradient-to-br from-primary-500/10 to-dark-800" : "bg-gradient-to-br from-dark-800 to-dark-700"
                }`}>
                <div className="mb-6 p-4 rounded-2xl bg-primary-500/10 w-fit">
                    {React.cloneElement(icon, { size: 28 })}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                    {title}
                </h3>
                <p className="text-light-300 mb-8 leading-relaxed">{description}</p>

                <ul className="space-y-4">
                    {points.map((point, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * i + 0.5 }}
                            viewport={{ once: true }}
                            className="flex items-start group"
                        >
                            <span className="text-primary-400 mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover:text-primary-300">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 1L5 9L1 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="text-light-200 text-sm leading-relaxed transition-all duration-300 group-hover:text-white">{point}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

// Reusable execution area component
const ExecutionArea = ({ title, description, icon, items, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.15 * index }}
            className="flex flex-col"
        >
            <div className="h-full p-8 md:p-10 rounded-3xl backdrop-blur-lg border border-light-100/5 bg-gradient-to-br from-dark-700 to-dark-800 transition-all duration-500 hover:border-primary-500/20">
                <div className="mb-6 p-4 rounded-2xl bg-primary-500/10 w-fit">
                    {React.cloneElement(icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                    {title}
                </h3>
                <p className="text-light-300 mb-8">{description}</p>

                <ul className="space-y-3.5">
                    {items.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.08 * i + 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-center group"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-3 flex-shrink-0 transition-all duration-300 group-hover:w-2 group-hover:h-2" />
                            <span className="text-light-200 text-sm transition-all duration-300 group-hover:text-white">{item}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Mission = () => {
    // Refs for scroll animations
    const heroRef = useRef(null);
    const pillarsRef = useRef(null);
    const executionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    // Mission pillars data
    const missionPillars = [
        {
            title: "Energy-Based Economy",
            description: "Grounding our unit of account and economic exchange in the fundamental physical reality of energy.",
            icon: <FiZap className="text-primary-400" />,
            points: [
                "Establish energy as the most reliable, transparent unit of value",
                "Create direct connections between energy input and computational output",
                "Build economic systems that reflect physical reality",
                "Enable fair valuation of computational work"
            ],
            variant: "primary"
        },
        {
            title: "Useful Work Incentivization",
            description: "Incentivizing the transmutation of energy into verified \"useful work\" – primarily the continuous training and operation of the AI Noosphere.",
            icon: <FiCpu className="text-primary-400" />,
            points: [
                "Develop verifiable proof-of-useful-work mechanisms",
                "Reward contributors based on meaningful computational contributions",
                "Focus incentives on Noosphere development and operation",
                "Create transparent verification and reward distribution"
            ],
            variant: "glass"
        },
        {
            title: "Directed Intelligence",
            description: "Directing the Noosphere's emergent intelligence towards solving complex human challenges and contributing to the understanding and regeneration of natural ecosystems.",
            icon: <FiGlobe className="text-primary-400" />,
            points: [
                "Guide AI capabilities toward human-beneficial applications",
                "Develop specialized ecological intelligence modules",
                "Create systems for collaboratively directing intelligence efforts",
                "Establish impact measurement frameworks"
            ],
            variant: "primary"
        },
        {
            title: "Open & Decentralized Governance",
            description: "Ensuring the system remains open, fair, and resistant to centralized control through distributed power and transparent governance.",
            icon: <FiShield className="text-primary-400" />,
            points: [
                "Build decentralized governance mechanisms",
                "Implement transparent decision-making processes",
                "Prevent power concentration through architectural design",
                "Ensure fair access and participation rights"
            ],
            variant: "glass"
        },
    ];

    // Execution areas data
    const executionAreas = [
        {
            title: "Technology Development",
            description: "Building the foundational systems that make the Noosphere possible",
            icon: <FiServer className="text-primary-400" />,
            items: [
                "Hybrid consensus DLT platform",
                "Energy-based AI model frameworks",
                "Decentralized physical infrastructure",
                "Proof-of-useful-work verification systems",
                "Secure, efficient smart contracts",
            ]
        },
        {
            title: "Community Building",
            description: "Cultivating the diverse network of contributors who bring the ecosystem to life",
            icon: <FiUsers className="text-primary-400" />,
            items: [
                "Global contributor recruitment",
                "Training and onboarding programs",
                "Collaborative development environments",
                "Governance participation structures",
                "Recognition and reward systems",
            ]
        },
        {
            title: "Impact Creation",
            description: "Focusing our efforts on applications with meaningful positive impact",
            icon: <FiGlobe className="text-primary-400" />,
            items: [
                "Ecological intelligence systems",
                "Human-AI collaboration tools",
                "Transparent impact measurement",
                "Public goods funding allocation",
                "Cross-sector impact partnerships",
            ]
        },
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
                                OUR MISSION
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                                Empowering a<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                                    global network
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-light-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light"
                        >
                            To collaboratively build, govern, and utilize a universally accessible AI Noosphere that transmutes energy into collective wisdom.
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

            {/* Mission Pillars */}
            <Section className="py-32" ref={pillarsRef}>
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
                                CORE PILLARS
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            Foundation of our mission
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-light-300 text-lg leading-relaxed max-w-3xl mx-auto"
                        >
                            Our mission is built on four interconnected pillars that guide all our efforts in building the SkyZai ecosystem.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {missionPillars.map((pillar, index) => (
                            <MissionPillar
                                key={pillar.title}
                                title={pillar.title}
                                description={pillar.description}
                                icon={pillar.icon}
                                points={pillar.points}
                                variant={pillar.variant}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* How We Execute */}
            <Section className="py-32 bg-gradient-to-b from-dark-900 to-dark-800" ref={executionRef}>
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
                                HOW WE EXECUTE
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            Practical implementation
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-light-300 text-lg leading-relaxed max-w-3xl mx-auto"
                        >
                            We translate our mission into concrete actions through a comprehensive approach across multiple domains.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {executionAreas.map((area, index) => (
                            <ExecutionArea
                                key={area.title}
                                title={area.title}
                                description={area.description}
                                icon={area.icon}
                                items={area.items}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Join Our Mission */}
            <Section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="relative overflow-hidden rounded-3xl">
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-dark-800/95 to-dark-800/90" />
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10 p-8 md:p-16">
                            <div className="flex flex-col lg:flex-row gap-16 items-center">
                                <div className="w-full lg:w-3/5 space-y-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true, margin: "-100px 0px" }}
                                        className="mb-2"
                                    >
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium backdrop-blur-sm border border-primary-500/20">
                                            JOIN OUR MISSION
                                        </span>
                                    </motion.div>

                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        viewport={{ once: true, margin: "-100px 0px" }}
                                        className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                                    >
                                        Be Part of Building the Noosphere
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: true, margin: "-100px 0px" }}
                                        className="text-light-300 text-lg leading-relaxed"
                                    >
                                        Our mission requires diverse contributions from around the world. Whether you're a developer, researcher, content creator, or simply someone passionate about our vision, there's a place for you in the SkyZai ecosystem.
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        viewport={{ once: true, margin: "-100px 0px" }}
                                        className="flex flex-wrap gap-4"
                                    >
                                        <Button to="/join" icon={<FiArrowRight />} size="lg">
                                            Join as a Contributor
                                        </Button>
                                        <Button to="/objectives" variant="glass" size="lg">
                                            View Our Objectives
                                        </Button>
                                    </motion.div>
                                </div>

                                <div className="w-full lg:w-2/5">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.7 }}
                                        viewport={{ once: true, margin: "-100px 0px" }}
                                    >
                                        <div className="relative rounded-2xl overflow-hidden backdrop-blur-lg bg-dark-800/70 border border-light-100/10">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-400" />

                                            <div className="p-8">
                                                <h3 className="text-xl font-semibold text-white mb-6 tracking-tight">Contribution Areas</h3>

                                                <ul className="space-y-5">
                                                    {[
                                                        {
                                                            title: "Technical Development",
                                                            description: "Help build the core infrastructure of SkyZai."
                                                        },
                                                        {
                                                            title: "AI Training",
                                                            description: "Contribute to training and improving the Noosphere."
                                                        },
                                                        {
                                                            title: "Content Creation",
                                                            description: "Develop materials that help explain and expand our ecosystem."
                                                        },
                                                        {
                                                            title: "Community Building",
                                                            description: "Help grow and nurture our global community."
                                                        },
                                                        {
                                                            title: "Governance Participation",
                                                            description: "Take part in guiding the future direction of SkyZai."
                                                        },
                                                    ].map((area, index) => (
                                                        <motion.li
                                                            key={area.title}
                                                            initial={{ opacity: 0, x: 20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                                                            viewport={{ once: true }}
                                                            className="flex items-start group"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 mr-4 group-hover:scale-125 transition-all duration-300" />
                                                            <div>
                                                                <h4 className="text-white font-medium mb-1">{area.title}</h4>
                                                                <p className="text-light-400 text-sm">{area.description}</p>
                                                            </div>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Mission; 