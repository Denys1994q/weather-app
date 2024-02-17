import './City-card.css'

interface CityCardProps {
    img: string,
    title: string
}

const CityCard: React.FC<CityCardProps> = ({img, title}: any) => {
    console.log(img)
    return (
        <article className="card">
            <img className='card__img' src={img} alt="card-image" />
            <div className='card__info'>
                <h2 className='card__title'>{title}</h2>
                <p className='card__date'>14.07.23 - 21.07.23</p>
            </div>
        </article>
    )
}

export default CityCard