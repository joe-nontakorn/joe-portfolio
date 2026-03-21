// File: src/App.jsx
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import MatrixRain from "./components/MatrixRain";

function App() {
  return (
    <div className="scanlines">
      <Header />
      <MatrixRain />

      <div className="w-full lg:max-w-screen-xl lg:mx-auto lg:px-12">
        <main>
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
