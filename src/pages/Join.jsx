import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FiArrowRight, FiUsers, FiCode, FiServer, FiGlobe, FiEdit3, FiChevronDown, FiCheck } from "react-icons/fi";

import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import AnimatedText from "../components/ui/AnimatedText";

// Reusable Role Card component
const RoleCard = ({ role, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.08 * index }}
            className="group h-full"
        >
            <div className="bg-gradient-to-b from-dark-800/80 to-dark-700/80 backdrop-filter backdrop-blur-xl border border-light-100/5 rounded-3xl h-full overflow-hidden transition-all duration-500 hover:border-light-100/15 hover:shadow-xl hover:shadow-primary-500/5 group-hover:translate-y-[-4px]">
                <div className="p-8 md:p-10 h-full flex flex-col">
                    <div className="p-4 rounded-2xl bg-primary-500/10 w-fit mb-6 group-hover:bg-primary-500/15 transition-all duration-500">
                        {role.icon}
                    </div>

                    <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">
                        {role.title}
                    </h3>

                    <p className="text-light-300 mb-6 leading-relaxed">
                        {role.description}
                    </p>

                    <div className="mt-auto">
                        <h4 className="text-sm uppercase tracking-wider text-light-400 mb-4 font-medium">Opportunities</h4>
                        <ul className="space-y-3">
                            {role.examples.map((example, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start group/item"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * i + 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-primary-300"></span>
                                    <span className="text-light-200 text-sm leading-relaxed transition-all duration-300 group-hover/item:text-white">{example}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Interest toggle component
const InterestToggle = ({ role, isSelected, onToggle }) => {
    return (
        <div
            className={`
                relative px-5 py-4 rounded-2xl border cursor-pointer transition-all duration-300
                ${isSelected
                    ? 'bg-primary-500/15 border-primary-500/50 shadow-md shadow-primary-500/5'
                    : 'bg-dark-800/80 border-light-100/5 hover:bg-dark-700/80 hover:border-light-100/10'}
            `}
            onClick={onToggle}
        >
            <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                    {role.icon}
                </div>
                <div>
                    <span className="text-white font-medium block leading-tight">{role.title}</span>
                    <span className="text-light-400 text-xs block mt-1">{role.examples[0]}{role.examples.length > 1 ? ' & more' : ''}</span>
                </div>
                <div className={`ml-auto transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
                        <FiCheck className="text-white" size={12} />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Divider component
const Divider = () => (
    <div className="w-full max-w-[120px] h-px bg-gradient-to-r from-transparent via-light-300/20 to-transparent my-24 mx-auto"></div>
);

// Form input component
const FormInput = ({ label, id, type = "text", value, onChange, placeholder, required = false, options = [] }) => {
    return (
        <div className="mb-8">
            <label htmlFor={id} className="block text-white font-medium mb-3 tracking-tight">
                {label}
            </label>

            {type === "select" ? (
                <select
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="w-full px-5 py-4 bg-dark-800/80 backdrop-filter backdrop-blur-sm border border-light-100/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent text-white text-base transition-all duration-300"
                >
                    <option value="">{placeholder}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            ) : type === "textarea" ? (
                <textarea
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    rows={4}
                    className="w-full px-5 py-4 bg-dark-800/80 backdrop-filter backdrop-blur-sm border border-light-100/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent text-white text-base transition-all duration-300 resize-none"
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    className="w-full px-5 py-4 bg-dark-800/80 backdrop-filter backdrop-blur-sm border border-light-100/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent text-white text-base transition-all duration-300"
                />
            )}
        </div>
    );
};

const contributionRoles = [
    {
        title: "Developer",
        description: "Contribute to building core protocol and infrastructure",
        icon: <FiCode className="text-primary-400" size={24} />,
        examples: [
            "Core DLT development",
            "Smart contract programming",
            "Frontend development",
            "AI model implementation"
        ]
    },
    {
        title: "Node Operator",
        description: "Provide infrastructure to power the SkyZai network",
        icon: <FiServer className="text-primary-400" size={24} />,
        examples: [
            "Validator node operation",
            "AI training node provision",
            "Storage infrastructure",
            "Network monitoring"
        ]
    },
    {
        title: "AI Contributor",
        description: "Help train and improve the Noosphere intelligence",
        icon: <FiGlobe className="text-primary-400" size={24} />,
        examples: [
            "Model training participation",
            "Dataset creation",
            "Validation and testing",
            "Specialized knowledge contribution"
        ]
    },
    {
        title: "Community Builder",
        description: "Help grow and nurture the SkyZai ecosystem",
        icon: <FiUsers className="text-primary-400" size={24} />,
        examples: [
            "Ambassador programs",
            "Education and outreach",
            "Event organization",
            "Community moderation"
        ]
    },
    {
        title: "Content Creator",
        description: "Develop materials to explain and expand our ecosystem",
        icon: <FiEdit3 className="text-primary-400" size={24} />,
        examples: [
            "Documentation writing",
            "Tutorial creation",
            "Blog post authoring",
            "Educational video production"
        ]
    }
];

const Join = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        interests: [],
        experience: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Refs for scroll animations
    const heroRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleInterestToggle = (interest) => {
        setFormData(prev => {
            const interests = [...prev.interests];
            if (interests.includes(interest)) {
                return { ...prev, interests: interests.filter(i => i !== interest) };
            } else {
                return { ...prev, interests: [...interests, interest] };
            }
        });
    };

    /**
     * To receive form submissions via email, you have two options:
     * 
     * OPTION 1: Using Formspree (No code installation required)
     * 1. Create a free Formspree account at https://formspree.io/
     * 2. Click "New Form" and give it a name (e.g., "SkyZai Join Form")
     * 3. Enter the email where you want to receive submissions
     * 4. Copy the form ID from your form URL (https://formspree.io/f/YOUR_FORM_ID)
     * 5. Replace 'YOUR_FORM_ID' below with your actual form ID
     * 
     * Formspree free tier includes:
     * - Up to 50 submissions per month
     * - Unlimited forms
     * - Email notifications
     * - Basic spam protection
     * 
     * OPTION 2: Using EmailJS (Requires script installation)
     * 1. Create a free EmailJS account at https://www.emailjs.com/
     * 2. Add your email service (Gmail, Outlook, etc.)
     * 3. Create an email template with variables matching your form fields
     * 4. Install EmailJS: npm install @emailjs/browser
     * 5. Import EmailJS: import emailjs from '@emailjs/browser';
     * 6. Replace the handleSubmit function with the EmailJS version below
     * 7. Add your EmailJS service ID, template ID, and user ID
     */

    // OPTION 1: Formspree implementation
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Send form data to Formspree
        fetch("https://formspree.io/f/mbloedwn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                interests: formData.interests.join(", "),
                experience: formData.experience,
                message: formData.message,
                _honeypot: honeypotValue // This will be used by Formspree to detect spam
            }),
        })
            .then(response => {
                if (response.ok) {
                    setIsSubmitting(false);
                    setIsSubmitted(true);
                    // Reset form after successful submission
                    setFormData({
                        name: "",
                        email: "",
                        interests: [],
                        experience: "",
                        message: ""
                    });
                } else {
                    throw new Error("Form submission failed");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                setIsSubmitting(false);
                alert("There was an error submitting the form. Please try again later.");
            });
    };

    // OPTION 2: EmailJS implementation (Uncomment to use)
    /*
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Replace with your EmailJS service ID, template ID, and user ID
        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            e.target,
            'YOUR_USER_ID'
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            setIsSubmitting(false);
            setIsSubmitted(true);
            // Reset form after successful submission
            setFormData({
                name: "",
                email: "",
                interests: [],
                experience: "",
                message: ""
            });
        })
        .catch((error) => {
            console.error('Email sending failed:', error.text);
            setIsSubmitting(false);
            alert("There was an error submitting the form. Please try again later.");
        });
    };
    */

    const experienceOptions = [
        { value: "beginner", label: "Beginner — Just starting out" },
        { value: "intermediate", label: "Intermediate — Some experience" },
        { value: "advanced", label: "Advanced — Significant experience" },
        { value: "expert", label: "Expert — Professional level expertise" }
    ];

    const [honeypotValue, setHoneypotValue] = useState("");

    return (
        <>
            {/* Hero Section */}
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
                        JOIN THE MOVEMENT
                    </motion.span>

                    <AnimatedText
                        text="Become Part of the SkyZai Ecosystem"
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
                        Join us in building a decentralized global intelligence that empowers humanity and operates in harmony with the biosphere.
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

            {/* Contribution Roles Section */}
            <Section pt="28" pb="28">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="mb-4"
                        >
                            <span className="inline-block px-5 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium backdrop-blur-sm border border-primary-500/20">
                                OPPORTUNITIES
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            Ways to Contribute
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-light-300 text-lg leading-relaxed"
                        >
                            There are many ways to contribute to the SkyZai ecosystem. Explore the roles below to find where your skills and interests align.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {contributionRoles.map((role, index) => (
                            <RoleCard key={role.title} role={role} index={index} />
                        ))}
                    </div>
                </div>
            </Section>

            <Divider />

            {/* Sign Up Form */}
            <Section pt="28" pb="28">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="mb-4"
                        >
                            <span className="inline-block px-5 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium backdrop-blur-sm border border-primary-500/20">
                                JOIN NOW
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                        >
                            Get Involved
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-light-300 text-lg leading-relaxed"
                        >
                            Fill out the form below to express your interest in joining the SkyZai community. We'll get back to you with more information on how you can contribute.
                        </motion.p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-b from-dark-800/90 to-dark-700/90 backdrop-filter backdrop-blur-xl rounded-3xl border border-light-100/5 overflow-hidden">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-24 px-6"
                                >
                                    <div className="w-24 h-24 bg-primary-500/15 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <svg className="w-12 h-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Thank You for Joining!</h3>
                                    <p className="text-light-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                                        We've received your information and will be in touch shortly with next steps on how you can get involved in the SkyZai ecosystem.
                                    </p>
                                    <Button
                                        onClick={() => setIsSubmitted(false)}
                                        variant="glass"
                                        size="lg"
                                        className="font-normal tracking-wide"
                                    >
                                        Submit Another Response
                                    </Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="p-8 md:p-16">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                        <FormInput
                                            label="Name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required={true}
                                        />

                                        <FormInput
                                            label="Email"
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            required={true}
                                        />
                                    </div>

                                    <div className="mb-12">
                                        <label className="block text-white font-medium mb-5 tracking-tight">
                                            Areas of Interest
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {contributionRoles.map(role => (
                                                <InterestToggle
                                                    key={role.title}
                                                    role={role}
                                                    isSelected={formData.interests.includes(role.title)}
                                                    onToggle={() => handleInterestToggle(role.title)}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <FormInput
                                        label="Relevant Experience"
                                        id="experience"
                                        type="select"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        placeholder="Select your experience level"
                                        required={true}
                                        options={experienceOptions}
                                    />

                                    <FormInput
                                        label="Message (Optional)"
                                        id="message"
                                        type="textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us more about your background and how you'd like to contribute"
                                    />

                                    <div style={{ display: "none" }}>
                                        <input
                                            type="text"
                                            name="_gotcha"
                                            value={honeypotValue}
                                            onChange={(e) => setHoneypotValue(e.target.value)}
                                            tabIndex="-1"
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className="text-center mt-12">
                                        <Button
                                            type="submit"
                                            size="xl"
                                            icon={<FiArrowRight />}
                                            disabled={isSubmitting}
                                            className="font-normal tracking-wide"
                                        >
                                            {isSubmitting ? "Submitting..." : "Join the Community"}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Join; 