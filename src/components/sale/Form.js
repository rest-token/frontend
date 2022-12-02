import { useState } from "react";
import "./Form.css";
import { FaCopy } from "react-icons/fa";
import cardanoAsset from "../../images/cardano 1@4x 1.png";
import restHalfLogo from "../../images/rest logo 1.png";

function Form(){
    const sale_price = 500;
    const min = 50;
    const max = 5000;
    const [cardano, setCardano] = useState(0);
    const [rest, setRest] = useState("Amount of $REST you will receive");
    const address = "address";

    function handleInput(event) {
        let cardano_amount = (event.target.value).trim();
        setCardano(cardano_amount);

        if (cardano_amount > 49 && cardano_amount < 5000) {
            setRest((cardano * sale_price).toLocaleString() + " $REST");
        } else {
            setRest("Amount of $REST you will receive");
        }
    }

    function copyAddress(event) {
        var textField = document.createElement('textarea')
        textField.innerText = address
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()

        const button = event.target;
        button.innerText = "Copied !";

        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    return (
        <section className="form">

            <div className="address--box">
                <input type="text" id="address" value={address} readOnly />
                <button type="button" className="btn btn--default" id="copy-address" onClick={copyAddress}><FaCopy /> Copy</button>
            </div>
            
            <div className="cardano--amount--box">
                <div className="cardano--logo">
                    <img src={cardanoAsset} alt="..." />
                </div>
                <input type="number" placeholder="Enter CARDANO Amount" min={min} max={max} value={cardano} onChange={handleInput} />
            </div>
            
            <div className="polygon--box">
                <div className="polygon--up"></div>
                <div className="polygon--down"></div>
            </div>

            <div className="rest--amount--box">
                <div className="rest--logo">
                    <img src={restHalfLogo} alt="..." />
                </div>
                <input type="text" value={rest} placeholder="Amount of $REST you will receive" readOnly />
            </div>
            
        </section>
    )
}

export default Form;