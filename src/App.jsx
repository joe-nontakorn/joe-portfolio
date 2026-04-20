// File: src/App.jsx
import Header from "./components/Header";
import BackgroundBalls from "./components/BackgroundBalls";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-subtle min-h-screen transition-colors duration-300">
      <BackgroundBalls />
      <Header />

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <main>
          <div className="pt-20 sm:pt-24" />
          <Home />
          <div className="py-8 sm:py-12" />
          <About />
          <div className="py-8 sm:py-12" />
          <Skills />
          <div className="py-8 sm:py-12" />
          <Projects />
          <div className="py-8 sm:py-12" />
          <Certificates />
          <div className="py-8 sm:py-12" />
          <Contact />
          <div className="py-12 sm:py-16" />
        </main>
      </div>

      {/* Footer */}
      <footer
        className="py-8 text-center text-sm transition-colors duration-300 relative z-10"
        style={{
          borderTop: "1px solid var(--border-color)",
          color: "var(--text-muted)",
        }}
      >
        <p>© 2024 Nontakorn Khanaphol. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
