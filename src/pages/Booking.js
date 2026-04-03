import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/Booking.css";
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM"
];

const consultationTypes = [
  { id: "site", label: "Site Visit & Assessment", duration: "2 hrs", icon: "🏗️" },
  { id: "design", label: "Design Consultation", duration: "1 hr", icon: "✏️" },
  { id: "interior", label: "Interior Planning", duration: "1 hr", icon: "🛋️" },
  { id: "estimate", label: "Cost Estimation Review", duration: "45 min", icon: "📊" },
  { id: "virtual", label: "Virtual Meeting (Online)", duration: "45 min", icon: "💻" },
];

const steps = ["Type", "Date & Time", "Your Details", "Confirm"];

function getNext14Days() {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0) {
      days.push(d);
    }
  }
  return days;
}

function formatDate(d) {
  return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
}

function Booking() {
  const [step, setStep] = useState(0);
  const [consultType, setConsultType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const days = getNext14Days();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Valid 10-digit phone required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    const cType = consultationTypes.find(c => c.id === consultType);
    const msg = `Hi Harmya Aakara! I'd like to book a consultation.
Type: ${cType?.label}
Date: ${selectedDate ? formatDate(selectedDate) : ""}
Time: ${selectedTime}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
${form.message ? `Message: ${form.message}` : ""}
Please confirm my appointment. Thank you!`;
    window.open(`https://wa.me/9480297100?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const canProceed = [
    !!consultType,
    !!(selectedDate && selectedTime),
    !!(form.name && form.phone && form.email),
    true
  ];

  if (submitted) {
    return (
      <div className="booking-page">
        <section className="booking-hero">
          <div className="container">
            <div className="booking-hero-label">Consultation</div>
            <h1>Book a <em>Consultation</em></h1>
          </div>
        </section>
        <section className="booking-success">
          <div className="container">
            <div className="booking-success-card" data-aos="fade-up">
              <FaCheckCircle className="booking-success-icon" />
              <h2>Booking Request Sent!</h2>
              <p>
                Your consultation request has been sent via WhatsApp. Our team will confirm
                your appointment within 2 business hours.
              </p>
              <div className="booking-success-detail">
                <span><strong>Type:</strong> {consultationTypes.find(c => c.id === consultType)?.label}</span>
                <span><strong>Date:</strong> {selectedDate ? formatDate(selectedDate) : ""}</span>
                <span><strong>Time:</strong> {selectedTime}</span>
                <span><strong>Name:</strong> {form.name}</span>
              </div>
              <a href="/" className="btn-primary-dark">Back to Home</a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="booking-page">

      {/* ── HERO ── */}
      <section className="booking-hero">
        <div className="container">
          <div className="booking-hero-label">Book a Meeting</div>
          <h1>Schedule a <em>Consultation</em></h1>
          <p>
            Choose a time that works for you. All consultations are free — we're here
            to listen, advise, and help you get started.
          </p>
        </div>
      </section>

      {/* ── STEPPER ── */}
      <section className="booking-stepper-wrap">
        <div className="container">
          <div className="booking-stepper">
            {steps.map((s, i) => (
              <div key={i} className={`bstep ${step === i ? "bstep--active" : ""} ${step > i ? "bstep--done" : ""}`}>
                <div className="bstep-circle">
                  {step > i ? <FaCheckCircle /> : <span>{i + 1}</span>}
                </div>
                <span className="bstep-label">{s}</span>
                {i < steps.length - 1 && <div className="bstep-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="booking-body">
        <div className="container">
          <div className="booking-card" data-aos="fade-up">

            {/* ── Step 0: Type ── */}
            {step === 0 && (
              <div className="bstep-content">
                <div className="bstep-title">What type of consultation do you need?</div>
                <div className="booking-type-grid">
                  {consultationTypes.map(c => (
                    <button
                      key={c.id}
                      className={`booking-type-btn ${consultType === c.id ? "booking-type-btn--active" : ""}`}
                      onClick={() => setConsultType(c.id)}
                    >
                      <span className="booking-type-icon">{c.icon}</span>
                      <span className="booking-type-label">{c.label}</span>
                      <span className="booking-type-dur">{c.duration}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── Step 1: Date & Time ── */}
            {step === 1 && (
              <div className="bstep-content">
                <div className="bstep-title">Pick a date and time</div>
                <div className="booking-date-label">Select Date</div>
                <div className="booking-dates-row">
                  {days.map((d, i) => (
                    <button
                      key={i}
                      className={`booking-date-btn ${selectedDate?.toDateString() === d.toDateString() ? "booking-date-btn--active" : ""}`}
                      onClick={() => { setSelectedDate(d); setSelectedTime(null); }}
                    >
                      <span className="bdate-day">{d.toLocaleDateString("en-IN", { weekday: "short" })}</span>
                      <span className="bdate-num">{d.getDate()}</span>
                      <span className="bdate-mon">{d.toLocaleDateString("en-IN", { month: "short" })}</span>
                    </button>
                  ))}
                </div>
                {selectedDate && (
                  <>
                    <div className="booking-date-label" style={{ marginTop: "32px" }}>Select Time</div>
                    <div className="booking-time-grid">
                      {timeSlots.map(t => (
                        <button
                          key={t}
                          className={`booking-time-btn ${selectedTime === t ? "booking-time-btn--active" : ""}`}
                          onClick={() => setSelectedTime(t)}
                        >
                          <FaClock style={{ fontSize: "11px", opacity: 0.5 }} />
                          {t}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ── Step 2: Details ── */}
            {step === 2 && (
              <div className="bstep-content">
                <div className="bstep-title">Your contact details</div>
                <div className="booking-form">
                  <div className="bform-group">
                    <label><FaUser /> Full Name *</label>
                    <input
                      type="text"
                      placeholder="Rajesh Kumar"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className={errors.name ? "bform-input bform-input--error" : "bform-input"}
                    />
                    {errors.name && <span className="bform-error">{errors.name}</span>}
                  </div>
                  <div className="bform-group">
                    <label><FaPhone /> Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className={errors.phone ? "bform-input bform-input--error" : "bform-input"}
                    />
                    {errors.phone && <span className="bform-error">{errors.phone}</span>}
                  </div>
                  <div className="bform-group">
                    <label><FaEnvelope /> Email Address *</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className={errors.email ? "bform-input bform-input--error" : "bform-input"}
                    />
                    {errors.email && <span className="bform-error">{errors.email}</span>}
                  </div>
                  <div className="bform-group bform-group--full">
                    <label>Brief Project Description (Optional)</label>
                    <textarea
                      rows={4}
                      placeholder="e.g. 2400 sqft residential house in Whitefield, need full design and construction..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="bform-input bform-textarea"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 3: Confirm ── */}
            {step === 3 && (
              <div className="bstep-content">
                <div className="bstep-title">Confirm your booking</div>
                <div className="booking-confirm-card">
                  <div className="bconfirm-row">
                    <span className="bconfirm-label">Consultation Type</span>
                    <span className="bconfirm-value">
                      {consultationTypes.find(c => c.id === consultType)?.label}
                    </span>
                  </div>
                  <div className="bconfirm-row">
                    <span className="bconfirm-label">Date</span>
                    <span className="bconfirm-value">
                      {selectedDate ? formatDate(selectedDate) : ""}
                    </span>
                  </div>
                  <div className="bconfirm-row">
                    <span className="bconfirm-label">Time</span>
                    <span className="bconfirm-value">{selectedTime}</span>
                  </div>
                  <div className="bconfirm-row">
                    <span className="bconfirm-label">Name</span>
                    <span className="bconfirm-value">{form.name}</span>
                  </div>
                  <div className="bconfirm-row">
                    <span className="bconfirm-label">Phone</span>
                    <span className="bconfirm-value">{form.phone}</span>
                  </div>
                  <div className="bconfirm-row">
                    <span className="bconfirm-label">Email</span>
                    <span className="bconfirm-value">{form.email}</span>
                  </div>
                  {form.message && (
                    <div className="bconfirm-row bconfirm-row--full">
                      <span className="bconfirm-label">Message</span>
                      <span className="bconfirm-value">{form.message}</span>
                    </div>
                  )}
                </div>
                <p className="booking-confirm-note">
                  Clicking <strong>Confirm via WhatsApp</strong> will open WhatsApp with your booking details pre-filled.
                  Our team will confirm within 2 business hours.
                </p>
              </div>
            )}

            {/* ── NAV ── */}
            <div className="booking-nav">
              {step > 0 && (
                <button className="booking-back-btn" onClick={() => setStep(s => s - 1)}>
                  ← Back
                </button>
              )}
              {step < 3 ? (
                <button
                  className="booking-next-btn"
                  disabled={!canProceed[step]}
                  onClick={() => setStep(s => s + 1)}
                >
                  Continue →
                </button>
              ) : (
                <button className="booking-submit-btn" onClick={handleSubmit}>
                  <FaWhatsapp /> Confirm via WhatsApp
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Booking;