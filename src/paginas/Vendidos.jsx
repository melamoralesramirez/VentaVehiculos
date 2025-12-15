import { useMemo } from "react"
import { vehiculos } from "../datos/Vehiculos"
import CardVehiculo from "../componentes/CardVehiculo"

export default function Vendidos() {
  // SOLO vehículos vendidos
  const vendidos = useMemo(
    () => vehiculos.filter((v) => v.condicion === "Vendido"),
    []
  )

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold">
        Vehículos Vendidos
      </h1>

      {/* GRID */}
      {vendidos.length > 0 ? (
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {vendidos.map((v) => (
            <CardVehiculo key={v.id} vehiculo={v} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-8 text-center">
          <h3 className="text-lg font-bold">
            Aún no hay vehículos vendidos
          </h3>
          <p className="mt-2 text-black/60">
            Cuando se vendan vehículos, aparecerán aquí.
          </p>
        </div>
      )}
    </section>
  )
}
