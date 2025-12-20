import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Logo + nombre centrados */}
        <div className="flex flex-col items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Autos Doña Carmen"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
            />
            <span className="text-lg font-semibold tracking-wide text-white">
              Nombre
            </span>
          </Link>

          <p className="text-sm text-white/60 text-center">
            Venta de vehículos usados · Costa Rica
          </p>
        </div>

        {/* Línea inferior */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Nombre. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  )
}
