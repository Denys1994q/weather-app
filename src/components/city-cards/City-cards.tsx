import React, { useRef } from "react";
import "./City-cards.css";
import CityCard from "../city-card/City-card";
import { transformDate } from "../../utils/dateUtils";
import { Trip } from "../../store/slices/models/trip";

interface CityCardsProps {
    cities: Trip[];
    onCityClick: (cityId: string) => void;
    activeCityId: string;
}

const CityCards: React.FC<CityCardsProps> = ({ cities, activeCityId, onCityClick }) => {
    const containerRef = useRef<HTMLUListElement>(null);

    const handleCityClick = (cityId: string) => {
        onCityClick(cityId);
    };

    const scrollToLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
        }
    };

    const scrollToRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += containerRef.current.offsetWidth;
        }
    };

    return (
        <div className='carousel-container'>
            {cities.length > 0 ? (
                <>
                    <div className='carousel__btns'>
                        <button className='carousel__btn prev' onClick={scrollToLeft}></button>
                        <button className='carousel__btn next' onClick={scrollToRight}></button>
                    </div>
                    <ul ref={containerRef} className='carousel'>
                        {cities.map(c => (
                            <li key={c.id} className='carousel-card'>
                                <CityCard
                                    img={c.img}
                                    title={c.city}
                                    startDate={transformDate(c.startDate)}
                                    endDate={transformDate(c.endDate)}
                                    isActive={c.id === activeCityId}
                                    onClick={() => handleCityClick(c.id)}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
};

export default CityCards;
