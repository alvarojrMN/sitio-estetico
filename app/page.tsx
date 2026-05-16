import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import About from "./components/sections/About";

export default function Home() {
  return (
   <main className="min-h-screen bg-[#F7F3EE]">
      
      <Navbar />
      <Hero />
      <Benefits />
      <About />

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold text-[#4D5B46]">
          Clínica Estética
        </h1>
      </section>

    </main>
  );
}
