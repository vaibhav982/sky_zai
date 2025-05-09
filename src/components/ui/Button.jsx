import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({
    children,
    to,
    href,
    onClick,
    variant = "primary",
    size = "md",
    className = "",
    icon,
    iconPosition = "right",
    disabled = false,
    fullWidth = false,
    type = "button",
    ...props
}) => {
    const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-dark-800";

    const variantClasses = {
        primary: "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5",
        secondary: "bg-light-900/10 text-white hover:bg-light-900/20 backdrop-blur-sm",
        outline: "border border-light-800 text-light-300 hover:border-primary-500 hover:text-primary-400",
        text: "text-light-300 hover:text-white",
        glass: "bg-white/15 backdrop-blur-md text-white hover:bg-white/20 border border-white/20",
    };

    const sizeClasses = {
        sm: "text-xs px-4 py-1.5 gap-1.5",
        md: "text-sm px-5 py-2 gap-2",
        lg: "text-base px-6 py-2.5 gap-2.5",
        xl: "text-lg px-8 py-3 gap-3",
    };

    const fullWidthClass = fullWidth ? "w-full" : "";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidthClass} ${disabledClass} ${className}`;

    const content = (
        <>
            {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
        </>
    );

    const motionProps = {
        whileTap: { scale: disabled ? 1 : 0.97 },
    };

    // Return as Link if "to" prop exists
    if (to) {
        return (
            <motion.div {...motionProps}>
                <Link to={to} className={buttonClasses} {...props}>
                    {content}
                </Link>
            </motion.div>
        );
    }

    // Return as anchor if "href" prop exists
    if (href) {
        return (
            <motion.div {...motionProps}>
                <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer" {...props}>
                    {content}
                </a>
            </motion.div>
        );
    }

    // Otherwise return as button
    return (
        <motion.button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            {...motionProps}
            {...props}
        >
            {content}
        </motion.button>
    );
};

export default Button; 