import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import AnimatedText from "../components/ui/AnimatedText";

// Reusable Value Card component with Apple-inspired design
const ValueCard = ({ title, description, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
            className="group"
        >
            <div className="h-full p-8 md:p-9 bg-gradient-to-b from-dark-800/60 to-dark-700/60 backdrop-filter backdrop-blur-xl rounded-3xl border border-light-100/8 hover:border-light-100/15 transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>

                <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">{title}</h3>
                <p className="text-light-300 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

// Story section paragraph component
const StoryParagraph = ({ children, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay }}
            className="text-light-300 leading-relaxed text-lg mb-6 last:mb-0"
        >
            {children}
        </motion.p>
    );
};

// Divider component
const Divider = () => (
    <div className="w-full max-w-[120px] h-px bg-gradient-to-r from-transparent via-light-300/20 to-transparent my-16 mx-auto"></div>
);

const About = () => {
    // Refs for scroll animations
    const heroRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    return (
        <>
            {/* Immersive Hero Section */}
            <Section
                className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
                pt="0"
                pb="0"
            >
                <div
                    ref={heroRef}
                    className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800 z-0"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent"></div>
                </div>

                <motion.div
                    style={{ opacity: heroOpacity, y: heroY }}
                    className="container-padding max-w-5xl mx-auto text-center relative z-10 px-6"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary-400 font-medium mb-5 inline-block tracking-wide text-sm"
                    >
                        ABOUT SKYZAI
                    </motion.span>

                    <AnimatedText
                        text="Building the Future of Decentralized Intelligence"
                        element="h1"
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
                        highlight
                        animated
                        delay={0.2}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-light-300 text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto font-light"
                    >
                        We are a team of visionaries, technologists, researchers, and community builders united by our mission to create a more equitable, sustainable, and intelligently connected world.
                    </motion.p>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    >
                        <FiChevronDown className="text-light-300 w-6 h-6" />
                    </motion.div>
                </motion.div>
            </Section>

            {/* Our Story Section */}
            <Section pt="28" pb="28">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Our Story</h2>

                        <div className="prose prose-lg prose-invert max-w-none">
                            <StoryParagraph delay={0.2}>
                                SkyZai was founded by a diverse group of individuals who recognized the transformative potential of artificial intelligence when paired with decentralized systems and aligned incentives. Our founders bring together expertise from a wide range of disciplines including artificial intelligence, cryptography, distributed systems, economics, ecology, and community building.
                            </StoryParagraph>

                            <StoryParagraph delay={0.3}>
                                The journey began with a simple yet profound realization: the next major evolution of intelligence on our planet would require not just technological innovation, but fundamentally new economic and governance models. The traditional approach to AI development - centralized, closed, and divorced from physical reality - would be insufficient for creating a true Noosphere, a layer of collective intelligence that benefits all of humanity and the planet we inhabit.
                            </StoryParagraph>

                            <StoryParagraph delay={0.4}>
                                Today, our team spans the globe, united by a shared vision and commitment to building systems that transmute energy into wisdom through collaborative effort. We believe that by grounding our systems in the fundamental physical reality of energy, creating fair incentives for participation, and ensuring transparent governance, we can unlock unprecedented capabilities that benefit both humanity and our planetary home.
                            </StoryParagraph>
                        </div>
                    </motion.div>

                    <Divider />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">Our Values</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Openness",
                                    description: "We believe in open collaboration, transparent processes, and shared knowledge. We build in the open and welcome diverse perspectives."
                                },
                                {
                                    title: "Decentralization",
                                    description: "We are committed to distributing power, control, and rewards fairly throughout our ecosystem, preventing centralization of influence."
                                },
                                {
                                    title: "Sustainability",
                                    description: "We design all our systems with long-term ecological balance in mind, ensuring that our technologies contribute positively to the biosphere."
                                },
                                {
                                    title: "Equity",
                                    description: "We create systems that provide fair access and opportunities to all participants, regardless of background or resources."
                                },
                                {
                                    title: "Innovation",
                                    description: "We push the boundaries of what's possible through continuous research, experimentation, and learning, always seeking better solutions."
                                },
                                {
                                    title: "Impact",
                                    description: "We measure our success by the positive change we create in the world, focusing our efforts on meaningful, measurable outcomes."
                                },
                            ].map((value, index) => (
                                <ValueCard
                                    key={value.title}
                                    title={value.title}
                                    description={value.description}
                                    index={index}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <Divider />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Join Us</h2>

                        <p className="text-light-300 leading-relaxed text-lg mb-10">
                            We're building a community of contributors who share our vision and values. Whether you're a developer, researcher, creator, or simply someone passionate about the future we're building, there's a place for you in the SkyZai ecosystem.
                        </p>

                        <Button
                            to="/join"
                            icon={<FiArrowRight />}
                            size="xl"
                            variant="glass"
                            className="font-normal tracking-wide"
                        >
                            Get Involved
                        </Button>
                    </motion.div>
                </div>
            </Section>
        </>
    );
};

export default About; 