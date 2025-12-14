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
  return (
    <header className="sticky top-0 z-50 bg-[#56514D]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        
        {/* Logo + Nombre */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo.png"
            alt="Autos Doña Carmen"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
          />
          <div className="leading-tight">
            <span className="block text-lg font-semibold tracking-wide text-white">
              Nombre
            </span>
            <span className="block text-xs text-white/70">
              Autos usados • Costa Rica
            </span>
          </div>
        </Link>

        {/* Menú */}
        <nav className="flex-1 min-w-0">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {links.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [
                    "px-2 py-1 rounded-md transition",
                    "hover:bg-white/10 hover:text-white",
                    isActive ? "text-white bg-white/10" : "text-white/75",
                  ].join(" ")
                }
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
