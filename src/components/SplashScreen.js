import React, { useEffect, useState } from "react";
import "../CSS/SplashScreen.css";

function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${fadeOut ? "splash-fadeout" : ""}`}>
      <div className="splash-inner">
        <div className="splash-logo-ring">
          <svg viewBox="0 0 80 80" className="splash-ring-svg">
            <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />
            <circle
              cx="40" cy="40" r="36"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="1"
              strokeDasharray={`${2 * Math.PI * 36}`}
              strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
              strokeLinecap="round"
              transform="rotate(-90 40 40)"
              style={{ transition: "stroke-dashoffset 0.05s linear" }}
            />
          </svg>
          <span className="splash-monogram">HA</span>
        </div>

        <div className="splash-brand">
          <span className="splash-brand-main">Harmya Aakara</span>
          <span className="splash-brand-sub">Architects &amp; Engineers</span>
        </div>

        <div className="splash-progress-wrap">
          <div className="splash-progress-bar">
            <div className="splash-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="splash-progress-num">{progress}%</span>
        </div>

        <div className="splash-tagline">Designing Spaces, Defining Lives.</div>
      </div>

      <div className="splash-corner splash-corner-tl" />
      <div className="splash-corner splash-corner-tr" />
      <div className="splash-corner splash-corner-bl" />
      <div className="splash-corner splash-corner-br" />
    </div>
  );
}

export default SplashScreen;