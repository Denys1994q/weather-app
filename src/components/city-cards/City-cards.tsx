import './City-cards.css'
import CityCard from '../city-card/City-card'
import { City } from '../../data/citiesData'

interface CityCardsProps {
    cities: City[];
    onCityClick: (cityId: string) => void; 
    activeCityId: string;
}

const CityCards: React.FC<CityCardsProps> = ({cities, activeCityId, onCityClick}) => {
    const handleCityClick = (cityId: string) => {
        onCityClick(cityId); // Передаємо активний ID міста вище
    };
    return (
        <ul className="cards">
            { cities.map(c => <li key={c.id}>
                <CityCard 
                    img={c.img} 
                    title={c.city} 
                    startDate={c.startDate}
                    endDate={c.endDate}
                    isActive={c.id === activeCityId} 
                    onClick={() => handleCityClick(c.id)} />
                </li>
            )}
        </ul>
    )
}

export default CityCards