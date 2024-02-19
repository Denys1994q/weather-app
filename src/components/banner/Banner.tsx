import './Banner.css'

interface BannerProps {
    temp: number,
    icon: string,
    city: string,
    day: string
}

const Banner: React.FC<BannerProps> = ({temp, icon, day, city}) => {
    return (
        <div className='banner'>
            <div className='banner__inner'>
                <h2 className='banner__title'>{day}</h2>
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