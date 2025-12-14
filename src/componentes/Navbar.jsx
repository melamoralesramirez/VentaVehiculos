import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-[#56514D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo.png"
            alt="Autos Doña Carmen"
            className="h-14 w-14 rounded-full object-cover"
          />

          <span className="text-lg font-semibold tracking-wide text-white">
            Nombre
          </span>
        </Link>

        {/* Menú */}
        <nav className="flex-1 flex items-center gap-4 text-sm flex-wrap justify-center min-w-0">
          {[
            ["Vehículos", "/vehiculos"],
            ["Promociones", "/promociones"],
            ["Contactos", "/contacto"],
            ["Ubicación", "/ubicacion"],
            ["Vendidos", "/vendidos"],
            ["Clientes", "/clientes"],
            ["Historia", "/historia"],
          ].map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `hover:text-white transition ${isActive ? "text-white" : "text-white/70"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Redes sociales */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/50600000000"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <img
              src="/redes/WhatsApp.png"
              alt="WhatsApp"
              className="h-8 w-8 hover:scale-110 transition"
            />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <img
              src="/redes/Facebook.png"
              alt="Facebook"
              className="h-8 w-8 hover:scale-110 transition"
            />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/redes/Instragram.png"
              alt="Instagram"
              className="h-8 w-8 hover:scale-110 transition"
            />
          </a>
        </div>
      </div>
    </header>
  )
}
