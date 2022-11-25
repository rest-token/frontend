import "./Featured.css";

function Featured(){
    return (
        <section className="featured">
            <h2 className="title">As Featured In</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a sagittis velit, sed mattis eros. Vestibulum eu lobortis libero. Quisque faucibus nibh sapien, id ultricies ligula mollis sagittis. Cras ultrices congue turpis. Donec</p>
            <div className="group--list">
                <div className="group--box group--box--light"></div>
                <div className="group--box group--box--light"></div>
                <div className="group--box group--box--light"></div>
            </div>
        </section>
    )
}

export default Featured;