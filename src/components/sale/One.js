import "./One.css";
import phoneOnHand from "../../images/icon_hand_holding_phone6 1.png"

function One(props) {
    return (
        <section className="one">
            <div className="jumbotron">
                <div className="left">
                    <h1>Participate in the REST presale to join the ecosystem's early adopters.</h1>
                    <p>A social-fi and a game-fi infused Web3 lifestyle app. It makes it possible for players to make a lot of money while they sleep or ignore their phones.</p>
                    <div>
                        <a href={props.url.docs} className="btn btn--default">Buy Token</a>
                        <a href={props.url.docs} className="btn btn--light">Need help? Join Discord</a>
                    </div>
                </div>
                <div className="right">
                    <div className="image--box">
                        <img src={phoneOnHand} alt="..." />
                    </div>
                </div>
            </div>
            <div className="separate"></div>
        </section>
    )
} 

export default One;