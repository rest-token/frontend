import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Sale from "./pages/Sale";
import Navbar from "./components/Navbar";

const url = {
  pages: {
    home: "/",
    sale: "/sale",
  },
  social: {
    github: "https://github.com/rest-token",
    medium: "https://resttoken.medium.com",
    twitter: "https://twitter.com/resttoken",
    discord: "https://discord.gg/vuTBD2fA"
  },
  docs: "https://docs.resttoken.app",
  pitchDeck: "https://docs.google.com/presentation/d/1Thg-pBqqK5hLTVdR5bo6cI53kCbjZZjByboFt3hLBDk/edit#slide=id.p",
}

function App() {
  return (
    <Router>
      <Navbar url={url} />
      <main>
        <Routes>
          <Route path={url.pages.home} element={<Home url={url} />} />
          <Route path={url.pages.sale} element={<Sale url={url} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
