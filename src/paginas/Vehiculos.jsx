import CardVehiculo from "../componentes/CardVehiculo"
import { vehiculos } from "../datos/Vehiculos"

export default function Vehiculos() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      
      <h2 className="text-3xl font-bold mb-2">
        Vehículos disponibles
      </h2>

      <p className="text-gray-600 mb-8">
        Descubrí nuestro catálogo de vehículos disponibles.
      </p>

      {/* Grid de vehículos */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {vehiculos.map((vehiculo) => (
          <CardVehiculo
            key={vehiculo.id}
            vehiculo={vehiculo}
          />
        ))}
      </div>
    </section>
  )
}
