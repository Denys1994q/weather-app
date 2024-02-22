import "./HomePage.css";
import SearchPanel from "../components/search-panel/Search-panel";
import CityCards from "../components/city-cards/City-cards";
import AddBtn from "../components/btns/add-btn/Add-btn";
import ForecastCards from "../components/forecast-cards/Forecast-cards";
import Banner from "../components/banner/Banner";
import CreateTripModal from "../components/modal/CreateTrip-modal";
import { useEffect, useState, useMemo } from "react";
import { cities } from "../data/citiesData";
import { useAppDispatch } from "../store/hooks";
import { useAppSelector } from "../store/hooks";
import { addTrip, deleteTrip, selectTrip, setActiveFilter } from "../store/slices/trips";
import { Trip } from "../store/slices/models/trip";
import { getTodaysWeather, getWeekWeather } from "../store/slices/trips";
import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";
import AuthPanel from "../components/auth-panel/AuthPanel";
import SuccessAlert from "../components/success-alert/Success-alert";

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpenAlert, setIsOpenAlert] = useState(false);
    const trips = useAppSelector(store => store.trips.trips);
    const selectedTripId = useAppSelector(store => store.trips.selectedTripId);
    const cityFilter = useAppSelector(store => store.trips.cityFilter);
    const selectedTrip = trips.find((t: Trip) => t.id === selectedTripId);
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
        if (selectedTrip) {
            dispatch(getTodaysWeather({ city: selectedTrip.city }));
            dispatch(
                getWeekWeather({
                    city: selectedTrip.city,
                    startDate: selectedTrip.startDate,
                    endDate: selectedTrip.endDate,
                })
            );
        }
    }, [selectedTripId]);

    useEffect(() => {
        localStorage.setItem("trips", JSON.stringify(trips));
    }, [trips]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddBtnClick = () => {
        setIsOpenAlert(false);
        setIsModalOpen(true);
    };

    const handleSaveBtnClick = (formValues: { city: string; startDate: string; endDate: string }) => {
        dispatch(addTrip(formValues));
        setIsOpenAlert(true);
        setIsModalOpen(false);
    };

    const handleCityClick = (id: string) => {
        dispatch(selectTrip(id));
    };

    const handleCityDeleteClick = (id: string) => {
        dispatch(deleteTrip(id));
    };

    const handleSearchChange = (newValue: string) => {
        dispatch(setActiveFilter(newValue));
    };

    const filteredTrips = useMemo(() => {
        return trips.filter((t: Trip) => t.city.toLowerCase().includes(cityFilter.toLowerCase()));
    }, [trips, cityFilter]);

    const filteredSortTrips = useMemo(() => {
        return filteredTrips.sort((a: Trip, b: Trip) => {
            const dateA = new Date(a.startDate).getTime();
            const dateB = new Date(b.startDate).getTime();
            return dateA - dateB;
        });
    }, [filteredTrips]);

    return (
        <>
            <section className='home'>
                <div className='home__trips'>
                    <header className='authPanel'>
                        <h1 className='home__title'>
                            Weather <span>Forecast</span>
                        </h1>
                        <AuthPanel />
                    </header>
                    <div className='home__searchPanel'>
                        <SearchPanel onSearchChange={handleSearchChange} />
                    </div>
                    <div className='home__cardsPanel cardsPanel'>
                        <div className='cardsPanel__cards'>
                            <CityCards
                                cities={filteredSortTrips}
                                activeCityId={selectedTripId}
                                onCityClick={handleCityClick}
                                onDeleteClick={handleCityDeleteClick}
                            />
                        </div>
                        <div className='cardsPanel__btn'>
                            <AddBtn onAddBtnClick={handleAddBtnClick} />
                        </div>
                    </div>
                    <div className='home__forecast'>
                        {weekWeatherLoading && <Spinner />}
                        {weekWeatherErr && <Error message='Sorry, smth is wrong...' />}
                        {selectedTrip && selectedTrip.weekWeather && !weekWeatherLoading ? (
                            <ForecastCards cards={selectedTrip.weekWeather} githubUrlImgs={githubUrlImgs} />
                        ) : null}
                    </div>
                    {isOpenAlert ? (
                        <div className='home__alert'>
                            <SuccessAlert message='New trip is added!' />
                        </div>
                    ) : null}
                </div>
                <div className='home__todayWeather'>
                    {todayWeatherLoading && <Spinner />}
                    {todayWeatherErr && <Error message='Sorry, smth is wrong...' />}
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
                isOpen={isModalOpen}
                onSaveBtnClick={handleSaveBtnClick}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default HomePage;
