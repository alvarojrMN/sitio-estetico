import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section 
      id="nosotros"

    className="bg-white px-4 py-28 scroll-mt-32">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE SIDE */}
        <div className="relative">

          {/* Decorative background */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-[#D6BE97] rounded-[40px]" />

          {/* Main image */}
          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

            <Image
              src="/senora.jpg"
              alt="Sobre nosotros"
              width={700}
              height={850}
              className="w-full h-[450px] md:h-[600px] lg:h-[700px] object-cover"/>

          </div>

          {/* Floating card */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:-right-6 md:left-auto bg-white shadow-xl rounded-3xl p-6 max-w-xs">

            <h4 className="text-4xl font-bold text-[#4D5B46] mb-2">
              +5K
            </h4>

            <p className="text-[#6B6B6B] leading-relaxed">
              Pacientes satisfechos con resultados naturales
              y atención premium.
            </p>

          </div>

        </div>

        {/* CONTENT SIDE */}
        <div>

          {/* Small title */}
          <p className="text-[#4D5B46] font-medium mb-4">
            Sobre Nosotros
          </p>

          {/* Main title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E2E2E] leading-tight mb-8">
            Cuidamos tu belleza con tecnología y experiencia
          </h2>

          {/* Paragraph */}
          <p className="text-[#6B6B6B] text-lg leading-relaxed mb-10">
            Nuestra clínica estética combina innovación,
            tratamientos personalizados y un equipo experto
            para brindarte resultados naturales y una experiencia
            de lujo desde el primer momento.
          </p>

          {/* Features */}
          <div className="space-y-5 mb-12">

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 rounded-full bg-[#4D5B46] flex items-center justify-center shrink-0">
                <Check size={20} className="text-white" />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#2E2E2E] mb-1">
                  Tratamientos personalizados
                </h4>

                <p className="text-[#6B6B6B]">
                  Soluciones adaptadas a las necesidades de cada paciente.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 rounded-full bg-[#4D5B46] flex items-center justify-center shrink-0">
                <Check size={20} className="text-white" />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#2E2E2E] mb-1">
                  Equipos de última generación
                </h4>

                <p className="text-[#6B6B6B]">
                  Tecnología moderna enfocada en seguridad y resultados.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 rounded-full bg-[#4D5B46] flex items-center justify-center shrink-0">
                <Check size={20} className="text-white" />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#2E2E2E] mb-1">
                  Atención premium y exclusiva
                </h4>

                <p className="text-[#6B6B6B]">
                  Creamos experiencias cómodas y elegantes para cada visita.
                </p>
              </div>

            </div>

          </div>

          {/* Button */}
          <Link
            href="/nosotros"
            className="inline-block bg-[#4D5B46] hover:bg-[#3E4A38] text-white px-8 py-4 rounded-full transition duration-300 text-lg"
          >
            Conocer más
          </Link>

        </div>

      </div>

    </section>
  );
}