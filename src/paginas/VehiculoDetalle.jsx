import { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import { vehiculos } from "../datos/Vehiculos"

export default function VehiculoDetalle() {
  const { id } = useParams()
  const vehiculo = vehiculos.find(v => v.id === Number(id))

  const titulo = vehiculo
    ? `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.anio}`
    : ""

  const waLink = useMemo(() => {
    const msg = encodeURIComponent(
      `Hola, me interesa el ${titulo}. ¿Sigue disponible?`
    )
    return `https://wa.me/50684944394?text=${msg}` 
  }, [titulo])

  if (!vehiculo) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="rounded-2xl border border-black/10 bg-white/70 p-8">
          <p className="text-black/70">Vehículo no encontrado.</p>
          <Link to="/vehiculos" className="text-sm underline text-black/70 hover:text-black">
            Volver a vehículos
          </Link>
        </div>
      </section>
    )
  }

  const Spec = ({ label, value }) => (
    <div className="flex items-center justify-between gap-4 py-2">
      <span className="text-xs uppercase tracking-wide text-black/45">{label}</span>
      <span className="text-sm font-medium text-black text-right">{value}</span>
    </div>
  )

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      {/* Contenedor elegante */}
      <div className="rounded-3xl border border-black/10 bg-white/50 backdrop-blur p-6 md:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-black/45">
              Nombre Empresa
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-black leading-tight">
              {vehiculo.marca} {vehiculo.modelo} {" "}
              <span className="text-black/60">{vehiculo.anio}</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs border border-black/10 bg-black/5 text-black/70">
              {vehiculo.estado}
            </span>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs border border-black/10 bg-black/5 text-black/70">
              {vehiculo.origen}
            </span>
          </div>
        </div>

        {/* Precio */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-2xl md:text-3xl font-bold text-[#B68C5A]">
            ₡{vehiculo.precio.toLocaleString()}
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#56514D] text-white px-5 py-3 font-semibold hover:opacity-95 transition shadow-sm"
          >
            <img src="/redes/WhatsApp.png" alt="WhatsApp" className="h-5 w-5" />
            Consultar por WhatsApp
          </a>
        </div>

        {/* Cuerpo */}
        <div className="mt-8 grid lg:grid-cols-[1.35fr_.65fr] gap-6">
          {/* Imagen + descripción */}
          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
              <img
                src={vehiculo.imagen}
                alt={titulo}
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-6">
              <h2 className="text-lg font-semibold text-black">Descripción</h2>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                {vehiculo.descripcion}
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-6">
              <h2 className="text-lg font-semibold text-black">Características</h2>

              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {vehiculo.caracteristicas.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black/75"
                  >
                    <div className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#B68C5A] shrink-0" />
                      <span>{c}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Barra lateral (Specs) */}
          <aside className="rounded-2xl border border-black/10 bg-white/70 p-6 h-fit sticky top-6">
            <h2 className="text-lg font-semibold text-black">Ficha técnica</h2>
            <div className="mt-4 divide-y divide-black/10">
              <Spec label="Marca" value={vehiculo.marca} />
              <Spec label="Modelo" value={vehiculo.modelo} />
              <Spec label="Año" value={vehiculo.anio} />
              <Spec label="Kilometraje" value={`${vehiculo.kilometraje.toLocaleString()} km`} />
              <Spec label="Transmisión" value={vehiculo.transmision} />
              <Spec label="Combustible" value={vehiculo.combustible} />
              <Spec label="Motor" value={vehiculo.motor} />
              <Spec label="Tracción" value={vehiculo.traccion} />
              <Spec label="Color" value={vehiculo.color} />
              <Spec label="Puertas" value={vehiculo.puertas} />
              <Spec label="Estado" value={vehiculo.estado} />
              <Spec label="Origen" value={vehiculo.origen} />
            </div>

            <Link
              to="/vehiculos"
              className="mt-4 inline-flex w-full justify-center rounded-xl border border-black/15 bg-white/70 px-4 py-3 text-sm font-semibold text-black hover:bg-white transition"
            >
              Volver al catálogo
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
