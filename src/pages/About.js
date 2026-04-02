import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/About.css";
import { Link } from "react-router-dom";
import HomeBg from "../images/HomeBg.png";
import {
  FaInstagram, FaWhatsapp, FaEnvelope,
  FaLeaf, FaHeart, FaLightbulb, FaShieldAlt
} from "react-icons/fa";

const team = [
  {
    name: "Mr. Chandru",
    role: "Founder & CEO",
    initials: "CH",
  },
  {
    name: "Mr. Akshay Gowda G S",
    role: "Marketing Head",
    initials: "AG",
  },
  {
    name: "Varun K S",
    role: "Senior Developer",
    initials: "VK",
  },
];

const values = [
  { icon: <FaHeart />, title: "Client-First", desc: "Every decision starts and ends with you." },
  { icon: <FaLeaf />, title: "Sustainable", desc: "Designs that respect the ecology of every site." },
  { icon: <FaLightbulb />, title: "Innovative", desc: "Forward-thinking solutions for modern living." },
  { icon: <FaShieldAlt />, title: "Reliable", desc: "Trusted delivery, on time and on budget." },
];

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-label">Our Story</div>
          <h1>
            About <em>Aakara</em>
          </h1>
          <p>
            An architectural and interior design firm rooted in Bengaluru — designing
            spaces that honour client lifestyle, creativity, and the ecology of every site.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="about-story">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="about-image-wrap">
                <img src={HomeBg} alt="Aakara Studio" />
                <div className="about-image-badge">
                  <span className="num">3+</span>
                  <span className="lbl">Years of<br />Excellence</span>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">
                Architecture Rooted in<br />
                <em>Life &amp; Landscape</em>
              </h2>
              <p className="about-body-text">
                Aakara is an Architectural and Interior Design firm which believes in
                rendering architectural and building solutions based on client need, lifestyle
                and ecology — all under one roof.
              </p>
              <p className="about-body-text">
                We offer design solutions tailored to the specific perception of each client,
                while simultaneously complementing the unique ecological character of
                the site. From the very first concept sketch to the final handover, our team
                brings integrity, craftsmanship, and genuine care to every project.
              </p>
              <Link
                to="/contact"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  background: "#0D0D0D",
                  color: "#fff",
                  border: "none",
                  padding: "16px 36px",
                  borderRadius: "2px",
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: "32px",
                  transition: "all 0.3s ease"
                }}
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="values-strip">
        <div className="container">
          <div className="row g-4">
            {values.map((v, i) => (
              <div className="col-lg-3 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="value-item">
                  <div className="value-icon">{v.icon}</div>
                  <h5>{v.title}</h5>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="about-team">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-label" style={{ justifyContent: "center" }}>
              The People
            </div>
            <h2 className="section-title">
              Meet Our <em>Team</em>
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            {team.map((member, i) => (
              <div
                className="col-lg-4 col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                <div className="team-card">
                  <div className="team-card-img-placeholder">
                    <span className="team-initials">{member.initials}</span>
                  </div>
                  <div className="team-card-body">
                    <div className="team-card-name">{member.name}</div>
                    <div className="team-card-role">{member.role}</div>
                    <div className="team-card-links">
                      <a href="https://www.instagram.com/aakara_arch" target="_blank" rel="noreferrer" className="team-link">
                        <FaInstagram />
                      </a>
                      <a href="https://wa.me/9480297100" target="_blank" rel="noreferrer" className="team-link">
                        <FaWhatsapp />
                      </a>
                      <a href="mailto:designs.aakara@gmail.com" className="team-link">
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;