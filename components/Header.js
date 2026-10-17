"use client";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";

const SECTION_TO_NAV = {
  home: "home", about: "about", services: "services",
  portfolio: "portfolio", certificates: "portfolio", testimonials: "portfolio", contact: "contact",
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let cur = "home";
      document.querySelectorAll("main section[id]").forEach((s) => {
        if (s.offsetTop <= y) cur = SECTION_TO_NAV[s.id] || s.id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header">
      <a href="#home" className="brand">
        <img src="/assets/logo.png" alt="Yaqoob Khan" />
        <span className="brand-text">
          <b>Yaqoob <em>Khan</em></b>
          <small><i />FULL-STACK DEVELOPER<i /></small>
        </span>
      </a>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <nav className={`nav${open ? " open" : ""}`} onClick={() => setOpen(false)}>
        {NAV.map((n) => (
          <a key={n.id} href={n.href} className={active === n.id ? "active" : ""}>{n.label}</a>
        ))}
      </nav>
      <a href="#contact" className="btn btn-primary header-cta">Start a Project</a>
    </header>
  );
}

