import { useState } from "react";
import "./Form.css";
import { FaCopy } from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";

function Form(){
    const sale_price = 500;
    const min = 50;
    const max = 5000;
    const [cardano, setCardano] = useState(0);
    const [rest, setRest] = useState("Amount of $REST you will receive");
    const [address, setAddress] = useState("address");

    function handleInput(event) {
        let cardano_amount = (event.target.value).trim();
        setCardano(cardano_amount);

        if (cardano_amount > 49 && cardano_amount < 5000) {
            setRest((cardano * sale_price).toLocaleString() + " $REST");
        } else {
            setRest("Amount of $REST you will receive");
        }
    }
    return (
        <section className="form">

            <div className="address--box">
                <input type="text" id="address" value={address} readOnly />
                <button type="button" class="btn btn--default" id="copy-address" onClick={navigator.clipboard.writeText(address)}><FaCopy /> Copy</button>
            </div>
            
            <input type="number" placeholder="Enter CARDANO Amount" min={min} max={max} value={cardano} onChange={handleInput} />
            <div className="polygon--box">
                <div className="polygon--up"></div>
                <div className="polygon--down"></div>
            </div>
            <input type="text" value={rest} placeholder="Amount of $REST you will receive" readOnly />
        </section>
    )
}

export default Form;