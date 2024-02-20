import "./Forecast-cards.css";
import ForecastCard from "../forecast-card/Forecast-card";
import { v4 as uuidv4 } from "uuid";
import { getDayOfWeek } from "../../utils/dateUtils";

interface ForecastCardsProps {
    cards: any[];
    githubUrlImgs: string
}

const ForecastCards: React.FC<ForecastCardsProps> = ({ cards, githubUrlImgs }) => {
    return (
        <>
            <h2 className='forecast-cards__title'>Week</h2>
            <ul className='forecast-cards__list'>
                {cards.map(c => (
                    <li key={uuidv4()}>
                        <ForecastCard 
                            datetime={getDayOfWeek(c.datetime)} 
                            tempmin={parseInt(c.tempmin)} 
                            tempmax={parseInt(c.tempmax)} 
                            icon={`${githubUrlImgs}/${c.icon}.png`} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ForecastCards;
