/**
 * Página Eventos - Muestra todos los eventos próximos
 */

import { useState, useEffect } from 'react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import contentData from '../config/content.json';

export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [eventosPasados, setEventosPasados] = useState([]);

  useEffect(() => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    // Obtener eventos desde content.json
    const eventosData = (contentData.eventos || []).filter(e => e.visible !== false);

    // Separar eventos futuros y pasados
    const futuros = eventosData.filter(evento => {
      const fechaEvento = new Date(evento.fechaFin || evento.fechaInicio || evento.fecha);
      fechaEvento.setHours(0, 0, 0, 0);
      return fechaEvento >= hoy;
    }).sort((a, b) => new Date(a.fechaInicio || a.fecha) - new Date(b.fechaInicio || b.fecha));

    const pasados = eventosData.filter(evento => {
      const fechaEvento = new Date(evento.fechaFin || evento.fechaInicio || evento.fecha);
      fechaEvento.setHours(0, 0, 0, 0);
      return fechaEvento < hoy;
    }).sort((a, b) => new Date(b.fechaInicio || b.fecha) - new Date(a.fechaInicio || a.fecha));

    setEventos(futuros);
    setEventosPasados(pasados);
  }, []);

  // Formatear fecha o rango de fechas
  const formatearFecha = (evento) => {
    const fechaInicio = new Date(evento.fechaInicio || evento.fecha);
    const fechaFin = new Date(evento.fechaFin || evento.fechaInicio || evento.fecha);
    
    // Comparar si son el mismo día
    if (fechaInicio.toDateString() === fechaFin.toDateString()) {
      // Evento de un solo día
      return fechaInicio.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } else {
      // Evento de varios días
      const inicio = fechaInicio.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long'
      });
      const fin = fechaFin.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      return `Del ${inicio} al ${fin}`;
    }
  };

  // Renderizar tarjeta de evento
  const EventoCard = ({ evento, esPasado = false }) => (
    <Card className={esPasado ? 'opacity-60' : ''}>
      {evento.imagen && (
        <Card.Image 
          src={evento.imagen} 
          alt={evento.nombre}
          height="h-72"
        />
      )}
      
      <Card.Body>
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {evento.tipoEvento === 'vegano' && (
            <Badge variant="success" size="sm">🌱 Festival Vegano</Badge>
          )}
          {evento.destacado && (
            <Badge variant="primary" size="sm">⭐ Destacado</Badge>
          )}
          {esPasado && (
            <Badge variant="default" size="sm">✓ Finalizado</Badge>
          )}
        </div>

        {/* Título */}
        <Card.Title as="h3" className="text-2xl mb-2">
          {evento.nombre}
        </Card.Title>

        {/* Categoría */}
        <p className="text-sm text-india-orange font-semibold mb-3">
          {evento.categoria}
        </p>

        {/* Fecha y hora */}
        <div className="mb-3 space-y-1">
          <p className="text-sm font-semibold text-india-dark flex items-center gap-2">
            📅 {formatearFecha(evento)}
          </p>
          <p className="text-sm text-gray-600">
            🕐 {evento.horaInicio} - {evento.horaFin}
          </p>
        </div>

        {/* Ubicación */}
        <div className="mb-4 space-y-1">
          <p className="text-sm font-semibold text-india-dark">
            📍 {evento.ubicacion.lugar}
          </p>
          <p className="text-sm text-gray-600">
            {evento.ubicacion.ciudad}, {evento.ubicacion.provincia}
          </p>
        </div>

        {/* Descripción */}
        <Card.Text className="text-sm text-gray-700 mb-4">
          {evento.descripcion}
        </Card.Text>

        {/* Botones */}
        {!esPasado && (
          <div className="flex gap-2">
            {evento.web && (
              <a 
                href={evento.web} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="primary" size="sm" fullWidth>
                  Más Información
                </Button>
              </a>
            )}
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(evento.ubicacion.direccion)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" size="sm" fullWidth>
                📍 Ver Mapa
              </Button>
            </a>
          </div>
        )}
      </Card.Body>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-india-cream to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-india-orange to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4  font-display">
            📅 Próximos Eventos
          </h1>
          <p className="text-xl">
            Ven a visitarnos en nuestros próximos eventos por toda España
          </p>
        </div>
      </section>

      {/* Eventos Próximos */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {eventos.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-india-dark mb-2 font-display">
                🎪 Eventos Próximos
              </h2>
              <p className="text-gray-600">
                ¡Ven a disfrutar de nuestra cocina india en estos eventos!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {eventos.map((evento) => (
                <EventoCard key={evento.id} evento={evento} />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center mb-12">
            <p className="text-2xl text-gray-600 mb-4">
              📅 No hay eventos programados próximamente
            </p>
            <p className="text-gray-500 mb-6">
              Pronto anunciaremos nuestros próximos eventos. ¡Mantente atento!
            </p>
            <a href="/contacto">
              <Button size="lg">
                Solicitar Presupuesto
              </Button>
            </a>
          </div>
        )}
      </section>

      {/* Eventos Pasados (opcional) */}
      {eventosPasados.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-india-dark mb-2 font-display">
              ✓ Eventos Anteriores
            </h2>
            <p className="text-gray-600">
              Algunos de los eventos donde hemos estado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventosPasados.slice(0, 6).map((evento) => (
              <EventoCard key={evento.id} evento={evento} esPasado={true} />
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-india-orange to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-display">
            ¿Quieres que vayamos a tu evento?
          </h2>
          <p className="text-xl mb-8">
            Llevamos nuestro foodtruck a festivales, ferias y eventos privados por toda España
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/foodtruck">
              <Button 
                size="lg"
                className="bg-white text-india-orange hover:bg-gray-100"
              >
                Ver Servicio Foodtruck
              </Button>
            </a>
            <a href="/contacto">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-india-orange"
              >
                Contactar
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
