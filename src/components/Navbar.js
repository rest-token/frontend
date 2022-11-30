import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import menu from "../images/menu.png";
import $ from "jquery";

function Navbar(props) {

    function openCloseMenu() {
        var x = document.getElementById("nav--menu");
        if (x.className === "nav--menu") {
            x.classList.add('responsive')
            x.style.position = 'absolute';
            x.style.display = 'flex';
            x.style.flexDirection = 'column';
            x.style.gap = '5px';
            x.style.left = '33%';
        } else {
            x.classList.remove('responsive')
            x.style.display = 'none';
        }
    }

    function handleMenu() {
        openCloseMenu();
    }

    function checkBodyClickForMenu(event) {
        if($(window).width() < 801) {
            handleMenu();
        }
    }

    return (
        <nav className="nav">
            <Link to={props.url.pages.home}>
                <img src={logo} className="nav--logo" alt="logo" />
            </Link>
            <div className="nav--menu" id="nav--menu">
                <Link to={props.url.pages.home} className="btn btn--default menu--link" onClick={checkBodyClickForMenu}>Home</Link>
                <a href={props.url.pitchdeck} className="btn btn--default menu--link" onClick={checkBodyClickForMenu}>Pitchdeck</a>
                <Link to={props.url.pages.sale} className="btn btn--default menu--link" onClick={checkBodyClickForMenu}>Pre-Sale</Link>
                <a href={ props.url.docs } rel="noreferrer" target="_blank" className="btn btn--default menu--link" onClick={checkBodyClickForMenu}>Documentation</a>
            </div>
            <img src={menu} alt="..." className="icon" id="menu--icon" onClick={handleMenu} />
        </nav>
    )
}

export default Navbar;