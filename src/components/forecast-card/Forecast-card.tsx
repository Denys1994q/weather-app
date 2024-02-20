import './Forecast-card.css'

const ForecastCard = ({tempmin, tempmax, icon, datetime}: any) => {
    return (
        <article className='forecast-card'>
            <h2 className='forecast-card__title'>{datetime}</h2>
            <img className='forecast-card__img' src={icon} alt="weather-icon" />
            <p className='forecast-card__temp'>{tempmax}°/{tempmin}°</p>
        </article>
    )
}

export default ForecastCard;
