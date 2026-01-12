import { Link } from 'react-router-dom';
import contentData from '../config/content.json';

export default function Home() {
  const { hero, servicios, sobreNosotros } = contentData.home;

  // Función para encontrar el evento relevante (activo más cercano)
  const getEventoActual = () => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    const eventosFuturos = contentData.eventos
      .filter(e => {
        const fechaFin = new Date((e.fechaFin || e.fechaInicio || e.fecha) + 'T23:59:59');
        return fechaFin >= hoy;
      })
      .sort((a, b) => new Date(a.fechaInicio || a.fecha) - new Date(b.fechaInicio || b.fecha));
    
    return eventosFuturos[0] || null;
  };

  // Función para determinar el título del evento
  const getTituloEvento = (evento) => {
    if (!evento) return null;
    
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    // Crear fechas en zona horaria local (no UTC)
    const inicio = new Date((evento.fechaInicio || evento.fecha) + 'T00:00:00');
    const fin = new Date((evento.fechaFin || evento.fechaInicio || evento.fecha) + 'T23:59:59');
    
    if (hoy >= inicio && hoy <= fin) {
      return "🎉 AHORA ESTAMOS EN...";
    } else {
      return "📅 PRÓXIMO EVENTO";
    }
  };

  // Formatear fechas
  const formatearFecha = (fecha) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(fecha + 'T00:00:00').toLocaleDateString('es-ES', options);
  };

  const eventoActual = getEventoActual();

  return (
    <div className="min-h-screen bg-india-cream">
      {/* Hero Section - Imagen grande con texto a la izquierda */}
      <section className="relative bg-india-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
            {/* Texto a la izquierda */}
            <div className="px-8 py-16 lg:py-24 z-10">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
                {hero.titulo}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-india-orange mb-6 font-display">
                {hero.subtitulo}
              </h2>
              <p className="text-lg mb-8 text-gray-300 leading-relaxed">
                {hero.descripcion}
              </p>
              <a
                href={hero.linkBoton}
                className="inline-block bg-india-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {hero.textoBoton}
              </a>
            </div>

            {/* Imagen a la derecha */}
            <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
              <img
                src={hero.imagen}
                alt="FoodTruck Sabores de la India"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-india-dark via-transparent to-transparent lg:hidden"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Evento Actual/Próximo */}
      {eventoActual && (
        <section className="py-12 bg-gradient-to-r from-india-orange to-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
                {getTituloEvento(eventoActual)}
              </h2>
            </div>
            
            <div className="bg-white text-india-dark rounded-lg shadow-2xl overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Información del evento */}
                <div className="p-8">
                  <div className="mb-4 flex gap-2">
                    <span className="inline-block bg-india-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {eventoActual.ubicacion?.ciudad || eventoActual.ciudad}
                    </span>
                    {eventoActual.tipoEvento === 'vegano' && (
                      <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        🌱 Festival Vegano
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-india-dark">
                    {eventoActual.nombre || eventoActual.evento}
                  </h3>
                  
                  <p className="text-sm text-india-orange font-semibold mb-4">
                    {eventoActual.categoria}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📅</span>
                      <div>
                        <p className="text-sm text-gray-600">Fecha</p>
                        <p className="font-semibold">
                          {formatearFecha(eventoActual.fechaInicio || eventoActual.fecha)}
                          {eventoActual.fechaFin && eventoActual.fechaFin !== eventoActual.fechaInicio && 
                            ` - ${formatearFecha(eventoActual.fechaFin)}`
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📍</span>
                      <div>
                        <p className="text-sm text-gray-600">Ubicación</p>
                        <p className="font-semibold">
                          {eventoActual.ubicacion?.lugar || eventoActual.ubicacion}
                        </p>
                        <p className="text-sm text-gray-600">
                          {eventoActual.ubicacion?.ciudad && eventoActual.ubicacion?.provincia && 
                            `${eventoActual.ubicacion.ciudad}, ${eventoActual.ubicacion.provincia}`
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🕐</span>
                      <div>
                        <p className="text-sm text-gray-600">Horario</p>
                        <p className="font-semibold">
                          {eventoActual.horaInicio || eventoActual.horario} - {eventoActual.horaFin || ''}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {eventoActual.descripcion}
                  </p>
                  
                  <div className="flex gap-3">
                    <Link
                      to="/eventos"
                      className="inline-block bg-india-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                    >
                      Ver Más Detalles
                    </Link>
                    {eventoActual.web && (
                      
                      <a  href={eventoActual.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-india-orange text-india-orange px-6 py-3 rounded-lg font-semibold hover:bg-india-orange hover:text-white transition-colors duration-300"
                      >
                        Sitio Web
                      </a>
                    )}
                  </div>
                </div>

                {/* Imagen del evento */}
                <div className="hidden md:block relative h-full min-h-[400px]">
                  <img
                    src={eventoActual.imagen}
                    alt={eventoActual.nombre || eventoActual.evento}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sección: Por qué elegirnos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-india-dark mb-12 font-display">
            {sobreNosotros.titulo}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sobreNosotros.items.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-india-cream hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{item.icono}</div>
                <h3 className="text-xl font-bold text-india-dark mb-3">
                  {item.titulo}
                </h3>
                <p className="text-gray-600">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: Nuestros Servicios */}
      <section id="servicios" className="py-16 bg-india-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-india-dark mb-4 font-display">
            Nuestros Servicios
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Descubre cómo podemos hacer de tu evento una experiencia inolvidable
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicios.map((servicio) => (
              <div
                key={servicio.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Imagen del servicio */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={servicio.imagen}
                    alt={servicio.nombre}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
                    {servicio.icono}
                  </div>
                </div>

                {/* Contenido de la card */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-india-dark mb-3">
                    {servicio.titulo}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {servicio.descripcion}
                  </p>
                  <Link
                    to={servicio.link}
                    className="inline-block w-full text-center bg-india-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                  >
                    {servicio.textoBoton}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección: Call to Action */}
      <section className="py-16 bg-india-orange text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-display">
            ¿Listo para disfrutar de auténtica cocina india?
          </h2>
          <p className="text-xl mb-8">
            Contáctanos y cuéntanos sobre tu evento. Te preparamos una propuesta personalizada.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-india-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </section>
    </div>
  );
}