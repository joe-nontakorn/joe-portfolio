// Header.jsx — Modern Theme with Responsive + Theme Toggle
import { useState, useEffect } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "certificates", "contact"];
      const scrollPos = window.scrollY + 120;

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      for (let id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none"
      >
        <div
          className={`max-w-7xl mx-auto h-14 sm:h-16 px-3 sm:px-5 flex justify-between items-center rounded-lg border pointer-events-auto transition-all duration-300 ${
            scrolled ? "shadow-2xl" : ""
          }`}
          style={{
            background: scrolled ? "var(--header-bg)" : "rgba(7, 8, 11, 0.34)",
            borderColor: scrolled
              ? "var(--border-color)"
              : "rgba(255, 255, 255, 0.055)",
            boxShadow: scrolled
              ? `0 16px 60px ${
                  theme === "dark" ? "rgba(0, 0, 0, 0.45)" : "rgba(15, 23, 42, 0.12)"
                }, inset 0 1px 0 rgba(255,255,255,0.08)`
              : "inset 0 1px 0 rgba(255,255,255,0.06)",
            backdropFilter: "blur(24px) saturate(140%)",
            WebkitBackdropFilter: "blur(24px) saturate(140%)",
          }}
        >
          {/* Logo */}
          <h1
            className="gradient-text font-bold text-xl sm:text-2xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            &lt;NK /&gt;
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <ul className="flex space-x-1 text-sm lg:text-base">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="py-2 px-3 rounded-lg transition-all duration-300 font-medium"
                    style={{
                      background:
                        activeSection === item.id
                          ? "var(--accent-soft)"
                          : "transparent",
                      color:
                        activeSection === item.id
                          ? "var(--accent)"
                          : "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== item.id) {
                        e.target.style.color = "var(--text-primary)";
                        e.target.style.background = "var(--accent-soft)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== item.id) {
                        e.target.style.color = "var(--text-secondary)";
                        e.target.style.background = "transparent";
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle (Desktop) */}
            <button
              onClick={toggleTheme}
              className="theme-toggle ml-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </nav>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="hamburger"
              aria-label="Open menu"
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        <div className="flex justify-between items-center mb-8">
          <h2
            className="gradient-text font-bold text-xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            &lt;NK /&gt;
          </h2>
          <button
            onClick={() => setMobileOpen(false)}
            className="hamburger"
            aria-label="Close menu"
          >
            <FiX size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 rounded-lg transition-all duration-200 font-medium text-base"
              style={{
                background:
                  activeSection === item.id
                    ? "var(--accent-soft)"
                    : "transparent",
                color:
                  activeSection === item.id
                    ? "var(--accent)"
                    : "var(--text-secondary)",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Header;
