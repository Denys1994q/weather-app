import React from "react";
import "./Select.css";
import Label from "../label/Label";

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    label: string;
    placeholder: string;
    options: Option[];
}

const Select: React.FC<SelectProps> = ({ label, options, placeholder }) => {
    return (
        <div className='select-container'>
            {label && <Label labeltext={label} />}
            <div className='select-wrapper'>
                <select className='custom-select'>
                    <option value="" disabled selected>{placeholder}</option>
                    {options.map((option: Option, index: number) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Select;
