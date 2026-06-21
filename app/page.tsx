import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
   <main className="min-h-screen bg-[#F7F3EE]">
      
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <Services />
      <Testimonials />
      <Contact />

    </main>
  );
}
