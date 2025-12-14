import { useParams } from "react-router-dom"
import { vehiculos } from "../datos/Vehiculos"

export default function VehiculoDetalle() {
  const { id } = useParams()
  const vehiculo = vehiculos.find(v => v.id === Number(id))

  if (!vehiculo) {
    return <p className="p-6">Vehículo no encontrado</p>
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">

      {/* Imagen */}
      <img
        src={vehiculo.imagen}
        alt={`${vehiculo.marca} ${vehiculo.modelo}`}
        className="w-full rounded-xl shadow"
      />

      {/* Información */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          {vehiculo.marca} {vehiculo.modelo} {vehiculo.anio}
        </h1>

        <p className="text-2xl font-semibold text-[#B68C5A] mb-4">
          ₡{vehiculo.precio.toLocaleString()}
        </p>

        <p className="text-gray-700 mb-6">
          {vehiculo.descripcion}
        </p>

        {/* Datos técnicos */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <p><b>Kilometraje:</b> {vehiculo.kilometraje.toLocaleString()} km</p>
          <p><b>Transmisión:</b> {vehiculo.transmision}</p>
          <p><b>Combustible:</b> {vehiculo.combustible}</p>
          <p><b>Motor:</b> {vehiculo.motor}</p>
          <p><b>Tracción:</b> {vehiculo.traccion}</p>
          <p><b>Puertas:</b> {vehiculo.puertas}</p>
          <p><b>Color:</b> {vehiculo.color}</p>
          <p><b>Estado:</b> {vehiculo.estado}</p>
          <p><b>Origen:</b> {vehiculo.origen}</p>
        </div>

        {/* Características */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Características</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {vehiculo.caracteristicas.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
