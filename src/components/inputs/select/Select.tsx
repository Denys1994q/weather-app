import React from "react";
import { useField } from "formik";
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
    name: string;
}

const Select: React.FC<SelectProps> = ({ label, name, options, placeholder }) => {
    const [field, , helpers] = useField(name);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        helpers.setValue(event.target.value);
    };

    return (
        <div className='select-container'>
            {label && <Label labeltext={label} />}
            <div className='select-wrapper'>
                <select className='custom-select' {...field} onChange={handleChange} value={field.value || ""}>
                    <option value="" disabled>{placeholder}</option>
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
