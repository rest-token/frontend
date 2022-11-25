import AfterRestMode from "../components/AfterRestMode";
import Hero from "../components/Hero";
import Restmode from "../components/Restmode";
import Roadmap from "../components/Roadmap";
import DownloadApp from "../components/DownloadApp";
import Featured from "../components/Featured";
import Partners from "../components/Partners";
import Tokenomics from "../components/Tokenomics";
import Contact from "../components/Contact";

function Home(props) {
    return (
        <>
            <Hero url={props.url}/>
            <Restmode url={props.url} />
            <AfterRestMode />
            <Roadmap />
            <DownloadApp />
            <Featured />
            <Partners />
            <Tokenomics />
            <Contact />
        </>
    )
}

export default Home;