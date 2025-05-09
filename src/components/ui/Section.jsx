import React from "react";
import { motion } from "framer-motion";

const Section = ({
    children,
    className = "",
    id,
    fullHeight = false,
    withContainer = true,
    containerClassName = "",
    dark = false,
    overflow = "visible",
    pt = "16",
    pb = "16",
    centered = false,
}) => {
    const motionProps = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" },
    };

    const heightClass = fullHeight ? "min-h-screen" : "";
    const paddingClasses = `pt-${pt} pb-${pb}`;
    const backgroundClass = dark ? "bg-dark-800" : "bg-dark-900";
    const overflowClass = `overflow-${overflow}`;
    const centerClass = centered ? "flex items-center justify-center" : "";

    const content = withContainer ? (
        <div className={`container-padding mx-auto ${containerClassName}`}>
            {children}
        </div>
    ) : (
        children
    );

    return (
        <motion.section
            id={id}
            className={`relative ${backgroundClass} ${paddingClasses} ${heightClass} ${overflowClass} ${centerClass} ${className}`}
            {...motionProps}
        >
            {content}
        </motion.section>
    );
};

export default Section; 