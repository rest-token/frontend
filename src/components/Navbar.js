import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/Rest-Logo-b2.png";

function Navbar(props) {
    return (
        <nav className="nav">
            <Link to={props.url.pages.home}>
                <img src={logo} className="nav--logo" alt="logo" />
            </Link>
            <div className="nav--menu">
                <Link to={props.url.pages.sale} className="btn btn--default">Pre-Sale</Link>
                <Link to={props.url.pages.docs} className="btn btn--default" >Documentation</Link>
            </div>
        </nav>
    )
}

export default Navbar;