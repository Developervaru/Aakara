import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/Testimonials.css";
import { FaStar, FaQuoteLeft, FaInstagram, FaWhatsapp } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rajesh & Priya Nair",
    project: "4BHK Villa — Whitefield, Bengaluru",
    category: "Residential",
    rating: 5,
    text: "Harmya Aakara transformed our vision into a stunning reality. Mr. Chandru and the team understood our lifestyle from day one. The attention to detail in every corner of our home is exceptional. We couldn't be happier with the final result — it truly feels like a space designed just for us.",
    initials: "RN",
    year: "2024"
  },
  {
    id: 2,
    name: "Suresh Gowda",
    project: "Commercial Office — Indiranagar, Bengaluru",
    category: "Commercial",
    rating: 5,
    text: "Professional, creative, and always on time. The 3D renderings helped us visualize the space perfectly before construction began. The final office exceeded every expectation. Our employees love the new workspace and we've seen a noticeable boost in productivity.",
    initials: "SG",
    year: "2024"
  },
  {
    id: 3,
    name: "Meena & Anand Sharma",
    project: "Apartment Interior — Mysuru",
    category: "Interior",
    rating: 5,
    text: "We hired Harmya Aakara for our apartment's interior and were blown away by the results. They balanced our budget without compromising on aesthetics. The team was responsive throughout the project and the coordination was seamless. Highly recommended!",
    initials: "MS",
    year: "2023"
  },
  {
    id: 4,
    name: "Vikram Hegde",
    project: "Independent House — JP Nagar, Bengaluru",
    category: "Residential",
    rating: 5,
    text: "From architectural planning to the final handover, Harmya Aakara handled everything flawlessly. The bank estimation report was accepted on the first submission which saved us a lot of time. The construction quality is top notch and the PMC service was a lifesaver.",
    initials: "VH",
    year: "2023"
  },
  {
    id: 5,
    name: "Deepa Krishnamurthy",
    project: "Garden Landscape — Sarjapur, Bengaluru",
    category: "Landscape",
    rating: 5,
    text: "The landscaping work done for our villa is breathtaking. They incorporated native plants and sustainable design principles that perfectly complement the architecture. Our garden is now the highlight of the entire neighborhood. Truly ecology-conscious design in action.",
    initials: "DK",
    year: "2024"
  },
  {
    id: 6,
    name: "Arun & Kavitha Reddy",
    project: "Duplex — Electronic City, Bengaluru",
    category: "Residential",
    rating: 5,
    text: "Excellent firm with a client-first attitude. The cost estimation was transparent and accurate — no surprises during construction. The structural design was solid and the interiors were elegantly done. We would definitely work with Harmya Aakara again.",
    initials: "AR",
    year: "2023"
  },
];

const categories = ["All", "Residential", "Commercial", "Interior", "Landscape"];

const stats = [
  { num: "50+", label: "Projects Completed" },
  { num: "100%", label: "Client Satisfaction" },
  { num: "3+", label: "Years of Excellence" },
  { num: "4.9★", label: "Average Rating" },
];

function Testimonials() {
  const [active, setActive] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filtered = active === "All" ? testimonials : testimonials.filter(t => t.category === active);

  return (
    <div className="testimonials-page">

      {/* ── HERO ── */}
      <section className="testimonials-hero">
        <div className="container">
          <div className="testimonials-hero-label">Client Stories</div>
          <h1>What Our <em>Clients Say</em></h1>
          <p>
            Real words from the people who trusted us with their most important spaces.
            Their stories are our greatest achievement.
          </p>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="testimonials-stats-band">
        <div className="container">
          <div className="row g-0">
            {stats.map((s, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="tstat-item" data-aos="fade-up" data-aos-delay={i * 80}>
                  <span className="tstat-num">{s.num}</span>
                  <span className="tstat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER ── */}
      <section className="testimonials-filter">
        <div className="container">
          <div className="tfilter-row">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`tfilter-btn ${active === cat ? "tfilter-btn--active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARDS GRID ── */}
      <section className="testimonials-grid-section">
        <div className="container">
          <div className="row g-4">
            {filtered.map((t, i) => (
              <div
                className="col-lg-6"
                key={t.id}
                data-aos="fade-up"
                data-aos-delay={i < 4 ? i * 100 : 0}
              >
                <div className="tcard">
                  <div className="tcard-header">
                    <div className="tcard-avatar">{t.initials}</div>
                    <div className="tcard-meta">
                      <div className="tcard-name">{t.name}</div>
                      <div className="tcard-project">{t.project}</div>
                      <div className="tcard-stars">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <FaStar key={j} />
                        ))}
                      </div>
                    </div>
                    <div className="tcard-year">{t.year}</div>
                  </div>
                  <div className="tcard-body">
                    <FaQuoteLeft className="tcard-quote-icon" />
                    <p>{t.text}</p>
                  </div>
                  <div className="tcard-footer">
                    <span className="tcard-category-badge">{t.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="testimonials-cta">
        <div className="container">
          <div data-aos="fade-up">
            <div className="section-label" style={{ justifyContent: "center" }}>Join Them</div>
            <h2 className="section-title text-center">
              Ready to Create Your<br />
              <em>Success Story?</em>
            </h2>
            <div className="tcta-actions">
              <a href="/contact" className="btn-primary-gold">Start Your Project</a>
              <a
                href="https://wa.me/9480297100"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-dark"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Testimonials;