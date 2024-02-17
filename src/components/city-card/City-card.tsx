import './City-card.css'

const CityCard = () => {
    return (
        <article className="card">
            <img className='card__img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg/1200px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg' alt="card-image" />
            <div className='card__info'>
                <h2 className='card__title'>Berlin</h2>
                <p className='card__date'>14.07.23 - 21.07.23</p>
            </div>
        </article>
    )
}

export default CityCard