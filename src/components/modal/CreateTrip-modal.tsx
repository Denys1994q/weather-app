import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./CreateTrip-modal.css";
import Select from "../inputs/select/Select";
import DateInput from "../inputs/date-input/DateInput";
import Button from "../btns/btn/Button";
import { Trip } from "../../store/slices/models/trip";

interface CreateTripModalProps {
    isOpen: boolean;
    onClose: () => void;
    cities: Trip[];
    onSaveBtnClick: (values:  { city: string; startDate: string; endDate: string; }) => void;
}

const CreateTripModal: React.FC<CreateTripModalProps> = ({ isOpen, onClose, cities, onSaveBtnClick }) => {
    const handleClose = () => {
        onClose();
    };

    const cityOptions = cities.map((city: Trip) => ({
        value: city.id,
        label: city.city,
    }));

    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1); 
    const minDate = formatDate(nextDay);
    const next15Days = new Date(nextDay);
    next15Days.setDate(nextDay.getDate() + 15);
    const maxDate = formatDate(next15Days);

    return isOpen ? (
        <div className='modal' onClick={handleClose}>
            <div className='modal__inner' onClick={e => e.stopPropagation()}>
                <header className='modal__header'>
                    <h2 className='modal__title'>Create Trip</h2>
                    <span className='close' onClick={handleClose}>
                        &times;
                    </span>
                </header>
                <div className='modal__content'>
                    <Formik
                        initialValues={{ city: "", startDate: "", endDate: "" }}
                        onSubmit={values => {
                            onSaveBtnClick(values);
                        }}
                        validationSchema={Yup.object().shape({
                            city: Yup.string().required("City is required"),
                            startDate: Yup.date().required("Start Date is required"),
                            endDate: Yup.date().required("End Date is required"),
                        })}
                        validateOnMount={true}
                    >
                        {({ isValid, values }) => (
                            <Form>
                                <Field
                                    name='city'
                                    as={Select}
                                    label='City'
                                    placeholder='Please select a city'
                                    options={cityOptions}
                                />
                                <Field
                                    name='startDate'
                                    as={DateInput}
                                    label='Start Date'
                                    placeholder='Select date'
                                    minDate={minDate}
                                    maxDate={maxDate}
                                />
                                <Field
                                    name='endDate'
                                    as={DateInput}
                                    label='End Date'
                                    placeholder='Select date'
                                    minDate={values.startDate ? values.startDate : minDate}
                                    maxDate={maxDate}
                                />
                                <div className='modal__btns'>
                                    <Button variant='outlined' buttonType='button' onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Button variant='primary' buttonType='submit' disabled={!isValid}>
                                        Save
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    ) : null;
};

export default CreateTripModal;
