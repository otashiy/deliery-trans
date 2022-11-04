import "./countries.scss";

const Countries = () => {
    return (
        <div>
            <button className="countries__btn">Выбор города</button>
            <ul className="countries__list">
                <li className="countries__item">
                    Москва
                </li>
                <li className="countries__item">
                    Санкт петербург
                </li>
                <li className="countries__item">
                    Новосибирск
                </li>
            </ul>
        </div>
    )
}

export default Countries;