import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/Contact.css";
import {
  FaPhoneAlt, FaEnvelope, FaWhatsapp,
  FaMapMarkerAlt, FaInstagram
} from "react-icons/fa";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="contact-page">

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-label">Say Hello</div>
          <h1>
            Let's Build<br />
            <em>Something Great</em>
          </h1>
          <p>
            Whether you have a dream project in mind or just a question —
            we'd love to hear from you. Reach out, and we'll respond promptly.
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="contact-body">
        <div className="container">
          <div className="row g-5">

            {/* Info */}
            <div className="col-lg-5" data-aos="fade-right">
              <div className="contact-info-label">Reach Us</div>
              <h2 className="contact-info-title">
                Our <em>Contact</em><br />
                Details
              </h2>

              <div className="contact-detail-row">
                <div className="contact-detail-icon"><FaPhoneAlt /></div>
                <div>
                  <div className="contact-detail-label">Phone</div>
                  <a href="tel:+919480297100" className="contact-detail-value">
                    +91 9480297100
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon"><FaWhatsapp /></div>
                <div>
                  <div className="contact-detail-label">WhatsApp</div>
                  <a
                    href="https://wa.me/9480297100"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-detail-value"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon"><FaEnvelope /></div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <a href="mailto:designs.aakara@gmail.com" className="contact-detail-value">
                    designs.aakara@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon"><FaMapMarkerAlt /></div>
                <div>
                  <div className="contact-detail-label">Address</div>
                  <span className="contact-detail-value">
                    Shop No. 7, Opp. Govt. Primary School,<br />
                    Jnana Bharthi, P Shankar Rd,<br />
                    Jnana Ganga Nagar, Bengaluru — 560056
                  </span>
                </div>
              </div>

              <div className="contact-socials">
                <a
                  href="https://www.instagram.com/aakara_arch"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                >
                  <FaInstagram /> Instagram
                </a>
                <a
                  href="https://wa.me/9480297100"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-btn"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-7" data-aos="fade-left">
              <div className="contact-map-wrap">
                <iframe
                  title="Aakara Location"
                  src="https://maps.google.com/maps?q=Aakara%20Jnana%20Ganga%20Nagar%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
              <div
                style={{
                  marginTop: "24px",
                  padding: "24px",
                  border: "1px solid #eeece9",
                  borderRadius: "2px",
                  background: "#fafaf8"
                }}
              >
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#888",
                  margin: 0,
                  fontWeight: 300,
                  lineHeight: 1.7
                }}>
                  <strong style={{ color: "#0D0D0D", fontWeight: 500 }}>Working Hours:</strong> Monday – Saturday, 9:00 AM – 7:00 PM<br />
                  <strong style={{ color: "#0D0D0D", fontWeight: 500 }}>Sunday:</strong> By appointment only
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/9480297100"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default Contact;