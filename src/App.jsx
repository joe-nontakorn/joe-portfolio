// File: src/App.jsx
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
          {/* <MistOverlay />  */}
          <br />
          <br />
          <br />
          <br />
          <Home />
          <div className="py-10" />
          <About />
          <div className="py-10" />
          <Skills />
          <div className="py-10" />
          <Certificates />
          <div className="py-10" />
          <Contact />
          <div className="py-10" />
          <br />
           <br />

        </main>
      </div>
    </div>
  );
}

export default App;
