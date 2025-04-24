// Header.jsx
import { useState, useEffect } from "react";
import "../assets/styles/Header.css";
function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "certificates", "contact"];
      const scrollPos = window.scrollY + 120;

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
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-90 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-16">
        <h1 className="text-orange-500 font-bold text-2xl tracking-widest drop-shadow-md">JOE</h1>
        <nav>
          <ul className="flex space-x-4 md:space-x-6 text-white text-sm md:text-base">
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
                  className={`py-2 px-3 rounded transition ${
                    activeSection === item.id
                      ? "bg-orange-500 text-white font-semibold"
                      : "hover:text-orange-400"
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
