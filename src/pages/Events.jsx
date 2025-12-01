import { useState, useMemo } from 'react';
import contentData from '../config/content.json';

export default function Events() {
  const [filtro, setFiltro] = useState('futuros'); // 'todos', 'futuros', 'pasados'

  // Función para determinar si un evento está en curso o es futuro
  const getEstadoEvento = (evento) => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const inicio = new Date(evento.fechaInicio);
    const fin = new Date(evento.fechaFin);
    
    if (hoy >= inicio && hoy <= fin) {
      return 'en-curso';
    } else if (hoy < inicio) {
      return 'futuro';
    } else {
      return 'pasado';
    }
  };

  // Formatear fechas en español
  const formatearFecha = (fecha) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', options);
  };

  // Obtener días de diferencia
  const getDiasRestantes = (fechaInicio) => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const inicio = new Date(fechaInicio);
    const diferencia = Math.ceil((inicio - hoy) / (1000 * 60 * 60 * 24));
    return diferencia;
  };

  // Filtrar y ordenar eventos
  const eventosFiltrados = useMemo(() => {
    let eventos = [...contentData.eventos];
    
    // Ordenar por fecha de inicio (más cercano primero)
    eventos.sort((a, b) => new Date(a.fechaInicio) - new Date(b.fechaInicio));
    
    // Aplicar filtro
    if (filtro === 'futuros') {
      eventos = eventos.filter(e => {
        const estado = getEstadoEvento(e);
        return estado === 'futuro' || estado === 'en-curso';
      });
    } else if (filtro === 'pasados') {
      eventos = eventos.filter(e => getEstadoEvento(e) === 'pasado');
    }
    
    return eventos;
  }, [filtro]);

  // Badge para el estado
  const EstadoBadge = ({ evento }) => {
    const estado = getEstadoEvento(evento);
    
    if (estado === 'en-curso') {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
          🎉 AHORA
        </span>
      );
    } else if (estado === 'futuro') {
      const dias = getDiasRestantes(evento.fechaInicio);
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
          📅 En {dias} {dias === 1 ? 'día' : 'días'}
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-600">
          ✓ Finalizado
        </span>
      );
    }
  };

  return (
    <div className="min-h-screen bg-india-cream">
      {/* Hero de la página */}
      <div className="bg-india-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Nuestros Eventos</h1>
          <p className="text-xl text-gray-300">
            Descubre dónde estaremos próximamente con nuestro FoodTruck
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={() => setFiltro('futuros')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              filtro === 'futuros'
                ? 'bg-india-orange text-white shadow-lg'
                : 'bg-white text-india-dark hover:bg-india-cream'
            }`}
          >
            Próximos Eventos
          </button>
          <button
            onClick={() => setFiltro('todos')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              filtro === 'todos'
                ? 'bg-india-orange text-white shadow-lg'
                : 'bg-white text-india-dark hover:bg-india-cream'
            }`}
          >
            Todos los Eventos
          </button>
          <button
            onClick={() => setFiltro('pasados')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              filtro === 'pasados'
                ? 'bg-india-orange text-white shadow-lg'
                : 'bg-white text-india-dark hover:bg-india-cream'
            }`}
          >
            Eventos Pasados
          </button>
        </div>

        {/* Tabla de eventos - Vista Desktop */}
        <div className="hidden lg:block bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-india-dark text-white">
              <tr>
                <th className="px-6 py-4 text-left">Estado</th>
                <th className="px-6 py-4 text-left">Ciudad</th>
                <th className="px-6 py-4 text-left">Evento</th>
                <th className="px-6 py-4 text-left">Fecha Inicio</th>
                <th className="px-6 py-4 text-left">Fecha Fin</th>
                <th className="px-6 py-4 text-left">Ubicación</th>
                <th className="px-6 py-4 text-left">Horario</th>
              </tr>
            </thead>
            <tbody>
              {eventosFiltrados.map((evento, index) => (
                <tr
                  key={evento.id}
                  className={`border-b hover:bg-india-cream transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4">
                    <EstadoBadge evento={evento} />
                  </td>
                  <td className="px-6 py-4 font-semibold text-india-dark">
                    {evento.ciudad}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-semibold text-india-dark">
                        {evento.evento}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {evento.descripcion}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {formatearFecha(evento.fechaInicio)}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {formatearFecha(evento.fechaFin)}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {evento.ubicacion}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {evento.horario}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards de eventos - Vista Mobile */}
        <div className="lg:hidden space-y-4">
          {eventosFiltrados.map((evento) => (
            <div
              key={evento.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-india-dark">
                    {evento.evento}
                  </h3>
                  <EstadoBadge evento={evento} />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-24">📍 Ciudad:</span>
                    <span>{evento.ciudad}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-24">📅 Inicio:</span>
                    <span>{formatearFecha(evento.fechaInicio)}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-24">📅 Fin:</span>
                    <span>{formatearFecha(evento.fechaFin)}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-24">📍 Lugar:</span>
                    <span>{evento.ubicacion}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-24">🕐 Horario:</span>
                    <span>{evento.horario}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-600">{evento.descripcion}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay eventos */}
        {eventosFiltrados.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-2xl font-bold text-india-dark mb-2">
              No hay eventos en esta categoría
            </h3>
            <p className="text-gray-600">
              Prueba con otro filtro para ver más eventos
            </p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-india-orange text-white py-16 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Quieres que vayamos a tu evento?
          </h2>
          <p className="text-xl mb-8">
            Contáctanos para llevar nuestro FoodTruck a tu festival, celebración o evento corporativo
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-india-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </div>
  );
}
