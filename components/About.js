"use client";
import { useInView } from "./hooks";
import { SKILLS, SITE } from "@/lib/data";

export default function About() {
  const [ref, inView] = useInView();
  return (
    <section className="section about" id="about">
      <div className="center">
        <span className="pill">ABOUT ME</span>
        <h2 className="title">BUILDING MODERN<br />WEB EXPERIENCES<br /><em>THAT PERFORM</em></h2>
        <p className="lead">A full-stack web developer focused on front-end interfaces, back-end logic, and databases — building modern web applications with clean code and professional design.</p>
      </div>
      <div className="about-grid">
        <div className="about-media">
          <div className="about-photo">
            <img src="/assets/about.jpg" alt="Yaqoob Khan at his desk" />
            <div className="exp-badge"><b>6</b><span>CORE<br />SKILLS</span></div>
          </div>
          <div className="info-row">
            <div className="info-box">{SITE.email}</div>
            <div className="info-box">Pakistan</div>
          </div>
        </div>
        <div className={`about-text${inView ? " in" : ""}`} ref={ref}>
          <h3>Full-Stack Web Developer, Front-End, Back-End &amp; Databases</h3>
          <p>I am Yaqoob Khan, a Full-Stack Web Developer passionate about building modern websites and web applications.</p>
          <p>I work with front-end technologies to create responsive user interfaces and back-end technologies to develop functional web solutions. My focus is on clean code, usability, performance, and professional digital experiences.</p>
          <h4>Professional Skills</h4>
          <div className="skills">
            {SKILLS.map((s) => (
              <div className="skill" key={s.name}>
                <div>
                  <span>{s.name}</span>
                  {s.value != null && <span>{s.value}%</span>}
                </div>
                {s.value != null && <i><b style={{ "--w": `${s.value}%` }} /></i>}
              </div>
            ))}
          </div>
          <div className="about-btns">
            <a href={SITE.cv} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download CV</a>
            <a href="#contact" className="btn btn-primary">Hire Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
