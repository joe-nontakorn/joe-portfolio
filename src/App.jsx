import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import BackgroundBalls from "./components/BackgroundBalls";
import MistOverlay from "./components/MistOverlay";

function App() {
  return (
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
<Header />
      <main>
      <BackgroundBalls />
      <MistOverlay /> {/* ✅ หมอกขาวบางๆ ด้านหน้า ball */}

        <Home />
        <br />
        <br />
        <About />
        <br />
        <br />
        <br />
        <Skills />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Certificates />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Contact />
        <br />
        <br />
      </main>
      
    </div>
  );
}

export default App;
