import { Link } from "react-router-dom";
import "./Hero.css";
import restEase from "../../images/rest = ease.png";
import restVideo from "../../videos/ezgif.com-gif-maker.gif";

function Hero(props) {
    return (
        <section className="hero">
            <div className="hero--left">
                <img src={restEase} alt="hero" className="hero--image" />
                <p className="hero--text">REST, a Social-fi and a Game-fi infused Web3 lifestyle app that rewards users when they switch to DND mode on their phones.</p>
                <Link to={props.url.pages.pitchDeck} className="btn btn--default">Pitch Deck</Link>
            </div>
            <div className="hero--right">
                <img src={restVideo} alt="..." className="hero--video" />
            </div>
        </section>
    )
}

export default Hero;