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

    return (
        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
            {/* 1) HERO MÁS GRANDE */}
            {/* 1) HERO NUEVO (banner con imagen de fondo, más limpio) */}
            <section className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black shadow-sm">
                    {/* Imagen de fondo + efecto */}
                    <img
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80"
                        alt="Autos Doña Carmen"
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 hover:scale-[1.03]"
                        loading="lazy"
                    />

                    {/* Overlay para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

                    {/* Contenido */}
                    <div className="relative p-7 sm:p-10 md:p-12">
                        <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/85">
                            <span className="h-2 w-2 rounded-full bg-[#B68C5A]" />
                            Autos usados en Costa Rica
                        </p>

                        <h1 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
                            Encontrá tu próximo carro{" "}
                            <span className="text-[#B68C5A]">sin complicarte</span>
                        </h1>

                        <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl">
                            Aquí encontrás vehículos de calidad,si alguno te interesa, escribinos por WhatsApp y coordinamos rápido.
                        </p>

                        {/* Botones */}
                        <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-xl">
                            <Link
                                to="/vehiculos"
                                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-[#B68C5A] text-white font-semibold hover:opacity-90 transition"
                            >
                                Ver vehículos disponibles
                            </Link>

                            <a
                                href="https://wa.me/50684944394"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition font-semibold backdrop-blur"
                            >
                                Consultar por WhatsApp
                            </a>
                        </div>

                        {/* Stats (solo lo que pediste mantener: catálogo) */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3 backdrop-blur">
                                <p className="text-white text-xl font-bold">Vehículos en catálogo</p>
                                <p className="text-white/75 text-xs text-center">{vehiculos.length}</p>
                            </div>

                            <div className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3 backdrop-blur">
                                <p className="text-white text-xl font-bold">Ubicación</p>
                                <p className="text-white/75 text-xs text-center">Cartago</p>
                            </div>

                            <div className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3 backdrop-blur">
                                <p className="text-white text-xl font-bold">Horario </p>
                                <p className="text-white/75 text-xs text-center">Lun–Sáb</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 2) FILTRO (MISMO QUE VEHÍCULOS) */}
            <section className="max-w-7xl mx-auto">
                <div className="rounded-3xl bg-white border border-black/10 p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold">Filtrá rápido</h2>
                            <p className="text-sm text-black/60 mt-1">
                                Elegí lo esencial y te llevamos al catálogo.
                            </p>
                        </div>

                        <button
                            onClick={limpiar}
                            className="text-sm font-semibold text-[#56514D] hover:underline self-start sm:self-auto"
                        >
                            Limpiar filtros
                        </button>
                    </div>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <p className={labelClass}>Marca</p>
                            <select
                                value={marca}
                                onChange={(e) => setMarca(e.target.value)}
                                className={`${selectClass} mt-2`}
                            >
                                {marcas.map((m) => (
                                    <option key={m} value={m}>{m}</option>
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
                                    <option key={a} value={a}>{a}</option>
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
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                        <p className="text-sm text-black/60">
                            “Ninguno” = sin filtro
                        </p>

                        <Link
                            to={catalogLink}
                            className="rounded-2xl bg-[#B68C5A] text-white px-5 py-3 flex items-center justify-center font-semibold hover:opacity-90 transition w-full sm:w-auto"
                        >
                            Ir al catálogo
                        </Link>
                    </div>
                </div>
            </section>

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
        </div>
    )
}
