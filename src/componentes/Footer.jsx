import { useState } from "react"

export default function Footer() {
  const [open, setOpen] = useState(null)
  const toggle = (section) => setOpen(open === section ? null : section)

  const rowBtn =
    "w-full flex items-center justify-between rounded-2xl px-4 py-4 " +
    "bg-white/5 border border-white/10 hover:bg-white/10 transition"

  return (
    <footer className="bg-[#56514D] text-white w-full border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        {/* ===== DESKTOP ===== */}
        <div className="hidden md:grid grid-cols-3 gap-10 text-center items-start">
          {/* Marca */}
          <div className="flex flex-col items-center gap-3">
            <img
              src="/logo.png"
              alt="Autos Doña Carmen"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
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
          </div>
        </div>

        {/* ===== MÓVIL (MEJORADO) ===== */}
        <div className="md:hidden">
          {/* Cabecera */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <img
              src="/logo.png"
              alt="Autos Doña Carmen"
              className="h-14 w-14 rounded-full mx-auto object-cover ring-2 ring-white/10"
            />
            <p className="mt-3 font-semibold text-lg">Nombre</p>
            <p className="text-white/70 text-sm">
              Venta de vehículos • Costa Rica
            </p>
          </div>

          {/* Acordeones */}
          <div className="mt-5 space-y-3">
            {/* Contactos */}
            <button onClick={() => toggle("contactos")} className={rowBtn}>
              <span className="font-semibold">Contactos</span>
              <span className="text-white/70">{open === "contactos" ? "−" : "+"}</span>
            </button>

            {open === "contactos" && (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex justify-center gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <img src="/redes/Instragram.png" alt="Instagram" className="h-8 w-8" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <img src="/redes/Facebook.png" alt="Facebook" className="h-8 w-8" />
                  </a>
                </div>

                <div className="mt-4 space-y-3">
                  <a
                    href="https://wa.me/50684944394"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white/85 hover:bg-white/10 transition"
                  >
                    <img src="/redes/WhatsApp.png" alt="WhatsApp" className="h-6 w-6" />
                    <span className="text-sm font-medium">+506 8494-4394</span>
                  </a>

                  <a
                    href="https://wa.me/50677777777"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white/85 hover:bg-white/10 transition"
                  >
                    <img src="/redes/WhatsApp.png" alt="WhatsApp" className="h-6 w-6" />
                    <span className="text-sm font-medium">+506 7777-7777</span>
                  </a>
                </div>
              </div>
            )}

            {/* Información */}
            <button onClick={() => toggle("info")} className={rowBtn}>
              <span className="font-semibold">Horario</span>
              <span className="text-white/70">{open === "info" ? "−" : "+"}</span>
            </button>

            {open === "info" && (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-white/75">
                <p className="text-sm">🕒 Lun–Sáb · 8:00am – 6:00pm</p>
              </div>
            )}
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-8 pt-4 border-t border-white/10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Nombre. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
