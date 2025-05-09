import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({
    text,
    className = "",
    element = "h2",
    animated = true,
    delay = 0.2,
    staggerChildren = 0.02,
    duration = 0.5,
    highlight = false,
    onViewportEnter,
    onViewportLeave,
}) => {
    const Tag = element;

    // For non-animated version
    if (!animated) {
        return (
            <Tag className={className}>
                {highlight ? <span className="heading-gradient">{text}</span> : text}
            </Tag>
        );
    }

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren, delayChildren: delay * i },
        }),
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration,
            },
        },
    };

    // Split text into words and then into characters
    const words = text.split(" ");

    return (
        <Tag className={className}>
            <motion.span
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                onViewportEnter={onViewportEnter}
                onViewportLeave={onViewportLeave}
                className="inline-block"
            >
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block whitespace-nowrap">
                        {word.split("").map((char, charIndex) => (
                            <motion.span
                                key={charIndex}
                                variants={child}
                                className={`inline-block ${highlight ? "heading-gradient" : ""}`}
                                style={{
                                    display: "inline-block",
                                    paddingBottom: "0.1em",
                                    lineHeight: "1.2"
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        {wordIndex !== words.length - 1 && (
                            <span className="inline-block">&nbsp;</span>
                        )}
                    </span>
                ))}
            </motion.span>
        </Tag>
    );
};

export default AnimatedText; 