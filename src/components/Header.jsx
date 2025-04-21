// Header.jsx
import { useState, useEffect } from "react";
import "../assets/styles/Header.css";

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "certificates", "contact"];
      const scrollPos = window.scrollY + 100;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // เรียกครั้งแรก
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">JOE</h1>
        <nav>
          <ul className="nav-list">
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
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
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
