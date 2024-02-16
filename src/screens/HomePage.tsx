import './HomePage.css'
import SearchPanel from "../components/search-panel/Search-panel"
import WeatherPanel from "../components/weather-panel/Weather-panel"

// можна все зробити на хомпейдж і через пропси передавати в компоненти і отримувати
// отримати інпут з пошуку, і передати в WeatherPanel нові дані
const HomePage = () => {
    return (
        <section className='home'>
            <h1 className="home__title">Weather <span>Forecast</span></h1>
            <div className='home__searchPanel'>
                <SearchPanel />
            </div>
            <WeatherPanel />
        </section>
    )
}

export default HomePage