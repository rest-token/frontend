import "./Featured.css";

function Featured(){
    return (
        <section className="featured">
            <h2 className="title">As Featured In</h2>
            <p>We are featured on selective crypto websites</p>
            <div className="group--list">
                <div className="group--box group--box--light"></div>
                <div className="group--box group--box--light"></div>
                <div className="group--box group--box--light"></div>
            </div>
        </section>
    )
}

export default Featured;