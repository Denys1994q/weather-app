import "./HomePage.css";
import SearchPanel from "../components/search-panel/Search-panel";
import Cards from "../components/city-cards/City-cards";
import AddBtn from "../components/btns/add-btn/Add-btn";
import ForecastCards from "../components/forecast-cards/Forecast-cards";
import Banner from "../components/banner/Banner";

// можна все зробити на хомпейдж і через пропси передавати в компоненти і отримувати
// отримати інпут з пошуку, і передати в WeatherPanel нові дані
const HomePage = () => {
    return (
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
                        <Cards />
                    </div>
                    <button className='cardsPanel__btn'>
                        <AddBtn />
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
    );
};

export default HomePage;
