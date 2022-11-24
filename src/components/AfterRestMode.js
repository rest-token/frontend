import screen1 from "../images/screen 1.png";
import screen2 from "../images/screen 2.png";
import screen3 from "../images/screen 2.png";
import "./AfterRestMode.css";

function AfterRestMode() {
    return (
        <section className="after--rest--mode">
            <div className="mobile--list">
                <img src={screen2} alt="..." className="screen" />
                <img src={screen3} alt="..." className="screen" />
                <img src={screen1} alt="..." className="screen" />
            </div>
        </section>
    )
}

export default AfterRestMode;