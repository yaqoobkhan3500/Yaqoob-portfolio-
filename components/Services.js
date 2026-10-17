"use client";
import { useInView } from "./hooks";
import { SERVICES } from "@/lib/data";

export default function Services() {
  const [ref, inView] = useInView(0.1);
  return (
    <section className={`section services rv${inView ? " in" : ""}`} id="services" ref={ref}>
      <div className="center">
        <span className="pill">SERVICES</span>
        <h2 className="title">PROFESSIONAL WEB<br /><em>DEVELOPMENT</em></h2>
        <p className="lead">Complete web development support for businesses and individuals through front-end, back-end, database, and responsive website solutions.</p>
      </div>
      <div className="svc-grid">
        {SERVICES.map((s) => (
          <article className="svc" key={s.title}>
            <div className="svc-img">
              {s.img ? (
                <img src={s.img} alt={s.title} />
              ) : (
                <div style={{ width: "100%", aspectRatio: "2/1", display: "grid", placeContent: "center", gap: ".7rem", textAlign: "center", borderRadius: "14px", background: "linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.015))", border: "1px solid rgba(255,255,255,.08)" }}>
                  <b style={{ fontSize: "2rem", lineHeight: 1, color: "var(--orange)" }}>{s.icon}</b>
                  <small style={{ fontSize: ".65rem", fontWeight: 800, letterSpacing: ".14em", color: "#cdbfd3" }}>{s.tag}</small>
                </div>
              )}
              <span className="svc-ico">{s.icon}</span>
            </div>
            <div className="svc-body">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <a href="#contact" className="btn btn-sm">START A PROJECT</a>
            </div>
          </article>
        ))}
      </div>
      <div className="cta-panel">
        <div className="cta-left">
          <span className="pill gold">CUSTOM SOLUTIONS AVAILABLE</span>
          <h2>HAVE A<br />DIGITAL<br />PROJECT<br />IN MIND?</h2>
          <p>Let's build a tailored web solution that matches your goals, timeline, and audience.</p>
        </div>
        <div className="cta-steps">
          <div><span>01</span>STRATEGY</div>
          <div><span>02</span>DEVELOPMENT</div>
          <div><span>03</span>DELIVERY</div>
        </div>
        <div className="cta-bar">
          <span>Ready for tailored web development support</span>
          <a href="#contact" className="btn btn-primary">Let's Work Together</a>
        </div>
      </div>
    </section>
  );
}
