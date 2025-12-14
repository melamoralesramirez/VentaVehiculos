import { useMemo, useState } from "react"
import { vehiculos } from "../datos/Vehiculos"
import CardVehiculo from "../componentes/CardVehiculo"

const uniq = (arr) => [...new Set(arr)].filter(Boolean)

export default function Vehiculos() {
  const [q, setQ] = useState("")
  const [marca, setMarca] = useState("Todas")
  const [transmision, setTransmision] = useState("Todas")
  const [combustible, setCombustible] = useState("Todas")
  const [estado, setEstado] = useState("Todos")
  const [origen, setOrigen] = useState("Todos")
  const [anioMin, setAnioMin] = useState("")
  const [anioMax, setAnioMax] = useState("")
  const [precioMin, setPrecioMin] = useState("")
  const [precioMax, setPrecioMax] = useState("")
  const [sort, setSort] = useState("relevancia")

  // móvil: mostrar/ocultar filtros
  const [openFilters, setOpenFilters] = useState(false)

  const marcas = useMemo(() => ["Todas", ...uniq(vehiculos.map(v => v.marca)).sort()], [])
  const transmisiones = useMemo(() => ["Todas", ...uniq(vehiculos.map(v => v.transmision)).sort()], [])
  const combustibles = useMemo(() => ["Todas", ...uniq(vehiculos.map(v => v.combustible)).sort()], [])
  const estados = useMemo(() => ["Todos", ...uniq(vehiculos.map(v => v.estado)).sort()], [])
  const origenes = useMemo(() => ["Todos", ...uniq(vehiculos.map(v => v.origen)).sort()], [])

  const filtrados = useMemo(() => {
    const query = q.trim().toLowerCase()

    let list = vehiculos.filter((v) => {
      const texto = `${v.marca} ${v.modelo} ${v.anio} ${v.estado ?? ""} ${v.color ?? ""} ${v.origen ?? ""}`.toLowerCase()

      if (query && !texto.includes(query)) return false
      if (marca !== "Todas" && v.marca !== marca) return false
      if (transmision !== "Todas" && v.transmision !== transmision) return false
      if (combustible !== "Todas" && v.combustible !== combustible) return false
      if (estado !== "Todos" && v.estado !== estado) return false
      if (origen !== "Todos" && v.origen !== origen) return false

      if (anioMin && v.anio < Number(anioMin)) return false
      if (anioMax && v.anio > Number(anioMax)) return false
      if (precioMin && v.precio < Number(precioMin)) return false
      if (precioMax && v.precio > Number(precioMax)) return false

      return true
    })

    switch (sort) {
      case "precioAsc":
        list.sort((a, b) => a.precio - b.precio)
        break
      case "precioDesc":
        list.sort((a, b) => b.precio - a.precio)
        break
      case "anioDesc":
        list.sort((a, b) => b.anio - a.anio)
        break
      case "kmAsc":
        list.sort((a, b) => a.kilometraje - b.kilometraje)
        break
      default:
        list.sort((a, b) => b.anio - a.anio || a.kilometraje - b.kilometraje)
        break
    }

    return list
  }, [q, marca, transmision, combustible, estado, origen, anioMin, anioMax, precioMin, precioMax, sort])

  const limpiar = () => {
    setQ("")
    setMarca("Todas")
    setTransmision("Todas")
    setCombustible("Todas")
    setEstado("Todos")
    setOrigen("Todos")
    setAnioMin("")
    setAnioMax("")
    setPrecioMin("")
    setPrecioMax("")
    setSort("relevancia")
  }

  const selectClass =
    "rounded-2xl border border-black/10 bg-[#FAFAF9] px-4 py-3 outline-none w-full"

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* HERO */}
      <div className="rounded-[2rem] border border-black/10 bg-white p-5 sm:p-8 md:p-10 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-black/50 uppercase">
              Autos Doña Carmen
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black">
              Vehículos disponibles
            </h1>
            <p className="mt-3 text-black/60 max-w-2xl text-sm sm:text-base">
              Elegí tu próximo carro con filtros rápidos y detalle completo. Si te interesa uno, lo coordinamos por WhatsApp.
            </p>
          </div>

          {/* Search */}
          <div className="w-full lg:max-w-md">
            <label className="text-xs font-semibold text-black/60">Buscar</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ej: Corolla 2018, Importado, Automática…"
              className="mt-2 w-full rounded-2xl border border-black/10 bg-[#FAFAF9] px-5 py-4 outline-none focus:ring-2 focus:ring-[#B68C5A]/40"
            />

            <div className="mt-3 flex items-center justify-between gap-3 text-sm text-black/60">
              <span className="shrink-0">
                Resultados: <b className="text-black">{filtrados.length}</b>
              </span>

              <div className="flex items-center gap-3">
                {/* Botón filtros SOLO móvil */}
                <button
                  onClick={() => setOpenFilters((v) => !v)}
                  className="sm:hidden font-semibold text-[#56514D] hover:underline"
                >
                  {openFilters ? "Cerrar filtros" : "Filtros"}
                </button>

                <button
                  onClick={limpiar}
                  className="font-semibold text-black/70 hover:text-black transition"
                >
                  Limpiar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FILTROS */}
      <div className="mt-6 sm:mt-8 rounded-[2rem] border border-black/10 bg-white p-4 sm:p-6 md:p-7 shadow-sm">
        {/* Desktop: siempre visible | Móvil: colapsable */}
        <div className={`${openFilters ? "block" : "hidden"} sm:block`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            <select value={marca} onChange={(e) => setMarca(e.target.value)} className={selectClass}>
              {marcas.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>

            <select value={transmision} onChange={(e) => setTransmision(e.target.value)} className={selectClass}>
              {transmisiones.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>

            <select value={combustible} onChange={(e) => setCombustible(e.target.value)} className={selectClass}>
              {combustibles.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>

            <select value={estado} onChange={(e) => setEstado(e.target.value)} className={selectClass}>
              {estados.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>

            <select value={origen} onChange={(e) => setOrigen(e.target.value)} className={selectClass}>
              {origenes.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>

            <select value={sort} onChange={(e) => setSort(e.target.value)} className={selectClass}>
              <option value="relevancia">Relevancia</option>
              <option value="precioAsc">Precio: menor</option>
              <option value="precioDesc">Precio: mayor</option>
              <option value="anioDesc">Año: más nuevo</option>
              <option value="kmAsc">Kilometraje: menor</option>
            </select>

            {/* Rangos (si querés activarlos en UI ya) */}
            <input
              value={anioMin}
              onChange={(e) => setAnioMin(e.target.value)}
              placeholder="Año mín."
              inputMode="numeric"
              className={selectClass}
            />
            <input
              value={anioMax}
              onChange={(e) => setAnioMax(e.target.value)}
              placeholder="Año máx."
              inputMode="numeric"
              className={selectClass}
            />
            <input
              value={precioMin}
              onChange={(e) => setPrecioMin(e.target.value)}
              placeholder="Precio mín."
              inputMode="numeric"
              className={selectClass}
            />
            <input
              value={precioMax}
              onChange={(e) => setPrecioMax(e.target.value)}
              placeholder="Precio máx."
              inputMode="numeric"
              className={selectClass}
            />

            {/* Botón aplicar/cerrar SOLO móvil */}
            <button
              onClick={() => setOpenFilters(false)}
              className="sm:hidden rounded-2xl bg-[#56514D] text-white px-4 py-3 font-semibold hover:opacity-90 transition"
            >
              Ver resultados
            </button>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="mt-7 sm:mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtrados.map((v) => (
          <CardVehiculo key={v.id} vehiculo={v} />
        ))}
      </div>

      {/* EMPTY */}
      {filtrados.length === 0 && (
        <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-8 sm:p-10 text-center shadow-sm">
          <h3 className="text-lg font-bold">No encontramos resultados 😅</h3>
          <p className="mt-2 text-black/60">
            Probá quitando filtros o buscando solo la marca/modelo.
          </p>
          <button
            onClick={limpiar}
            className="mt-6 rounded-2xl bg-black px-6 py-3 font-bold text-white hover:bg-black/90 transition w-full sm:w-auto"
          >
            Limpiar todo
          </button>
        </div>
      )}
    </section>
  )
}
