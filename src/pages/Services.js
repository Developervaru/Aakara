import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/Services.css";
import {
  FaDraftingCompass, FaCubes, FaPaintRoller, FaUsersCog,
  FaMapMarkedAlt, FaTree, FaBuilding, FaHardHat,
  FaCalculator, FaUniversity, FaCheckCircle
} from "react-icons/fa";

const services = [
  {
    icon: <FaDraftingCompass />,
    title: "Architectural Planning",
    desc: "Comprehensive design blueprints that translate your vision into precise, buildable plans aligned with local regulations."
  },
  {
    icon: <FaCubes />,
    title: "3D Rendering & Modelling",
    desc: "Photo-realistic visualizations and immersive 3D walkthroughs so you see your space before a single brick is laid."
  },
  {
    icon: <FaPaintRoller />,
    title: "Interior Design",
    desc: "Thoughtfully curated interiors that balance aesthetics, functionality, and your personal lifestyle."
  },
  {
    icon: <FaUsersCog />,
    title: "Consultant Coordination & Management",
    desc: "Seamless coordination of MEP, structural, and all specialist consultants under one project umbrella."
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Layout Planning",
    desc: "Strategic site and space planning to maximize utility, flow, and value from every square foot."
  },
  {
    icon: <FaTree />,
    title: "Landscaping Design",
    desc: "Outdoor spaces that extend your living environment — gardens, terraces, and ecological landscapes."
  },
  {
    icon: <FaBuilding />,
    title: "Structural Design",
    desc: "Engineered structural solutions ensuring safety, durability, and compliance with all applicable codes."
  },
  {
    icon: <FaHardHat />,
    title: "Construction & PMC Works",
    desc: "End-to-end project management and construction supervision from groundbreaking to handover."
  },
  {
    icon: <FaCalculator />,
    title: "Cost Estimation (Design Options)",
    desc: "Transparent, detailed cost estimates across multiple design alternatives to inform confident decisions."
  },
  {
    icon: <FaUniversity />,
    title: "Bank Estimations",
    desc: "Professionally prepared valuation reports and estimates accepted by leading financial institutions."
  },
  {
    icon: <FaCheckCircle />,
    title: "Complete Building Services",
    desc: "A single-point solution from concept and design through construction to final interior finishing."
  },
];

const processSteps = [
  { num: "01", title: "Consultation", desc: "Understand your vision, budget & timeline" },
  { num: "02", title: "Concept Design", desc: "Develop initial layouts and 3D concepts" },
  { num: "03", title: "Detailed Drawings", desc: "Finalize plans, elevations & BOQ" },
  { num: "04", title: "Construction", desc: "Build with precision and oversight" },
  { num: "05", title: "Handover", desc: "Complete finishing and keys in hand" },
];

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="services-page">

      {/* ── HERO ── */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-label">Our Expertise</div>
          <h1>
            Premium <em>Services</em><br />
            for Every Space
          </h1>
          <p>
            From the first sketch to the final tile, we deliver comprehensive
            architectural and building solutions tailored to your life.
          </p>
        </div>
      </section>

      {/* ── SERVICE LIST ── */}
      <section className="services-list-section">
        <div className="container">
          {services.map((s, i) => (
            <div
              className="service-row-item"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i < 4 ? i * 80 : 0}
            >
              <div className="srv-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="srv-icon-wrap">{s.icon}</div>
              <div className="srv-body">
                <div className="srv-title">{s.title}</div>
                <p className="srv-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section">
        <div className="container">
          <div data-aos="fade-up">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">
              Our <em>Process</em>
            </h2>
          </div>

          <div className="row g-4" data-aos="fade-up" data-aos-delay="100">
            {processSteps.map((step, i) => (
              <div className="col-lg col-md-4 col-6" key={i}>
                <div className="process-step">
                  <div className="step-circle">{step.num}</div>
                  <h6>{step.title}</h6>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <Link to="/contact" className="btn-hero-primary" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "#0D0D0D",
              color: "#fff",
              border: "none",
              padding: "16px 40px",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s ease"
            }}>
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;