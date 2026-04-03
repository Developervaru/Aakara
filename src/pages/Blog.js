import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/Blog.css";
import { FaArrowRight, FaClock, FaTag } from "react-icons/fa";

const categories = ["All", "Design Tips", "Architecture", "Interior", "Construction", "Sustainability"];

const posts = [
  {
    id: 1,
    title: "5 Things to Know Before Building Your Home in Bengaluru",
    excerpt: "From BBMP approvals to soil testing — a complete guide for first-time builders in Bengaluru. Save time, money, and headaches with these essential tips.",
    category: "Architecture",
    readTime: "6 min read",
    date: "15 Mar 2025",
    slug: "building-home-bengaluru-guide",
    featured: true,
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
  },
  {
    id: 2,
    title: "Open Plan vs. Traditional Room Layout: What's Right for Your Home?",
    excerpt: "We break down the pros and cons of open-plan living versus traditional compartmentalized layouts, helping you decide what works best for your lifestyle and Bengaluru climate.",
    category: "Design Tips",
    readTime: "5 min read",
    date: "28 Feb 2025",
    slug: "open-plan-vs-traditional-layout",
    featured: false,
    gradient: "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)"
  },
  {
    id: 3,
    title: "Vastu-Compliant Modern Architecture: Finding the Balance",
    excerpt: "How to honour Vastu Shastra principles without compromising on contemporary aesthetics and functionality. Our approach at Harmya Aakara.",
    category: "Architecture",
    readTime: "7 min read",
    date: "10 Feb 2025",
    slug: "vastu-compliant-modern-architecture",
    featured: false,
    gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)"
  },
  {
    id: 4,
    title: "Interior Design Trends Dominating Bengaluru Homes in 2025",
    excerpt: "From biophilic design to japandi aesthetics — here are the interior trends we're seeing in our projects across Bengaluru this year and why they work.",
    category: "Interior",
    readTime: "5 min read",
    date: "22 Jan 2025",
    slug: "interior-design-trends-bengaluru-2025",
    featured: false,
    gradient: "linear-gradient(135deg, #4e0d0d 0%, #C9A84C 100%)"
  },
  {
    id: 5,
    title: "How Much Does It Really Cost to Build in Bengaluru? (2025 Guide)",
    excerpt: "A transparent breakdown of construction costs per sqft across different finish levels — standard, premium, and luxury — with real numbers from 2024–25 projects.",
    category: "Construction",
    readTime: "8 min read",
    date: "5 Jan 2025",
    slug: "construction-cost-bengaluru-2025",
    featured: false,
    gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
  },
  {
    id: 6,
    title: "Sustainable Building: Passive Cooling Techniques for Karnataka Homes",
    excerpt: "Smart architectural strategies to keep your home cool naturally — reducing your AC dependency and electricity bills significantly in Bengaluru's climate.",
    category: "Sustainability",
    readTime: "6 min read",
    date: "18 Dec 2024",
    slug: "passive-cooling-karnataka-homes",
    featured: false,
    gradient: "linear-gradient(135deg, #134e5e 0%, #2d6a4f 100%)"
  },
];

function Blog() {
  const [active, setActive] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filtered = active === "All" ? posts : posts.filter(p => p.category === active);
  const featured = posts.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured || active !== "All");

  return (
    <div className="blog-page">

      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-label">Knowledge & Insight</div>
          <h1>The Aakara <em>Journal</em></h1>
          <p>
            Architecture insights, design tips, and practical guides for building
            and living better in Bengaluru and Karnataka.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {active === "All" && featured && (
        <section className="blog-featured" data-aos="fade-up">
          <div className="container">
            <div className="blog-featured-card" style={{ background: featured.gradient }}>
              <div className="bfeat-body">
                <div className="bfeat-category">
                  <FaTag style={{ fontSize: "10px" }} /> {featured.category}
                </div>
                <h2 className="bfeat-title">{featured.title}</h2>
                <p className="bfeat-excerpt">{featured.excerpt}</p>
                <div className="bfeat-meta">
                  <span><FaClock style={{ fontSize: "11px" }} /> {featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <a href={`/blog/${featured.slug}`} className="bfeat-cta">
                  Read Article <FaArrowRight />
                </a>
              </div>
              <div className="bfeat-badge">Featured</div>
            </div>
          </div>
        </section>
      )}

      {/* ── FILTER ── */}
      <section className="blog-filter">
        <div className="container">
          <div className="blog-filter-row">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`blog-filter-btn ${active === cat ? "blog-filter-btn--active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="row g-4">
            {rest.map((post, i) => (
              <div
                className="col-lg-4 col-md-6"
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={i < 3 ? i * 100 : 0}
              >
                <a href={`/blog/${post.slug}`} className="blog-card">
                  <div
                    className="blog-card-img"
                    style={{ background: post.gradient }}
                  >
                    <span className="blog-card-category-badge">{post.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span><FaClock style={{ fontSize: "10px" }} /> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-read">
                      Read More <FaArrowRight style={{ fontSize: "11px" }} />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {rest.length === 0 && (
            <div className="blog-empty">
              No articles in this category yet. Check back soon!
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="blog-newsletter-card" data-aos="fade-up">
            <div className="section-label" style={{ justifyContent: "center" }}>Stay Updated</div>
            <h2 className="section-title text-center">
              Get Design Tips in Your <em>Inbox</em>
            </h2>
            <p>
              Join our newsletter — architectural insights, design trends, and practical guides
              delivered monthly. No spam, ever.
            </p>
            <div className="blog-newsletter-form">
              <input
                type="email"
                placeholder="your@email.com"
                className="blog-newsletter-input"
              />
              <button className="blog-newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Blog;