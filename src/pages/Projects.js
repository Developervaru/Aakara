import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = ["All", "Residential", "Commercial", "Interior", "Landscape"];

const projects = [
  { id: 1, title: "Villa Residence", category: "Residential", location: "Bengaluru", year: "2024", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80" },
  { id: 2, title: "Corporate HQ", category: "Commercial", location: "Bengaluru", year: "2024", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80" },
  { id: 3, title: "Modern Apartment", category: "Interior", location: "Mysuru", year: "2023", img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80" },
  { id: 4, title: "Garden Estate", category: "Landscape", location: "Bengaluru", year: "2023", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" },
  { id: 5, title: "Luxury Duplex", category: "Residential", location: "Bengaluru", year: "2024", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { id: 6, title: "Retail Showroom", category: "Commercial", location: "Bengaluru", year: "2023", img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80" },
];

function Projects() {
  const [active, setActive] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <div style={{ background: "#fff" }}>

      {/* HERO */}
      <section style={{
        background: "#0D0D0D",
        padding: "120px 0 80px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #C9A84C, transparent)"
        }} />
        <div className="container">
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 500,
            letterSpacing: "0.28em", textTransform: "uppercase", color: "#C9A84C",
            display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px"
          }}>
            <span style={{ display: "block", width: "24px", height: "1px", background: "#C9A84C" }} />
            Our Portfolio
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "20px"
          }}>
            Featured <em style={{ fontStyle: "italic", color: "#E8C97A" }}>Projects</em>
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 300,
            color: "rgba(255,255,255,0.6)", maxWidth: "480px", lineHeight: 1.75, margin: 0
          }}>
            A curated selection of spaces we have designed and built — each a reflection
            of our commitment to craft, function, and beauty.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section style={{ padding: "60px 0 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                  borderRadius: "2px",
                  border: `1px solid ${active === cat ? "#0D0D0D" : "#eeece9"}`,
                  background: active === cat ? "#0D0D0D" : "#fff",
                  color: active === cat ? "#fff" : "#888",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: "40px 0 100px" }}>
        <div className="container">
          <div className="row g-4">
            {filtered.map((p, i) => (
              <div className="col-lg-4 col-md-6" key={p.id} data-aos="fade-up" data-aos-delay={i < 3 ? i * 100 : 0}>
                <div style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "2px",
                  cursor: "pointer",
                  border: "1px solid #eeece9"
                }}
                  className="project-card"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease"
                    }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                  <div style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    background: "#C9A84C",
                    color: "#0D0D0D",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "5px 12px",
                    borderRadius: "2px"
                  }}>
                    {p.category}
                  </div>
                  <div style={{ padding: "20px 20px 24px", background: "#fff" }}>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#0D0D0D",
                      marginBottom: "4px"
                    }}>
                      {p.title}
                    </div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      fontWeight: 300,
                      color: "#aaa",
                      letterSpacing: "0.05em"
                    }}>
                      {p.location} · {p.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{
              textAlign: "center",
              padding: "60px 0",
              fontFamily: "'DM Sans', sans-serif",
              color: "#aaa",
              fontSize: "15px"
            }}>
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

export default Projects;