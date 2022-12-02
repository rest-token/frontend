import "./Partners.css";
import reactLogo from "../../images/logo512.png";
import mellowCapitals from "../../images/mellow-capitals.png";
import cloudflare from "../../images/cloudflare.png";

function Partners() {
    return (
        <section className="partners">
            <h2 className="title">Partners And Integrations</h2>
            <div className="group--list">
                <div className="group--box group--box--light">
                    <img src={mellowCapitals} alt="..." />
                </div>
                <div className="group--box group--box--btn--bg">
                    <img src={reactLogo} alt="..." />
                </div>
                <div className="group--box group--box--light cloudflare">
                    <img src={cloudflare} alt="..." />
                </div>
            </div>
        </section>
    )
}

export default Partners;