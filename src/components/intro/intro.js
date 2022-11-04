import Container from "../container/container";
import Personal from "../personal/personal";
import "./intro.scss";


const Intro = () => {
    return (
        <div className="intro">
            <Container className="intro__container">
                <div className="intro__wrapper">
                    <h2 className="intro__title">Доставим ваш <br /> груз в любую <br /> точку России</h2>
                    <p className="intro__desc">Доставляем сборный груз от 1кг по всей стране <br /> узнай стоймость перевозки прямо сейчас</p>
                </div>

                <Personal className="intro__personal" />
            </Container>
        </div>
    )
}

export default Intro;