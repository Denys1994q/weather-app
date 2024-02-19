import './Banner.css'
import Timer from '../timer/Timer'

interface BannerProps {
    temp: number,
    icon: string,
    city: string,
    day: string,
    deadline: string
}

const Banner: React.FC<BannerProps> = ({temp, icon, day, city, deadline}) => {
    return (
        <div className='banner'>
            <div className='banner__inner'>
                <h2 className='banner__title'>{day}</h2>
                <div className='banner__iconBlock'>
                    <img className='banner__icon' src={icon} alt="banner-icon" />
                    <p className='banner_iconText'>{temp}<span>°C</span></p>
                </div>
                <p className='banner__subtitle'>{city}</p>
                <div className='banner__timer'>
                    <Timer deadline={deadline} />
                </div>
            </div>
        </div>
    )
}

export default Banner