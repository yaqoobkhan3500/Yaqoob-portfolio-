"use client";
import { useState } from "react";
import { FILTERS, WORKS, STATS, SITE } from "@/lib/data";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  return (
    <section className="section portfolio" id="portfolio">
      <div className="center">
        <p className="mini"><img src="/assets/logo.png" alt="" /> <b>Yaqoob <em>Khan</em></b> – Full-Stack Web Developer</p>
        <h2 className="title">FEATURED<br /><em>WEB PROJECTS</em></h2>
        <p className="lead">SmartBiz OS — a business-focused software project designed to support business workflows and digital operations.</p>
      </div>

      <div className="filters">
        {FILTERS.map((f) => (
          <button key={f.key} className={filter === f.key ? "active" : ""} onClick={() => setFilter(f.key)}>
            {f.label} <i>{f.count}</i>
          </button>
        ))}
      </div>

      <div className="work-grid">
        {WORKS.map((w) => (
          <figure key={w.title} className={`work${filter !== "all" && w.cat !== filter ? " hidden" : ""}`}>
            {Array.isArray(w.img) ? (
              <div className="work-media video">{w.img.map((s, i) => <img key={s} src={s} alt={i === 0 ? w.title : ""} />)}</div>
            ) : w.img ? (
              <div className="work-media"><img src={w.img} alt={w.title} /></div>
            ) : (
              <div className="work-media">
                <div className="amazon" style={{ width: "100%", height: "100%", aspectRatio: "auto" }}>{w.title}<small>BUSINESS SOFTWARE</small></div>
              </div>
            )}
            <figcaption>
              <h4>{w.title}</h4>
              <span>YAQOOB KHAN</span>
              {w.likes != null && (
                <div className="work-meta"><b>♥ {w.likes}</b><b>👁 {w.views}</b></div>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="center more-btns">
        <a href={SITE.behance} target="_blank" rel="noopener noreferrer" className="btn btn-outline">View More Work</a>
        <a href="#contact" className="btn btn-primary">Start a Project</a>
      </div>

      <div className="stats-row">
        {STATS.map((s) => (
          <div key={s.label}>
            <span className="si">{s.icon}</span>
            <strong>{s.val}</strong>
            <small>{s.label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

