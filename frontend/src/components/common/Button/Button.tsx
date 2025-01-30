import React from "react";
import styles from "./Button.module.css"; // Import CSS module for styling

// Define props interface for the Button component
interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
}

const Button = ({
    label,
    onClick,
    type = "button",
    disabled = false,
    className = "",
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
