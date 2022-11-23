import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Sale from "./pages/Sale";
import Navbar from "./components/Navbar";

const url = {
  docs: "https://docs.resttoken.app",
  pitchDeck: "",
  whitepaper: "",
  pages: {
    home: "/",
    sale: "sale",
  }
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
