/**
 * Componente Header - Cabecera principal del sitio
 * Incluye logo, navegación desktop y móvil
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import Button from '../common/Button';
import contentData from '../../config/content.json';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Construir submenu de servicios desde content.json
  const serviciosSubmenu = contentData.home.servicios.map(servicio => ({
    name: servicio.nombre,
    path: servicio.link
  }));

  // Links de navegación
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { 
      name: 'Servicios', 
      path: '#',
      submenu: serviciosSubmenu
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
            <a href="tel:+34663076631" className="flex items-center gap-2 hover:text-india-orange transition-colors">
              <FaPhone className="text-india-orange" />
              <span>+34 663 076 631</span>
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
            <Link to="/" className="flex items-center gap-3">
              {/* Logo temporal - reemplazar con LogoIndia.png */}
              <div className="w-12 h-12 bg-gradient-to-br from-india-orange to-india-turquoise rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SI</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-india-dark leading-tight">
                  Sabores de la India
                </h1>
                <p className="text-xs text-gray-600">Cocina India Auténtica</p>
              </div>
            </Link>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.submenu ? (
                  // Link con submenu
                  <span className="text-india-dark hover:text-india-orange transition-colors font-medium py-2 cursor-pointer">
                    {link.name}
                  </span>
                ) : (
                  // Link normal
                  <Link
                    to={link.path}
                    className="text-india-dark hover:text-india-orange transition-colors font-medium py-2"
                  >
                    {link.name}
                  </Link>
                )}
                
                {/* Submenu (si existe) */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                    {link.submenu.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sublink.path}
                        className="block px-4 py-3 text-india-dark hover:bg-india-cream hover:text-india-orange transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Botón CTA Desktop */}
          <div className="hidden lg:block">
            <Link to="/contacto">
              <Button size="sm">
                Solicitar Presupuesto
              </Button>
            </Link>
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
                {link.submenu ? (
                  <>
                    <span className="block py-3 text-india-dark font-medium border-b border-gray-100">
                      {link.name}
                    </span>
                    {/* Submenu móvil */}
                    <div className="pl-4 bg-india-cream/30">
                      {link.submenu.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sublink.path}
                          className="block py-2 text-sm text-india-dark hover:text-india-orange transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          → {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block py-3 text-india-dark hover:text-india-orange transition-colors font-medium border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Botón CTA móvil */}
            <div className="mt-4">
              <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
                <Button fullWidth size="md">
                  Solicitar Presupuesto
                </Button>
              </Link>
            </div>

            {/* Info de contacto móvil */}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-sm">
              <a href="tel:+34663076631" className="flex items-center gap-2 text-india-dark hover:text-india-orange">
                <FaPhone className="text-india-orange" />
                <span>+34 663 076 631</span>
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