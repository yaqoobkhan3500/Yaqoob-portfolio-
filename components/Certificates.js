"use client";
import { useRef } from "react";
import { CERTS } from "@/lib/data";

export default function Certificates() {
  const ref = useRef(null);
  const step = () => (ref.current.querySelector(".cert")?.offsetWidth || 300) + 22;
  const next = () => {
    const el = ref.current;
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) el.scrollTo({ left: 0 });
    else el.scrollBy({ left: step() });
  };
  const prev = () => {
    const el = ref.current;
    if (el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth });
    else el.scrollBy({ left: -step() });
  };

  return (
    <section className="section certs" id="certificates">
      <div className="certs-top">
        <div className="center left-mobile">
          <span className="pill">TECH STACK</span>
          <h2 className="title">CORE WEB<br /><em>TECHNOLOGIES</em></h2>
          <p className="lead">The front-end, back-end, and database technologies I use to build modern, responsive, and reliable web applications.</p>
        </div>
        <aside className="profile-card">
          <small>PROFESSIONAL PROFILE</small>
          <h3>Core technologies for building complete web applications.</h3>
          <p>I work with front-end, server-side, and database technologies to deliver complete web solutions — with a focus on clean code, responsive interfaces, and reliable data handling.</p>
          <div className="mini-stats">
            <div><b>6</b><span>Core technologies</span></div>
            <div><b>Full-Stack</b><span>Front-end to database</span></div>
            <div><b>Responsive</b><span>Mobile-first layouts</span></div>
          </div>
        </aside>
      </div>

      <div className="slider">
        <p className="slider-label">CORE TECHNOLOGIES FOR FRONT-END, BACK-END, AND DATABASE DEVELOPMENT</p>
        <button className="arrow prev" onClick={prev} aria-label="Previous">‹</button>
        <div className="slides" ref={ref}>
          {CERTS.map((c) => (
            <article className="cert" key={c.title}>
              <div className={`cert-img${c.img ? "" : " cert-ph"}`}>
                {c.img ? <img src={c.img} alt={c.title} /> : <>{c.ph}<br /><small>{c.phSub}</small></>}
              </div>
              <small className="tag">{c.tag || "CERTIFIED CREDENTIAL"}</small>
              <h4>{c.title}</h4>
              <p>{c.org}</p>
              {c.date && <time>{c.date}</time>}
            </article>
          ))}
        </div>
        <button className="arrow next" onClick={next} aria-label="Next">›</button>
      </div>
    </section>
  );
}
