import './City-card.css'

interface CityCardProps {
    img: string,
    title: string,
    startDate: Date,
    endDate: Date
}

const CityCard: React.FC<CityCardProps> = ({img, title, startDate, endDate}) => {
    return (
        <article className="card">
            <img className='card__img' src={img} alt="card-image" />
            <div className='card__info'>
                <h2 className='card__title'>{title}</h2>
                <p className='card__date'>{startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</p>
            </div>
        </article>
    )
}

export default CityCard