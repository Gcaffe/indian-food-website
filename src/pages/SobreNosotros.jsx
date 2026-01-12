/**
 * Página Sobre Nosotros - Historia y experiencia del negocio
 */

import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-india-cream to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-india-orange to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 font-display">
            Sobre Nosotros
          </h1>
          <p className="text-xl">
            Más de 20 años compartiendo la auténtica cocina india
          </p>
        </div>
      </section>

      {/* Foto principal grande */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
          <img
            src="/images/sobre-nosotros/equipo-principal.jpg"
            alt="Equipo Sabores de la India"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-4xl font-bold mb-2 font-display">
              Sabores de la India
            </h2>
            <p className="text-xl">
              Llevando la auténtica cocina india por toda España desde 2003
            </p>
          </div>
        </div>
      </section>

      {/* Texto principal */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Introducción */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-india-dark mb-6 font-display">
              Nuestra Historia
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong className="text-india-orange">Sabores de la India</strong> nació hace más de dos décadas 
                con una misión clara: compartir la riqueza y autenticidad de la cocina india con el público español. 
                Lo que comenzó como un pequeño proyecto familiar, se ha convertido en una referencia de la gastronomía 
                india móvil en toda España.
              </p>
              
              <p>
                Nuestra historia está marcada por la pasión por las especias, el respeto por las recetas tradicionales 
                y la constante búsqueda de la excelencia en cada plato que preparamos. A lo largo de estos años, 
                hemos tenido el privilegio de participar en centenares de festivales, ferias gastronómicas y eventos 
                privados, llevando los sabores auténticos de la India a miles de personas.
              </p>
            </div>
          </div>

          {/* Filosofía */}
          <div className="mb-10 border-t border-gray-200 pt-10">
            <h2 className="text-3xl font-bold text-india-dark mb-6 font-display">
              Nuestra Filosofía
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                En <strong className="text-india-orange">Sabores de la India</strong>, creemos firmemente que 
                la cocina es un puente cultural. Por eso, mantenemos la autenticidad de las recetas tradicionales 
                indias, pero las adaptamos sutilmente al paladar europeo para crear una experiencia gastronómica 
                que sea a la vez auténtica y accesible.
              </p>
              
              <p>
                Trabajamos exclusivamente con <strong>ingredientes frescos y de calidad</strong>, preparando cada 
                plato al momento para garantizar el máximo sabor y frescura. Nuestras especias son importadas 
                directamente de la India, y nuestras recetas han sido perfeccionadas a lo largo de generaciones.
              </p>
            </div>
          </div>

          {/* Experiencia */}
          <div className="mb-10 border-t border-gray-200 pt-10">
            <h2 className="text-3xl font-bold text-india-dark mb-6 font-display">
              Más de 20 Años de Experiencia
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-india-cream p-6 rounded-lg">
                <div className="text-4xl font-bold text-india-orange mb-2">500+</div>
                <p className="text-gray-700 font-semibold">Eventos realizados</p>
              </div>
              <div className="bg-india-cream p-6 rounded-lg">
                <div className="text-4xl font-bold text-india-orange mb-2">50+</div>
                <p className="text-gray-700 font-semibold">Festivales nacionales</p>
              </div>
              <div className="bg-india-cream p-6 rounded-lg">
                <div className="text-4xl font-bold text-india-orange mb-2">100k+</div>
                <p className="text-gray-700 font-semibold">Personas servidas</p>
              </div>
              <div className="bg-india-cream p-6 rounded-lg">
                <div className="text-4xl font-bold text-india-orange mb-2">20+</div>
                <p className="text-gray-700 font-semibold">Años de trayectoria</p>
              </div>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                A lo largo de nuestra trayectoria, hemos sido parte de los festivales gastronómicos más importantes 
                de España, incluyendo <strong>BioCultura</strong> (Madrid, Barcelona, Valencia), <strong>BeVegui Fest</strong>, 
                <strong>Vegandale</strong>, y decenas de ferias locales en todo el territorio nacional.
              </p>
              
              <p>
                Nuestra especialización en <strong className="text-india-orange">cocina vegana</strong> nos ha 
                convertido en un referente dentro del movimiento plant-based en España, sin dejar de lado nuestra 
                oferta tradicional con carne para eventos más generalistas.
              </p>
            </div>
          </div>

          {/* Servicios */}
          <div className="mb-10 border-t border-gray-200 pt-10">
            <h2 className="text-3xl font-bold text-india-dark mb-6 font-display">
              Nuestros Servicios
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Hoy en día, ofrecemos <strong>dos servicios principales</strong> que se adaptan a todo tipo 
                de eventos y necesidades:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🚚</span>
                  <div>
                    <strong className="text-india-dark">Foodtruck para Festivales:</strong> Nuestro foodtruck 
                    totalmente equipado viaja por toda España llevando cocina india a festivales gastronómicos, 
                    conciertos, ferias y eventos públicos. Capacidad de 200-400 personas por día.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🍽️</span>
                  <div>
                    <strong className="text-india-dark">Catering para Eventos Privados:</strong> Diseñamos menús 
                    personalizados para bodas, cumpleaños, eventos corporativos y celebraciones especiales en la 
                    Comunidad de Madrid. Servicio completo con montaje, personal y coordinación.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Compromiso */}
          <div className="border-t border-gray-200 pt-10">
            <h2 className="text-3xl font-bold text-india-dark mb-6 font-display">
              Nuestro Compromiso
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Estamos comprometidos con la <strong className="text-india-orange">sostenibilidad</strong> y el 
                <strong className="text-india-orange"> consumo responsable</strong>. Por eso trabajamos con 
                proveedores locales siempre que es posible, minimizamos el desperdicio de alimentos y utilizamos 
                envases biodegradables en todos nuestros servicios.
              </p>
              
              <p>
                Además, creemos en la <strong>inclusión gastronómica</strong>. Por eso ofrecemos opciones veganas, 
                vegetarianas, sin gluten y adaptamos nuestros platos a todo tipo de restricciones alimentarias, 
                para que nadie se quede sin disfrutar de la magia de la cocina india.
              </p>
              
              <p className="text-lg font-semibold text-india-dark border-l-4 border-india-orange pl-4 italic">
                "Nuestro objetivo no es solo alimentar, sino crear experiencias memorables que conecten a las 
                personas con la rica cultura gastronómica de la India."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-india-orange to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-display">
            ¿Quieres ser parte de nuestra historia?
          </h2>
          <p className="text-xl mb-8">
            Contáctanos y descubre cómo podemos hacer de tu evento algo inolvidable
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contacto">
              <Button 
                size="lg"
                className="bg-white text-india-orange hover:bg-gray-100 font-semibold"
              >
                Solicitar Presupuesto
              </Button>
            </Link>
            <Link to="/eventos">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-india-orange"
              >
                Ver Próximos Eventos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}