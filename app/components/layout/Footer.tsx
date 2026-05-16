export default function Footer() {
  return (
    <footer className="bg-[#4D5B46] px-4 py-10">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div>

          <h2 className="text-3xl font-bold text-white">
            Estética
          </h2>

        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-white">

          <a href="#">Inicio</a>
          <a href="#">Nosotros</a>
          <a href="#">Servicios</a>
          <a href="#">Testimonios</a>
          <a href="#">Contacto</a>

        </div>

        {/* Copy */}
        <p className="text-white/70 text-center">
          © 2026 Clínica estética premium. Todos los derechos reservados.
        </p>

      </div>

    </footer>
  );
}