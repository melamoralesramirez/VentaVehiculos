import { useState } from "react"

export default function Footer() {
  const [open, setOpen] = useState(null)
  const toggle = (section) => setOpen(open === section ? null : section)

  return (
    <footer className="bg-[#56514D] text-white w-full border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* ===== DESKTOP ===== */}
        <div className="hidden md:grid grid-cols-3 gap-10 text-center items-start">
          {/* Marca */}
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

          {/* Contactos */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold mb-3">Contactos</h4>

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
              href="https://wa.me/50684944394"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 mb-2 text-white/80 hover:text-white transition"
            >
              <img src="/redes/WhatsApp.png" alt="WhatsApp" className="h-6 w-6" />
              <span className="text-sm">+506 8494-4394</span>
            </a>

            {/* WhatsApp 2 */}
            <a
              href="https://wa.me/50677777777"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-white transition"
            >
              <img src="/redes/WhatsApp.png" alt="WhatsApp" className="h-6 w-6" />
              <span className="text-sm">+506 7777-7777</span>
            </a>
          </div>

          {/* Info */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold mb-2">Horario</h4>
            <p className="text-sm text-white/60 mb-4">
              🕒 Lun–Sáb · 8:00am – 6:00pm
            </p>

            <h4 className="text-sm font-semibold mb-2">Ubicación</h4>
            <p className="text-sm text-white/60">📍 Cartago, Costa Rica</p>
          </div>
        </div>

        {/* ===== MÓVIL ===== */}
        <div className="md:hidden space-y-4 text-sm">
          {/* Marca */}
          <div className="flex flex-col items-center gap-2">
            <img src="/logo.png" alt="Autos Doña Carmen" className="h-12 w-12 rounded-full" />
            <p className="font-semibold">Nombre</p>
            <p className="text-white/70 text-xs">Venta de vehículos · Costa Rica</p>
          </div>

          {/* Acordeón: Contactos */}
          <button
            onClick={() => toggle("contactos")}
            className="w-full flex justify-between items-center py-3 border-t border-white/10"
          >
            <span className="font-semibold">Contactos</span>
            <span>{open === "contactos" ? "−" : "+"}</span>
          </button>

          {open === "contactos" && (
            <div className="flex flex-col items-center gap-3 pb-3 text-white/70">
              {/* Redes */}
              <div className="flex items-center gap-4">
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
                href="https://wa.me/50684944394"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <img src="/redes/WhatsApp.png" alt="WhatsApp" className="h-6 w-6" />
                <span className="text-sm">+506 8494-4394</span>
              </a>

              {/* WhatsApp 2 */}
              <a
                href="https://wa.me/50677777777"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <img src="/redes/WhatsApp.png" alt="WhatsApp" className="h-6 w-6" />
                <span className="text-sm">+506 7777-7777</span>
              </a>
            </div>
          )}

          {/* Acordeón: Info */}
          <button
            onClick={() => toggle("info")}
            className="w-full flex justify-between items-center py-3 border-t border-white/10"
          >
            <span className="font-semibold">Información</span>
            <span>{open === "info" ? "−" : "+"}</span>
          </button>

          {open === "info" && (
            <div className="text-center pb-3 text-white/70">
              <p>🕒 Lun–Sáb · 8:00am – 6:00pm</p>
              <p>📍 Cartago, Costa Rica</p>
            </div>
          )}
        </div>

        {/* Línea inferior */}
        <div className="mt-8 pt-4 border-t border-white/10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Nombre. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
