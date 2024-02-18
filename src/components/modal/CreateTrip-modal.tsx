import React from "react";
import { Formik, Form, Field } from "formik";
import "./CreateTrip-modal.css";
import Select from "../inputs/select/Select";
import DateInput from "../inputs/date-input/DateInput";
import Button from "../btns/btn/Button";
import { City } from "../../data/citiesData";

const CreateTripModal = ({ isOpen, onClose, cities, onSaveBtnClick }: any) => {
    // Функція для закриття модального вікна
    const handleClose = () => {
        onClose(); // Передача події закриття до батьківського компонента, якщо потрібно
    };

    const cityOptions = cities.map((city: City) => ({
        value: city.id,
        label: city.city
    }));

    return (
        isOpen && (
            <div className='modal'>
                <div className='modal__inner'>
                    <header className='modal__header'>
                        <h2 className="modal__title">Create Trip</h2>
                        <span className='close' onClick={handleClose}>
                            &times;
                        </span>
                    </header>
                    <div className='modal__content'>
                        <Formik
                            initialValues={{ city: "", startDate: "", endDate: "" }}
                            onSubmit={(values) => {
                                onSaveBtnClick(values);
                            }}
                        >
                            <Form>
                                <Select 
                                    label="City"
                                    placeholder="Please select a city" 
                                    options={cityOptions} 
                                    name="city"
                                />
                                <DateInput label="Start Date" placeholder="Select date" fieldName="startDate" />
                                <DateInput label="End Date" placeholder="Select date" fieldName="endDate" />
                                <div className="modal__btns">
                                    <Button variant="outlined" buttonType="button" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" buttonType="submit">
                                        Save
                                    </Button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        )
    );
};

export default CreateTripModal;
