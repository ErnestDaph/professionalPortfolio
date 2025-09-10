import styles from '../Button/Button.module.css';
import React from 'react';
import { useState } from 'react';

type ButtonVariants = 'primary' | 'secondary';

interface ButtonProps {
    variant?: ButtonVariants;
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
