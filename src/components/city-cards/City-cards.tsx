import './City-cards.css'
import CityCard from '../city-card/City-card'
import { City } from '../../data/citiesData'

interface CityCardsProps {
    cities: City[]
}

const CityCards: React.FC<CityCardsProps> = ({cities}) => {
    return (
        <ul className="cards">
            { cities.map(c => <li key={c.id}>
                <CityCard 
                    img={c.img} 
                    title={c.city} 
                    startDate={c.startDate}
                    endDate={c.endDate} />
                </li>
            )}
        </ul>
    )
}

export default CityCards