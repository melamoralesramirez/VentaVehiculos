import { useMemo, useState } from "react"
import { vehiculos } from "../datos/Vehiculos"
import CardVehiculo from "../componentes/CardVehiculo"

const uniq = (arr) => [...new Set(arr)].filter(Boolean)

export default function Vehiculos() {
  const [marca, setMarca] = useState("Ninguno")
  const [anio, setAnio] = useState("Ninguno")
  const [transmision, setTransmision] = useState("Ninguno")

  const marcas = useMemo(
    () => ["Ninguno", ...uniq(vehiculos.map((v) => v.marca)).sort()],
    []
  )

  const transmisiones = useMemo(
    () => ["Ninguno", ...uniq(vehiculos.map((v) => v.transmision)).sort()],
    []
  )

  const anios = useMemo(
    () => ["Ninguno", ...uniq(vehiculos.map((v) => v.anio)).sort((a, b) => b - a)],
    []
  )

  const filtrados = useMemo(() => {
    return vehiculos
      .filter(v => v.condicion === "Disponible") // ✅ SOLO DISPONIBLES
      .filter((v) => {
        if (marca !== "Ninguno" && v.marca !== marca) return false
        if (transmision !== "Ninguno" && v.transmision !== transmision) return false
        if (anio !== "Ninguno" && v.anio !== Number(anio)) return false
        return true
      })
  }, [marca, transmision, anio])


  const limpiar = () => {
    setMarca("Ninguno")
    setTransmision("Ninguno")
    setAnio("Ninguno")
  }

  const selectClass =
    "rounded-xl border border-black/10 bg-[#FAFAF9] px-4 py-3 outline-none w-full"

  const labelClass = "text-xs font-semibold text-black/60"

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* FILTROS PRIMERO */}
      <div className="rounded-3xl border border-black/10 bg-white p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Vehículos Disponibles</h1>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Marca */}
          <div>
            <p className={labelClass}>Marca</p>
            <select
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              className={`${selectClass} mt-2`}
            >
              {marcas.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Año */}
          <div>
            <p className={labelClass}>Año</p>
            <select
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              className={`${selectClass} mt-2`}
            >
              {anios.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          {/* Transmisión */}
          <div>
            <p className={labelClass}>Transmisión</p>
            <select
              value={transmision}
              onChange={(e) => setTransmision(e.target.value)}
              className={`${selectClass} mt-2`}
            >
              {transmisiones.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mostrando X vehículos (en OTRO lugar) */}
        <div className="mt-4 flex items-center justify-between text-sm text-black/60">
          <span>
            Mostrando <b className="text-black">{filtrados.length}</b>{" "}
            {filtrados.length === 1 ? "vehículo" : "vehículos"} disponibles
          </span>

          <button
            onClick={limpiar}
            className="text-sm font-semibold text-[#56514D] hover:underline self-start sm:self-auto"
          >
            Limpiar filtros
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtrados.map((v) => (
          <CardVehiculo key={v.id} vehiculo={v} />
        ))}
      </div>

      {/* EMPTY */}
      {filtrados.length === 0 && (
        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-8 text-center">
          <h3 className="text-lg font-bold">No hay vehículos con esos filtros</h3>
          <p className="mt-2 text-black/60">
            Probá con otra marca, año o transmisión.
          </p>
          <button
            onClick={limpiar}
            className="mt-5 rounded-xl bg-black px-6 py-3 text-white font-semibold hover:bg-black/90 transition"
          >
            Ver todos
          </button>
        </div>
      )}
    </section>
  )
}
