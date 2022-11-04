import Container from "../container/container";
import logo from "../../assets/images/site-logo.svg";
import { Link } from "react-router-dom";
import "./header.scss";
import Navbar from "../navbar/navbar";

const Header = () => {
    return (
        <header className="header">
            <Container className="header__container">
            <a className="header__link" href="/">
                <img src={logo} alt="site logo" width={130} height={60} />
            </a>
            
            <a className="header__link-tel" href="tel:71234567890">7 123 456 78 90</a>

            <form action="#">
                <input type="search" name="search" placeholder="Поиск"  />
            </form>

            <Link to="/calculate">Калькулятор</Link>
            <Link to="/login">Вход</Link>

            <Navbar />
       </Container>
        </header>
    )
}

export default Header;