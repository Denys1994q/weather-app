import React from "react";
import "./DateInput.css";
import Label from "../label/Label";

interface DateInputProps {
    label: string;
    placeholder: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, placeholder }) => {
    return (
        <div className='date-input-container'>
            {label && <Label labeltext={label} />} 
            <div className='date-input-wrapper'>
                <input className='custom-date-input' type='date' />
            </div>
        </div>
    );
};

export default DateInput;
