import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'

import Inicio from './paginas/Inicio'
import Vehiculos from './paginas/VehiculosDispo'
import VehiculoDetalle from './paginas/DetalleVehiculo'
import Promociones from './paginas/Promociones'
import Ubicacion from './paginas/Ubicacion'
import Vendidos from './paginas/Vendidos'
import Clientes from './paginas/Clientes'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAF9] text-black flex flex-col">
        <Navbar />
        <main className="flex-1 w-full">
          <div className="pt-8 pb-16">
            <Routes>
              <Route path="/" element={<Inicio />} />

              <Route path="/vehiculos" element={<Vehiculos />} />
              <Route path="/vehiculos/:id" element={<VehiculoDetalle />} />
              <Route path="/promociones" element={<Promociones />} />
              <Route path="/ubicacion" element={<Ubicacion />} />
              <Route path="/vendidos" element={<Vendidos />} />
              <Route path="/clientes" element={<Clientes />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
