import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/FAQ.css";
import { FaPlus, FaMinus, FaWhatsapp } from "react-icons/fa";

const faqCategories = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I get started with Harmya Aakara?",
        a: "Simply reach out to us via phone, WhatsApp, or email. We begin with a free initial consultation where we understand your vision, requirements, site details, and budget. From there, we develop a tailored proposal for your project."
      },
      {
        q: "Do you offer free consultations?",
        a: "Yes! Our initial consultation is completely free. We believe in understanding your needs before anything else. You can contact us via WhatsApp at +91 9480297100 or visit our office in Jnana Ganga Nagar, Bengaluru."
      },
      {
        q: "What areas do you serve?",
        a: "We are based in Bengaluru and primarily serve projects across Karnataka — including Bengaluru, Mysuru, Mangaluru, and surrounding areas. For exceptional projects, we are open to working across South India."
      },
    ]
  },
  {
    category: "Design & Process",
    items: [
      {
        q: "What is your design process from start to finish?",
        a: "Our process follows five clear stages: (1) Free Consultation to understand your vision, (2) Concept Design with initial layouts and 3D models, (3) Detailed Drawings with plans, elevations, and BOQ, (4) Construction with quality supervision, and (5) Final Handover with complete finishing. You are involved and informed at every stage."
      },
      {
        q: "How long does the architectural design phase take?",
        a: "The design phase typically takes 3–6 weeks depending on the complexity of the project. For larger commercial or residential projects, it may extend to 8–10 weeks. We prioritize thorough planning over rushing — this saves significant time and cost during construction."
      },
      {
        q: "Can I make changes during the design process?",
        a: "Absolutely. We follow an iterative design approach, welcoming your feedback at each stage. Minor adjustments are accommodated at no extra cost. Major scope changes after finalization may involve a revision fee, which we discuss transparently upfront."
      },
      {
        q: "Do you provide 3D visualizations before construction?",
        a: "Yes, always. Our 3D rendering and modelling service is included in our design packages. We create photorealistic visualizations and walkthroughs so you can see and experience your space before a single brick is laid. This eliminates surprises and ensures your complete satisfaction."
      },
    ]
  },
  {
    category: "Costs & Payments",
    items: [
      {
        q: "How are your design fees structured?",
        a: "Our fees are typically structured as a percentage of the total construction cost, or as a fixed lump-sum depending on the project scope. We provide a clear, itemized fee proposal before any engagement. There are no hidden charges — transparency is a core value for us."
      },
      {
        q: "Can you help with bank loan documentation and estimates?",
        a: "Yes. We specialize in preparing bank estimation reports that are accepted by leading financial institutions. Our valuation reports are professionally prepared and compliant with bank norms, helping you secure loans faster and without hassle."
      },
      {
        q: "Do you provide cost estimates before starting?",
        a: "Yes. We provide detailed cost estimates (BOQ — Bill of Quantities) as part of our design documentation. We also offer cost estimation as a standalone service. Our estimates are accurate and help you plan your finances confidently."
      },
    ]
  },
  {
    category: "Construction & Delivery",
    items: [
      {
        q: "Do you manage construction, or only design?",
        a: "We offer both. Beyond design, we provide Project Management & Construction (PMC) services — managing contractors, monitoring quality, tracking timelines, and ensuring your project is delivered on budget. This end-to-end service is what sets us apart."
      },
      {
        q: "How do you ensure construction quality?",
        a: "Our site supervision team conducts regular inspections at every phase of construction. We use approved materials, follow structural drawings strictly, and maintain transparent communication with you throughout. We do not cut corners — quality is non-negotiable."
      },
      {
        q: "What happens after handover?",
        a: "We stand behind our work. After handover, we offer a defect liability period during which we address any issues at no extra charge. We also provide guidance and support for any future modifications or additions you may want."
      },
    ]
  },
];

function FAQ() {
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggle = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isOpen = (catIdx, itemIdx) => !!openItems[`${catIdx}-${itemIdx}`];

  return (
    <div className="faq-page">

      {/* ── HERO ── */}
      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero-label">Help Centre</div>
          <h1>Frequently Asked <em>Questions</em></h1>
          <p>
            Everything you need to know about working with Harmya Aakara.
            Can't find your answer? Just reach out to us directly.
          </p>
        </div>
      </section>

      {/* ── FAQ BODY ── */}
      <section className="faq-body">
        <div className="container">
          <div className="row g-5">

            {/* Sticky Sidebar */}
            <div className="col-lg-3 d-none d-lg-block">
              <div className="faq-sidebar" data-aos="fade-right">
                <div className="faq-sidebar-title">Categories</div>
                <ul className="faq-sidebar-links">
                  {faqCategories.map((cat, i) => (
                    <li key={i}>
                      <a href={`#cat-${i}`}>{cat.category}</a>
                    </li>
                  ))}
                </ul>

                <div className="faq-sidebar-cta">
                  <p>Still have a question?</p>
                  <a
                    href="https://wa.me/9480297100?text=Hi%2C%20I%20have%20a%20question%20about%20your%20services."
                    target="_blank"
                    rel="noreferrer"
                    className="faq-wa-btn"
                  >
                    <FaWhatsapp /> Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="col-lg-9">
              {faqCategories.map((cat, catIdx) => (
                <div
                  className="faq-category"
                  key={catIdx}
                  id={`cat-${catIdx}`}
                  data-aos="fade-up"
                  data-aos-delay={catIdx * 60}
                >
                  <div className="faq-category-title">
                    <span>{String(catIdx + 1).padStart(2, "0")}</span>
                    {cat.category}
                  </div>

                  <div className="faq-items">
                    {cat.items.map((item, itemIdx) => (
                      <div
                        className={`faq-item ${isOpen(catIdx, itemIdx) ? "faq-item--open" : ""}`}
                        key={itemIdx}
                      >
                        <button
                          className="faq-question"
                          onClick={() => toggle(catIdx, itemIdx)}
                        >
                          <span>{item.q}</span>
                          <span className="faq-icon">
                            {isOpen(catIdx, itemIdx) ? <FaMinus /> : <FaPlus />}
                          </span>
                        </button>
                        <div className="faq-answer">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="faq-cta">
        <div className="container">
          <div className="row align-items-center gy-4" data-aos="fade-up">
            <div className="col-lg-8">
              <div className="section-label">Still Curious?</div>
              <h2 className="section-title">
                Let's Have a<br />
                <em>Conversation</em>
              </h2>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="/contact" className="btn-primary-gold">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default FAQ;