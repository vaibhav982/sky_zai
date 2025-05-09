import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Explore",
            links: [
                { name: "Vision", path: "/vision" },
                { name: "Mission", path: "/mission" },
                { name: "Objectives", path: "/objectives" },
                { name: "Strategies", path: "/strategies" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About", path: "/about" },
                { name: "Join", path: "/join" },
                { name: "Home", path: "/" },
            ],
        },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: <FiGithub />,
            url: "https://github.com/skyzai",
        },
        {
            name: "Twitter",
            icon: <FiTwitter />,
            url: "https://twitter.com/skyzai",
        },
        {
            name: "LinkedIn",
            icon: <FiLinkedin />,
            url: "https://linkedin.com/company/skyzai",
        },
        {
            name: "Email",
            icon: <FiMail />,
            url: "mailto:hello@skyzai.com",
        },
    ];

    return (
        <footer className="bg-dark-900 border-t border-dark-700">
            <div className="container-padding mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center mb-4">
                            <div className="mr-2 flex items-center justify-center w-8 h-8">
                                <svg
                                    width="32"
                                    height="32"
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
                            <span className="text-lg font-semibold text-white">SkyZai</span>
                        </Link>
                        <p className="text-light-400 text-sm leading-relaxed max-w-sm mb-6">
                            Cultivating a decentralized global intelligence where energy transmutes into collective wisdom, fostering an equitable energy-credit economy.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light-400 hover:text-primary-400 transition-colors duration-300"
                                    aria-label={social.name}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white font-medium mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-light-400 hover:text-primary-400 text-sm transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-light-500 text-sm mb-4 md:mb-0">
                        &copy; {currentYear} SkyZai. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 