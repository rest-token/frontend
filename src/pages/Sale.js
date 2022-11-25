import Navbar from "../components/Navbar";
import One from "../components/sale/One"
import Timer from "../components/sale/Timer";

function Sale(props) {
    return (
        <>
            <Navbar url={props.url} />
            <One url={props.url} />
            <Timer />
        </>
    )
}

export default Sale;