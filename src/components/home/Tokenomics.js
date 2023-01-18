import "./Tokenomics.css";
import tokenomics from "../../images/TOK@4x 1.png";

function Tokenomics() {
    return (
        <section className="tokenomics">
            <h2 className="title">Tokenomics</h2>
            <p>To ensure that the RESTUP ecosystem is genuine, investor-focused and governed by the community, we will issue a maximum of 500,000,000,000  $REST tokens, which will be distributed fairly.With the user at the center of the RESTUP ecosystem, we will be able to ensure that. </p>
            <ul className="token--data--list">
                <li>token name - restup token</li>
                <li>total supply - 500,000,000,000</li>
                <li>token network - cardano</li>
            </ul>
            <img src={tokenomics} alt="..." />
        </section>
    )
}

export default Tokenomics;