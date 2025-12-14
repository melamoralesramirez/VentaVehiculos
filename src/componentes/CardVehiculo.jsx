import { Link } from "react-router-dom"

export default function CardVehiculo({ vehiculo }) {
  return (
    <Link to={`/vehiculos/${vehiculo.id}`}>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">

        <img
          src={vehiculo.imagen}
          alt={`${vehiculo.marca} ${vehiculo.modelo}`}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          <h2 className="font-semibold text-lg">
            {vehiculo.marca} {vehiculo.modelo} {vehiculo.anio}
          </h2>

          <p className="text-sm text-gray-600">
            {vehiculo.kilometraje.toLocaleString()} km • {vehiculo.transmision}
          </p>

          <p className="mt-2 font-bold text-[#B68C5A] text-lg">
            ${vehiculo.precio.toLocaleString()}
          </p>
        </div>

      </div>
    </Link>
  )
}
