import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/Logo.png";
import "../CSS/Navbar.css";

function Navbar() {
  const location = useLocation();
  const navRef = useRef();
  const [scrolled, setScrolled] = useState(false);

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
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <nav className={`navbar navbar-expand-lg aakara-navbar sticky-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container">

        <Link className="brand-wrapper navbar-brand" to="/" onClick={closeNavbar}>
          <img src={Logo} alt="Aakara" />
          <div className="brand-text-block">
            <span className="brand-main">Aakara</span>
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
            <li className="nav-item ms-lg-2">
              <Link
                className={`nav-link nav-contact-btn ${location.pathname === "/contact" ? "active-link" : ""}`}
                to="/contact"
                onClick={closeNavbar}
                style={{backgroundColor:'gold'}}
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