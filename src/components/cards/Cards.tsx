import './Cards.css'
import Card from "../card/Card"

const Cards = () => {
    const cards = ['1', '2', '1', '2']
    return (
        <ul className="cards">
            { cards.map(c => <li><Card /></li>) }
        </ul>
    )
}

export default Cards