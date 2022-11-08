import Container from "../container/container";
import "./advantage.scss";

const Advantage = () => {
    return (
        <section className="advantage">
            <Container className="advantage__container">
                <h2 className="advantage__title">Приемущества</h2>

                <ul className="advantage__list">
                    <li className="advantage__item advantage__item--oclock">
                        <h3 className="advantage__item-title">Экономия времени</h3>
                        <p className="advantage__item-desc">Не надо звонить
                        и вести долгие 
                        переговоры</p>
                    </li>

                    <li className="advantage__item advantage__item--money">
                        <h3 className="advantage__item-title">Гарантия цены</h3>
                        <p className="advantage__item-desc">Исполнитель 
                        не изменит цену и условия 
                        в последний момент</p>
                    </li>

                    <li className="advantage__item advantage__item--furgon">
                        <h3 className="advantage__item-title">Страхование грузов</h3>
                        <p className="advantage__item-desc">Перевозчики торгуются 
                            за ваш заказ,
                            снижая цены</p>
                    </li>

                    <li className="advantage__item advantage__item--cargo">
                        <h3 className="advantage__item-title">Отслеживание груза</h3>
                        <p className="advantage__item-desc">Схема отслеживая
                        покажет 
                        где ваш груз</p>
                    </li>

                    <li className="advantage__item advantage__item--card">
                        <h3 className="advantage__item-title">Оплата картой</h3>
                        <p className="advantage__item-desc">Оплата картой и Яндекс.Деньги,
                        а так же
                        большой выбор 
                        других способов оплаты</p>
                    </li>

                    <li className="advantage__item advantage__item--person">
                        <h3 className="advantage__item-title">Надёжные перевозчики</h3>
                        <p className="advantage__item-desc">Все перевозчики проходят 
                        у нас проверку
                        документов 
                        и подтверждение транспорта</p>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default Advantage;