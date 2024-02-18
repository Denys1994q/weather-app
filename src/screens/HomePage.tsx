import "./HomePage.css";
import SearchPanel from "../components/search-panel/Search-panel";
import CityCards from "../components/city-cards/City-cards";
import AddBtn from "../components/btns/add-btn/Add-btn";
import ForecastCards from "../components/forecast-cards/Forecast-cards";
import Banner from "../components/banner/Banner";
import CreateTripModal from "../components/modal/CreateTrip-modal";
import { useState } from "react";
import { cities } from "../data/citiesData";
import { useAppDispatch } from "../store/hooks";
import { useAppSelector } from "../store/hooks";
import { addTrip } from "../store/slices/trips";
import { City } from "../data/citiesData";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const trips = useAppSelector(store => store.trips.trips);
    const [tripId, setTripId] = useState('')

    // const selectedTrip = trips.find()

    // по кліку треба відправити запит і результати запиту записати в масив trips в потрібний об'єкт
    // а далі просто передавати з selectedTrip.todayWeather в Banner. selectedTripWeekWeather в Cards

    // useEffect() [tripId]

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleAddBtnClick = () => {
        setIsOpen(true);
    };

    const handleSaveBtnClick = (formData: any) => {
        dispatch(addTrip(formData));
        setIsOpen(false);
    };

    const handleCityClick = (id: string) => {
        setTripId(id)
        console.log(id)
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
                            <CityCards 
                                cities={trips} 
                                activeCityId={tripId}
                                onCityClick={handleCityClick} />
                        </div>
                        <div className='cardsPanel__btn'>
                            <AddBtn onAddBtnClick={handleAddBtnClick} />
                        </div>
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
                onClose={handleCloseModal}
            />
        </>
    );
};

export default HomePage;
