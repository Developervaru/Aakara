import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/Contact.css";
import {
  FaPhoneAlt, FaEnvelope, FaWhatsapp,
  FaMapMarkerAlt, FaInstagram, FaCheckCircle,
  FaPaperPlane, FaUser, FaBuilding, FaRuler
} from "react-icons/fa";

const projectTypes = [
  "Residential House", "Villa / Luxury Home", "Apartment Interior",
  "Commercial Office", "Renovation / Remodel", "Landscaping",
  "Structural Design Only", "Bank Estimation Only", "Other"
];

const budgetRanges = [
  "Under ₹20 Lakhs", "₹20L – ₹50L", "₹50L – ₹1 Crore",
  "₹1Cr – ₹2Cr", "₹2Cr – ₹5Cr", "₹5Cr+"
];

function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    projectType: "", budget: "", area: "", message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Valid 10-digit number required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    return e;
  };

  const handleChange = (key, value) => {
    setForm(f => ({ ...f, [key]: value }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    const msg = `Hi Harmya Aakara! I'm submitting an enquiry.
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
${form.projectType ? `Project Type: ${form.projectType}` : ""}
${form.budget ? `Budget: ${form.budget}` : ""}
${form.area ? `Area: ${form.area} sqft` : ""}
${form.message ? `Message: ${form.message}` : ""}
Please get in touch!`;
    setTimeout(() => {
      window.open(`https://wa.me/9480297100?text=${encodeURIComponent(msg)}`, "_blank");
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

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

            {/* ── Info Column ── */}
            <div className="col-lg-5" data-aos="fade-right">
              <div className="contact-info-label">Reach Us</div>
              <h2 className="contact-info-title">
                Our <em>Contact</em><br />Details
              </h2>

              <div className="contact-detail-row">
                <div className="contact-detail-icon"><FaPhoneAlt /></div>
                <div>
                  <div className="contact-detail-label">Phone</div>
                  <a href="tel:+919480297100" className="contact-detail-value">+91 9480297100</a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon"><FaWhatsapp /></div>
                <div>
                  <div className="contact-detail-label">WhatsApp</div>
                  <a href="https://wa.me/9480297100" target="_blank" rel="noreferrer" className="contact-detail-value">
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
                <a href="https://www.instagram.com/aakara_arch" target="_blank" rel="noreferrer" className="contact-social-btn">
                  <FaInstagram /> Instagram
                </a>
                <a href="https://wa.me/9480297100" target="_blank" rel="noreferrer" className="contact-social-btn">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>

              {/* Map */}
              <div className="contact-map-wrap" style={{ marginTop: "36px" }}>
                <iframe
                  title="Harmya Aakara Location"
                  src="https://maps.google.com/maps?q=Harmya Aakara%20Jnana%20Ganga%20Nagar%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
              <div style={{ marginTop: "16px", padding: "20px 24px", border: "1px solid #eeece9", borderRadius: "2px", background: "#fafaf8" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#888", margin: 0, fontWeight: 300, lineHeight: 1.7 }}>
                  <strong style={{ color: "#0D0D0D", fontWeight: 500 }}>Working Hours:</strong> Monday – Saturday, 9:00 AM – 7:00 PM<br />
                  <strong style={{ color: "#0D0D0D", fontWeight: 500 }}>Sunday:</strong> By appointment only
                </p>
              </div>
            </div>

            {/* ── Lead Form ── */}
            <div className="col-lg-7" data-aos="fade-left">
              <div className="lead-form-wrap">
                <div className="lead-form-header">
                  <div className="contact-info-label">Get In Touch</div>
                  <h2 className="contact-info-title">
                    Send Us Your <em>Enquiry</em>
                  </h2>
                  <p className="lead-form-subtext">
                    Fill in your details below and we'll get back to you within 24 hours.
                    All consultations are free.
                  </p>
                </div>

                {submitted ? (
                  <div className="lead-form-success">
                    <FaCheckCircle className="lead-success-icon" />
                    <h3>Thank You, {form.name.split(" ")[0]}!</h3>
                    <p>Your enquiry has been sent via WhatsApp. We'll respond within 24 hours.</p>
                    <button
                      className="lead-success-reset"
                      onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", projectType: "", budget: "", area: "", message: "" }); }}
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form className="lead-form" onSubmit={handleSubmit} noValidate>

                    {/* Row 1 */}
                    <div className="lead-form-row">
                      <div className="lead-form-group">
                        <label><FaUser style={{ fontSize: "10px" }} /> Full Name *</label>
                        <input
                          type="text"
                          placeholder="Rajesh Kumar"
                          value={form.name}
                          onChange={e => handleChange("name", e.target.value)}
                          className={`lead-input ${errors.name ? "lead-input--error" : ""}`}
                        />
                        {errors.name && <span className="lead-error">{errors.name}</span>}
                      </div>
                      <div className="lead-form-group">
                        <label><FaPhoneAlt style={{ fontSize: "10px" }} /> Phone Number *</label>
                        <input
                          type="tel"
                          placeholder="9876543210"
                          value={form.phone}
                          onChange={e => handleChange("phone", e.target.value)}
                          className={`lead-input ${errors.phone ? "lead-input--error" : ""}`}
                        />
                        {errors.phone && <span className="lead-error">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="lead-form-group lead-form-group--full">
                      <label><FaEnvelope style={{ fontSize: "10px" }} /> Email Address *</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={e => handleChange("email", e.target.value)}
                        className={`lead-input ${errors.email ? "lead-input--error" : ""}`}
                      />
                      {errors.email && <span className="lead-error">{errors.email}</span>}
                    </div>

                    {/* Row 2 */}
                    <div className="lead-form-row">
                      <div className="lead-form-group">
                        <label><FaBuilding style={{ fontSize: "10px" }} /> Project Type</label>
                        <select
                          value={form.projectType}
                          onChange={e => handleChange("projectType", e.target.value)}
                          className="lead-input lead-select"
                        >
                          <option value="">Select type...</option>
                          {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div className="lead-form-group">
                        <label>Budget Range</label>
                        <select
                          value={form.budget}
                          onChange={e => handleChange("budget", e.target.value)}
                          className="lead-input lead-select"
                        >
                          <option value="">Select range...</option>
                          {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Area */}
                    <div className="lead-form-group lead-form-group--full">
                      <label><FaRuler style={{ fontSize: "10px" }} /> Approximate Area (sqft)</label>
                      <input
                        type="number"
                        placeholder="e.g. 2400"
                        value={form.area}
                        onChange={e => handleChange("area", e.target.value)}
                        className="lead-input"
                        min="0"
                      />
                    </div>

                    {/* Message */}
                    <div className="lead-form-group lead-form-group--full">
                      <label>Tell Us About Your Project</label>
                      <textarea
                        rows={4}
                        placeholder="e.g. I want to build a 3BHK house in Whitefield. Looking for full design and construction services..."
                        value={form.message}
                        onChange={e => handleChange("message", e.target.value)}
                        className="lead-input lead-textarea"
                      />
                    </div>

                    <button
                      type="submit"
                      className="lead-submit-btn"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <span className="lead-btn-loading">Sending...</span>
                      ) : (
                        <><FaPaperPlane /> Send Enquiry via WhatsApp</>
                      )}
                    </button>

                    <p className="lead-form-note">
                      Your details are sent directly to our team via WhatsApp. We do not store or share your information.
                    </p>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;