import Navbar from "../components/layout/Navbar";
import Contact from "../components/sections/Contact";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EE]">

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-4">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagen */}
          <div className="relative">

            {/* Marco decorativo */}
            <div className="absolute -top-3 -left-3 w-full h-full border-4 border-[#D6BE97] rounded-[40px]" />

            <div className="relative overflow-hidden rounded-[40px] shadow-xl">
              <Image
                src="/nosotros.jpg"
                alt="Especialista en estética"
                width={800}
                height={800}
                className="w-full h-[280px] h-[450px] md:h-[600px] object-cover"
                priority
              />
            </div>

          </div>

          {/* Contenido */}
          <div className="text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D6BE97] leading-tight mb-8">
              Devuélvele a tu piel su firmeza y luminosidad.
              <br />
              ¡Rejuvenece sin cirugía y luce espectacular!
            </h1>

            <p className="text-2xl text-[#4D5B46] mb-6">
              Firmeza, suavidad y definición.
            </p>

            <h2 className="text-4xl font-bold text-[#4D5B46] mb-8">
              Marcela Niño Especialista
            </h2>

            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-10">
              En LRD Estética, nuestra misión es cuidar de ti mediante
              técnicas innovadoras y tratamientos personalizados.
              Nos enfocamos en brindar resultados reales que fortalezcan
              tu confianza y resalten tu belleza natural de forma segura
              y profesional.
            </p>

            <a
              href="https://wa.me/573124333517?text=Hola,%20quiero%20agendar%20una%20valoración"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D6BE97] hover:bg-[#c9ac7b] text-white px-10 py-5 rounded-full transition duration-300 shadow-lg"
            >
              <ShieldCheck size={24} />
              RESERVA TU CITA HOY
            </a>

          </div>

        </div>

      </section>

      {/* Historia */}
      <section className="bg-white py-24 px-4">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-4xl mx-auto mb-16">

            <p className="text-[#4D5B46] font-medium mb-4">
              Nuestra Historia
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-[#2E2E2E] mb-8">
              Comprometidos con tu bienestar y belleza natural
            </h2>

            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              Nuestra estetica nació con el propósito de ofrecer
              tratamientos estéticos modernos, seguros y personalizados.
              Creemos que cada paciente merece una atención exclusiva,
              enfocada en potenciar su belleza natural y mejorar su calidad
              de vida.
            </p>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              Desde nuestros inicios hemos trabajado para ofrecer tratamientos
              estéticos innovadores, seguros y personalizados, combinando
              experiencia profesional y tecnología avanzada.
            </p>

            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              Nuestro principal objetivo es brindar experiencias premium
              que permitan a cada paciente sentirse seguro, cómodo y satisfecho
              con los resultados obtenidos.
            </p>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#F7F3EE] p-10 rounded-[36px] shadow-sm">

              <h3 className="text-3xl font-bold text-[#4D5B46] mb-4">
                Misión
              </h3>

              <p className="text-[#6B6B6B] leading-relaxed">
                Ofrecer tratamientos estéticos innovadores y personalizados,
                priorizando siempre la seguridad y satisfacción de nuestros pacientes.
              </p>

            </div>

            <div className="bg-[#F7F3EE] p-10 rounded-[36px] shadow-sm">

              <h3 className="text-3xl font-bold text-[#4D5B46] mb-4">
                Visión
              </h3>

              <p className="text-[#6B6B6B] leading-relaxed">
                Consolidarnos como una clínica líder en estética integral,
                reconocida por la excelencia y la innovación constante.
              </p>

            </div>

            <div className="bg-[#F7F3EE] p-10 rounded-[36px] shadow-sm">

              <h3 className="text-3xl font-bold text-[#4D5B46] mb-4">
                Valores
              </h3>

              <p className="text-[#6B6B6B] leading-relaxed">
                Profesionalismo, ética, compromiso, innovación y atención
                humana son la base de cada uno de nuestros tratamientos.
              </p>

            </div>

          </div>

        </div>

      </section>
      <Contact />

    </main>
  );
}