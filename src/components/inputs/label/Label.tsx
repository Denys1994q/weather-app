import "./Label.css";

interface LabelProps {
    labeltext: string;
}

const Label: React.FC<LabelProps> = ({ labeltext }) => {
    return <label className='required-label'>{labeltext}</label>;
};

export default Label;
