import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Certificates from "@/components/Certificates";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Portfolio />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
