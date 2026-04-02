import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import "../CSS/Footer.css";

function Footer() {
  return (
    <footer className="footer-section text-white pt-5">

      <div className="container">
        <div className="row gy-4">

          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <img src={Logo} alt="Aakara Logo" style={{ height: "60px" }} />
            <p className="mt-3 footer-text">
              Aakara is an Architectural and Interior Design firm which believes in rendering architectural and building solutions based on client need, lifestyle and ecology under one roof. We offer design solutions to suit specific need of the client based on their lifestyle and perception while also complimenting the uniqueness ecology of the site.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Contact</h5>

            <p>
              <FaPhoneAlt className="footer-icon me-2" />
              <a href="tel:+919480297100">+91 9480297100</a>
            </p>

            <p>
              <FaEnvelope className="footer-icon me-2" />
              <a href="mailto:designs.aakara@gmail.com">
                designs.aakara@gmail.com
              </a>
            </p>

            <p>
              <FaWhatsapp className="footer-icon me-2" />
              <a
                href="https://wa.me/9480297100"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </p>

            <p>
              <FaMapMarkerAlt className="footer-icon me-2" />
              Aakara  , Shop Number- 7 , Opposite Government Primary School, Jnana Bharthi, P Shankar Rd, Mariyappana Palya, Jnana Ganga Nagar, Bengaluru, Karnataka 560056
            </p>
          </div>

          {/* Social Media */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Follow Us</h5>

            <div className="social-icons mt-3">
              <a
                href="https://www.instagram.com/aakara_arch"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/9480297100"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:designs.aakara@gmail.com"
                className="social-icon"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <hr className="border-secondary mt-4" />

        <div className="text-center pb-3">
          © 2025 Aakara Architects & Engineers | All Rights Reserved
        </div>

      </div>
    </footer>
  );
}

export default Footer;