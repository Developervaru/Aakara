import React, { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/Projects.css";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const categories = ["All", "Residential", "Commercial", "Interior", "Landscape"];

const projects = [
  {
    id: 1,
    title: "Villa Residence",
    category: "Residential",
    location: "Whitefield, Bengaluru",
    year: "2024",
    area: "3200 sqft",
    services: ["Architectural Planning", "3D Rendering", "Interior Design", "PMC"],
    description: "A contemporary 4BHK villa blending modern aesthetics with Vastu-compliant planning. The design maximises natural light and cross-ventilation across all floors.",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    ]
  },
  {
    id: 2,
    title: "Corporate HQ",
    category: "Commercial",
    location: "Indiranagar, Bengaluru",
    year: "2024",
    area: "8500 sqft",
    services: ["Architectural Planning", "Interior Design", "Structural Design", "PMC"],
    description: "A flagship corporate headquarters designed to inspire productivity and reflect brand identity. Features open collaboration zones, private cabins, and a rooftop breakout area.",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    ]
  },
  {
    id: 3,
    title: "Modern Apartment",
    category: "Interior",
    location: "Mysuru",
    year: "2023",
    area: "1800 sqft",
    services: ["Interior Design", "3D Rendering", "Cost Estimation"],
    description: "A premium 3BHK apartment interior executed in a japandi-influenced palette — warm wood tones, stone textures, and curated lighting throughout.",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    ]
  },
  {
    id: 4,
    title: "Garden Estate",
    category: "Landscape",
    location: "Sarjapur, Bengaluru",
    year: "2023",
    area: "6000 sqft (plot)",
    services: ["Landscaping Design", "Layout Planning"],
    description: "An ecology-first landscape design integrating native plant species, rain-water harvesting zones, and shaded walking paths across a sprawling estate garden.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    ]
  },
  {
    id: 5,
    title: "Luxury Duplex",
    category: "Residential",
    location: "JP Nagar, Bengaluru",
    year: "2024",
    area: "4100 sqft",
    services: ["Architectural Planning", "Interior Design", "Structural Design", "PMC"],
    description: "A double-height luxury duplex with dramatic void spaces, custom millwork, and a sky-lit staircase as the central design element.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    ]
  },
  {
    id: 6,
    title: "Retail Showroom",
    category: "Commercial",
    location: "Koramangala, Bengaluru",
    year: "2023",
    area: "2200 sqft",
    services: ["Interior Design", "3D Rendering", "Consultant Coordination"],
    description: "A high-end retail showroom designed for maximum visual impact — a dramatic entry statement, feature lighting rigs, and a curated material palette.",
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    ]
  },
];

function Projects() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null); // { project, imgIndex }

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Keyboard navigation
  const handleKey = useCallback((e) => {
    if (!lightbox) return;
    if (e.key === "Escape") setLightbox(null);
    if (e.key === "ArrowRight") nextImg();
    if (e.key === "ArrowLeft") prevImg();
  }, [lightbox]); // eslint-disable-line

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const openLightbox = (project, imgIndex = 0) => setLightbox({ project, imgIndex });
  const closeLightbox = () => setLightbox(null);
  const nextImg = () => {
    if (!lightbox) return;
    const len = lightbox.project.imgs.length;
    setLightbox(l => ({ ...l, imgIndex: (l.imgIndex + 1) % len }));
  };
  const prevImg = () => {
    if (!lightbox) return;
    const len = lightbox.project.imgs.length;
    setLightbox(l => ({ ...l, imgIndex: (l.imgIndex - 1 + len) % len }));
  };

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <div className="projects-page">

      {/* ── HERO ── */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-label">Our Portfolio</div>
          <h1>Featured <em>Projects</em></h1>
          <p>
            A curated selection of spaces we have designed and built — each a reflection
            of our commitment to craft, function, and beauty.
          </p>
        </div>
      </section>

      {/* ── FILTER ── */}
      <section className="projects-filter-section">
        <div className="container">
          <div className="projects-filter-row">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`proj-filter-btn ${active === cat ? "proj-filter-btn--active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="row g-4">
            {filtered.map((p, i) => (
              <div
                className="col-lg-4 col-md-6"
                key={p.id}
                data-aos="fade-up"
                data-aos-delay={i < 3 ? i * 100 : 0}
              >
                <div
                  className="proj-card"
                  onClick={() => openLightbox(p, 0)}
                >
                  <div className="proj-card-img-wrap">
                    <img src={p.img} alt={p.title} />
                    <div className="proj-card-overlay">
                      <FaExpand className="proj-expand-icon" />
                      <span>View Project</span>
                    </div>
                    <div className="proj-card-badge">{p.category}</div>
                  </div>
                  <div className="proj-card-body">
                    <div className="proj-card-title">{p.title}</div>
                    <div className="proj-card-meta">
                      <span><FaMapMarkerAlt style={{ fontSize: "10px" }} /> {p.location}</span>
                      <span><FaCalendarAlt style={{ fontSize: "10px" }} /> {p.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="projects-empty">No projects in this category yet.</div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="lb-overlay" onClick={closeLightbox}>
          <div className="lb-modal" onClick={e => e.stopPropagation()}>

            {/* Close */}
            <button className="lb-close" onClick={closeLightbox}>
              <FaTimes />
            </button>

            {/* Image side */}
            <div className="lb-image-side">
              <img
                src={lightbox.project.imgs[lightbox.imgIndex]}
                alt={lightbox.project.title}
                className="lb-main-img"
              />

              {/* Arrows */}
              {lightbox.project.imgs.length > 1 && (
                <>
                  <button className="lb-arrow lb-arrow--left" onClick={prevImg}>
                    <FaChevronLeft />
                  </button>
                  <button className="lb-arrow lb-arrow--right" onClick={nextImg}>
                    <FaChevronRight />
                  </button>
                </>
              )}

              {/* Thumbnails */}
              {lightbox.project.imgs.length > 1 && (
                <div className="lb-thumbs">
                  {lightbox.project.imgs.map((img, i) => (
                    <button
                      key={i}
                      className={`lb-thumb ${lightbox.imgIndex === i ? "lb-thumb--active" : ""}`}
                      onClick={() => setLightbox(l => ({ ...l, imgIndex: i }))}
                    >
                      <img src={img} alt={`View ${i + 1}`} />
                    </button>
                  ))}
                </div>
              )}

              {/* Counter */}
              <div className="lb-counter">
                {lightbox.imgIndex + 1} / {lightbox.project.imgs.length}
              </div>
            </div>

            {/* Info side */}
            <div className="lb-info-side">
              <div className="lb-category-badge">{lightbox.project.category}</div>
              <h2 className="lb-title">{lightbox.project.title}</h2>

              <div className="lb-meta-row">
                <div className="lb-meta-item">
                  <span className="lb-meta-label">Location</span>
                  <span className="lb-meta-val">{lightbox.project.location}</span>
                </div>
                <div className="lb-meta-item">
                  <span className="lb-meta-label">Year</span>
                  <span className="lb-meta-val">{lightbox.project.year}</span>
                </div>
                <div className="lb-meta-item">
                  <span className="lb-meta-label">Area</span>
                  <span className="lb-meta-val">{lightbox.project.area}</span>
                </div>
              </div>

              <p className="lb-description">{lightbox.project.description}</p>

              <div className="lb-services-label">Services Provided</div>
              <div className="lb-services-list">
                {lightbox.project.services.map((s, i) => (
                  <span key={i} className="lb-service-tag">{s}</span>
                ))}
              </div>

              <a
                href="https://wa.me/9480297100?text=Hi%20Harmya%20Aakara!%20I%20saw%20your%20project%20portfolio%20and%20would%20like%20to%20discuss%20a%20similar%20project."
                target="_blank"
                rel="noreferrer"
                className="lb-cta-btn"
              >
                Discuss a Similar Project
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Projects;