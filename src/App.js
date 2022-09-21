import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
