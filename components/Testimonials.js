"use client";
import { useCallback, useEffect, useState } from "react";
import { TESTIMONIALS, TRUSTED } from "@/lib/data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(false);
  const [tick, setTick] = useState(0); // resets the auto-rotate timer

  const go = useCallback((i) => {
    setFade(true);
    setTimeout(() => {
      setIdx((i + TESTIMONIALS.length) % TESTIMONIALS.length);
      setFade(false);
    }, 200);
    setTick((t) => t + 1);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % TESTIMONIALS.length);
        setFade(false);
      }, 200);
    }, 6000);
    return () => clearInterval(t);
  }, [tick]);

  const t = TESTIMONIALS[idx];
  return (
    <section className="section testi" id="testimonials">
      <div className="center">
        <span className="pill">MY APPROACH</span>
        <h2 className="title">HOW I APPROACH<br /><em>EVERY PROJECT</em></h2>
        <p className="lead">A clear, reliable process focused on clean code, responsive design, and transparent communication.</p>
      </div>

      <div className="quote-card" style={{ marginTop: "2.5rem" }}>
        <button className="arrow prev" onClick={() => go(idx - 1)} aria-label="Previous">‹</button>
        <div>
          <p className="q-text" style={{ opacity: fade ? 0 : 1 }}>"{t.text}"</p>
          <div className="q-who">
            <span className="avatar" />
            <div><b className="q-name">{t.name}</b><small className="q-co">{t.company}</small></div>
          </div>
        </div>
        <button className="arrow next" onClick={() => go(idx + 1)} aria-label="Next">›</button>
        <div className="dots">
          {TESTIMONIALS.map((_, i) => (
            <i key={i} className={i === idx ? "on" : ""} onClick={() => go(i)} />
          ))}
        </div>
      </div>

      <div className="trusted">
        <h3>Built With</h3>
        <div className="trusted-grid">
          {TRUSTED.map((x) => (
            <div key={x.name}><small>{x.name}</small><b>{x.tag}</b><span>{x.note}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}
