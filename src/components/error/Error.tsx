import React from "react";
import "./Error.css";

interface ErrorProps {
    message: string
}

const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <div className='error-container'>
            <img src='https://res.cloudinary.com/dw60kllwn/image/upload/v1703154953/164-1646974_error-image-oops-looks-like-the-page-is_juwey4.png' alt='Error' className='error-image' />
            <p className='error-message'>{message}</p>
        </div>
    );
};

export default Error;
