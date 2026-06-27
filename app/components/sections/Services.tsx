import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Limpieza Facial Premium",
    description:
      "Tratamiento profundo para revitalizar y rejuvenecer tu piel.",
    image: "/limpieza.jpg",
  },

  {
    title: "Skin Care Avanzado",
    description:
      "Protocolos modernos enfocados en hidratación y luminosidad.",
    image: "/skin.jpg",
  },

  {
    title: "Tratamientos Corporales",
    description:
      "Procedimientos diseñados para moldear y cuidar tu cuerpo.",
    image: "/tratamiento.png",
  },
];

export default function Services() {
  return (
    <section 
    id="procedimientos"
    className="bg-[#F7F3EE] px-4 py-28 scroll-mt-32">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

          <div className="max-w-3xl">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E2E2E] leading-tight mb-6">
              Tratamientos estéticos diseñados para ti
            </h2>

            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              Ofrecemos procedimientos modernos enfocados
              en resultados naturales, bienestar y belleza integral.
            </p>

          </div>

          {/* Button */}
         <Link
            href="/servicios"
            className="bg-[#4D5B46] hover:bg-[#3E4A38] text-white px-8 py-4 rounded-full transition duration-300 w-fit"
          >
            Ver todos los servicios
          </Link>

        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {services.map((service, index) => (
              <a
                key={index}
                href={`https://wa.me/573124333517?text=${encodeURIComponent(
                  `Hola, quiero información sobre ${service.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-[36px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 cursor-pointer block"
              >            

              {/* Image */}
              <div className="overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={600}
                  className="w-full h-[280px] md:h-[360px] lg:h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-8">

                <div className="flex items-start justify-between gap-4 mb-6">

                  <h3 className="text-2xl font-semibold text-[#2E2E2E] leading-snug">
                    {service.title}
                  </h3>

                  <div className="w-12 h-12 rounded-full bg-[#4D5B46] flex items-center justify-center shrink-0 group-hover:rotate-45 transition duration-500">

                    <ArrowUpRight
                      size={22}
                      className="text-white"
                    />

                  </div>

                </div>

                <p className="text-[#6B6B6B] leading-relaxed">
                  {service.description}
                </p>

              </div>

            </a>
          ))}

        </div>

      </div>

    </section>
  );
}