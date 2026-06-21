"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Procedimientos", href: "#procedimientos" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <header className="w-full fixed top-0 left-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto bg-[#F7F3EE]/90 backdrop-blur-md border border-[#D6BE97] rounded-3xl shadow-md">
        
        <div className="flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#4D5B46]">
              Estética
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#2E2E2E] hover:text-[#4D5B46] transition font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
            <a
              href="https://wa.me/573124333517?text=Hola,%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-[#4D5B46] hover:bg-[#3E4A38] text-white px-6 py-3 rounded-full transition duration-300"
            >
              Agendar cita
            </a>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#4D5B46]"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden px-6 pb-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#2E2E2E] hover:text-[#4D5B46] transition"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="https://wa.me/573124333517"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block bg-[#4D5B46] hover:bg-[#3E4A38] text-white px-6 py-3 rounded-full transition duration-300"
              >
                Agendar cita
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}