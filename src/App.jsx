import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'

import Vehiculos from './paginas/Vehiculos'
import VehiculoDetalle from './paginas/VehiculoDetalle'
import Promociones from './paginas/Promociones'
import Ubicacion from './paginas/Ubicacion'
import Vendidos from './paginas/Vendidos'
import Clientes from './paginas/Clientes'
import Historia from './paginas/Historia'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FAFAF9] text-black">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Navigate to="/vehiculos" replace />} />

            <Route path="/vehiculos" element={<Vehiculos />} />
            <Route path="/vehiculos/:id" element={<VehiculoDetalle  />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/ubicacion" element={<Ubicacion />} />
            <Route path="/vendidos" element={<Vendidos />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/historia" element={<Historia />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
