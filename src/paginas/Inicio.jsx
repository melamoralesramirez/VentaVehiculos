import { Link } from "react-router-dom"
import { vehiculos } from "../datos/Vehiculos"
import CardVehiculo from "../componentes/CardVehiculo"

export default function Inicio() {
  // destacados: los más nuevos (por año) y si empatan, menor kilometraje
  const destacados = [...vehiculos]
    .sort((a, b) => b.anio - a.anio || a.kilometraje - b.kilometraje)
    .slice(0, 3)

  return (
    <div className="space-y-14">

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white">
        {/* decor suave */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#B68C5A]/15 blur-2xl" />
        <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-black/5 blur-2xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12 items-center">
          {/* Texto */}
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-black/70">
              <span className="h-2 w-2 rounded-full bg-[#B68C5A]" />
              Autos usados en Costa Rica
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-black">
              Encontrá tu próximo carro
              <span className="text-[#B68C5A]"> sin complicarte</span>
            </h1>

            <p className="mt-4 text-lg text-black/70 max-w-xl">
              Catálogo actualizado, detalles claros y atención rápida por WhatsApp.
              Te ayudamos a cerrar la compra con confianza.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/vehiculos"
                className="px-5 py-3 rounded-xl bg-[#56514D] text-white hover:opacity-90 transition shadow"
              >
                Ver vehículos
              </Link>

              <a
                href="https://wa.me/50684944394"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-white border border-black/10 hover:bg-black/5 transition"
              >
                Consultar por WhatsApp
              </a>
            </div>

            {/* stats */}
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-md">
              <div className="rounded-2xl bg-[#FAFAF9] border border-black/10 p-4 text-center">
                <p className="text-2xl font-bold">{vehiculos.length}+</p>
                <p className="text-xs text-black/60">En catálogo</p>
              </div>
              <div className="rounded-2xl bg-[#FAFAF9] border border-black/10 p-4 text-center">
                <p className="text-2xl font-bold">Cartago</p>
                <p className="text-xs text-black/60">Ubicación</p>
              </div>
              <div className="rounded-2xl bg-[#FAFAF9] border border-black/10 p-4 text-center">
                <p className="text-2xl font-bold">Lun–Sáb</p>
                <p className="text-xs text-black/60">Horario</p>
              </div>
            </div>
          </div>

          {/* Imagen hero */}
          <div className="lg:pl-6">
            <div className="rounded-3xl overflow-hidden border border-black/10 shadow-sm bg-white">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
                alt="Autos Doña Carmen"
                className="w-full h-72 md:h-80 object-cover"
              />
            </div>

            {/* mini tarjetas */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white border border-black/10 p-4">
                <p className="text-sm font-semibold">Atención rápida</p>
                <p className="text-xs text-black/60 mt-1">
                  Respondemos por WhatsApp
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-black/10 p-4">
                <p className="text-sm font-semibold">Detalles completos</p>
                <p className="text-xs text-black/60 mt-1">
                  Fotos + características
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSCADOR (visual, elegante) */}
      <section className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-black/10 p-6">
          <h2 className="text-xl font-semibold">Buscá rápido</h2>
          <p className="text-sm text-black/60 mt-1">
            Esto es visual por ahora 
          </p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="rounded-2xl border border-black/10 bg-[#FAFAF9] px-4 py-3">
              <p className="text-xs text-black/60">Marca</p>
              <p className="text-sm font-medium">Toyota / Honda / …</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[#FAFAF9] px-4 py-3">
              <p className="text-xs text-black/60">Año</p>
              <p className="text-sm font-medium">2016 – 2024</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[#FAFAF9] px-4 py-3">
              <p className="text-xs text-black/60">Transmisión</p>
              <p className="text-sm font-medium">Automática / Manual</p>
            </div>
            <Link
              to="/vehiculos"
              className="rounded-2xl bg-[#B68C5A] text-white px-4 py-3 flex items-center justify-center font-semibold hover:opacity-90 transition"
            >
              Ir al catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="max-w-7xl mx-auto px-0">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Destacados</h2>
            <p className="text-black/60 mt-1">
              Vehículos recomendados por año y kilometraje.
            </p>
          </div>

          <Link
            to="/vehiculos"
            className="text-sm font-semibold text-[#56514D] hover:underline"
          >
            Ver todos →
          </Link>
        </div>

        <div className="mt-7 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {destacados.map((v) => (
            <CardVehiculo key={v.id} vehiculo={v} />
          ))}
        </div>
      </section>

      {/* SECCIÓN CONFIANZA */}
      <section className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white border border-black/10 p-8">
          <h2 className="text-2xl font-bold">¿Por qué con nosotros?</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Información clara",
                desc: "Precio, kilometraje, motor y extras sin letras pequeñas.",
              },
              {
                title: "Atención humana",
                desc: "Te contestamos rápido por WhatsApp y te guiamos.",
              },
              {
                title: "Catálogo actualizado",
                desc: "Vehículos disponibles y vendidos bien organizados.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-[#FAFAF9] p-5"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-black/60 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#56514D] text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">¿Querés cotizar o agendar visita?</h3>
            <p className="text-white/80 mt-1">
              Escribinos por WhatsApp y te pasamos toda la info del carro.
            </p>
          </div>

          <a
            href="https://wa.me/50684944394"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-white text-[#56514D] font-semibold hover:opacity-90 transition"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>

    </div>
  )
}
