import phoneRight from "../images/3d-smartphone-with-protection-lock-code-password-correct-mark-3d-render-with-clippding-path 1.png";
import phoneLeft from "../images/3d-smartphone-with-protection-lock-code-password-correct-mark-3d-render-with-clipping-path 1.png";
import phoneMiddle from "../images/3d-smartphone-with-protection-lock-code-password-correct-mark-3d-render-with-clipping-path2 1.png";
import "./Restmode.css";

function Restmode() {
    return (
        <section className="restmode">
            <h2 className="title">Restmodes</h2>
            <div className="group--list">
                <div className="group--box group--box--btn--bg">
                    <img src={phoneLeft} alt="..." className="group--box--image" loading="lazy" />
                    <div className="group--box--text">
                        <div className="group--box--caption">Rest - (Rest Phase)</div>
                        <div className="group--box--description">Put your phone in Sleep to earn $EASE</div>
                    </div>
                </div>
                <div className="group--box group--box--btn--bg">
                    <img src={phoneMiddle} alt="..." className="group--box--image group--box--image--middle" loading="lazy" />
                    <div className="group--box--text">
                        <div className="group--box--caption">Drive - (Vehicle Phase)</div>
                        <div className="group--box--description">Put your phone down while Driving to earn $EASE</div>
                    </div>
                </div>
                <div className="group--box group--box--btn--bg">
                    <img src={phoneRight} alt="..." className="group--box--image group--box--image--right" loading="lazy" />
                    <div className="group--box--text">
                        <div className="group--box--caption">Mental - (Rest Phase)</div>
                        <div className="group--box--description">Put your phone in during the day to earn $EASE</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Restmode;