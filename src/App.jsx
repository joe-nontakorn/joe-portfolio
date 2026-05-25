// File: src/App.jsx
import Header from "./components/Header";
import BackgroundBalls from "./components/BackgroundBalls";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-subtle min-h-screen transition-colors duration-300">
      <BackgroundBalls />
      <Header />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <main>
          <div className="pt-24 sm:pt-28" />
          <Home />
          <div className="py-10 sm:py-14" />
          <About />
          <div className="py-10 sm:py-14" />
          <Skills />
          <div className="py-10 sm:py-14" />
          <Projects />
          <div className="py-10 sm:py-14" />
          <GitHubStats />
          <div className="py-10 sm:py-14" />
          <Certificates />
          <div className="py-10 sm:py-14" />
          <Contact />
          <div className="py-14 sm:py-20" />
        </main>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 py-8 text-center text-sm transition-colors duration-300"
        style={{
          borderTop: "1px solid var(--border-color)",
          background: "rgba(255, 255, 255, 0.02)",
          color: "var(--text-muted)",
        }}
      >
        <p>© 2024 Nontakorn Khanaphol. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
