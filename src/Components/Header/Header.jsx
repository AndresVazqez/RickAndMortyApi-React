import { NavLink } from "react-router-dom";
import './Header.scss';


export default function Header () {

    return (
        <header className="c-header">
            <nav className="c-header__nav">
                <NavLink className="c-header__nav--a" to="/">Home</NavLink>
                <NavLink  className="c-header__nav--a" to="/characters">Characters</NavLink>                
                <NavLink  className="c-header__nav--a" to="/location">Location</NavLink>
            </nav>
        </header>
    )
}