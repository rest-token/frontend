import { Link } from "react-router-dom";
import "./Hero.css";
import restEase from "../images/rest = ease.png";
import restVideo from "../videos/rest.mp4";

function Hero(props) {
    return (
        <section className="hero">
            <div className="hero--left">
                <img src={restEase} alt="hero" className="hero--image" />
                <p className="hero--text">REST is a social-fi and a game-fi infused Web3 lifestyle app. It makes it possible for players to make a lot of money while they sleep or ignore their phones.</p>
                <Link to={props.url.pages.pitchDeck} className="btn btn--default">Pitch Deck</Link>
            </div>
            <div className="hero--right">
                
                <video className="hero--video">
                    <source src={restVideo} type="video/webm" />
                    <source src={restVideo} type="video/mp4" />
                    Sorry, your browser doesn't support videos.
                </video>
            </div>
        </section>
    )
}

export default Hero;