"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    let x = -50, y = -50, cx = -50, cy = -50, raf;
    const move = (e) => { x = e.clientX; y = e.clientY; };
    const over = (e) => { if (ref.current) ref.current.style.background = e.target.closest("a,button,input,textarea") ? "rgba(244,122,32,.25)" : ""; };
    const loop = () => {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
      if (ref.current) ref.current.style.transform = `translate(${cx - 16}px,${cy - 16}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    loop();
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); cancelAnimationFrame(raf); };
  }, []);
  return <div className="cursor" ref={ref} />;
}
