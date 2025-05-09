import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    FiServer,
    FiCpu,
    FiUsers,
    FiGlobe,
    FiArrowRight
} from "react-icons/fi";

import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import AnimatedText from "../components/ui/AnimatedText";

// Reusable objective card component
const ObjectiveCard = ({ objective, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col"
        >
            <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl backdrop-blur-lg border border-light-100/5 overflow-hidden transition-all duration-500 hover:border-primary-500/20">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-400 to-secondary-400" />

                <div className="p-8 md:p-10 pl-8 md:pl-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                        <div className="p-4 rounded-2xl bg-primary-500/10 w-fit">
                            {React.cloneElement(objective.icon, { size: 28 })}
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                                {objective.title}
                            </h3>
                            <p className="text-light-300 leading-relaxed">{objective.description}</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h4 className="text-lg font-medium text-white mb-6 tracking-tight">Key Metrics & Targets</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {objective.metrics.map((metric, i) => (
                                <motion.div
                                    key={metric.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                                    viewport={{ once: true }}
                                    className="bg-dark-900/60 p-5 rounded-xl border border-light-100/5 transition-all duration-300 hover:border-primary-500/20 hover:bg-dark-900/80"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h5 className="text-white font-medium">{metric.name}</h5>
                                        <span className="text-primary-400 text-sm px-2 py-1 bg-primary-500/10 rounded-full">{metric.timeline}</span>
                                    </div>

                                    <p className="text-light-200 text-sm mb-4">{metric.target}</p>

                                    <div className="relative">
                                        <div className="w-full bg-dark-700 h-1 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000 ease-out"
                                                style={{ width: `${metric.progress}%` }}
                                            />
                                        </div>
                                        <div className="absolute -top-5 right-0 text-xs text-light-400">
                                            {metric.progress}%
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Timeline phase component
const TimelinePhase = ({ phase, index, isLast }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className={`mb-24 ${isLast ? 'mb-0' : ''}`}>
            <div className="flex items-center mb-10">
                <div className="flex-grow h-px bg-dark-700" />
                <div className="px-4 py-1.5 rounded-full text-primary-400 text-sm font-medium backdrop-blur-sm border border-primary-500/20 bg-primary-500/10 mx-4">
                    {phase.years}
                </div>
                <div className="flex-grow h-px bg-dark-700" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-center mb-12"
            >
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 tracking-tight">{phase.phase}</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phase.milestones.map((milestone, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                        transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                        className="bg-gradient-to-br from-dark-800 to-dark-700 p-6 rounded-2xl backdrop-blur-lg border border-light-100/5 transition-all duration-300 hover:border-primary-500/20 group"
                    >
                        <div className="flex items-start">
                            <span className="text-primary-400 mr-3 mt-1 flex-shrink-0 transition-all duration-300 group-hover:text-primary-300">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 1L5 9L1 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="text-light-200 text-sm leading-relaxed transition-all duration-300 group-hover:text-white">{milestone}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const Objectives = () => {
    // Refs for scroll animations
    const heroRef = useRef(null);
    const objectivesRef = useRef(null);
    const timelineRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    // Objectives data
    const coreObjectives = [
        {
            title: "Core Infrastructure & Economy",
            description: "Launch and scale the Skyzai DLT (hybrid Avalanche/Hashgraph consensus) within 3 years to securely process 100,000+ transactions per second, support 1 million+ active participants (trainers, providers, users), and manage a stable energy-credit economy.",
            icon: <FiServer className="text-primary-400" />,
            metrics: [
                {
                    name: "Transaction Volume",
                    target: "100,000+ TPS",
                    timeline: "3 years",
                    progress: 15
                },
                {
                    name: "Active Network Participants",
                    target: "1,000,000+ users",
                    timeline: "3 years",
                    progress: 8
                },
                {
                    name: "Economic Stability",
                    target: "< 5% price volatility",
                    timeline: "2 years",
                    progress: 20
                },
                {
                    name: "Node Distribution",
                    target: "5,000+ validator nodes",
                    timeline: "2 years",
                    progress: 12
                }
            ]
        },
        {
            title: "Noosphere AI Development",
            description: "Achieve demonstrable milestones in the Skyzai AI Noosphere's capabilities within 5 years, including breakthroughs in specific self-supervised learning tasks, verifiable contributions to complex problem-solving, and the successful deployment of at least three large-scale ecological intelligence modules.",
            icon: <FiCpu className="text-primary-400" />,
            metrics: [
                {
                    name: "Self-supervised Learning Progress",
                    target: "State-of-the-art performance on 5+ benchmarks",
                    timeline: "5 years",
                    progress: 10
                },
                {
                    name: "Problem-solving Applications",
                    target: "10+ demonstrable use cases with measurable impact",
                    timeline: "4 years",
                    progress: 25
                },
                {
                    name: "Ecological Intelligence Modules",
                    target: "3+ modules at global scale",
                    timeline: "5 years",
                    progress: 5
                },
                {
                    name: "AI Training Contributors",
                    target: "100,000+ active contributors",
                    timeline: "4 years",
                    progress: 12
                }
            ]
        },
        {
            title: "Ecosystem Vitality & Decentralization",
            description: "Cultivate a thriving, self-governing ecosystem with thousands of active AI trainers, infrastructure providers, \"makers\" (application developers), and \"AI retailers\" within 4 years, ensuring no single entity controls more than 5% of critical resources or governance votes.",
            icon: <FiUsers className="text-primary-400" />,
            metrics: [
                {
                    name: "Active Ecosystem Roles",
                    target: "10,000+ contributors across categories",
                    timeline: "4 years",
                    progress: 18
                },
                {
                    name: "Decentralization Index",
                    target: "No entity controls > 5% of resources/votes",
                    timeline: "3 years",
                    progress: 30
                },
                {
                    name: "Governance Participation",
                    target: "50%+ token holder voting participation",
                    timeline: "3 years",
                    progress: 15
                },
                {
                    name: "Developer Ecosystem",
                    target: "1,000+ active developers",
                    timeline: "4 years",
                    progress: 22
                }
            ]
        },
        {
            title: "Biospheric Symbiosis",
            description: "By year 7, demonstrate measurable net positive environmental impact through Skyzai's Ecological Intelligence initiatives, validated by independent third parties or decentralized oracle networks.",
            icon: <FiGlobe className="text-primary-400" />,
            metrics: [
                {
                    name: "Environmental Impact",
                    target: "Net positive ecological contribution",
                    timeline: "7 years",
                    progress: 8
                },
                {
                    name: "Carbon Footprint Reduction",
                    target: "Carbon negative operations",
                    timeline: "5 years",
                    progress: 35
                },
                {
                    name: "Ecological Monitoring Coverage",
                    target: "10+ major ecosystems monitored",
                    timeline: "6 years",
                    progress: 15
                },
                {
                    name: "Ecological Restoration Projects",
                    target: "20+ projects directly supported",
                    timeline: "7 years",
                    progress: 10
                }
            ]
        }
    ];

    // Timeline phases
    const timelinePhases = [
        {
            phase: "Phase 1: Foundation",
            years: "Years 1-2",
            milestones: [
                "Complete core DLT architecture development",
                "Launch testnet with initial proof-of-useful-work implementation",
                "Establish governance framework and processes",
                "Deploy initial energy-credit token system",
                "Build first contributor community (1,000+ members)"
            ]
        },
        {
            phase: "Phase 2: Growth",
            years: "Years 3-4",
            milestones: [
                "Achieve 100,000+ TPS processing capacity",
                "Reach 500,000+ active participants",
                "Deploy 3+ specialized AI training modules",
                "Launch first ecological intelligence application",
                "Establish stable energy-credit economy"
            ]
        },
        {
            phase: "Phase 3: Maturity",
            years: "Years 5-7",
            milestones: [
                "Achieve fully decentralized governance",
                "Reach 1M+ active ecosystem participants",
                "Deploy all planned ecological intelligence modules",
                "Demonstrate measurable environmental impact",
                "Achieve self-sustaining ecosystem functionality"
            ]
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
                                OUR OBJECTIVES
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                                Measurable<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                                    milestones
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-light-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light"
                        >
                            Concrete, measurable targets that guide our progress and serve as accountability mechanisms as we build SkyZai.
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

            {/* Core Objectives */}
            <Section className="py-32" ref={objectivesRef}>
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
                                CORE OBJECTIVES
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            Our measurable targets
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-light-300 text-lg leading-relaxed max-w-3xl mx-auto"
                        >
                            Our objectives are organized into four key areas, each with specific metrics and timelines to track our progress.
                        </motion.p>
                    </div>

                    <div className="space-y-8">
                        {coreObjectives.map((objective, index) => (
                            <ObjectiveCard
                                key={objective.title}
                                objective={objective}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Implementation Timeline */}
            <Section className="py-32 bg-gradient-to-b from-dark-900 to-dark-800" ref={timelineRef}>
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
                                ROADMAP
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            Implementation timeline
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-light-300 text-lg leading-relaxed max-w-3xl mx-auto"
                        >
                            Our objectives are organized into a multi-year plan with clear phases and milestones to ensure steady progress.
                        </motion.p>
                    </div>

                    <div className="relative">
                        {timelinePhases.map((phase, index) => (
                            <TimelinePhase
                                key={phase.phase}
                                phase={phase}
                                index={index}
                                isLast={index === timelinePhases.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="relative overflow-hidden rounded-3xl">
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-dark-800/95 to-dark-800/90" />
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10 p-8 md:p-16">
                            <div className="max-w-3xl mx-auto text-center space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true, margin: "-100px 0px" }}
                                    className="mb-2"
                                >
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium backdrop-blur-sm border border-primary-500/20">
                                        JOURNEY WITH US
                                    </span>
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true, margin: "-100px 0px" }}
                                    className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                                >
                                    Help us achieve these ambitious goals
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true, margin: "-100px 0px" }}
                                    className="text-light-300 text-lg leading-relaxed"
                                >
                                    Our objectives are ambitious, but achievable with a global community of contributors. Join us in building the future of decentralized intelligence and creating a more sustainable, equitable world.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true, margin: "-100px 0px" }}
                                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                                >
                                    <Button to="/join" icon={<FiArrowRight />} size="lg">
                                        Join as a Contributor
                                    </Button>
                                    <Button to="/strategies" variant="glass" size="lg">
                                        View Our Strategies
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Objectives; 