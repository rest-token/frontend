import "./Roadmap.css";
import roadmap from "../../images/roadmap.png";

function Roadmap() {
    return (
        <section className="roadmap">
            <h2 className="title">Roadmap</h2>
            <img src={roadmap} alt="..." className="roadmap--image" />
        </section>
    )
}

export default Roadmap;