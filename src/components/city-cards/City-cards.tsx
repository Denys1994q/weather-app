import './City-cards.css'
import CityCard from '../city-card/City-card'

const CityCards = () => {
    const cards = ['1', '2', '1', '2']
    return (
        <ul className="cards">
            { cards.map(c => <li><CityCard /></li>) }
        </ul>
    )
}

export default CityCards