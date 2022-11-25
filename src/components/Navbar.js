import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import menu from "../images/menu.png";

function myFunction() {
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

function closeMenu() {
    var menu = document.getElementById("nav--menu");
    var children = menu.childNodes;
    
    for (let i = 0; i < children.length; i++) {
        children[i].addEventListener('click', function () {
            if (menu.className !== 'nav--menu'){
                menu.style.display = 'none';
                menu.classList.remove('responsive');
            }
        });
    }
}

setTimeout(() => {
    closeMenu()
}, 2000);

function Navbar(props) {
    const location = useLocation();
    const route = location.pathname;
    return (
        <nav className="nav">
            <Link to={props.url.pages.home}>
                <img src={logo} className="nav--logo" alt="logo" />
            </Link>
            <div className="nav--menu" id="nav--menu">
                {route === '/sale/' && <Link to={props.url.pages.sale} className="btn btn--default">Pre-Sale</Link>}
                <a href={ props.url.docs } rel="noreferrer" target="_blank" className="btn btn--light" >Documentation</a>
            </div>
            <img src={menu} alt="..." className="icon" id="menu--icon" onClick={myFunction} />
        </nav>
    )
}

export default Navbar;