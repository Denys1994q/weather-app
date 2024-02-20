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
import { addTrip, selectTrip, setActiveFilter } from "../store/slices/trips";
import { City } from "../data/citiesData";
import { getTodaysWeather, getWeekWeather } from "../store/slices/trips";
import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";
import Timer from "../components/timer/Timer";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const trips = useAppSelector(store => store.trips.trips);
    const selectedTripId = useAppSelector(store => store.trips.selectedTripId);
    const cityFilter = useAppSelector(store => store.trips.cityFilter);
    const selectedTrip = trips.find((t: any) => t.id === selectedTripId);
    const todayWeatherLoading = useAppSelector(store => store.trips.getTodaysWeatherLoading);
    const todayWeatherErr = useAppSelector(store => store.trips.getTodaysWeatherError);
    const weekWeatherLoading = useAppSelector(store => store.trips.getWeekWeatherLoading);
    const weekWeatherErr = useAppSelector(store => store.trips.getWeekWeatherError);

    const githubUrlImgs =
        "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color";
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];

    useEffect(() => {
        dispatch(getTodaysWeather({ city: selectedTrip.city }));
        // dispatch(
        //     getWeekWeather({
        //         city: selectedTrip.city,
        //         startDate: selectedTrip.startDate,
        //         endDate: selectedTrip.endDate,
        //     })
        // );
    }, [selectedTripId]);

    useEffect(() => {
        localStorage.setItem('trips', JSON.stringify(trips));
    }, [trips])

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

    const handleSearchChange = (newValue: any) => {
        dispatch(setActiveFilter(newValue));
    };


    return (
        <>
            <section className='home'>
                <div className='home__trips'>
                    <h1 className='home__title'>
                        Weather <span>Forecast</span>
                    </h1>
                    <div className='home__searchPanel'>
                        <SearchPanel onSearchChange={handleSearchChange} />
                    </div>
                    <div className='home__cardsPanel cardsPanel'>
                        <div className='cardsPanel__cards'>
                            <CityCards
                                cities={trips.filter((t: any) =>
                                    t.city.toLowerCase().includes(cityFilter.toLowerCase())
                                )}
                                activeCityId={selectedTripId}
                                onCityClick={handleCityClick}
                            />
                        </div>
                        <div className='cardsPanel__btn'>
                            <AddBtn onAddBtnClick={handleAddBtnClick} />
                        </div>
                    </div>
                    <div className='home__forecast'>
                        {weekWeatherLoading && <Spinner />}
                        {weekWeatherErr && <Error message="Sorry, smth is wrong..." /> }
                        {selectedTrip && selectedTrip.weekWeather && !weekWeatherLoading  ? (
                            <ForecastCards cards={selectedTrip.weekWeather} githubUrlImgs={githubUrlImgs} />
                        ) : null}
                    </div>
                </div>
                <div className='home__todayWeather'>
                    {todayWeatherLoading && <Spinner />}
                    {todayWeatherErr && <Error message="Sorry, smth is wrong..." /> }
                    {selectedTrip && selectedTrip.todayWeather && !todayWeatherLoading ? (
                        <Banner
                            city={selectedTrip.city}
                            day={dayOfWeek}
                            temp={Math.floor(selectedTrip.todayWeather.temp)}
                            icon={`${githubUrlImgs}/${selectedTrip.todayWeather.icon}.png`}
                            deadline={`${selectedTrip.startDate} 00:00`}
                        />
                    ) : null}
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
