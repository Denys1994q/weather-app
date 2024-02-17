import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner__inner'>
                <h2 className='banner__title'>Sunday</h2>
                <div className='banner__iconBlock'>
                    <img className='banner__icon' src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/rain.png" alt="banner-icon" />
                    <p className='banner_iconText'>24C</p>
                </div>
                <p className='banner__subtitle'>Berlin</p>
            </div>
        </div>
    )
}

export default Banner