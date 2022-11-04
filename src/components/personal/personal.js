import "./personal.scss";
import { Link } from "react-router-dom";

const Personal = ({className}) => {
    return (
        <div className={`personal ` + className}>
            <Link className="personal__link">расчитать <br /> стоймость</Link>
            <Link className="personal__link personal__link--girl">личный <br /> менеджер</Link>
        </div>
    )
}

export default Personal;