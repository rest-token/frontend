import Form from "./Form";
import "./Info.css";

function Info(){
    return (
        <section className="info">
            <div className="jumbotron">
                <p>To ensure that the RESTUP ecosystem is genuine, investor-focused and governed by the community, we will issue a maximum of 500,000,000,000  $RESTUP tokens, which will be distributed fairly. With the user at the center of the RESTUP ecosystem, we will be able to ensure that.</p>
                <ul>
                    <li>TOKEN NAME - RESTUP TOKEN</li>
                    <li>TOTAL SUPPLY - 500,000,000,000</li>
                    <li>TOKEN NETWORK - CARDANO</li>
                </ul>
                <div className="jumbotron">
                    <div className="token--details">
                        <div className="token--details--box">
                            <div className="token--details--box--heading">Total Supply</div>
                            <div className="token--details--box--desc">500,000,000,000</div>
                        </div>
                        <div className="token--details--box">
                            <div className="token--details--box--heading">Pre-Sale</div>
                            <div className="token--details--box--desc">50,000,000,000</div>
                        </div>
                        <div className="token--details--box">
                            <div className="token--details--box--heading">Pre-Sale Hardcap</div>
                            <div className="token--details--box--desc">50,000,000,000</div>
                        </div>
                        <div className="token--details--box">
                            <div className="token--details--box--heading">Pre-Sale Price</div>
                            <div className="token--details--box--desc">00</div>
                        </div>
                        <div className="token--details--box">
                            <div className="token--details--box--heading">Minimum Buy</div>
                            <div className="token--details--box--desc">00</div>
                        </div>
                        <div className="token--details--box">
                            <div className="token--details--box--heading">Maximum Buy</div>
                            <div className="token--details--box--desc">00</div>
                        </div>
                    </div>
                </div>
                <div className="separate"></div>
                <Form />
            </div>
            <div className="separate"></div>
        </section>
    )
} 

export default Info;