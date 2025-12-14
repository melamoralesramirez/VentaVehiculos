import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const links = [
  { label: "Inicio", to: "/" },
  { label: "Vehículos Disponibles", to: "/vehiculos" },
  { label: "Promociones", to: "/promociones" },
  { label: "Ubicación", to: "/ubicacion" },
  { label: "Vehículos Vendidos", to: "/vendidos" },
  { label: "Clientes", to: "/clientes" },
  { label: "Nuestra Historia", to: "/historia" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    [
      "px-3 py-2 rounded-md transition",
      "hover:bg-white/10 hover:text-white",
      isActive ? "text-white bg-white/10" : "text-white/75",
    ].join(" ")

  return (
    <header className="sticky top-0 z-50 bg-[#56514D]/95 backdrop-blur border-b border-white/10">
      {/* Barra superior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo + Nombre */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Autos Doña Carmen"
            className="h-11 w-11 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white/10"
          />
          <div className="leading-tight">
            <span className="block text-base sm:text-lg font-semibold tracking-wide text-white">
              Nombre
            </span>
            <span className="block text-xs text-white/70">
              Autos usados • Costa Rica
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-2 text-sm">
            {links.map(({ label, to }) => (
              <NavLink key={to} to={to} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Botón móvil */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-white/10 transition text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? (
            // X
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Hamburguesa
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={[
          "md:hidden border-t border-white/10",
          open ? "block" : "hidden",
        ].join(" ")}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col gap-1 text-sm max-h-[70vh] overflow-y-auto">
            {links.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
