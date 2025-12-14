import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-[#56514D] text-white w-full border-t border-white/10">
            <div className="max-w-5xl mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-center">

                    {/* Marca */}
                    <div className="flex items-start gap-4">
                        <img
                            src="/logo.png"
                            alt="Autos Doña Carmen"
                            className="h-12 w-12 rounded-full object-cover shrink-0"
                        />
                        <div>
                            <h3 className="text-base font-semibold tracking-wide">
                                Nombre
                            </h3>
                            <p className="text-sm text-white/70 mt-1">
                                Venta de vehículos
                            </p>
                            <p className="text-sm text-white/70 mt-2">
                                Costa Rica
                            </p>
                        </div>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="text-sm font-semibold mb-3">
                            Contacto
                        </h4>

                        <div className="flex items-center gap-3 mb-3 justify-center">
                            <a href="https://wa.me/50600000000" target="_blank" rel="noreferrer">
                                <img src="/redes/WhatsApp.png" alt="WhatsApp" className="h-7 w-7 hover:scale-110 transition" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <img src="/redes/Instragram.png" alt="Instagram" className="h-7 w-7 hover:scale-110 transition" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img src="/redes/Facebook.png" alt="Facebook" className="h-7 w-7 hover:scale-110 transition" />
                            </a>
                        </div>

                        <p className="text-xs text-white/60 mt-1 ">
                            Lun–Sáb · 8:00am – 6:00pm
                        </p>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center text-xs text-white/60">
                    <p className="text-center">
                        © {new Date().getFullYear()} Nombre. Todos los derechos reservados.
                    </p>
                </div>

            </div>
        </footer>
    )
}
