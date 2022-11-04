import Container from "../container/container";
import "./type.scss";
import gazel from "../../assets/images/gazel.png";
import { Link } from "react-router-dom";

const Type = () => {
    return (
        <section className="type">
            <Container className="type__container">

                <div className="type__wrapper">
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

                    <button className="type__btn"></button>
                </div>

                <ul className="type__car-list">
                    <li className="type__car-item">
                        <h3 className="type__car-title">Фургон</h3>
                        <img src={gazel} alt="gazel" width={200} height={96} />

                        <div className="type__car-wrapper">
                            <Link>Заказать</Link>
                            <button></button>
                        </div>
                    </li>
                    <li className="type__car-item">
                        <h3 className="type__car-title">Грузовик</h3>
                        <img src={gazel} alt="gazel" width={200} height={96} />

                        <div className="type__car-wrapper">
                            <Link>Заказать</Link>
                            <button></button>
                        </div>
                    </li>
                    <li className="type__car-item">
                        <h3 className="type__car-title">Фургон</h3>
                        <img src={gazel} alt="gazel" width={200} height={96} />

                        <div className="type__car-wrapper">
                            <Link>Заказать</Link>
                            <button></button>
                        </div>
                    </li>
                    <li className="type__car-item">
                        <h3 className="type__car-title">Грузовик</h3>
                        <img src={gazel} alt="gazel" width={200} height={96} />

                        <div className="type__car-wrapper">
                            <Link>Заказать</Link>
                            <button></button>
                        </div>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default Type;