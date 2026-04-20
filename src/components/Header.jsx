// Header.jsx — Modern Theme with Responsive + Theme Toggle
import { useState, useEffect } from "react";
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl border-b shadow-lg"
            : "bg-transparent"
        }`}
        style={
          scrolled
            ? {
                background: "var(--header-bg)",
                borderColor: "var(--border-color)",
                boxShadow: `0 4px 20px ${theme === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.06)"}`,
              }
            : {}
        }
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-16">
          {/* Logo */}
          <h1
            className="gradient-text font-bold text-2xl tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            &lt;JOE /&gt;
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
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </nav>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="hamburger"
              aria-label="Open menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
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
            &lt;JOE /&gt;
          </h2>
          <button
            onClick={() => setMobileOpen(false)}
            className="hamburger"
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 rounded-xl transition-all duration-200 font-medium text-base"
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
