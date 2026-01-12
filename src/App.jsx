import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Importar páginas
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Catering from './pages/Catering';
import Foodtruck from './pages/Foodtruck';
{/*import ClasesCocina from './pages/ClasesCocina';*/}
import Menu from './pages/Menu';
import Eventos from './pages/Eventos';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';

// Páginas legales (opcionales)
import PoliticaPrivacidad from './pages/legal/PoliticaPrivacidad';
import TerminosServicio from './pages/legal/TerminosServicio';
import Cookies from './pages/legal/Cookies';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Home />} />
          
          {/* Sobre nosotros */}
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          
          {/* Servicios */}
          <Route path="/catering" element={<Catering />} />
          <Route path="/foodtruck" element={<Foodtruck />} />
          {/* <Route path="/clases" element={<ClasesCocina />} /> */}
          
          {/* Otras páginas */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contacto />} />
          
          {/* Páginas legales */}
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-servicio" element={<TerminosServicio />} />
          <Route path="/cookies" element={<Cookies />} />
          
          {/* 404 - Página no encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;