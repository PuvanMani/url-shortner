import React from "react";
import "../assets/Css/style.css";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav>
            <h1 className="brand">Puvan</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li> <Link to='/project'>Project</Link></li>
                <li> <Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;