// Header.jsx — MATRIX THEME
import { useState, useEffect } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "certificates", "contact"];
      const scrollPos = window.scrollY + 120;

      // ถ้าเลื่อนถึงล่างสุดของหน้า → active = contact
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-green-500/20 shadow-[0_2px_20px_rgba(0,255,65,0.1)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-16">
        <h1
          className="glitch text-green-400 font-bold text-2xl tracking-widest font-matrix neon-green"
          data-text="JOE"
        >
          JOE
        </h1>
        <nav>
          <ul className="flex space-x-4 md:space-x-6 text-green-300/80 text-sm md:text-base font-matrix">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "certificates", label: "Certificates" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`py-2 px-3 rounded transition duration-300 ${
                    activeSection === item.id
                      ? "bg-green-500/20 text-green-400 font-semibold border border-green-500/40 neon-green-subtle"
                      : "hover:text-green-400 hover:bg-green-500/10"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
