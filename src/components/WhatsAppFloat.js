import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "../CSS/WhatsAppFloat.css";

function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [bubble, setBubble] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const bubbleTimer = setTimeout(() => setBubble(false), 6000);
    return () => { clearTimeout(timer); clearTimeout(bubbleTimer); };
  }, []);

  return (
    <div className={`wa-float-wrap ${visible ? "wa-visible" : ""}`}>
      {bubble && (
        <div className="wa-bubble">
          <button className="wa-bubble-close" onClick={() => setBubble(false)}>
            <FaTimes />
          </button>
          <p>👋 Hello! Ready to build your dream space?</p>
          <a
            href="https://wa.me/9480297100?text=Hi%20Harmya%20Aakara%2C%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="wa-bubble-btn"
          >
            Chat Now
          </a>
        </div>
      )}
      <a
        href="https://wa.me/9480297100?text=Hi%20Harmya%20Aakara%2C%20I%20am%20interested%20in%20your%20services."
        target="_blank"
        rel="noreferrer"
        className="wa-float-btn"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span className="wa-pulse" />
      </a>
    </div>
  );
}

export default WhatsAppFloat;