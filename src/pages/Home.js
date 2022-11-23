import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Restmode from "../components/Restmode";

function Home(props) {
    return (
        <>
            <Hero url={props.url}/>
            <Restmode url={props.url} />
        </>
    )
}

export default Home;