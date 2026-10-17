import { SITE, NAV } from "@/lib/data";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="foot-grid">
          <div>
            <small className="orange">FULL-STACK PORTFOLIO</small>
            <h4>Yaqoob Khan</h4>
            <p>Full-stack web development — responsive front ends, reliable back ends, and modern web applications built with clean code.</p>
            <div className="foot-btns">
              <a href="#contact" className="btn btn-primary btn-sm">START A PROJECT</a>
              <a href="#portfolio" className="btn btn-ghost btn-sm">VIEW WORK</a>
            </div>
            <div className="socials sm">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">in</a>
              <a href={SITE.behance} target="_blank" rel="noopener noreferrer">Bē</a>
            </div>
          </div>
          <div>
            <h6>NAVIGATION</h6>
            {NAV.map((n) => <a key={n.id} href={n.href}>{n.label}</a>)}
          </div>
          <div>
            <h6>CONTACT</h6>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={`https://wa.me/${SITE.whatsapp}`}>{SITE.phone}</a>
            <span>{SITE.location}</span>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} Yaqoob Khan. All rights reserved.</p>
      </footer>

      <a className="wa" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" width="26" height="26" fill="#25d366">
          <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-1.9c1.8 1 3.7 1.5 5.6 1.5 7 0 12.6-5.6 12.6-12.6S23 3 16 3zm0 22.9c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.4 1.1 1.2-4.3-.3-.4a10.2 10.2 0 0 1-1.6-5.5C5.4 9.8 10.1 5.2 16 5.2s10.6 4.6 10.6 10.3S21.8 25.9 16 25.9zm5.800-7.600c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.700 8.700 0 0 1-4.300-3.700c-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400s-1 1-1 2.500 1.100 2.900 1.200 3.100 2.100 3.300 5.2 4.6c1.900.8 2.700.9 3.600.8.600-.1 1.900-.8 2.100-1.500s.3-1.400.2-1.500-.3-.2-.6-.4z" />
        </svg>
      </a>
    </>
  );
}
