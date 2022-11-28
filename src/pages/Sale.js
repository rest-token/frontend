import Info from "../components/sale/Info";
import One from "../components/sale/One"
import Timer from "../components/sale/Timer";
import Footer from "../components/Footer";

function Sale(props) {
    return (
        <>
            <One url={props.url} />
            <Timer />
            <Info />
            <Footer />
        </>
    )
}

export default Sale;