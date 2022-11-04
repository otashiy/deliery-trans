import "./type.scss";

const Type = () => {
    return (
        <ul className="type-list">
            <li className="type-list__item">
                <button className="type-list__item-btn">Тент</button>
            </li>
            <li className="type-list__item">
                <button className="type-list__item-btn">Борт</button>
            </li>
            <li className="type-list__item">
                <button className="type-list__item-btn">Рефрижератор</button>
            </li>
            <li className="type-list__item">
                <button className="type-list__item-btn">Фургон</button>
            </li>
        </ul>
    )
}

export default Type;