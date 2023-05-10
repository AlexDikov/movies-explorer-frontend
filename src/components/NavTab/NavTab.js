import { Link } from "react-router-dom";

export default function NavTab() {
    return (
        <div className="navTab">
            <Link className="navTab__link" to='/'>О проекте</Link>
            <Link className="navTab__link" to='/'>Технологии</Link>
            <Link className="navTab__link" to='/'>Студент</Link>
        </div>
    )
};