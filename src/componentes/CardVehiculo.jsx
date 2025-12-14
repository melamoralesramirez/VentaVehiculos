import { Link } from "react-router-dom"

export default function CardVehiculo({ vehiculo }) {
  return (
    <Link
      to={`/vehiculos/${vehiculo.id}`}
      className="group block"
    >
      <div className="bg-white rounded-2xl border border-black/10 overflow-hidden transition
                      hover:shadow-lg md:hover:-translate-y-0.5">

        {/* Imagen */}
        <div className="relative">
          <img
            src={vehiculo.imagen}
            alt={`${vehiculo.marca} ${vehiculo.modelo}`}
            className="w-full h-40 sm:h-44 md:h-48 object-cover"
            loading="lazy"
          />

          {/* Etiqueta estado (opcional, elegante) */}
          {vehiculo.estado && (
            <span className="absolute top-3 left-3 rounded-full bg-white/90
                             px-3 py-1 text-xs font-semibold text-black shadow">
              {vehiculo.estado}
            </span>
          )}
        </div>

        {/* Contenido */}
        <div className="p-4">
          <h2 className="font-semibold text-base sm:text-lg leading-snug">
            {vehiculo.marca} {vehiculo.modelo}{" "}
            <span className="text-black/60">{vehiculo.anio}</span>
          </h2>

          <p className="mt-1 text-xs sm:text-sm text-black/60">
            {vehiculo.kilometraje.toLocaleString()} km • {vehiculo.transmision}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <p className="font-bold text-[#B68C5A] text-lg">
              ₡{vehiculo.precio.toLocaleString()}
            </p>

            <span className="text-xs font-semibold text-[#56514D]
                             opacity-0 group-hover:opacity-100 transition hidden sm:block">
              Ver detalle →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
