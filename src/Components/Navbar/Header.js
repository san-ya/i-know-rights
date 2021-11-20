import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = props => {
    return (
        <header className = "header">
            <nav className = "headerContents">
                <NavLink to = "/">HOME</NavLink>
                <a href="https://legislative.gov.in/constitution-of-india">CONSTITUTION</a>
            </nav>
        </header>
    )
}

export default Header;