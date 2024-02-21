import './Forecast-card.css'

interface ForecastCardProps {
    tempmin: number;
    tempmax: number;
    icon: string;
    datetime: string;
}

const ForecastCard: React.FC<ForecastCardProps> = ({tempmin, tempmax, icon, datetime}) => {
    return (
        <article className='forecast-card'>
            <h2 className='forecast-card__title'>{datetime}</h2>
            <img className='forecast-card__img' src={icon} alt="weather-icon" />
            <p className='forecast-card__temp'>{tempmax}°/{tempmin}°</p>
        </article>
    )
}

export default ForecastCard;
