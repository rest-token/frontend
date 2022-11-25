import Hero from "../components/home/Hero";
import Restmode from "../components/home/Restmode";
import AfterRestMode from "../components/home/AfterRestMode";
import Roadmap from "../components/home/Roadmap";
import DownloadApp from "../components/home/DownloadApp";
import Featured from "../components/home/Featured";
import Partners from "../components/home/Partners";
import Tokenomics from "../components/home/Tokenomics";
import Contact from "../components/home/Contact";

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