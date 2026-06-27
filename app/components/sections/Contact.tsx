"use client";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  service: "",
  date:"",
  hour:"",
});

const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);
  setMessage("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setMessage("Solicitud enviada correctamente.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date:"",
        hour:"",
      });
    } else {
      setMessage("Ocurrió un error al enviar la solicitud.");
    }
  } catch (error) {
    console.error(error);
    setMessage("Error de conexión.");
  }

  setLoading(false);
};

  return (
    <section
    id="contacto"
    className="bg-[#F7F3EE] px-4 py-28 scroll-mt-32">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

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
              <a
                href="https://maps.google.com/?q=Cra 70c #57r Sur-27, Bogotá"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-5 p-4 rounded-3xl hover:bg-[#F7F3EE] transition duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4D5B46] flex items-center justify-center shrink-0">
                  <MapPin className="text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#2E2E2E] mb-1 group-hover:text-[#4D5B46]">
                    Dirección
                  </h4>

                  <p className="text-[#6B6B6B]">
                    Cra. 70c #57r Sur-27, Bogotá, Colombia
                  </p>
                </div>
              </a>

              {/* Item */}
              <a
                href="tel:+573124333517"
                className="flex gap-5 p-4 rounded-3xl hover:bg-[#F7F3EE] transition duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4D5B46] flex items-center justify-center shrink-0">
                  <Phone className="text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#2E2E2E] mb-1 group-hover:text-[#4D5B46]">
                    Teléfono
                  </h4>

                  <p className="text-[#6B6B6B]">
                    +57 312 433 3517
                  </p>
                </div>
              </a>

              {/* Item */}
              <a
                href="mailto:storenye263@gmail.com"
                className="flex gap-5 p-4 rounded-3xl hover:bg-[#F7F3EE] transition duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4D5B46] flex items-center justify-center shrink-0">
                  <Mail className="text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#2E2E2E] mb-1 group-hover:text-[#4D5B46]">
                    Correo
                  </h4>

                  <p className="text-[#6B6B6B]">
                    storenye263@gmail.com
                  </p>
                </div>
              </a>
            
              {/* Item */}
              <a
                href="https://wa.me/573124333517"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-5 p-4 rounded-3xl hover:bg-[#F7F3EE] transition duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4D5B46] flex items-center justify-center shrink-0">
                  <Clock3 className="text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-[#2E2E2E] mb-1 group-hover:text-[#4D5B46]">
                    Horarios
                  </h4>

                  <p className="text-[#6B6B6B]">
                    Lunes a Sábado — 8:00 AM a 7:00 PM
                  </p>
                </div>
              </a>
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
                  href="https://facebook.com/@marce.diaz.1976
"
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

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  required
                  className="w-full bg-[#F7F3EE] border border-[#E8DED1] rounded-2xl px-6 py-5 outline-none focus:border-[#4D5B46] transition"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  required
                  className="w-full bg-[#F7F3EE] border border-[#E8DED1] rounded-2xl px-6 py-5 outline-none focus:border-[#4D5B46] transition"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Número telefónico"
                required
                className="w-full bg-[#F7F3EE] border border-[#E8DED1] rounded-2xl px-6 py-5 outline-none focus:border-[#4D5B46] transition"
              />
              </div>

              {/* Message */}
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F7F3EE] border border-[#E8DED1] rounded-2xl px-6 py-5 outline-none focus:border-[#4D5B46] transition"
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>

                  <option value="Limpieza Facial Premium">
                    Limpieza Facial Premium
                  </option>

                  <option value="Skin Care Avanzado">
                    Skin Care Avanzado
                  </option>

                  <option value="Tratamientos Corporales">
                    Tratamientos Corporales
                  </option>

                  <option value="Reducción de Estrías">
                    Reducción de Estrías
                  </option>

                  <option value="Moldeamiento Corporal">
                    Moldeamiento Corporal
                  </option>

                  <option value="Disminución de Celulitis">
                    Disminución de Celulitis
                  </option>

                  <option value="Toxina Botulínica">
                    Toxina Botulínica
                  </option>

                  <option value="Ácido Hialurónico">
                    Ácido Hialurónico
                  </option>
                </select>
              </div>

              {/* Fecha */}
              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#F7F3EE] border border-[#E8DED1] rounded-2xl px-6 py-5 outline-none focus:border-[#4D5B46] transition"
                />
              </div>

              {/* Hora */}
                <div>
                  <select
                    name="hour"
                    value={formData.hour}
                    onChange={handleChange}
                    className="w-full bg-[#F7F3EE] border border-[#E8DED1] rounded-2xl px-6 py-5 outline-none focus:border-[#4D5B46] transition"
                  >
                    <option value="" disabled>
                      Selecciona una hora
                    </option>

                    <option value="08:00 AM">08:00 AM</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                  </select>
                </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#4D5B46] hover:bg-[#3E4A38] disabled:opacity-60 text-white py-5 rounded-2xl transition duration-300 text-lg"
              >
                {loading ? "Enviando..." : "Enviar solicitud"}
              </button>
              {message && (
                <p className="text-center text-[#4D5B46] mt-4">
                  {message}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}