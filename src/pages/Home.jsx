import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiUsers, FiZap, FiGlobe, FiLayers } from "react-icons/fi";

import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import AnimatedText from "../components/ui/AnimatedText";
import SkyZaiLogo from "../home";

const features = [
    {
        title: "Energy Economy",
        description: "Ground our unit of account and economic exchange in the fundamental physical reality of energy",
        icon: <FiZap className="text-primary-400" size={24} />,
    },
    {
        title: "Collaborative Intelligence",
        description: "Empower global contributors to build and govern a universally accessible AI Noosphere",
        icon: <FiUsers className="text-primary-400" size={24} />,
    },
    {
        title: "Ecological Harmony",
        description: "Direct the Noosphere towards understanding, preserving, and regenerating natural ecosystems",
        icon: <FiGlobe className="text-primary-400" size={24} />,
    },
    {
        title: "Open & Decentralized",
        description: "Ensure the system remains fair and resistant to centralized control through transparent governance",
        icon: <FiLayers className="text-primary-400" size={24} />,
    },
];

const Home = () => {
    const [isHeroTextVisible, setIsHeroTextVisible] = React.useState(false);// Empty dependency array ensures this runs only on mount

    return (
        <>
            {/* Hero Section */}
            <Section
                className="relative"
                fullHeight
                pt="0"
                pb="0"
                overflow="hidden"
                withContainer={false}
            >
                <div className="absolute inset-0 z-0">
                    <SkyZaiLogo blurCentralLogo={isHeroTextVisible} />
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-screen container-padding mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-4"
                    >
                        <span className="px-4 py-1.5 rounded-full bg-primary-500/10 text-light-300 text-sm font-medium backdrop-blur-sm border border-primary-500/20">
                            Building the Noosphere
                        </span>
                    </motion.div>

                    <AnimatedText
                        text="Cultivating a Decentralized Global Intelligence"
                        element="h1"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mb-6"
                        highlight
                        animated
                        delay={0.5}
                        onViewportEnter={() => setIsHeroTextVisible(true)}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-light-200 text-base sm:text-lg md:text-xl max-w-2xl mb-10"
                    >
                        Empowering a global network to build an accessible AI Noosphere grounded in energy and focused on solving complex challenges.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <Button to="/vision" size="lg" icon={<FiArrowRight />}>
                            Explore Our Vision
                        </Button>
                        <Button to="/join" variant="glass" size="lg">
                            Join the Movement
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-8 left-0 right-0 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <a
                            href="#mission"
                            className="flex flex-col items-center text-light-400 hover:text-primary-400 transition-colors"
                        >
                            <span className="text-sm mb-2">Scroll to discover</span>
                            <svg
                                width="20"
                                height="10"
                                viewBox="0 0 20 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L10 9L19 1"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>
            </Section>

            {/* Mission Section */}
            <Section id="mission" dark pt="24" pb="24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-primary-400 font-medium mb-3 block"
                        >
                            OUR MISSION
                        </motion.span>

                        <AnimatedText
                            text="Empowering a Decentralized Network of Contributors"
                            element="h2"
                            className="text-3xl md:text-4xl font-bold text-white mb-6"
                            animated
                            delay={0.2}
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-light-300 leading-relaxed mb-8"
                        >
                            We aim to collaboratively build, govern, and utilize a universally accessible AI Noosphere by grounding our economy in energy, incentivizing the transmutation of energy into verified "useful work", and directing the emergent intelligence towards solving complex human challenges.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Button to="/mission" icon={<FiArrowRight />}>
                                Learn More About Our Mission
                            </Button>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 h-full flex flex-col">
                                    <div className="mb-4 p-3 rounded-full bg-primary-500/10 w-fit">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-light-400 text-sm">{feature.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Vision Preview */}
            <Section className="overflow-hidden" pt="24" pb="24">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-primary-400 font-medium mb-3 block"
                    >
                        OUR VISION
                    </motion.span>

                    <AnimatedText
                        text="Cultivating the Global Noosphere"
                        element="h2"
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                        animated
                        delay={0.2}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-light-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        To cultivate a self-sustaining, decentralized global intelligence where energy is transmuted into collective wisdom, fostering a transparent and equitable energy-credit economy.
                    </motion.p>
                </div>

                <div className="relative">
                    <Card
                        variant="glass"
                        className="p-8 md:p-12 border border-light-100/10 relative z-10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 z-0 pointer-events-none" />

                        <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                    Self-sustaining, equitable, and decentralized
                                </h3>

                                <p className="text-light-300 leading-relaxed">
                                    Our vision is to create a system that empowers human potential and operates in symbiotic harmony with the Earth's biosphere, driving sustainable co-evolution between humanity and nature.
                                </p>

                                <ul className="space-y-3">
                                    {[
                                        "Decentralized global intelligence",
                                        "Energy-based economic system",
                                        "Transparent governance",
                                        "Ecological harmony",
                                        "Equitable access",
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.1 * index }}
                                            viewport={{ once: true }}
                                            className="flex items-center"
                                        >
                                            <span className="w-2 h-2 rounded-full bg-primary-400 mr-3" />
                                            <span className="text-light-200">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <Button to="/vision" icon={<FiArrowRight />}>
                                        Discover Our Full Vision
                                    </Button>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 aspect-square max-w-md mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="w-full h-full relative"
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
                        </div>
                    </Card>

                    {/* Decorative elements */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
                </div>
            </Section>

            {/* CTA Section */}
            <Section pt="24" pb="24" dark>
                <div className="text-center max-w-3xl mx-auto">
                    <AnimatedText
                        text="Join Us in Building the Future"
                        element="h2"
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                        animated
                        delay={0.2}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-light-300 mb-10 leading-relaxed"
                    >
                        Be part of a revolutionary movement to create a more equitable, sustainable, and intelligently connected world. Together, we can build the Noosphere.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <Button to="/join" size="lg" icon={<FiArrowRight />}>
                            Join the Movement
                        </Button>
                        <Button to="/strategies" variant="outline" size="lg">
                            View Our Strategies
                        </Button>
                    </motion.div>
                </div>
            </Section>
        </>
    );
};

export default Home; 