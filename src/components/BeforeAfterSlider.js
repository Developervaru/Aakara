import React, { useRef, useState, useCallback } from "react";
import "./BeforeAfterSlider.css";

/*
  Usage:
  <BeforeAfterSlider
    before={beforeImageUrl}
    after={afterImageUrl}
    beforeLabel="Before"
    afterLabel="After"
  />
*/

function BeforeAfterSlider({ before, after, beforeLabel = "Before", afterLabel = "After" }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const getPosition = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = () => setDragging(true);
  const onMouseMove = (e) => { if (dragging) getPosition(e.clientX); };
  const onMouseUp = () => setDragging(false);

  const onTouchMove = (e) => {
    e.preventDefault();
    getPosition(e.touches[0].clientX);
  };

  return (
    <div
      className={`ba-slider ${dragging ? "ba-slider--dragging" : ""}`}
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Before (full) */}
      <div className="ba-layer ba-before">
        <img src={before} alt={beforeLabel} draggable={false} />
        <span className="ba-label ba-label--before">{beforeLabel}</span>
      </div>

      {/* After (clipped) */}
      <div
        className="ba-layer ba-after"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={after} alt={afterLabel} draggable={false} />
        <span className="ba-label ba-label--after">{afterLabel}</span>
      </div>

      {/* Divider */}
      <div
        className="ba-divider"
        style={{ left: `${position}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={() => setDragging(true)}
        onTouchMove={onTouchMove}
        onTouchEnd={() => setDragging(false)}
      >
        <div className="ba-handle">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M7 4L1 10L7 16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M13 4L19 10L13 16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default BeforeAfterSlider;