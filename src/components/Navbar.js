import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import menu from "../images/menu.png";
import { useState } from "react";
import $ from "jquery";

function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const route = location.pathname;
    
    function setMenuMode() {
        setMenuOpen(prevMenu => !prevMenu);
    }

    function openCloseMenu() {
        var x = document.getElementById("nav--menu");
        if (x.className === "nav--menu") {
            x.classList.add('responsive')
            x.style.position = 'absolute';
            x.style.display = 'flex';
            x.style.flexDirection = 'column';
            x.style.left = '33%'
        } else {
            x.classList.remove('responsive')
            x.style.display = 'none';
        }
    }

    function handleMenu() {
        setMenuMode();
        openCloseMenu();
    }

    function checkBodyClickForMenu() {
        $(".menu--link").click(() => {
            handleMenu()
        })
    }

    checkBodyClickForMenu()

    return (
        <nav className="nav">
            <Link to={props.url.pages.home}>
                <img src={logo} className="nav--logo" alt="logo" />
            </Link>
            <div className="nav--menu" id="nav--menu">
                {route !== '/sale' && <Link to={props.url.pages.sale} className="btn btn--default menu--link">Pre-Sale</Link>}
                <a href={ props.url.docs } rel="noreferrer" target="_blank" className="btn btn--light menu--link" >Documentation</a>
            </div>
            <img src={menu} alt="..." className="icon" id="menu--icon" onClick={handleMenu} />
        </nav>
    )
}

export default Navbar;