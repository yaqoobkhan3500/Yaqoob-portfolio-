"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setHide(true);
      document.body.style.overflow = "";
    }, 1800);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className={`loader${hide ? " hide" : ""}`}>
      <p className="loader-url">YAQOOB KHAN PORTFOLIO</p>
      <div className="loader-logo">
        <span className="ring r1" />
        <span className="ring r2" />
        <img src="/assets/logo.png" alt="Yaqoob Khan logo" />
      </div>
      <h1 className="loader-title">Welcome to Yaqoob Khan's Portfolio</h1>
      <p className="loader-sub">BUILDING YOUR DIGITAL EXPERIENCE</p>
    </div>
  );
}
