"use client";
import { useEffect, useState } from "react";
import { ROLES, SITE } from "@/lib/data";

function useTyped(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let wi = 0, ci = 0, del = false, timer;
    const tick = () => {
      const w = words[wi];
      setText(w.slice(0, ci));
      let delay = del ? 55 : 110;
      if (!del && ci < w.length) ci++;
      else if (!del) { del = true; delay = 1400; }
      else if (ci > 0) ci--;
      else { del = false; wi = (wi + 1) % words.length; delay = 300; }
      timer = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(timer);
  }, [words]);
  return text;
}

export default function Hero() {
  const typed = useTyped(ROLES);
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="hi">Hi, I'm</p>
        <h2 className="hero-name">Yaqoob<br /><span>Khan</span></h2>
        <p className="typed"><span>{typed}</span><i className="caret" /></p>
        <p className="hero-desc">
          I build modern, responsive, and user-friendly web applications with clean code and professional design.
        </p>
        <div className="socials">
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
          <a href={SITE.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance">Bē</a>
        </div>
        <div className="hero-btns">
          <a href="#portfolio" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Start a Project</a>
        </div>
        <div className="hero-stats">
          <div><strong>FE</strong><small>Front-End<br />Development</small></div>
          <div><strong>BE</strong><small>Back-End<br />Development</small></div>
          <div><strong>DB</strong><small>Database<br />Design</small></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-card"><img src="/assets/yk-01.png" alt="Yaqoob Khan portrait" /></div>
        <span className="badge b1">Full-Stack Developer</span>
        <span className="badge b2">Responsive Design</span>
        <span className="badge b3">Clean Code</span>
        <span className="badge b4">Modern Web Apps</span>
      </div>
    </section>
  );
}
