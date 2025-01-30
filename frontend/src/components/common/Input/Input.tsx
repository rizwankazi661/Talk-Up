import React, { ChangeEvent, FocusEvent, useState } from "react";
import styles from "./Input.module.css";

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    label?: string;
}

const Input = (params: InputProps) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setIsFocused(false);
        }
    };

    return (
        <div className={`${styles.main_container} ${params.className}`}>
            <div className={styles.input_wrapper}>
                {params.label && (
                    <label className={`${styles.label} ${isFocused || params.value ? styles.active : ""}`}>
                        {params.label}
                    </label>
                )}
                <input
                    type={params.type}
                    placeholder={params.placeholder}
                    value={params.value}
                    onChange={params.onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={styles.input}
                />
            </div>
        </div>
    );
};

export default Input;
