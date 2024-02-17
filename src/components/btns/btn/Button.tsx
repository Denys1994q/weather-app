import React from 'react';
import './Button.css';

interface ButtonProps {
    type: 'primary' | 'outlined';
    onClick?: () => void;
    children?: React.ReactNode; 
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
    const buttonClass = type === 'primary' ? 'primary-button' : 'outlined-button';

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
