import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../images/Logo.png";
import "../CSS/Footer.css";

function Footer() {
  return (
    <footer className="aakara-footer">
      <div className="container">
        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <img src={Logo} alt="Harmya Aakara" style={{ height: "52px", marginBottom: "16px" }} />
            <span className="footer-brand-name">Harmya Aakara</span>
            <span className="footer-brand-sub">Architects & Engineers</span>
            <p className="footer-desc">
              Delivering bespoke architectural and interior design solutions rooted
              in client lifestyle, vision, and the unique ecology of every site.
            </p>
            <div className="footer-socials" style={{ marginTop: "24px" }}>
              <a href="https://www.instagram.com/aakara_arch" target="_blank" rel="noreferrer" className="footer-social">
                <FaInstagram />
              </a>
              <a href="https://wa.me/9480297100" target="_blank" rel="noreferrer" className="footer-social">
                <FaWhatsapp />
              </a>
              <a href="mailto:designs.aakara@gmail.com" className="footer-social">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <span className="footer-col-title">Pages</span>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 col-6">
            <span className="footer-col-title">Services</span>
            <ul className="footer-links">
              <li><a href="/services">Architectural Planning</a></li>
              <li><a href="/services">Interior Design</a></li>
              <li><a href="/services">3D Modelling</a></li>
              <li><a href="/services">Structural Design</a></li>
              <li><a href="/services">Construction & PMC</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <span className="footer-col-title">Contact Us</span>

            <div className="footer-contact-row">
              <FaPhoneAlt className="footer-contact-icon" />
              <a href="tel:+919480297100">+91 9480297100</a>
            </div>

            <div className="footer-contact-row">
              <FaEnvelope className="footer-contact-icon" />
              <a href="mailto:designs.aakara@gmail.com">designs.aakara@gmail.com</a>
            </div>

            <div className="footer-contact-row">
              <FaWhatsapp className="footer-contact-icon" />
              <a href="https://wa.me/9480297100" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </div>

            <div className="footer-contact-row">
              <FaMapMarkerAlt className="footer-contact-icon" />
              <span>
                Shop No. 7, Jnana Ganga Nagar,<br />
                Bengaluru, Karnataka 560056
              </span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 Harmya Aakara Architects & Engineers. All Rights Reserved.</p>
          <p>
            Designed with care in{" "}
            <span style={{ color: "rgba(201,168,76,0.7)" }}>Bengaluru</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;