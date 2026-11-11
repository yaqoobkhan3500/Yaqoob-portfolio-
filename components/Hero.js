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
          <a href={SITE.fiverr} target="_blank" rel="noopener noreferrer" aria-label="Fiverr">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" /></svg>
          </a>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
          </a>
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
        <div className="hero-image-wrap">
          <div className="hero-card"><img src="/assets/yk-01.png" alt="Yaqoob Khan portrait" /></div>
        </div>
        <span className="badge b1">Full-Stack Developer</span>
        <span className="badge b2">Responsive Design</span>
        <span className="badge b3">Clean Code</span>
        <span className="badge b4">Modern Web Apps</span>
      </div>
    </section>
  );
}
