import Container from "../container/container";
import "./transport.scss";
import { Link } from "react-router-dom";

const Transport = () => {
    return (
        <>
        <section className="transport">
            <Container className="transport__container">
                <h2 className="transport__title">Виды перевозимых грузов</h2>
                <ul className="transport__list">
                    <li className="trasnport__item trasnport__item--furgon">
                        <h3 className="transport__item-title">Экспедирование</h3>
                        <p className="transport__item-desc">Принимаем, сопровождаем 
                        и сдаем 
                        груз по утвержденному 
                        маршруту. 
                        Контролируем 
                        правильное 
                        оформление...</p>
                        <Link>Подробнее</Link>
                    </li>

                    <li className="trasnport__item">
                        <h3 className="transport__item-title">Сборные рефгрузы</h3>
                        <p className="transport__item-desc">Принимаем, сопровождаем 
                        и сдаем 
                        груз по утвержденному 
                        маршруту. 
                        Контролируем 
                        правильное 
                        оформление...</p>
                        <Link>Подробнее</Link>
                    </li>

                    <li className="trasnport__item">
                        <h3 className="transport__item-title">Перевозка медикаментов</h3>
                        <p className="transport__item-desc">Принимаем, сопровождаем 
                        и сдаем 
                        груз по утвержденному 
                        маршруту. 
                        Контролируем 
                        правильное 
                        оформление...</p>
                        <Link>Подробнее</Link>
                    </li>

                    <li className="trasnport__item trasnport__item--fructis">
                        <h3 className="transport__item-title">Перевозка продуктов питания</h3>
                        <p className="transport__item-desc">Принимаем, сопровождаем 
                        и сдаем 
                        груз по утвержденному 
                        маршруту. 
                        Контролируем 
                        правильное 
                        оформление...</p>
                        <Link>Подробнее</Link>
                    </li>

                    <li className="trasnport__item trasnport__item--instrument">
                        <h3 className="transport__item-title">Перевозка стройматериалов
</h3>
                        <p className="transport__item-desc">Принимаем, сопровождаем 
                        и сдаем 
                        груз по утвержденному 
                        маршруту. 
                        Контролируем 
                        правильное 
                        оформление...</p>
                        <Link>Подробнее</Link>
                    </li>

                    <li className="trasnport__item">
                        <h3 className="transport__item-title">Логистика и маршрутизация</h3>
                        <p className="transport__item-desc">Принимаем, сопровождаем 
                        и сдаем 
                        груз по утвержденному 
                        маршруту. 
                        Контролируем 
                        правильное 
                        оформление...</p>
                        <Link>Подробнее</Link>
                    </li>
                </ul>
            </Container>
        </section>
        </>
    )
}

export default Transport;