"use client";
import { SITE } from "@/lib/data";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const msg =
      `Hello Yaqoob, my name is ${f.get("name")}.\n` +
      `Email: ${f.get("email")}\n` +
      `Phone: ${f.get("phone") || "-"}\n` +
      `Subject: ${f.get("subject") || "Web development project inquiry"}\n\n` +
      `${f.get("message")}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    e.target.reset();
  };

  return (
    <section className="section contact" id="contact">
      <div className="center">
        <span className="pill">GET IN TOUCH</span>
        <h2 className="title">LET'S WORK<br /><em>TOGETHER</em></h2>
        <p className="lead">Available for full-stack web development, front-end, back-end, and database projects. Contact Yaqoob Khan by form, email, or WhatsApp.</p>
      </div>
      <div className="contact-grid">
        <form className="form" onSubmit={onSubmit}>
          <div className="row2">
            <label>NAME<input name="name" placeholder="John Doe" required /></label>
            <label>EMAIL<input name="email" type="email" placeholder="john@example.com" required /></label>
          </div>
          <div className="row2">
            <label>WHATSAPP NUMBER<input name="phone" placeholder="+92 349 1994794" /></label>
            <label>SUBJECT<input name="subject" placeholder="Web development project inquiry" /></label>
          </div>
          <label>MESSAGE
            <textarea name="message" rows={5} placeholder="Tell me about your website or web application project." required />
          </label>
          <button className="btn btn-primary send" type="submit">Send Inquiry</button>
        </form>

        <div className="cards">
          <div className="ccard hl"><h5>EMAIL</h5><p>{SITE.email}</p><a href={`mailto:${SITE.email}`}>SEND EMAIL</a></div>
          <div className="ccard"><h5>PHONE (WHATSAPP)</h5><p>{SITE.phone}</p><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">MESSAGE ON WHATSAPP</a></div>
          <div className="ccard"><h5>LOCATION</h5><p>{SITE.location}</p><a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">VIEW ON MAP</a></div>
          <div className="ccard hl">
            <h5>FOLLOW ME</h5>
            <p>Professional updates, recent work, and project highlights.</p>
            <div className="follow">
              <div><b>LinkedIn</b><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">VIEW PROFILE</a></div>
              <div><b>Behance</b><a href={SITE.behance} target="_blank" rel="noopener noreferrer">VIEW PROFILE</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
