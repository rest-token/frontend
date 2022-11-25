import AfterRestMode from "../components/AfterRestMode";
import Hero from "../components/Hero";
import Restmode from "../components/Restmode";
import Roadmap from "../components/Roadmap";

function Home(props) {
    return (
        <>
            <Hero url={props.url}/>
            <Restmode url={props.url} />
            <AfterRestMode />
            <Roadmap />
        </>
    )
}

export default Home;