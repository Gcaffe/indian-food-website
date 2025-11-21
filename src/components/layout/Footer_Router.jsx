/**
 * Componente Footer - Pie de página del sitio
 * Actualizado para usar React Router Link
 */

import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-india-dark text-white">
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Sobre nosotros */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-india-orange to-india-turquoise rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SI</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Sabores de la India</h3>
                <p className="text-sm text-gray-400">Cocina India Auténtica</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Más de 20 años compartiendo la auténtica cocina india adaptada al paladar europeo. 
              Foodtruck, catering y clases de cocina por toda España.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-india-orange rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-india-orange rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-india-orange rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-india-orange rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-india-orange">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-india-orange transition-colors text-sm">
                  → Inicio
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-gray-300 hover:text-india-orange transition-colors text-sm">
                  → Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-india-orange transition-colors text-sm">
                  → Menú
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-gray-300 hover:text-india-orange transition-colors text-sm">
                  → Próximos Eventos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-india-orange transition-colors text-sm">
                  → Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-india-orange">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catering" className="text-gray-300 hover:text-india-orange transition-colors text-sm">
                  → Catering para Eventos
                </Link>
              </li>
              <li>
                <Link to="/foodtruck" className="text-gray-300 hover:text-india-orange transition-colors text-sm">
                  → Foodtruck para Festivales
                </Link>
              </li>
              <li>
                <Link to="/clases" className="text-gray-300 hover:text-india-orange transition-colors text-sm">
                  → Clases de Cocina India
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-india-orange transition-colors text-sm">
                  → Ver Menú Completo
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-india-orange">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-india-orange mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p className="font-semibold text-white">Madrid, España</p>
                  <p>Servicio móvil por toda España</p>
                </div>
              </li>
              <li>
                <a href="tel:+34XXXXXXXXX" className="flex items-center gap-3 text-gray-300 hover:text-india-orange transition-colors text-sm">
                  <FaPhone className="text-india-orange flex-shrink-0" />
                  <span>+34 XXX XXX XXX</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@saboresdelaindia.com" className="flex items-center gap-3 text-gray-300 hover:text-india-orange transition-colors text-sm">
                  <FaEnvelope className="text-india-orange flex-shrink-0" />
                  <span>info@saboresdelaindia.com</span>
                </a>
              </li>
            </ul>
            
            {/* Horario */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm font-semibold mb-2">Horario de Atención:</p>
              <p className="text-sm text-gray-300">Lun - Vie: 9:00 - 20:00</p>
              <p className="text-sm text-gray-300">Sábado: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            {/* Copyright */}
            <div className="flex items-center gap-1">
              <p>© {currentYear} Sabores de la India. Todos los derechos reservados.</p>
            </div>

            {/* Enlaces legales */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/politica-privacidad" className="hover:text-india-orange transition-colors">
                Política de Privacidad
              </Link>
              <span>•</span>
              <Link to="/terminos-servicio" className="hover:text-india-orange transition-colors">
                Términos de Servicio
              </Link>
              <span>•</span>
              <Link to="/cookies" className="hover:text-india-orange transition-colors">
                Cookies
              </Link>
            </div>

            {/* Crédito */}
            <div className="flex items-center gap-1 text-xs">
              <span>Desarrollado con</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>en Madrid</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter (opcional) */}
      <div className="bg-india-orange/10 border-t border-india-orange/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-1">🌶️ ¡No te pierdas nuestras novedades!</h3>
              <p className="text-sm text-gray-300">Suscríbete para recibir eventos, recetas y ofertas exclusivas</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-india-orange w-full md:w-64"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-india-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
