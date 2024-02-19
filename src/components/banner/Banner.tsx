import './Banner.css'

const Banner = ({temp, icon, city}: any) => {
    return (
        <div className='banner'>
            <div className='banner__inner'>
                <h2 className='banner__title'>Sunday</h2>
                <div className='banner__iconBlock'>
                    <img className='banner__icon' src={icon} alt="banner-icon" />
                    <p className='banner_iconText'>{temp}°C</p>
                </div>
                <p className='banner__subtitle'>{city}</p>
            </div>
        </div>
    )
}

export default Banner