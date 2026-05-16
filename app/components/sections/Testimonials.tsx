import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Cliente frecuente",
    image: "/per1.png",
    review:
      "La atención fue increíble desde el primer momento. Los resultados superaron mis expectativas y el ambiente es espectacular.",
  },

  {
    name: "Camila Torres",
    role: "Tratamiento facial",
    image: "/per2.png",
    review:
      "Profesionales muy capacitados y una experiencia totalmente premium. Me sentí cómoda y segura en todo momento.",
  },

  {
    name: "Valentina Ruiz",
    role: "Skin care avanzado",
    image: "/per3.png",
    review:
      "Los procedimientos son modernos y personalizados. Definitivamente volveré por más tratamientos.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-4 py-28">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-[#4D5B46] font-medium mb-4">
            Testimonios
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E2E2E] leading-tight mb-6">
            Lo que dicen nuestras clientes
          </h2>

          <p className="text-[#6B6B6B] text-lg leading-relaxed">
            La satisfacción de nuestras pacientes es nuestra
            mayor prioridad y el reflejo de nuestro compromiso.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7F3EE] border border-[#E8DED1] rounded-[36px] p-8 hover:-translate-y-2 transition duration-500 shadow-sm hover:shadow-xl"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-6">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#D6BE97] text-[#D6BE97]"
                  />
                ))}

              </div>

              {/* Review */}
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8">
                “{item.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">

                <div className="relative w-16 h-16 overflow-hidden rounded-full">

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div>

                  <h4 className="text-xl font-semibold text-[#2E2E2E]">
                    {item.name}
                  </h4>

                  <p className="text-[#6B6B6B]">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}