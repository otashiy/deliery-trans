import Container from "../container/container";
import logo from "../../assets/images/site-logo.svg";
import { Link } from "react-router-dom";
import "./header.scss";
import Navbar from "../navbar/navbar";
import Intro from "../intro/intro";
import Countries from "../countries/countries";

const Header = () => {
    return (
        <header className="header">
            <Container className="header__container">
            <div className="header__wrapper">
                <a className="header__link" href="/">
                    <img src={logo} alt="site logo" width={130} height={60} />
                </a>
                
                <a className="header__link-tel" href="tel:71234567890">7 123 456 78 90</a>

                <form action="#">
                    <input className="header__inp" type="search" name="search" placeholder="Поиск"  />
                </form>

                <Countries />

                <Link className="header__link-tel header__link-tel--" to="/calculate">Калькулятор</Link>
                <Link className="header__link-login" to="/login">Вход</Link>
            </div>
            </Container>
            <Navbar />
            <Intro />
        </header>
    )
}

export default Header;