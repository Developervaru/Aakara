import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CSS/CostCalculator.css";
import { FaCalculator, FaWhatsapp, FaInfoCircle } from "react-icons/fa";

const projectTypes = [
  { id: "residential", label: "Residential House", baseRate: 1800 },
  { id: "villa", label: "Luxury Villa", baseRate: 2800 },
  { id: "apartment", label: "Apartment Interior", baseRate: 1200 },
  { id: "commercial", label: "Commercial Office", baseRate: 2200 },
  { id: "renovation", label: "Renovation / Remodel", baseRate: 1000 },
];

const finishLevels = [
  { id: "standard", label: "Standard Finish", multiplier: 1.0 },
  { id: "premium", label: "Premium Finish", multiplier: 1.35 },
  { id: "luxury", label: "Luxury Finish", multiplier: 1.75 },
];

const additionalServices = [
  { id: "landscape", label: "Landscaping Design", flatRate: 150000 },
  { id: "3d", label: "3D Rendering & Walkthrough", flatRate: 50000 },
  { id: "structural", label: "Structural Engineering", flatRate: 80000 },
  { id: "pmc", label: "Construction Management (PMC)", percentOfCost: 0.04 },
  { id: "interior", label: "Interior Design & Execution", percentOfCost: 0.12 },
];

function formatINR(num) {
  if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
  if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
  return `₹${num.toLocaleString("en-IN")}`;
}

function CostCalculator() {
  const [projectType, setProjectType] = useState("residential");
  const [area, setArea] = useState(1200);
  const [floors, setFloors] = useState(1);
  const [finishLevel, setFinishLevel] = useState("standard");
  const [selectedServices, setSelectedServices] = useState([]);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleService = (id) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
    setShowResult(false);
  };

  const calculate = () => {
    const type = projectTypes.find(t => t.id === projectType);
    const finish = finishLevels.find(f => f.id === finishLevel);
    const totalArea = area * floors;
    const constructionCost = totalArea * type.baseRate * finish.multiplier;
    const designFee = constructionCost * 0.06;

    let addOns = 0;
    selectedServices.forEach(sId => {
      const svc = additionalServices.find(s => s.id === sId);
      if (svc.flatRate) addOns += svc.flatRate;
      if (svc.percentOfCost) addOns += constructionCost * svc.percentOfCost;
    });

    const totalMin = constructionCost + designFee + addOns;
    const totalMax = totalMin * 1.15;

    setResult({
      constructionCost,
      designFee,
      addOns,
      totalMin,
      totalMax,
      ratePerSqft: Math.round(type.baseRate * finish.multiplier),
      totalArea
    });
    setShowResult(true);
  };

  const waMessage = result
    ? `Hi Harmya Aakara! I used your cost calculator. Project: ${projectTypes.find(t => t.id === projectType)?.label}, Area: ${area} sqft × ${floors} floor(s), Finish: ${finishLevels.find(f => f.id === finishLevel)?.label}. Estimated range: ${formatINR(result.totalMin)} – ${formatINR(result.totalMax)}. I'd like a detailed quote.`
    : "Hi Harmya Aakara! I'd like to discuss my project and get a cost estimate.";

  return (
    <div className="calc-page">

      {/* ── HERO ── */}
      <section className="calc-hero">
        <div className="container">
          <div className="calc-hero-label">Estimate Tool</div>
          <h1>Project Cost <em>Calculator</em></h1>
          <p>
            Get a preliminary estimate for your construction or design project.
            Adjust the parameters and see an instant range — then talk to us for a detailed quote.
          </p>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <div className="calc-disclaimer">
        <div className="container">
          <FaInfoCircle />
          <span>
            This calculator provides an approximate estimate based on average Bengaluru market rates.
            Actual costs may vary based on site conditions, material choices, and detailed design.
            Contact us for a precise quotation.
          </span>
        </div>
      </div>

      {/* ── CALCULATOR BODY ── */}
      <section className="calc-body">
        <div className="container">
          <div className="row g-5">

            {/* ─ LEFT: Inputs ─ */}
            <div className="col-lg-7" data-aos="fade-right">
              <div className="calc-form">

                {/* Project Type */}
                <div className="calc-section">
                  <div className="calc-section-label">01 — Project Type</div>
                  <div className="calc-options-grid">
                    {projectTypes.map(t => (
                      <button
                        key={t.id}
                        className={`calc-option-btn ${projectType === t.id ? "calc-option-btn--active" : ""}`}
                        onClick={() => { setProjectType(t.id); setShowResult(false); }}
                      >
                        {t.label}
                        <span>₹{t.baseRate}/sqft</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Area */}
                <div className="calc-section">
                  <div className="calc-section-label">
                    02 — Built-up Area: <strong>{area.toLocaleString("en-IN")} sqft</strong>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="10000"
                    step="50"
                    value={area}
                    onChange={e => { setArea(Number(e.target.value)); setShowResult(false); }}
                    className="calc-range"
                  />
                  <div className="calc-range-labels">
                    <span>300 sqft</span>
                    <span>10,000 sqft</span>
                  </div>
                  <div className="calc-range-chips">
                    {[600, 1200, 2000, 3000, 5000].map(v => (
                      <button
                        key={v}
                        className={`calc-chip ${area === v ? "calc-chip--active" : ""}`}
                        onClick={() => { setArea(v); setShowResult(false); }}
                      >
                        {v.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Floors */}
                <div className="calc-section">
                  <div className="calc-section-label">03 — Number of Floors</div>
                  <div className="calc-floor-row">
                    {[1, 2, 3, 4].map(f => (
                      <button
                        key={f}
                        className={`calc-floor-btn ${floors === f ? "calc-floor-btn--active" : ""}`}
                        onClick={() => { setFloors(f); setShowResult(false); }}
                      >
                        {f}G+{f - 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Finish Level */}
                <div className="calc-section">
                  <div className="calc-section-label">04 — Finish Level</div>
                  <div className="calc-finish-row">
                    {finishLevels.map(f => (
                      <button
                        key={f.id}
                        className={`calc-finish-btn ${finishLevel === f.id ? "calc-finish-btn--active" : ""}`}
                        onClick={() => { setFinishLevel(f.id); setShowResult(false); }}
                      >
                        <span className="calc-finish-label">{f.label}</span>
                        <span className="calc-finish-mult">
                          {f.id === "standard" ? "Base Rate" : `×${f.multiplier}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Services */}
                <div className="calc-section">
                  <div className="calc-section-label">05 — Additional Services (Optional)</div>
                  <div className="calc-services-list">
                    {additionalServices.map(s => (
                      <label key={s.id} className="calc-service-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(s.id)}
                          onChange={() => toggleService(s.id)}
                        />
                        <span className="calc-service-name">{s.label}</span>
                        <span className="calc-service-price">
                          {s.flatRate ? `+${formatINR(s.flatRate)}` : `+${(s.percentOfCost * 100).toFixed(0)}% of cost`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="calc-submit-btn" onClick={calculate}>
                  <FaCalculator />
                  Calculate Estimate
                </button>

              </div>
            </div>

            {/* ─ RIGHT: Result ─ */}
            <div className="col-lg-5" data-aos="fade-left">
              <div className={`calc-result-panel ${showResult ? "calc-result-panel--visible" : ""}`}>
                {!showResult ? (
                  <div className="calc-result-empty">
                    <FaCalculator className="calc-result-empty-icon" />
                    <p>Fill in your project details on the left and click <strong>Calculate Estimate</strong> to see your cost breakdown.</p>
                  </div>
                ) : (
                  <>
                    <div className="calc-result-header">
                      <div className="calc-result-label">Estimated Range</div>
                      <div className="calc-result-range">
                        <span className="calc-result-min">{formatINR(result.totalMin)}</span>
                        <span className="calc-result-sep">–</span>
                        <span className="calc-result-max">{formatINR(result.totalMax)}</span>
                      </div>
                      <div className="calc-result-note">
                        {result.totalArea.toLocaleString()} sqft · ₹{result.ratePerSqft}/sqft (base)
                      </div>
                    </div>

                    <div className="calc-breakdown">
                      <div className="calc-breakdown-title">Cost Breakdown</div>
                      <div className="calc-breakdown-item">
                        <span>Construction Cost</span>
                        <span>{formatINR(result.constructionCost)}</span>
                      </div>
                      <div className="calc-breakdown-item">
                        <span>Design Fee (~6%)</span>
                        <span>{formatINR(result.designFee)}</span>
                      </div>
                      {result.addOns > 0 && (
                        <div className="calc-breakdown-item">
                          <span>Additional Services</span>
                          <span>{formatINR(result.addOns)}</span>
                        </div>
                      )}
                      <div className="calc-breakdown-item calc-breakdown-total">
                        <span>Estimated Total</span>
                        <span>{formatINR(result.totalMin)} – {formatINR(result.totalMax)}</span>
                      </div>
                    </div>

                    <div className="calc-result-disclaimer">
                      * This is a preliminary estimate. Final costs depend on detailed design, material
                      selections, and site conditions. Prices are based on Bengaluru market rates (2024–25).
                    </div>

                    <a
                      href={`https://wa.me/9480297100?text=${encodeURIComponent(waMessage)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="calc-wa-btn"
                    >
                      <FaWhatsapp /> Share & Get Detailed Quote
                    </a>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default CostCalculator;