import Navbar from "../components/Navbar";
import One from "../components/sale/One"

function Sale(props) {
    return (
        <>
            <Navbar url={props.url} />
            <One url={props.url} />
        </>
    )
}

export default Sale;