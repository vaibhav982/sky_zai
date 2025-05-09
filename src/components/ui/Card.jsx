import React from "react";
import { motion } from "framer-motion";

const Card = ({
    children,
    className = "",
    variant = "default",
    hoverEffect = true,
    interactive = false,
    onClick,
    rounded = "xl",
    ...props
}) => {
    const variantClasses = {
        default: "bg-dark-800/90 backdrop-blur-sm border border-dark-700",
        glass: "bg-light-100/10 backdrop-blur-md border border-light-100/10",
        gradient: "bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700",
        primary: "bg-gradient-to-br from-primary-900/30 to-primary-900/10 border border-primary-700/20",
    };

    const roundedClasses = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        "4xl": "rounded-4xl",
        full: "rounded-full",
    };

    const hoverClasses = hoverEffect
        ? "transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1"
        : "";

    const interactiveClasses = interactive ? "cursor-pointer" : "";

    const cardClasses = `${variantClasses[variant]} ${roundedClasses[rounded]} ${hoverClasses} ${interactiveClasses} ${className}`;

    return (
        <motion.div
            className={cardClasses}
            onClick={onClick}
            whileHover={interactive ? { scale: 1.02 } : {}}
            whileTap={interactive ? { scale: 0.98 } : {}}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card; 