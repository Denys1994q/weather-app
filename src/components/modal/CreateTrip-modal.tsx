import { useEffect, useState } from "react";
import "./CreateTrip-modal.css";
import Select from "../inputs/select/Select";
import DateInput from "../inputs/date-input/DateInput";
import Button from "../btns/btn/Button";

const CreateTripModal = ({ isOpen, onClose }: any) => {
    // Локальний стан для відстеження відкриття / закриття модального вікна
    const [isOpenModal, setIsOpenModal] = useState(isOpen);

    // Функція для закриття модального вікна
    const handleClose = () => {
        setIsOpenModal(false);
        onClose(); // Передача події закриття до батьківського компонента, якщо потрібно
    };

    useEffect(() => {
        setIsOpenModal(isOpen);
    }, [isOpen]);

    return (
        true && (
            <div className='modal'>
                <div className='modal__inner'>
                    <header className='modal__header'>
                        <h2 className="modal__title">Create Trip</h2>
                        <span className='close' onClick={handleClose}>
                            &times;
                        </span>
                    </header>
                    <div className='modal__content'>
                        <Select 
                            label="City"
                            placeholder="Please select a city" 
                            options={[
                                {value: 'Berlin', label: 'Berlin'},
                                {value: 'Kek', label: 'Kek'}
                            ]} 
                        />
                        <DateInput label="Start Date" placeholder="Select date"  />
                        <DateInput label="End Date" placeholder="Select date"  />
                    </div>
                    <div className="modal__btns">
                        <Button type="outlined" onClick={() => console.log('Outlined button clicked')}>
                            Cancel
                        </Button>
                        <Button type="primary" onClick={() => console.log('Primary button clicked')}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        )
    );
};

export default CreateTripModal;
