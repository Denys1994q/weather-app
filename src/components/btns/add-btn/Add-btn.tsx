import "./Add-btn.css";

interface AddBtnProps {
    onAddBtnClick: () => void; 
}

const AddBtn: React.FC<AddBtnProps> = ({ onAddBtnClick }) => {
    return (
        <button className='add-btn' onClick={onAddBtnClick}>
            <span>+</span>
            Add trip
        </button>
    );
};

export default AddBtn;
