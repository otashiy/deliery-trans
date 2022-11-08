import Container from "../container/container";
import "./about-us.scss";

const AboutUs = () => {
    return (
        <section className="about-us">
            <Container className="about-us__container">
                <div className="about-us__content">
                   <div className="about-us__content-wrapper">
                        <h2 className="about-us__title">О нас в цифрах</h2>
                        <p className="about-us__desc">
                        Consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor 
                        </p>
                   </div>

                    <div className="about-us__inner">
                        <span className="about-us__spn">#6</span>
                        <p className="about-us__text">
                        Consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                        </p>
                    </div>
                </div>

                <ul className="about-us__list">
                    <li className="about-us__item">
                        <strong className="about-us__item-num">3500</strong>
                        <p className="about-us__item-desc">Профессиональных сотрудников</p>
                    </li>

                    <li className="about-us__item">
                        <strong className="about-us__item-num">400</strong>
                        <p className="about-us__item-desc">Единиц автотранспорта</p>
                    </li>

                    <li className="about-us__item">
                        <strong className="about-us__item-num">31</strong>
                        <p className="about-us__item-desc">Филиал по всей России</p>
                    </li>

                    <li className="about-us__item">
                        <strong className="about-us__item-num">10</strong>
                        <p className="about-us__item-desc">В топе транспортных компаний</p>
                    </li>

                    <li className="about-us__item">
                        <strong className="about-us__item-num">7000</strong>
                        <p className="about-us__item-desc">Постоянных клиентов</p>
                    </li>

                    <li className="about-us__item">
                        <strong className="about-us__item-num">22</strong>
                        <p className="about-us__item-desc">Года вместе с вами</p>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default AboutUs;