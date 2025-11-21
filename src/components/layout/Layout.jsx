/**
 * Componente Layout - Envuelve todas las páginas
 * Incluye Header arriba, Footer abajo, y el contenido en medio
 */

import Header from './Header_Router';
import Footer from './Footer_Router';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header fijo arriba */}
      <Header />
      
      {/* Contenido principal - crece para ocupar espacio disponible */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer al final */}
      <Footer />
    </div>
  );
}
