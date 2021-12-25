import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation () {
    return (
        <nav className="MainNavigation">
            <ul>
                <li><NavLink activeClassName="active" exact to="/">Start</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/products">Produkte</NavLink></li>
            </ul>
        </nav>
    );
}

export default MainNavigation;
