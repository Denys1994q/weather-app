import React, { useEffect, useState } from "react";
import "./Success-alert.css";

interface SuccessAlertProps {
    message: string;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return isVisible ? (
        <div className='success-alert'>
            <span className='success-alert__icon'>✔</span>
            <span className='success-alert__message'>{message}</span>
        </div>
    ) : null;
};

export default SuccessAlert;
