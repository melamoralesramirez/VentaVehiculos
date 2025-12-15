export default function Ubicacion() {
  const googleMaps =
    "https://www.google.com/maps?q=9.8646,-83.9194"

  const waze =
    "https://waze.com/ul?ll=9.8646,-83.9194&navigate=yes"

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Nuestra ubicación
        </h1>

        <p className="mt-2 text-black/60">
          Estamos ubicados en Cartago, Costa Rica.  
          Podés llegar fácilmente usando Google Maps o Waze.
        </p>

        {/* Botones */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={googleMaps}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#56514D] text-white px-6 py-3 font-semibold hover:opacity-90 transition"
          >
            <img
              src="/ubicaciones/googlemaps.png"
              alt="Google Maps"
              className="h-5 w-5"
            />
            Abrir en Google Maps
          </a>

          <a
            href={waze}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#B68C5A] text-white px-6 py-3 font-semibold hover:opacity-90 transition"
          >
            <img
              src="/ubicaciones/Waze.png"
              alt="Waze"
              className="h-5 w-5"
            />
            Abrir en Waze
          </a>
        </div>
      </div>
    </section>
  )
}
