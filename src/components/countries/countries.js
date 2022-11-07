import { useState } from "react";
import "./countries.scss";

const Countries = () => {

const [click,setClick] = useState(false);

const handleClickBtn=() => setClick(!click);

    return (
        <div>
            <button onClick={handleClickBtn} className="countries__btn">Выбор города</button>
            <ul className={click ? "countries__list countries__list--opened" : "countries__list"}>
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