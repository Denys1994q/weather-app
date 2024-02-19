import "./HomePage.css";
import SearchPanel from "../components/search-panel/Search-panel";
import CityCards from "../components/city-cards/City-cards";
import AddBtn from "../components/btns/add-btn/Add-btn";
import ForecastCards from "../components/forecast-cards/Forecast-cards";
import Banner from "../components/banner/Banner";
import CreateTripModal from "../components/modal/CreateTrip-modal";
import { useEffect, useState } from "react";
import { cities } from "../data/citiesData";
import { useAppDispatch } from "../store/hooks";
import { useAppSelector } from "../store/hooks";
import { addTrip, selectTrip } from "../store/slices/trips";
import { City } from "../data/citiesData";
import { getTodaysWeather } from "../store/slices/trips";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const trips = useAppSelector(store => store.trips.trips);
    const selectedTripId = useAppSelector(store => store.trips.selectedTripId);
    const selectedTrip = trips.find((t: any) => t.id === selectedTripId);
    const githubUrlImgs = 'https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color'

    useEffect(() => {
        console.log("here");
        dispatch(getTodaysWeather({ city: selectedTrip.city }));
    }, [selectedTripId, dispatch]);

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

    const handleCityClick = (id: any) => {
        dispatch(selectTrip(id));
    };

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
                            <CityCards cities={trips} activeCityId={selectedTripId} onCityClick={handleCityClick} />
                        </div>
                        <div className='cardsPanel__btn'>
                            <AddBtn onAddBtnClick={handleAddBtnClick} />
                        </div>
                    </div>
                    <div className='home__forecast'>
                        <ForecastCards />
                    </div>
                </div>
                {selectedTrip && selectedTrip.todayWeather && (
                    <div className='home__todayWeather'>
                        <Banner 
                            city={selectedTrip.city}
                            temp={selectedTrip.todayWeather.temp}  
                            icon={`${githubUrlImgs}/${selectedTrip.todayWeather.icon}.png`} />
                    </div>
                )}
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
