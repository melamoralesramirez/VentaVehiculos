import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { vehiculos } from "../datos/Vehiculos"
import CardVehiculo from "../componentes/CardVehiculo"

const uniq = (arr) => [...new Set(arr)].filter(Boolean)

export default function Inicio() {
    // destacados: más nuevos y si empatan, menor kilometraje
    const destacados = useMemo(() => {
        return [...vehiculos]
            .sort((a, b) => b.anio - a.anio || a.kilometraje - b.kilometraje)
            .slice(0, 3)
    }, [])

    // ===== filtros iguales a la página Vehículos =====
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

    const limpiar = () => {
        setMarca("Ninguno")
        setAnio("Ninguno")
        setTransmision("Ninguno")
    }

    const selectClass =
        "rounded-xl border border-black/10 bg-[#FAFAF9] px-4 py-3 outline-none w-full"
    const labelClass = "text-xs font-semibold text-black/60"

    // Link al catálogo con query params (opcional pero útil)
    const catalogLink = useMemo(() => {
        const params = new URLSearchParams()
        if (marca !== "Ninguno") params.set("marca", marca)
        if (anio !== "Ninguno") params.set("anio", anio)
        if (transmision !== "Ninguno") params.set("transmision", transmision)
        const qs = params.toString()
        return qs ? `/vehiculos?${qs}` : "/vehiculos"
    }, [marca, anio, transmision])

    // ===== VEHÍCULOS FILTRADOS EN INICIO =====
    const filtradosInicio = useMemo(() => {
        const hayFiltros =
            marca !== "Ninguno" ||
            anio !== "Ninguno" ||
            transmision !== "Ninguno"

        if (!hayFiltros) return []

        return vehiculos.filter((v) => {
            if (marca !== "Ninguno" && v.marca !== marca) return false
            if (transmision !== "Ninguno" && v.transmision !== transmision) return false
            if (anio !== "Ninguno" && v.anio !== Number(anio)) return false
            return true
        })
    }, [marca, anio, transmision])

    return (
        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
            <section className="relative w-full h-[85vh] md:h-[92vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80"
                    alt="Autos Doña Carmen"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* overlays para contraste */}
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/70" />

                {/* contenido centrado */}
                <div className="relative z-10 h-full flex items-center justify-center px-6">
                    <div className="text-center max-w-5xl">
                        <p className="text-white/80 text-sm md:text-base">
                            Autos usados • Costa Rica
                        </p>

                        <h1 className="mt-4 text-white font-extrabold tracking-tight leading-[1.05]
                     text-4xl sm:text-5xl md:text-7xl">
                            Encontrá tu próximo carro{" "}
                            <span className="text-[#B68C5A]">sin complicarte</span>
                        </h1>

                        <p className="mt-5 text-white/85 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                            Catálogo actualizado, detalles claros y atención rápida por WhatsApp.
                            Coordinamos visita y te damos toda la info sin vueltas.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                to="/vehiculos"
                                className="px-6 py-3 rounded-xl font-semibold
                     bg-[#B68C5A] text-white hover:opacity-90 transition"
                            >
                                Ver vehículos disponibles
                            </Link>

                            <a
                                href="https://wa.me/50684944394"
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 rounded-xl font-semibold
                     bg-white/10 text-white border border-white/15
                     hover:bg-white/15 transition backdrop-blur"
                            >
                                Consultar por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* flecha tipo "descubre más" */}
                <a
                    href="#contenido"
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20
               text-white/80 text-xs sm:text-sm font-semibold
               flex flex-col items-center gap-2 hover:text-white transition"
                >
                    <span className="tracking-widest">DESCUBRÍ MÁS</span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full
                     border border-white/20 bg-black/20 backdrop-blur">
                        ↓
                    </span>
                </a>
            </section>

            {/* 2) FILTRO (MISMO QUE VEHÍCULOS) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="rounded-3xl bg-white border border-black/10 p-6">
                    <div className="flex justify-between items-end">
                        <h2 className="text-2xl font-bold">Buscar vehículos</h2>
                    </div>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <p className={labelClass}>Marca</p>
                            <select
                                value={marca}
                                onChange={(e) => setMarca(e.target.value)}
                                className={`${selectClass} mt-2`}
                            >
                                {marcas.map((m) => (
                                    <option key={m}>{m}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <p className={labelClass}>Año</p>
                            <select
                                value={anio}
                                onChange={(e) => setAnio(e.target.value)}
                                className={`${selectClass} mt-2`}
                            >
                                {anios.map((a) => (
                                    <option key={a}>{a}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <p className={labelClass}>Transmisión</p>
                            <select
                                value={transmision}
                                onChange={(e) => setTransmision(e.target.value)}
                                className={`${selectClass} mt-2`}
                            >
                                {transmisiones.map((t) => (
                                    <option key={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-end items-center">
                        <button
                            onClick={limpiar}
                            className="text-sm font-semibold text-[#56514D] hover:underline"
                        >
                            Limpiar filtros
                        </button>
                    </div>


                    <div className="mt-5 flex justify-center items-center">
                        <Link
                            to={catalogLink}
                            className="px-5 py-3 rounded-xl bg-[#B68C5A] text-white font-semibold"
                        >
                            Ir al catálogo
                        </Link>
                    </div>
                </div>
            </section>

            {/* =========================
          RESULTADOS DEL FILTRO
      ========================== */}
            {filtradosInicio.length > 0 && (
                <section className="max-w-7xl mx-auto px-4 sm:px-6">
                    <p className="text-sm text-black/60 mb-4">
                        Mostrando <b>{filtradosInicio.length}</b>{" "}
                        {filtradosInicio.length === 1 ? "vehículo" : "vehículos"}
                    </p>

                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {filtradosInicio.map((v) => (
                            <CardVehiculo key={v.id} vehiculo={v} />
                        ))}
                    </div>
                </section>
            )}

            {(marca !== "Ninguno" || anio !== "Ninguno" || transmision !== "Ninguno") &&
                filtradosInicio.length === 0 && (
                    <section className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="rounded-3xl bg-white border border-black/10 p-8 text-center">
                            <p className="text-black/60">
                                No hay vehículos con esos filtros.
                            </p>
                            <button
                                onClick={limpiar}
                                className="mt-4 font-semibold text-[#56514D] hover:underline"
                            >
                                Limpiar filtros
                            </button>
                        </div>
                    </section>
                )}

            {/* 3) INFO DETALLADA + HISTORIA */}
            <section className="max-w-7xl mx-auto">
                <div className="rounded-3xl bg-white border border-black/10 p-6 sm:p-8">

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="rounded-2xl border border-black/10 bg-[#FAFAF9] p-6">
                            <h3 className="font-semibold text-lg">Nombre empresa</h3>
                            <p className="mt-2 text-black/70 leading-relaxed">
                                Este sitio está pensado para que encontrés vehículos de forma rápida y transparente:
                                cada publicación incluye precio, kilometraje, transmisión y fotos para que tomés una decisión con claridad.
                                Si algún carro te interesa, coordinamos por WhatsApp para enviarte más información o agendar visita.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-black/10 bg-[#FAFAF9] p-6">
                            <h3 className="font-semibold text-lg">Nuestra historia</h3>
                            <p className="mt-2 text-sm text-black/70 leading-relaxed">
                                Somos un negocio familiar enfocado en la venta de vehículos usados en Costa Rica.
                                Con el tiempo fuimos creciendo gracias al boca a boca y a la confianza de nuestros clientes.
                                Esta página es parte de ese camino: mostrar el inventario de forma clara y sin vueltas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4) DESTACADOS */}
            <section className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Vehículos destacados</h2>
                    </div>

                    <Link
                        to="/vehiculos"
                        className="text-sm font-semibold text-[#56514D] hover:underline self-start sm:self-auto"
                    >
                        Ver todos →
                    </Link>
                </div>

                <div className="mt-6 sm:mt-7 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {destacados.map((v) => (
                        <CardVehiculo key={v.id} vehiculo={v} />
                    ))}
                </div>
            </section>

            {/* CTA FINAL (se mantiene) */}
            <section className="max-w-7xl mx-auto">
                <div className="rounded-3xl bg-[#56514D] text-white p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold">
                            ¿Querés cotizar algún vehículo o agendar visita?
                        </h3>
                        <p className="text-white/80 mt-1">
                            Escribinos por WhatsApp y te pasamos informacion.
                        </p>
                    </div>

                    <a
                        href="https://wa.me/50684944394"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full md:w-auto text-center px-5 py-3 rounded-xl bg-white text-[#56514D] font-semibold hover:opacity-90 transition"
                    >
                        Escribir por WhatsApp
                    </a>
                </div>
            </section>
            <div id="contenido" />
        </div>
    )
}
