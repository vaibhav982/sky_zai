import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { name: "Vision", path: "/vision" },
    { name: "Mission", path: "/mission" },
    { name: "Objectives", path: "/objectives" },
    { name: "Strategies", path: "/strategies" },
    { name: "About", path: "/about" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when navigating
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${scrolled || isOpen
                    ? "bg-dark-800/80 backdrop-blur-lg py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container-padding mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="relative z-10 flex items-center"
                >
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mr-2 flex items-center justify-center w-10 h-10">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 577 555"
                                className="fill-primary-500"
                            >
                                <path d="M336.339 83.2135L432.354 138.648C432.37 95.648 432.38 70.7173 432.39 27.7173L336.339 83.2135ZM336.339 83.2135L432.354 138.648L336.303 194.144L336.339 83.2135Z" />
                                <path d="M480.433 221.923L480.433 332.792C512.433 315.075 544.52 295.358 576.52 277.358L480.433 221.923ZM480.433 221.923L480.433 332.792L384.346 277.358L480.433 221.923Z" />
                                <path d="M432.354 416.067L336.339 471.502C368.365 489.25 400.39 509.998 432.39 526.998L432.354 416.067ZM432.354 416.067L336.339 471.502L336.303 360.571L432.354 416.067Z" />
                                <path d="M240.181 471.502L144.165 416.067C144.155 459.533 144.14 483.998 144.13 526.998L240.181 471.502ZM240.181 471.502L144.166 416.067L240.217 360.571L240.181 471.502Z" />
                                <path d="M96.0866 332.792L96.0866 221.923C64.0433 239.64 32.0 259.358 0 277.358L96.0866 332.792ZM96.0867 332.792L96.0867 221.923L192.173 277.358L96.0867 332.792Z" />
                                <path d="M144.165 138.648L240.181 83.2134C208.155 65.4654 176.13 45.7173 144.13 27.7173L144.165 138.648ZM144.165 138.648L240.181 83.2135L240.216 194.144L144.165 138.648Z" />
                            </svg>
                        </div>
                        <span className="text-xl font-semibold text-white">SkyZai</span>
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative font-medium text-sm tracking-wide transition-colors duration-300 ${location.pathname === link.path
                                    ? "text-primary-400"
                                    : "text-light-300 hover:text-white"
                                }`}
                        >
                            <span className="relative inline-block">
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-400 rounded-full"
                                        layoutId="navbar-indicator"
                                        transition={{ type: "spring", duration: 0.5 }}
                                    />
                                )}
                            </span>
                        </Link>
                    ))}
                    <Link
                        to="/join"
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        Join
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden relative z-10 text-light-100 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu Toggle"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FiX className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FiMenu className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-0 left-0 right-0 min-h-screen bg-dark-800/95 backdrop-blur-lg md:hidden flex flex-col pt-24 pb-8 px-8"
                        >
                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 + 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`text-xl font-medium ${location.pathname === link.path
                                                    ? "text-primary-400"
                                                    : "text-light-300"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                                    className="pt-4"
                                >
                                    <Link
                                        to="/join"
                                        className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium"
                                    >
                                        Join
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar; 