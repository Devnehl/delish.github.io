import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Ad from "./components/Ad";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import Subscribe from "./components/subscribe";
import Footer from "./components/Footer";

// CONTEXT
import EssentialContextCon from "./EssentialsContextProvider";
import "./App.css";

function App() {
  return (
    <div basename="/delish" className="app">
      <EssentialContextCon>
        <Nav />
        <Home />
        <About />
        <Menu />
        <Ad />
        <hr className="hr" />
        <Contact />
        <Reviews />
        <hr className="hr" />
        <Subscribe />
        <Footer />
      </EssentialContextCon>
    </div>
  );
}

export default App;
