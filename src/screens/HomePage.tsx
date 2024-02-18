import "./HomePage.css";
import SearchPanel from "../components/search-panel/Search-panel";
import Cards from "../components/city-cards/City-cards";
import AddBtn from "../components/btns/add-btn/Add-btn";
import ForecastCards from "../components/forecast-cards/Forecast-cards";
import Banner from "../components/banner/Banner";
import CreateTripModal from "../components/modal/CreateTrip-modal";
import { useState } from "react";
import { cities } from "../data/citiesData";
import { useAppDispatch } from "../store/hooks";
import { useAppSelector } from "../store/hooks";

// add trip немає ніякого відношення до апі, це все локально
// апі починає працювати по кліку на карточку міста
// є два списки, список всіх міст доступних і список вибраних міст для подорожей
// add trip має взяти місто зі списку всіх і додати в список вибраних
const HomePage = () => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const trips = useAppSelector(store => store.trips.trips);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleAddBtnClick = () => {
        console.log("here");
        setIsOpen(true);
    };

    const handleSaveBtnClick = () => {
        console.log('parent')
    }

    return (
        <>
            <section className='home'>
                <div className='home__trips'>
                    <h1 className='home__title'>
                        Weather <span>Forecast</span>
                    </h1>
                    <div className='home__searchPanel'>
                        <SearchPanel />
                    </div>
                    <div className='home__cardsPanel cardsPanel'>
                        <div className='cardsPanel__cards'>
                            <Cards cities={trips} />
                        </div>
                        <button className='cardsPanel__btn'>
                            <AddBtn onAddBtnClick={handleAddBtnClick} />
                        </button>
                    </div>
                    <div className='home__forecast'>
                        <ForecastCards />
                    </div>
                </div>
                <div className='home__todayWeather'>
                    <Banner />
                </div>
            </section>
            <CreateTripModal 
                cities={cities} 
                isOpen={isOpen} 
                onSaveBtnClick={handleSaveBtnClick}
                onClose={handleCloseModal} />
        </>
    );
};

export default HomePage;
