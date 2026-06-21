import Navbar from "../components/layout/Navbar";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const corporalServices = [
  {
    title: "Reducción de Estrías",
    description:
      "Tratamientos especializados para mejorar la apariencia de las estrías, estimulando la regeneración natural de la piel.",
    image: "/estrias.webp",
  },
  {
    title: "Moldeamiento Corporal sin Cirugía",
    description:
      "Procedimientos no invasivos diseñados para definir la figura y mejorar la apariencia corporal.",
    image: "/moldeo.jpg",
  },
  {
    title: "Disminución de Celulitis",
    description:
      "Tratamientos modernos orientados a reducir la apariencia de la celulitis y mejorar la textura de la piel.",
    image: "/celulitis.jpg",
  },
];

const facialServices = [
  {
    title: "Limpieza Facial Premium",
    description:
      "Limpieza profunda enfocada en revitalizar, hidratar y rejuvenecer la piel.",
    image: "/limpieza.jpg",
  },
  {
    title: "Skin Care Avanzado",
    description:
      "Protocolos faciales personalizados para mantener una piel saludable y luminosa.",
    image: "/Skin.jpg",
  },
  {
    title: "Reducción de Líneas de Expresión",
    description:
      "Procedimientos enfocados en suavizar líneas de expresión y mantener un aspecto natural.",
    image: "/lineas.jpg",
  },
  {
    title: "Rellenos Faciales con Ácido Hialurónico",
    description:
      "Tratamientos diseñados para restaurar volumen, armonizar y rejuvenecer el rostro.",
    image: "/relleno.jpg",
  },
];

function ServiceCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-[36px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E8DED1]">

      <div className="grid md:grid-cols-2 items-center">

        {/* Imagen */}
        <div className="relative h-[280px] md:h-[360px] lg:h-[420px] md:h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="p-8 lg:p-10">

          <div className="flex items-start justify-between gap-4 mb-6">

            <h3 className="text-3xl font-bold text-[#2E2E2E]">
              {title}
            </h3>

            <div className="w-12 h-12 rounded-full bg-[#4D5B46] flex items-center justify-center shrink-0">
              <ArrowUpRight className="text-white" />
            </div>

          </div>

          <p className="text-[#6B6B6B] leading-relaxed mb-8">
            {description}
          </p>

          <a
            href={`https://wa.me/573124333517?text=${encodeURIComponent(
              `Hola, quiero información sobre ${title}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4D5B46] hover:bg-[#3E4A38] text-white px-6 py-3 rounded-full transition duration-300"
          >
            Solicitar información
          </a>

        </div>
      </div>
    </div>
  );
}

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EE]">

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-4">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-[#4D5B46] font-medium mb-4">
            Catálogo de Servicios
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold text-[#2E2E2E] mb-6">
            Todos nuestros tratamientos
          </h1>

          <p className="max-w-3xl mx-auto text-[#6B6B6B] text-lg">
            Descubre nuestros procedimientos faciales y corporales
            diseñados para resaltar tu belleza natural mediante
            tratamientos seguros y personalizados.
          </p>

        </div>
      </section>

      {/* Corporales */}
      <section className="px-4 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="mb-12 text-center">

            <h2 className="text-4xl font-bold text-[#4D5B46] mb-4">
              Tratamientos Corporales
            </h2>

            <p className="text-[#6B6B6B]">
              Procedimientos enfocados en bienestar, armonía y estética corporal.
            </p>

          </div>

          <div className="space-y-8">
            {corporalServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>

        </div>

      </section>

      {/* Faciales */}
      <section className="px-4 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="mb-12 text-center">

            <h2 className="text-4xl font-bold text-[#4D5B46] mb-4">
              Tratamientos Faciales
            </h2>

            <p className="text-[#6B6B6B]">
              Tratamientos diseñados para rejuvenecer, hidratar y revitalizar tu piel.
            </p>

          </div>

          <div className="space-y-8">
            {facialServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>

        </div>

      </section>

    </main>
  );
}