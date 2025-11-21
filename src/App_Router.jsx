/**
 * Configuración de React Router
 * Define todas las rutas de la aplicación
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Importar páginas
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Catering from './pages/Catering';
import Foodtruck from './pages/Foodtruck';
import ClasesCocina from './pages/ClasesCocina';
import Menu from './pages/Menu';
import Eventos from './pages/Eventos';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';

// Páginas legales (placeholders)
import PoliticaPrivacidad from './pages/legal/PoliticaPrivacidad';
import TerminosServicio from './pages/legal/TerminosServicio';
import Cookies from './pages/legal/Cookies';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas con Layout (Header + Footer) */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/sobre-nosotros" element={<Layout><SobreNosotros /></Layout>} />
        
        {/* Servicios */}
        <Route path="/catering" element={<Layout><Catering /></Layout>} />
        <Route path="/foodtruck" element={<Layout><Foodtruck /></Layout>} />
        <Route path="/clases" element={<Layout><ClasesCocina /></Layout>} />
        
        {/* Otras páginas */}
        <Route path="/menu" element={<Layout><Menu /></Layout>} />
        <Route path="/eventos" element={<Layout><Eventos /></Layout>} />
        <Route path="/contacto" element={<Layout><Contacto /></Layout>} />
        
        {/* Blog */}
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
        
        {/* Páginas legales */}
        <Route path="/politica-privacidad" element={<Layout><PoliticaPrivacidad /></Layout>} />
        <Route path="/terminos-servicio" element={<Layout><TerminosServicio /></Layout>} />
        <Route path="/cookies" element={<Layout><Cookies /></Layout>} />
        
        {/* 404 - Página no encontrada */}
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
