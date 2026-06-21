import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <section
    id="contacto"
    className="bg-[#F7F3EE] px-4 py-28 scroll-mt-32">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-[#4D5B46] font-medium mb-4">
            Contacto
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2E2E2E] leading-tight mb-6">
            Agenda tu experiencia premium
          </h2>

          <p className="text-[#6B6B6B] text-lg leading-relaxed">
            Estamos listas para brindarte una atención exclusiva
            y personalizada en cada tratamiento.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="bg-white rounded-[40px] p-10 shadow-sm border border-[#E8DED1]">

            <h3 className="text-3xl font-bold text-[#2E2E2E] mb-10">
              Información de contacto
            </h3>

            <div className="space-y-8">

              {/* Item */}
              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-[#4D5B46] flex items-center justify-center shrink-0">
                  <MapPin className="text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#2E2E2E] mb-1">
                    Dirección
                  </h4>

                 <a
                    href="https://maps.google.com/?q=Cra 70c #57r Sur-27, Bogotá"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6B6B] hover:text-[#4D5B46]"
                  >
                     Cra. 70c #57r Sur-27, Bogotá, Colombia
                  </a>
                </div>

              </div>

              {/* Item */}
              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-[#4D5B46] flex items-center justify-center shrink-0">
                  <Phone className="text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#2E2E2E] mb-1">
                    Teléfono
                  </h4>

                  <a
                    href="tel:+573124333517"
                    className="text-[#6B6B6B] hover:text-[#4D5B46]"
                  >
                    +57 312 433 3517
                  </a>
                </div>

              </div>

              {/* Item */}
              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-[#4D5B46] flex items-center justify-center shrink-0">
                  <Mail className="text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#2E2E2E] mb-1">
                    Correo
                  </h4>

                  <a
                    href="mailto:storenye263@gmail.com"
                    className="text-[#6B6B6B] hover:text-[#4D5B46]"
                  >
                    storenye263@gmail.com               
                   </a>
                </div>

              </div>
            
              {/* Item */}
              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-[#4D5B46] flex items-center justify-center shrink-0">
                  <Clock3 className="text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#2E2E2E] mb-1">
                    Horarios
                  </h4>

                  <p className="text-[#6B6B6B]">
                    Lunes a Sábado — 8:00 AM a 7:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-12">

              <a
              href="https://instagram.com/spa_vida.go"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#4D5B46] hover:bg-[#3E4A38] flex items-center justify-center transition duration-300"
              >
             <FaInstagram className="text-white" />
              </a>
              <a
                  href="https://facebook.com/Marce Diaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#4D5B46] hover:bg-[#3E4A38] flex items-center justify-center transition duration-300"
                >
                  <FaFacebookF className= "text-white" />
                </a>

            </div>

          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-[40px] p-10 shadow-sm border border-[#E8DED1]">

            <h3 className="text-3xl font-bold text-[#2E2E2E] mb-10">
              Solicita una cita
            </h3>

            <form className="space-y-6">

              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full bg-[#F7F3EE] border border-[#E8DED1] rounded-2xl px-6 py-5 outline-none focus:border-[#4D5B46] transition"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full bg-[#F7F3EE] border border-[#E8DED1] rounded-2xl px-6 py-5 outline-none focus:border-[#4D5B46] transition"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="text"
                  placeholder="Número telefónico"
                  className="w-full bg-[#F7F3EE] border border-[#E8DED1] rounded-2xl px-6 py-5 outline-none focus:border-[#4D5B46] transition"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Escribe tu mensaje..."
                  rows={5}
                  className="w-full bg-[#F7F3EE] border border-[#E8DED1] rounded-2xl px-6 py-5 outline-none focus:border-[#4D5B46] transition resize-none"
                />
              </div>

              {/* Button */}
              <button className="w-full bg-[#4D5B46] hover:bg-[#3E4A38] text-white py-5 rounded-2xl transition duration-300 text-lg">
                Enviar solicitud
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}