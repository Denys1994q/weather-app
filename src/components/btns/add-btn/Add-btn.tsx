import "./Add-btn.css";

const AddBtn = ({ onAddBtnClick }: any) => {
    return (
        <button className='add-btn' onClick={onAddBtnClick}>
            <span>+</span>
            Add trip
        </button>
    );
};

export default AddBtn;
