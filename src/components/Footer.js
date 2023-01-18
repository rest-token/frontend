import "./Footer.css";
import contactImage from "../images/pose03_male 1.png";
import { FaDiscord, FaGithub, FaMediumM, FaTwitter } from "react-icons/fa";

function Footer(props) {
    return (
        <section className="contact">
            <div className="left">
                <h1>Contact Us</h1>
                <p>RESTUP is a social-fi and a game-fi infused Web3 lifestyle app. It makes it possible for players to make a lot of money while they sleep or ignore their phones.</p>
                <div className="group--list">
                    <div className="group--box"><a href={props.url.social.twitter} rel="noreferrer" target="_blank"><FaTwitter className="social--icon" /></a> </div>
                    <div className="group--box"><a href={props.url.social.discord} rel="noreferrer" target="_blank"><FaDiscord className="social--icon" /></a> </div>
                    <div className="group--box"><a href={props.url.social.medium} rel="noreferrer" target="_blank"><FaMediumM className="social--icon" /></a> </div>
                    <div className="group--box"><a href={props.url.social.github} rel="noreferrer" target="_blank"><FaGithub className="social--icon" /></a></div>
                </div>
            </div>
            <div className="right">
                <img src={contactImage} alt="..." className="image" />
            </div>
        </section>
    )
}

export default Footer;