import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaTools, FaProjectDiagram, FaPhone } from "react-icons/fa";
import Logo from "../images/Logo.png";

function Navbar() {
  const location = useLocation();
  const navRef = useRef();

  const closeNavbar = () => {
    const navbar = navRef.current;
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
<Link 
  className="navbar-brand d-flex align-items-center" 
  to="/" 
  onClick={closeNavbar}
>
  <img 
    src={Logo} 
    alt="Aakara Architects & Engineers" 
    style={{ height: "70px", marginRight: "10px" }} 
  />

  <div className="brand-text">
    <span className="fw-bold d-block brand-main">
      Aakara
    </span>
    <span className="brand-sub">
      Architects & Engineers
    </span>
  </div>
</Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navmenu" ref={navRef}>
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item mx-2">
              <Link
                className={`nav-link fw-semibold ${location.pathname === "/" ? "text-primary" : "text-dark"}`}
                to="/"
                onClick={closeNavbar}
              >
                <FaHome className="me-1" />
                HOME
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className={`nav-link fw-semibold ${location.pathname === "/about" ? "text-primary" : "text-dark"}`}
                to="/about"
                onClick={closeNavbar}
              >
                <FaInfoCircle className="me-1" />
                ABOUT
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className={`nav-link fw-semibold ${location.pathname === "/services" ? "text-primary" : "text-dark"}`}
                to="/services"
                onClick={closeNavbar}
              >
                <FaTools className="me-1" />
                SERVICES
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className={`nav-link fw-semibold ${location.pathname === "/projects" ? "text-primary" : "text-dark"}`}
                to="/projects"
                onClick={closeNavbar}
              >
                <FaProjectDiagram className="me-1" />
                PROJECTS
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className={`nav-link fw-semibold ${location.pathname === "/contact" ? "text-primary" : "text-dark"}`}
                to="/contact"
                onClick={closeNavbar}
              >
                <FaPhone className="me-1" />
                CONTACT
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;