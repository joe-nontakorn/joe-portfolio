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
    <div>
      <Header />

      <div className="w-full lg:max-w-screen-xl lg:mx-auto lg:px-12">
        <main>
          <BackgroundBalls />
          <MistOverlay /> {/* ✅ หมอกขาวบางๆ ด้านหน้า ball */}
          <br />
          <br />
          <br />
          <br />
          <Home />
          <br />
          <About />
          <br />
          <Skills />
          <br />
          <br />
          <br />
          <Certificates />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Contact />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </main>

      </div>
    </div>
  );
}

export default App;
