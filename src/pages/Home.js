import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeBg from "../images/HomeBg.png";
import Home1 from "../images/Home.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/Home.css";
import {
  FaDraftingCompass, FaCubes, FaPaintRoller, FaUsersCog,
  FaMapMarkedAlt, FaTree, FaBuilding, FaHardHat,
  FaCalculator, FaUniversity, FaCheckCircle,
  FaAward, FaHandshake, FaLeaf, FaLightbulb
} from "react-icons/fa";

const services = [
  { icon: <FaDraftingCompass />, title: "Architectural Planning" },
  { icon: <FaCubes />, title: "3D Rendering & Modelling" },
  { icon: <FaPaintRoller />, title: "Interior Design" },
  { icon: <FaUsersCog />, title: "Consultant Coordination" },
  { icon: <FaMapMarkedAlt />, title: "Layout Planning" },
  { icon: <FaTree />, title: "Landscaping Design" },
  { icon: <FaBuilding />, title: "Structural Design" },
  { icon: <FaHardHat />, title: "Construction & PMC" },
  { icon: <FaCalculator />, title: "Cost Estimation" },
  { icon: <FaUniversity />, title: "Bank Estimations" },
  { icon: <FaCheckCircle />, title: "End-to-End Building Services" },
];

const whyPoints = [
  {
    icon: <FaAward />,
    title: "3+ Years of Expertise",
    desc: "A dedicated team of architects and engineers delivering quality-first solutions since 2022."
  },
  {
    icon: <FaHandshake />,
    title: "Client-Centric Approach",
    desc: "Every design is crafted around the client's lifestyle, vision, and specific requirements."
  },
  {
    icon: <FaLeaf />,
    title: "Ecology-Conscious Design",
    desc: "We complement the natural ecology of every site, ensuring sustainable and lasting outcomes."
  },
  {
    icon: <FaLightbulb />,
    title: "One-Roof Solutions",
    desc: "Architecture, interiors, construction, and estimation — all under a single, trusted firm."
  }
];

const marqueeItems = [
  "Architectural Design", "Interior Solutions", "Structural Engineering",
  "3D Visualization", "Construction Management", "Landscape Design",
  "Cost Estimation", "Bank Estimations", "Project Coordination",
];

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="home-hero">
        <div
          className="home-hero-bg"
          style={{ backgroundImage: `url(${HomeBg})` }}
        />
        <div className="home-hero-overlay" />

        <div className="container home-hero-content">
          <div className="hero-eyebrow">Bengaluru, Karnataka</div>
          <h1 className="hero-title">
            Designing Spaces,<br />
            <em>Defining Lives.</em>
          </h1>
          <p className="hero-desc">
            Harmya Aakara is an architectural and interior design firm delivering bespoke
            building solutions rooted in client lifestyle, need, and the unique
            ecology of every site.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn-hero-primary">Our Services</Link>
            <Link to="/contact" className="btn-hero-ghost">Get In Touch</Link>
          </div>
        </div>

        <div className="hero-stats container">
          <div className="hero-stat-item">
            <span className="hero-stat-num">3+</span>
            <span className="hero-stat-label">Years Active</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">50+</span>
            <span className="hero-stat-label">Projects Done</span>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="intro-strip">
        <div className="intro-strip-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="marquee-item" key={i}>
              {item}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="home-services">
        <div className="container">
          <div data-aos="fade-up">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">
              Services <em>Offered</em>
            </h2>
          </div>

          <div className="service-grid" data-aos="fade-up" data-aos-delay="100">
            {services.map((s, i) => (
              <div className="service-tile" key={i}>
                <span className="service-tile-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="service-tile-icon">{s.icon}</span>
                <div className="service-tile-title">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why-us">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="why-us-image-wrap">
                <img src={HomeBg} alt="Harmya Aakara Architecture" />
                <div className="why-us-badge">
                  <span className="num">50+</span>
                  <span className="lbl">Projects<br />Completed</span>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="section-label">Why Harmya Aakara</div>
              <h2 className="section-title mb-4">
                Built on Trust,<br />
                <em>Designed with Passion</em>
              </h2>

              {whyPoints.map((pt, i) => (
                <div className="why-point" key={i}>
                  <div className="why-point-icon">{pt.icon}</div>
                  <div>
                    <h6>{pt.title}</h6>
                    <p>{pt.desc}</p>
                  </div>
                </div>
              ))}

              <Link to="/about" className="btn-hero-primary" style={{ display: "inline-block", marginTop: "8px" }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band" >
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7" data-aos="fade-right">
              <h2>Ready to Build Your Dream Space?</h2>
              <p>Let's talk about your vision. We'll handle everything from concept to completion.</p>
            </div>
            <div className="col-lg-5 text-lg-end" data-aos="fade-left">
              <Link to="/contact" className="btn-cta">Start a Conversation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;