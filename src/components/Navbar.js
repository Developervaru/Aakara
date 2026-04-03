import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/Logo.png";
import "../CSS/Navbar.css";

function Navbar() {
  const location = useLocation();
  const navRef = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNavbar = () => {
    const navbar = navRef.current;
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
    setMoreOpen(false);
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
  ];

  const moreLinks = [
    { to: "/testimonials", label: "Testimonials" },
    { to: "/blog", label: "Journal" },
    { to: "/calculator", label: "Cost Calculator" },
    { to: "/book", label: "Book Consultation" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <nav className={`navbar navbar-expand-lg aakara-navbar sticky-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container">

        <Link className="brand-wrapper navbar-brand" to="/" onClick={closeNavbar}>
          <img src={Logo} alt="Harmya Aakara" />
          <div className="brand-text-block">
            <span className="brand-main">Harmya Aakara</span>
            <span className="brand-sub">Architects & Engineers</span>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navmenu" ref={navRef}>
          <ul className="navbar-nav align-items-lg-center gap-1">
            {links.map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <Link
                  className={`nav-link ${location.pathname === to ? "active-link" : ""}`}
                  to={to}
                  onClick={closeNavbar}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* More Dropdown */}
            <li
              className="nav-item nav-more-wrap"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                className={`nav-link nav-more-btn ${moreLinks.some(l => l.to === location.pathname) ? "active-link" : ""}`}
                onClick={() => setMoreOpen(o => !o)}
              >
                More ▾
              </button>
              {moreOpen && (
                <div className="nav-dropdown">
                  {moreLinks.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className={`nav-dropdown-item ${location.pathname === to ? "nav-dropdown-item--active" : ""}`}
                      onClick={closeNavbar}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li className="nav-item ms-lg-2">
              <Link
                className={`nav-link nav-contact-btn ${location.pathname === "/contact" ? "active-link" : ""}`}
                to="/contact"
                onClick={closeNavbar}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;