import React from "react";
import { useField } from "formik";
import "./DateInput.css";
import Label from "../label/Label";

interface DateInputProps {
    label: string;
    placeholder: string;
    fieldName: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, fieldName, placeholder }) => {
    const [field, , helpers] = useField(fieldName);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        helpers.setValue(event.target.value);
    };

    return (
        <div className='date-input-container'>
            {label && <Label labeltext={label} />} 
            <div className='date-input-wrapper'>
                <input className='custom-date-input' type='date' placeholder={placeholder} onChange={handleChange} value={field.value || ""} />
            </div>
        </div>
    );
};

export default DateInput;
