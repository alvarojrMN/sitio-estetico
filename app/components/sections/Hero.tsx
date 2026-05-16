import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F7F3EE] pt-36 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D6BE97]/30 border border-[#D6BE97] px-5 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#4D5B46]" />
            <p className="text-sm text-[#4D5B46] font-medium">
              Clínica estética premium
            </p>
          </div>

          {/* Title */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight font-bold text-[#2E2E2E]">
              Belleza natural con un toque profesional
            </h1>

            <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-xl">
              Tratamientos estéticos modernos diseñados para
              resaltar tu belleza y brindarte una experiencia
              premium en cada sesión.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#4D5B46] hover:bg-[#3E4A38] text-white px-8 py-4 rounded-full transition duration-300 text-lg">
              Agendar cita
            </button>

            <button className="border border-[#4D5B46] text-[#4D5B46] hover:bg-[#4D5B46] hover:text-white px-8 py-4 rounded-full transition duration-300 text-lg">
              Ver servicios
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">

            <div>
              <h3 className="text-3xl font-bold text-[#4D5B46]">
                +10
              </h3>

              <p className="text-[#6B6B6B] text-sm">
                Años de experiencia
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#4D5B46]">
                +5k
              </h3>

              <p className="text-[#6B6B6B] text-sm">
                Clientes felices
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#4D5B46]">
                100%
              </h3>

              <p className="text-[#6B6B6B] text-sm">
                Atención premium
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          {/* Background decoration */}
          <div className="absolute inset-0 bg-[#D6BE97] rounded-[40px] rotate-3" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-[40px]">
            <Image
              src="/terapia.jpg"
              alt="Hero estética"
              width={700}
              height={900}
              className="w-full h-[700px] object-cover"
              priority
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl max-w-xs">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-[#4D5B46] flex items-center justify-center text-white text-xl">
                ✓
              </div>

              <div>
                <h4 className="font-semibold text-[#2E2E2E]">
                  Resultados naturales
                </h4>

                <p className="text-sm text-[#6B6B6B]">
                  Tratamientos personalizados
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}