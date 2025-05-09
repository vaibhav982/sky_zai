import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
    FiCode,
    FiUsers,
    FiTarget,
    FiArrowRight,
    FiLock,
    FiGlobe,
    FiSettings,
    FiCpu,
    FiZap,
    FiHash,
    FiDatabase,
    FiShuffle
} from "react-icons/fi";

import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import AnimatedText from "../components/ui/AnimatedText";

// Strategic pillar component
const StrategicPillar = ({ title, description, icon, color, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 * index }}
            className="h-full"
        >
            <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl backdrop-blur-lg border border-light-100/5 h-full overflow-hidden relative transition-all duration-500 hover:border-primary-500/20 group">
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="p-8 md:p-10 relative z-10">
                    <div className="mb-6 p-4 rounded-2xl bg-primary-500/10 w-fit group-hover:bg-primary-500/15 transition-all duration-500">
                        {React.cloneElement(icon, { size: 28 })}
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                        {title}
                    </h3>

                    <p className="text-light-300 leading-relaxed">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

// Strategy item component
const StrategyItem = ({ title, description, icon, points, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.08 * index }}
            className="h-full"
        >
            <div className="bg-gradient-to-br from-dark-800/80 to-dark-700/80 rounded-2xl backdrop-blur-md border border-light-100/5 h-full p-6 md:p-7 transition-all duration-300 hover:border-primary-500/20 hover:shadow-lg hover:shadow-primary-500/5">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary-500/10 mt-1 flex-shrink-0">
                        {icon}
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                            {title}
                        </h3>
                        <p className="text-light-300 text-sm mb-5 leading-relaxed">{description}</p>

                        <ul className="space-y-3">
                            {points.map((point, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * i + 0.3 }}
                                    viewport={{ once: true }}
                                    className="flex items-start group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 mr-3 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-300" />
                                    <span className="text-light-200 text-sm leading-relaxed transition-all duration-300 group-hover:text-white">{point}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Strategy section component
const StrategySection = ({ pillar, number, title, description, items, isAlt = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <Section className={`py-32 ${isAlt ? 'bg-gradient-to-b from-dark-900 to-dark-800' : ''}`} ref={ref}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="w-full lg:w-1/3 lg:sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="mb-4"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium backdrop-blur-sm border border-primary-500/20">
                                PILLAR {number}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight"
                        >
                            {title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-light-300 text-lg leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    </div>

                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {items.map((item, index) => (
                                <StrategyItem
                                    key={item.title}
                                    title={item.title}
                                    description={item.description}
                                    icon={item.icon}
                                    points={item.points}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

const Strategies = () => {
    // Refs for scroll animations
    const heroRef = useRef(null);
    const pillarsRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    // Strategic pillars data
    const strategicPillars = [
        {
            title: "Technological Supremacy & Openness",
            description: "Developing cutting-edge technology while maintaining openness and accessibility to ensure broad adoption and contribution from the global community.",
            icon: <FiCode className="text-primary-400" />,
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: "Incentive Design & Community Governance",
            description: "Creating aligned economic incentives and decentralized governance structures that foster fair participation and sustainable growth of the ecosystem.",
            icon: <FiUsers className="text-primary-400" />,
            color: "from-green-500/20 to-teal-500/20"
        },
        {
            title: "Targeted Intelligence Development",
            description: "Focusing AI capabilities on high-impact applications that demonstrate clear utility and direct the Noosphere's intelligence toward solving complex challenges.",
            icon: <FiTarget className="text-primary-400" />,
            color: "from-red-500/20 to-orange-500/20"
        },
    ];

    // Technology strategy items
    const technologyItems = [
        {
            title: "Open Source Development",
            description: "Publishing core protocols and frameworks as open-source software to encourage community contribution and inspection.",
            icon: <FiCode className="text-primary-400" size={24} />,
            points: [
                "GitHub-based development workflow",
                "Permissive licensing for core components",
                "Regular code audits and security reviews",
                "Community contribution incentives"
            ]
        },
        {
            title: "Hybrid Consensus Mechanism",
            description: "Developing a hybrid Avalanche/Hashgraph consensus system that combines speed, security, and energy efficiency.",
            icon: <FiShuffle className="text-primary-400" size={24} />,
            points: [
                "Custom consensus algorithm development",
                "High throughput transaction processing",
                "Byzantine fault tolerance",
                "Energy-efficient validation"
            ]
        },
        {
            title: "Energy-Based AI Models",
            description: "Pioneering novel AI architectures that are fundamentally tied to energy-based computation.",
            icon: <FiCpu className="text-primary-400" size={24} />,
            points: [
                "LeCun-inspired energy-based models",
                "Self-supervised learning approaches",
                "Continuous model improvement framework",
                "Distributed training architecture"
            ]
        },
        {
            title: "Useful Work Verification",
            description: "Creating verification mechanisms that reliably confirm valuable computational contributions.",
            icon: <FiLock className="text-primary-400" size={24} />,
            points: [
                "Zero-knowledge proof integration",
                "Task-specific verification protocols",
                "Anti-fraud systems",
                "Reputation-based validation enhancements"
            ]
        },
        {
            title: "Decentralized Physical Infrastructure",
            description: "Building a network of distributed physical nodes that power the SkyZai ecosystem.",
            icon: <FiDatabase className="text-primary-400" size={24} />,
            points: [
                "Node operator incentive design",
                "Hardware specification standards",
                "Geographic distribution requirements",
                "Resilient network topology"
            ]
        },
        {
            title: "Layer-2 Scaling Solutions",
            description: "Implementing advanced scaling mechanisms to ensure the network can handle global demand.",
            icon: <FiHash className="text-primary-400" size={24} />,
            points: [
                "State channel implementations",
                "ZK-rollup technology",
                "Sidechain integration",
                "Cross-chain interoperability"
            ]
        },
    ];

    // Incentive strategy items
    const incentiveItems = [
        {
            title: "Energy-Credit Tokenomics",
            description: "A carefully designed economic system using energy as the fundamental unit of account.",
            icon: <FiZap className="text-primary-400" size={24} />,
            points: [
                "0% interest credit for verified useful work",
                "Elastic supply mechanisms tied to network activity",
                "Credit-energy peg stabilization",
                "Value-capture through transaction fees"
            ]
        },
        {
            title: "Multi-stakeholder Incentives",
            description: "Balanced incentive structures that align the interests of all ecosystem participants.",
            icon: <FiUsers className="text-primary-400" size={24} />,
            points: [
                "Fair compensation for infrastructure providers",
                "Creator royalty system for AI makers",
                "Governance participation rewards",
                "Liquidity provisioning incentives"
            ]
        },
        {
            title: "Decentralized Autonomous Organization",
            description: "A progressive path to fully community-owned governance of the SkyZai ecosystem.",
            icon: <FiSettings className="text-primary-400" size={24} />,
            points: [
                "Phased governance transition plan",
                "On-chain voting mechanisms",
                "Specialized governance committees",
                "Quadratic voting implementation"
            ]
        },
        {
            title: "Treasury Management",
            description: "Sustainable funding mechanisms for ongoing development and ecosystem growth.",
            icon: <FiDatabase className="text-primary-400" size={24} />,
            points: [
                "Community-controlled treasury",
                "Transparent allocation processes",
                "Public goods funding",
                "Developer grants program"
            ]
        },
        {
            title: "Ethical Governance Framework",
            description: "Systems to ensure AI development proceeds in alignment with human values and ethics.",
            icon: <FiGlobe className="text-primary-400" size={24} />,
            points: [
                "AI ethics review board",
                "Transparent development guidelines",
                "Community-based oversight mechanisms",
                "Regular ethical impact assessments"
            ]
        },
        {
            title: "Anti-Capture Mechanisms",
            description: "Structural protections against centralization of power or control within the ecosystem.",
            icon: <FiLock className="text-primary-400" size={24} />,
            points: [
                "Voting power concentration limits",
                "Resource control distribution requirements",
                "Progressive decentralization roadmap",
                "Mandated transparency for large stakeholders"
            ]
        },
    ];

    // Intelligence strategy items
    const intelligenceItems = [
        {
            title: "Ecological Intelligence Focus",
            description: "AI systems specifically designed to monitor, analyze, and optimize environmental systems.",
            icon: <FiGlobe className="text-primary-400" size={24} />,
            points: [
                "Deforestation monitoring system",
                "Ocean health analysis platform",
                "Renewable energy grid optimization",
                "Biodiversity tracking and protection"
            ]
        },
        {
            title: "Foundational AI Research",
            description: "Strategic investments in fundamental AI capabilities that enhance the entire ecosystem.",
            icon: <FiCpu className="text-primary-400" size={24} />,
            points: [
                "Self-supervised learning advancements",
                "Energy-efficient model architectures",
                "Multimodal data processing",
                "Decentralized training techniques"
            ]
        },
        {
            title: "Bounty System Design",
            description: "Incentive mechanisms that direct computational resources toward priority objectives.",
            icon: <FiTarget className="text-primary-400" size={24} />,
            points: [
                "Tiered reward structure",
                "Community-selected priorities",
                "Progressive challenge frameworks",
                "Public-private partnership bounties"
            ]
        },
        {
            title: "Impact Measurement Framework",
            description: "Systems to quantify, verify, and optimize the real-world impact of SkyZai applications.",
            icon: <FiTarget className="text-primary-400" size={24} />,
            points: [
                "Standardized impact metrics",
                "Third-party verification processes",
                "Oracle-based validation",
                "Transparent impact reporting"
            ]
        },
        {
            title: "Application Ecosystem",
            description: "A diverse set of applications that showcase the capabilities of the SkyZai Noosphere.",
            icon: <FiCode className="text-primary-400" size={24} />,
            points: [
                "Developer tooling and SDKs",
                "Application templates and frameworks",
                "Marketplace for AI capabilities",
                "Interoperability standards"
            ]
        },
        {
            title: "Human-AI Collaboration Tools",
            description: "Interfaces and systems that enhance human capabilities through AI partnership.",
            icon: <FiUsers className="text-primary-400" size={24} />,
            points: [
                "Augmented intelligence interfaces",
                "Collaborative problem-solving platforms",
                "Creativity enhancement tools",
                "Knowledge synthesis systems"
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
                                OUR STRATEGIES
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                                Building the<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                                    Noosphere
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-light-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light"
                        >
                            Our strategies define concrete approaches to achieve our objectives and realize our vision for a decentralized global intelligence.
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

            {/* Strategic Pillars Overview */}
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
                                STRATEGIC APPROACH
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            Core strategic pillars
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            className="text-light-300 text-lg leading-relaxed max-w-3xl mx-auto"
                        >
                            Our strategy is structured around three interconnected pillars that guide our approach to building the SkyZai ecosystem.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {strategicPillars.map((pillar, index) => (
                            <StrategicPillar
                                key={pillar.title}
                                title={pillar.title}
                                description={pillar.description}
                                icon={pillar.icon}
                                color={pillar.color}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Technology Strategy */}
            <StrategySection
                pillar="Technological Supremacy & Openness"
                number="1"
                title="Technological Supremacy & Openness"
                description="We develop and continuously refine the core DLT, energy-based AI models, and DePIN frameworks as open-source protocols where feasible, encouraging broad adoption and contribution. We pioneer novel 'useful work' verification mechanisms that are efficient, secure, and accommodate diverse computational tasks."
                items={technologyItems}
                isAlt={true}
            />

            {/* Incentive Strategy */}
            <StrategySection
                pillar="Incentive Design & Community Governance"
                number="2"
                title="Incentive Design & Community Governance"
                description="We implement a sophisticated, game-theory-informed tokenomic model that aligns incentives for all participants to foster growth and stability. We establish a clear path towards fully decentralized community governance responsible for protocol upgrades, treasury management, and ethical oversight."
                items={incentiveItems}
                isAlt={false}
            />

            {/* Intelligence Development Strategy */}
            <StrategySection
                pillar="Targeted Intelligence Development & Application"
                number="3"
                title="Targeted Intelligence Development"
                description="We initially focus 'useful work' bounties on foundational AI capabilities and high-impact applications that demonstrate clear utility and value, including flagship 'Ecological Intelligence' projects. This approach ensures our technology development is directed toward the most beneficial outcomes."
                items={intelligenceItems}
                isAlt={true}
            />

            {/* Call to Action */}
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
                                        JOIN OUR STRATEGIC JOURNEY
                                    </span>
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true, margin: "-100px 0px" }}
                                    className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                                >
                                    Contribute to building the Noosphere
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true, margin: "-100px 0px" }}
                                    className="text-light-300 text-lg leading-relaxed"
                                >
                                    Our strategies provide the roadmap, but it takes a global community of contributors to bring them to life. Whether you're a developer, researcher, creator, or simply someone passionate about our vision, there's a place for you in the SkyZai ecosystem.
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
                                    <Button to="/about" variant="glass" size="lg">
                                        Learn About Our Team
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

export default Strategies; 