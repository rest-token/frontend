import "./Timer.css";

function Timer(){
    return (
        <section className="timer">
            <div>
                <p>Sales Ends In</p>
                <div className="timer--box">
                    <h1>00</h1>
                    <p>Days</p>
                </div>
            </div>
            <div>
                <p>Pre-Sale Start Time</p>
                <div className="timer--box">
                    <h1>00</h1>
                    <p>Days</p>
                </div>
            </div>
            <div>
                <p>Pre-Sale Start Date</p>
                <div className="timer--box">
                    <h1>dd/mm/yyyy</h1>
                    <p>Days</p>
                </div>
            </div>
            <div>
                <p>Pre-Sale End Date</p>
                <div className="timer--box">
                    <h1>dd/mm/yyyy</h1>
                    <p>Days</p>
                </div>
            </div>
        </section>
    )
}

export default Timer;