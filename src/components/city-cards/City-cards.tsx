import './City-cards.css'
import CityCard from '../city-card/City-card'
import { City } from '../../data/citiesData'
import transformDate from '../../utils/dateUtils'

interface CityCardsProps {
    cities: City[];
    onCityClick: (cityId: string) => void; 
    activeCityId: string;
}

const CityCards: React.FC<CityCardsProps> = ({cities, activeCityId, onCityClick}) => {
    const handleCityClick = (cityId: string) => {
        onCityClick(cityId); 
    };
    return (
        <ul className="cards">
            { cities.map(c => <li key={c.id}>
                <CityCard 
                    img={c.img} 
                    title={c.city} 
                    startDate={transformDate(c.startDate)}
                    endDate={transformDate(c.endDate)}
                    isActive={c.id === activeCityId} 
                    onClick={() => handleCityClick(c.id)} />
                </li>
            )}
        </ul>
    )
}

export default CityCards