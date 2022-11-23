import phoneRight from "../images/3d-smartphone-with-protection-lock-code-password-correct-mark-3d-render-with-clippding-path 1.png";
import phoneLeft from "../images/3d-smartphone-with-protection-lock-code-password-correct-mark-3d-render-with-clipping-path 1.png";

function Restmode() {
    return (
        <section className="restmode">
            <h2 className="title">Restmodes</h2>
            <div className="group--list">
                <div className="group--box group--box--btn--bg">
                    <img src={phoneLeft} alt="..." className="group--box--image" />
                    <div className="group--box--caption">Rest - (Rest Phase)</div>
                </div>
                <div className="group--box group--box--btn--bg"></div>
                <div className="group--box group--box--btn--bg"></div>
            </div>
        </section>
    )
}

export default Restmode;