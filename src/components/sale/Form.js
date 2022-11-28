import { useState } from "react";
import "./Form.css";

function Form(){
    const sale_price = 500;
    const min = 50;
    const max = 5000;
    const [cardano, setCardano] = useState(0);
    const [rest, setRest] = useState("Amount of $REST you will receive");

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
            <input type="text" value="address" readOnly />
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