import React from 'react';
import './Button.css';

interface ButtonProps {
    variant: 'primary' | 'outlined';
    buttonType: 'button' | 'submit' | 'reset'; 
    onClick?: () => void;
    disabled?: boolean; 
    children?: React.ReactNode; 
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, buttonType, disabled, children }) => {
    const buttonClass = variant === 'primary' ? 'primary-button' : 'outlined-button';

    return (
        <button className={buttonClass} onClick={onClick} type={buttonType} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
