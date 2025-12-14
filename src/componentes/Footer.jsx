export default function Footer() {
  return (
    <footer className="bg-[#56514D] text-white w-full border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-6">

        {/* Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center items-start">

          {/* Columna 1: Marca */}
          <div className="flex flex-col items-center gap-3">
            <img
              src="/logo.png"
              alt="Autos Doña Carmen"
              className="h-12 w-12 rounded-full object-cover"
            />
            <h3 className="text-base font-semibold">Nombre</h3>
            <p className="text-sm text-white/70">Venta de vehículos</p>
            <p className="text-sm text-white/70">Costa Rica</p>
          </div>

          {/* Columna 2: Redes + WhatsApp */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold mb-3">Contacto</h4>

            {/* Redes */}
            <div className="flex items-center gap-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  src="/redes/Instragram.png"
                  alt="Instagram"
                  className="h-7 w-7 hover:scale-110 transition"
                />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img
                  src="/redes/Facebook.png"
                  alt="Facebook"
                  className="h-7 w-7 hover:scale-110 transition"
                />
              </a>
            </div>

            {/* WhatsApp 1 */}
            <a
              href="https://wa.me/50688888888"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 mb-2 hover:text-white transition"
            >
              <img
                src="/redes/WhatsApp.png"
                alt="WhatsApp"
                className="h-6 w-6"
              />
              <span className="text-sm">+506 8888-8888</span>
            </a>

            {/* WhatsApp 2 */}
            <a
              href="https://wa.me/50677777777"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <img
                src="/redes/WhatsApp.png"
                alt="WhatsApp"
                className="h-6 w-6"
              />
              <span className="text-sm">+506 7777-7777</span>
            </a>
          </div>

          {/* Columna 3: Horario + Ubicación */}
          <div className="flex flex-col items-center">

            <h4 className="text-sm font-semibold mb-2 ">Horario</h4>
            <p className="text-sm text-white/60 mb-6">
              🕒 Lun–Sáb · 8:00am – 6:00pm
            </p>

            <h4 className="text-sm font-semibold mb-2">Ubicación</h4>
            <p className="text-sm text-white/60">
              📍 Cartago, Costa Rica
            </p>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center text-xs text-white/60">
          <p className="text-center">
            © {new Date().getFullYear()} Nombre. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  )
}

