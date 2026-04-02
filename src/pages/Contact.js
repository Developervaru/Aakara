import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram
} from "react-icons/fa";

function Contact() {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="contact-section py-5">

      <div className="container">

        <h2 className="text-center fw-bold mb-5 gradient-text" data-aos="fade-down">
          Get In Touch With Us
        </h2>

        <div className="row g-4">

          {/* Address Card */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="contact-card p-4">

              <h5 className="mb-3">
                <FaMapMarkerAlt className="me-2 text-danger" />
                Our Address
              </h5>

              <p>
                <strong>Aakara</strong><br />
                Shop Number- 7,<br />
                Opposite Government Primary School,<br />
                Jnana Bharthi, P Shankar Rd,<br />
                Mariyappana Palya, Jnana Ganga Nagar,<br />
                Bengaluru, Karnataka 560056
              </p>

              <a
                href="https://maps.app.goo.gl/4PVKZ9FpaAi9sVv1A"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary mt-2"
              >
                View on Google Maps
              </a>

            </div>
          </div>

          {/* Contact Details */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="contact-card p-4 text-dark">

              <h5 className="mb-3">Contact Details</h5>

              <p>
                <FaPhoneAlt className="contact-icon me-2" />
                <a href="tel:+919480297100">+91 9480297100</a>
              </p>

              <p>
                <FaWhatsapp className="contact-icon me-2 text-success" />
                <a
                  href="https://wa.me/9480297100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </p>

              <p>
                <FaEnvelope className="contact-icon me-2 text-primary" />
                <a href="mailto:designs.aakara@gmail.com">
                  designs.aakara@gmail.com
                </a>
              </p>

              {/* Social Media */}
              <div className="social-icons mt-4">
                <a
                  href="https://www.instagram.com/aakara_arch"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon text-dark border-dark border-2"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/9480297100"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon text-dark border-dark border-2"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="mailto:designs.aakara@gmail.com"
                  className="social-icon text-dark border-dark border-2"
                >
                  <FaEnvelope />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Google Map Section */}
        <div className="mt-5" data-aos="zoom-in">
          <div className="map-container shadow-lg rounded">
            <iframe
              title="Aakara Location"
              src="https://maps.google.com/maps?q=Aakara%20Jnana%20Ganga%20Nagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;