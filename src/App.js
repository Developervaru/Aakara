// ─────────────────────────────────────────────────────────────
//  App.js  —  Updated with all new routes & global components
// ─────────────────────────────────────────────────────────────
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ── Layout ──
import Navbar          from "./components/Navbar";
import Footer          from "./components/Footer";
import ScrollToTop     from "./components/ScrollToTop";

// ── Global Components (NEW) ──
import SplashScreen    from "./components/SplashScreen";       // NEW
import WhatsAppFloat   from "./components/WhatsAppFloat";      // NEW

// ── Pages (existing) ──
import Home            from "./pages/Home";
import About           from "./pages/About";
import Services        from "./pages/Services";

// ── Pages (updated) ──
import Projects        from "./pages/Projects";        // UPDATED (lightbox)
import Contact         from "./pages/Contact";         // UPDATED (lead form)

// ── Pages (new) ──
import Testimonials    from "./pages/Testimonials";            // NEW
import FAQ             from "./pages/FAQ";                     // NEW
import CostCalculator  from "./pages/CostCalculator";          // NEW
import Booking         from "./pages/Booking";                 // NEW
import Blog            from "./pages/Blog";                    // NEW

// ── CSS ──
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  // Show splash on first load only
  // Remove the SplashScreen block below if you don't want a splash screen
  if (!splashDone) {
    return <SplashScreen onComplete={() => setSplashDone(true)} />;
  }

  return (
    <Router>
      <ScrollToTop />

      {/* Global WhatsApp Float — appears on every page */}
      <WhatsAppFloat />

      <Navbar />

      <Routes>
        {/* ── Existing ── */}
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/services"    element={<Services />} />
        <Route path="/projects"    element={<Projects />} />
        <Route path="/contact"     element={<Contact />} />

        {/* ── New Pages ── */}
        <Route path="/testimonials"  element={<Testimonials />} />
        <Route path="/faq"           element={<FAQ />} />
        <Route path="/calculator"    element={<CostCalculator />} />
        <Route path="/book"          element={<Booking />} />
        <Route path="/blog"          element={<Blog />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;