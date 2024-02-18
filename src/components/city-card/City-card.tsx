import './City-card.css'

interface CityCardProps {
    img: string,
    title: string,
    startDate: string,
    endDate: string,
    onClick: () => void;
    isActive: boolean;
}

const CityCard: React.FC<CityCardProps> = ({img, title, startDate, endDate, isActive, onClick}) => {
    const handleClick = () => {
        onClick(); 
    };
    return (
        <article className='card' onClick={handleClick}>
            <img className='card__img' src={img} alt="card-image" />
            <div className={`card__info ${isActive ? 'active' : ''}`} >
                <h2 className='card__title'>{title}</h2>
                <p className='card__date'>{startDate} - {endDate}</p>
            </div>
        </article>
    )
}

export default CityCard