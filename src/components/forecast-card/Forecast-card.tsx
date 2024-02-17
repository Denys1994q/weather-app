import './Forecast-card.css'

const ForecastCard = () => {
    return (
        <article className='forecast-card'>
            <h2 className='forecast-card__title'>Monday</h2>
            <img className='forecast-card__img' src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/clear-day.png" alt="weather-icon" />
            <p className='forecast-card__temp'>23°/21°</p>
        </article>
    )
}

export default ForecastCard;
