import './Forecast-cards.css'
import ForecastCard from '../forecast-card/Forecast-card';
import { v4 as uuidv4 } from "uuid"; 

const ForecastCards = () => {
    const cards = ['1', '2', '1', '2']
    return (
        <>
            <h2 className='forecast-cards__title'>Week</h2>
            <ul  className='forecast-cards__list'>
                { cards.map(c => <li key={uuidv4()}><ForecastCard /></li>) }
            </ul>
        </>
    )
}

export default ForecastCards;
