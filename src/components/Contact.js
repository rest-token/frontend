import "./Contact.css";
import contactImage from "../images/pose03_male 1.png";

function Contact() {
    return (
        <section className="contact">
            <div className="left">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a</p>
                <div className="group--list">
                    <div className="group--box"></div>
                    <div className="group--box"></div>
                    <div className="group--box"></div>
                    <div className="group--box"></div>
                    <div className="group--box"></div>
                </div>
            </div>
            <div className="right">
                <img src={contactImage} alt="..." className="image" />
            </div>
        </section>
    )
}

export default Contact;