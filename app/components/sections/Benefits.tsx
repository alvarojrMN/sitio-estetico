import {
  MapPin,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Ubicación Premium",
    description:
      "Espacios modernos y cómodos diseñados para tu bienestar.",
  },

  {
    icon: Sparkles,
    title: "Tecnología Avanzada",
    description:
      "Tratamientos modernos con equipos de última generación.",
  },

  {
    icon: HeartHandshake,
    title: "Atención Personalizada",
    description:
      "Cada paciente recibe una experiencia única y exclusiva.",
  },

  {
    icon: ShieldCheck,
    title: "Profesionales Expertos",
    description:
      "Especialistas altamente capacitados en estética facial y corporal.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#F7F3EE] px-4 py-24">

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-[#4D5B46] font-medium mb-4">
            ¿Por qué elegirnos?
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#2E2E2E] mb-6">
            Experiencia premium en estética y bienestar
          </h2>

          <p className="text-[#6B6B6B] text-lg leading-relaxed">
            Creamos experiencias exclusivas enfocadas en
            resultados naturales, comodidad y atención profesional.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-[#E8DED1] rounded-[32px] p-8 hover:-translate-y-2 transition duration-500 shadow-sm hover:shadow-2xl"
              >

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#4D5B46]/10 flex items-center justify-center mb-6 group-hover:bg-[#4D5B46] transition duration-500">

                  <Icon
                    size={30}
                    className="text-[#4D5B46] group-hover:text-white transition duration-500"
                  />

                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#2E2E2E] mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B6B6B] leading-relaxed">
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}