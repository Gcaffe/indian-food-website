/**
 * Componente Header - Cabecera principal del sitio
 * Incluye logo, navegación desktop y móvil
 */

import { useState } from 'react';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import Button from '../common/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Links de navegación
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { 
      name: 'Servicios', 
      path: '#',
      submenu: [
        { name: 'Catering', path: '/catering' },
        { name: 'Foodtruck', path: '/foodtruck' },
        { name: 'Clases de Cocina', path: '/clases' },
      ]
    },
    { name: 'Menú', path: '/menu' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Barra superior (info de contacto) - Solo desktop */}
      <div className="hidden lg:block bg-india-dark text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+34 663076631" className="flex items-center gap-2 hover:text-india-orange transition-colors">
              <FaPhone className="text-india-orange" />
              <span>+34 XXX XXX XXX</span>
            </a>
            <a href="mailto:info@saboresdelaindia.com" className="flex items-center gap-2 hover:text-india-orange transition-colors">
              <FaEnvelope className="text-india-orange" />
              <span>info@saboresdelaindia.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>🕐 Lun-Vie: 9:00 - 20:00</span>
          </div>
        </div>
      </div>

      {/* Barra principal de navegación */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              {/* Aquí irá el logo real */}
              <div className="w-12 h-12 bg-gradient-to-br from-india-orange to-india-turquoise rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SI</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-india-dark leading-tight">
                  Sabores de la India
                </h1>
                <p className="text-xs text-gray-600">Cocina India Auténtica</p>
              </div>
            </a>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <a
                  href={link.path}
                  className="text-india-dark hover:text-india-orange transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
                
                {/* Submenu (si existe) */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                    {link.submenu.map((sublink, subIndex) => (
                      <a
                        key={subIndex}
                        href={sublink.path}
                        className="block px-4 py-3 text-india-dark hover:bg-india-cream hover:text-india-orange transition-colors"
                      >
                        {sublink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Botón CTA Desktop */}
          <div className="hidden lg:block">
            <Button size="sm" onClick={() => window.location.href = '/contacto'}>
              Solicitar Presupuesto
            </Button>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-india-dark hover:text-india-orange transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-slide-down">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            {navLinks.map((link, index) => (
              <div key={index}>
                <a
                  href={link.path}
                  className="block py-3 text-india-dark hover:text-india-orange transition-colors font-medium border-b border-gray-100"
                  onClick={() => !link.submenu && setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
                
                {/* Submenu móvil */}
                {link.submenu && (
                  <div className="pl-4 bg-india-cream/30">
                    {link.submenu.map((sublink, subIndex) => (
                      <a
                        key={subIndex}
                        href={sublink.path}
                        className="block py-2 text-sm text-india-dark hover:text-india-orange transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        → {sublink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Botón CTA móvil */}
            <div className="mt-4">
              <Button 
                fullWidth 
                size="md"
                onClick={() => {
                  window.location.href = '/contacto';
                  setMobileMenuOpen(false);
                }}
              >
                Solicitar Presupuesto
              </Button>
            </div>

            {/* Info de contacto móvil */}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-sm">
              <a href="tel:+34XXXXXXXXX" className="flex items-center gap-2 text-india-dark hover:text-india-orange">
                <FaPhone className="text-india-orange" />
                <span>+34 XXX XXX XXX</span>
              </a>
              <a href="mailto:info@saboresdelaindia.com" className="flex items-center gap-2 text-india-dark hover:text-india-orange">
                <FaEnvelope className="text-india-orange" />
                <span>info@saboresdelaindia.com</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
