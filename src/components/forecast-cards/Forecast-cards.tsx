import './Forecast-cards.css'
import ForecastCard from '../forecast-card/Forecast-card';

const ForecastCards = () => {
    const cards = ['1', '2', '1', '2']
    return (
        <>
            <h2 className='forecast-cards__title'>Week</h2>
            <ul  className='forecast-cards__list'>
                { cards.map(c => <li><ForecastCard /></li>) }
            </ul>
        </>
    )
}

export default ForecastCards;
