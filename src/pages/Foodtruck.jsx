/**
 * Página Foodtruck - Servicio de Foodtruck móvil
 * Versión A: Estructura clásica
 */

import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import contentData from '../config/content.json';

export default function Foodtruck() {
  // Obtener próximos eventos
  const getProximosEventos = () => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    return contentData.eventos
      .filter(e => {
        const fechaFin = new Date((e.fechaFin || e.fechaInicio || e.fecha) + 'T23:59:59');
        return fechaFin >= hoy;
      })
      .sort((a, b) => new Date(a.fechaInicio || a.fecha) - new Date(b.fechaInicio || b.fecha))
      .slice(0, 3); // Mostrar solo los 3 próximos
  };

  const proximosEventos = getProximosEventos();

  // Formatear fecha
  const formatearFecha = (fechaInicio, fechaFin) => {
    const inicio = new Date(fechaInicio + 'T00:00:00').toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long'
    });
    
    if (fechaFin && fechaFin !== fechaInicio) {
      const fin = new Date(fechaFin + 'T00:00:00').toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      return `${inicio} al ${fin}`;
    }
    
    return inicio;
  };

  // Ventajas del foodtruck
  const ventajas = [
    {
      icono: '🚚',
      titulo: 'Movilidad Total',
      descripcion: 'Llevamos nuestra cocina a cualquier punto de España. Tu eliges el lugar, nosotros ponemos el sabor.'
    },
    {
      icono: '🍛',
      titulo: 'Cocina Fresca',
      descripcion: 'Preparamos cada plato al momento con ingredientes frescos. La misma calidad que en un restaurante.'
    },
    {
      icono: '⚡',
      titulo: 'Montaje Rápido',
      descripcion: 'Equipo autónomo listo para funcionar en menos de 1 hora. Mínimos requisitos de espacio.'
    },
    {
      icono: '👥',
      titulo: 'Gran Capacidad',
      descripcion: 'Podemos servir de 200 a 400 personas al día según el tipo de evento y menú seleccionado.'
    }
  ];

  // Fotos de eventos (placeholders - reemplazar con fotos reales)
  const fotosEventos = [
    {
      imagen: '/images/foodtruck/biocultura-madrid.jpg',
      evento: 'BioCultura Madrid',
      año: '2024',
      ubicacion: 'IFEMA'
    },
    {
      imagen: '/images/foodtruck/festival-musica.jpg',
      evento: 'Festival de las Culturas',
      año: '2024',
      ubicacion: 'Madrid'
    },
    {
      imagen: '/images/foodtruck/feria-gastronomica.jpg',
      evento: 'Feria Gastronómica',
      año: '2024',
      ubicacion: 'Valencia'
    },
    {
      imagen: '/images/foodtruck/bevegui-fest.jpg',
      evento: 'BeVegui Fest',
      año: '2024',
      ubicacion: 'Valencia'
    },
    {
      imagen: '/images/foodtruck/street-food.jpg',
      evento: 'Street Food Festival',
      año: '2024',
      ubicacion: 'Barcelona'
    },
    {
      imagen: '/images/foodtruck/concierto.jpg',
      evento: 'Concierto al Aire Libre',
      año: '2024',
      ubicacion: 'Sevilla'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-india-cream to-white">
      {/* Hero Section - Imagen grande del foodtruck */}
      <section className="relative bg-india-dark text-white overflow-hidden">
        <div className="relative h-[600px]">
          {/* Imagen de fondo */}
          <img
            src="/images/foodtruck/hero-foodtruck.jpg"
            alt="Foodtruck Sabores de la India"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          
          {/* Contenido */}
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
            <div className="max-w-2xl">
              <Badge variant="success" className="mb-4 bg-green-500">
                🌱 Menú 100% Vegano Disponible
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Foodtruck de Cocina India
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200">
                Llevamos la auténtica cocina india a festivales, conciertos y eventos por toda España
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contacto">
                  <Button size="lg" className="bg-india-orange hover:bg-orange-600">
                    Solicitar Presupuesto
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-india-orange"
                  >
                    Ver Menú
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción de Ventajas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-india-dark mb-4">
              ¿Por Qué Nuestro Foodtruck?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 20 años de experiencia llevando cocina india de calidad a eventos por toda España
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ventajas.map((ventaja, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-india-cream hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">{ventaja.icono}</div>
                <h3 className="text-xl font-bold text-india-dark mb-3">
                  {ventaja.titulo}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {ventaja.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Eventos */}
      <section className="py-16 bg-gradient-to-b from-white to-india-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-india-dark mb-4">
              Nos Han Visto En...
            </h2>
            <p className="text-xl text-gray-600">
              Presentes en los festivales más importantes de España
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fotosEventos.map((foto, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-64">
                  <img
                    src={foto.imagen}
                    alt={foto.evento}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{foto.evento}</h3>
                    <p className="text-sm text-gray-200">
                      {foto.ubicacion} • {foto.año}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/eventos">
              <Button size="lg" variant="outline">
                Ver Todos los Eventos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Qué Ofrecemos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-india-dark mb-4">
              ¿Qué Incluye Nuestro Servicio?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Columna 1: Especificaciones */}
            <div className="bg-india-cream rounded-lg p-8">
              <h3 className="text-2xl font-bold text-india-dark mb-6 flex items-center gap-2">
                <span className="text-3xl">📋</span>
                Especificaciones Técnicas
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-india-dark mb-2 flex items-center gap-2">
                    <span>👥</span> Capacidad
                  </h4>
                  <p className="text-gray-700 pl-6">
                    De 200 a 400 personas por día, según tipo de evento y menú seleccionado
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-india-dark mb-2 flex items-center gap-2">
                    <span>📏</span> Requisitos de Espacio
                  </h4>
                  <p className="text-gray-700 pl-6">
                    Mínimo 20m² para instalación del foodtruck<br/>
                    Acceso para vehículo de 6 metros de largo
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-india-dark mb-2 flex items-center gap-2">
                    <span>⚡</span> Energía
                  </h4>
                  <p className="text-gray-700 pl-6">
                    Generador eléctrico propio incluido<br/>
                    También podemos conectarnos a toma externa (16A)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-india-dark mb-2 flex items-center gap-2">
                    <span>🕐</span> Montaje
                  </h4>
                  <p className="text-gray-700 pl-6">
                    Listo para servir en menos de 1 hora<br/>
                    Desmontaje: 30 minutos
                  </p>
                </div>
              </div>
            </div>

            {/* Columna 2: Menús y Opciones */}
            <div className="bg-gradient-to-br from-india-orange to-orange-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-3xl">🍛</span>
                Menús Disponibles
              </h3>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Badge.Vegano size="sm" className="bg-green-500" />
                    Menú 100% Vegano
                  </h4>
                  <p className="text-sm text-gray-100">
                    Ideal para festivales veganos (BioCultura, BeVegui, etc.)<br/>
                    Samosa, Pakoras, Biryani, Tikka Masala vegano
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold mb-2">
                    🍗 Menú Completo
                  </h4>
                  <p className="text-sm text-gray-100">
                    Para festivales gastronómicos generales<br/>
                    Incluye opciones veganas + platos con pollo
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold mb-2">
                    🎨 Menú Personalizado
                  </h4>
                  <p className="text-sm text-gray-100">
                    Adaptamos el menú según tu evento<br/>
                    Sin gluten, picante suave, raciones especiales
                  </p>
                </div>

                <div className="border-t border-white/20 pt-4 mt-4">
                  <p className="text-sm">
                    <strong>Incluye:</strong> Vajilla compostable, servilletas,
                    cubiertos biodegradables
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tipos de eventos ideales */}
          <div className="mt-12 bg-india-cream rounded-lg p-8">
            <h3 className="text-2xl font-bold text-india-dark mb-6 text-center">
              🎪 Ideal Para Estos Eventos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                '🎵 Festivales de Música',
                '🌱 Ferias Veganas',
                '🍴 Ferias Gastronómicas',
                '🎨 Eventos Culturales',
                '⚽ Eventos Deportivos',
                '🏢 Eventos Corporativos',
                '🎉 Celebraciones Privadas',
                '📅 Mercados Semanales'
              ].map((tipo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <p className="font-semibold text-india-dark text-sm">{tipo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      {proximosEventos.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-india-cream to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-india-dark mb-4">
                📅 Ven a Visitarnos
              </h2>
              <p className="text-xl text-gray-600">
                Estos son nuestros próximos eventos confirmados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proximosEventos.map((evento) => (
                <Card key={evento.id} className="hover:shadow-xl transition-shadow">
                  {evento.imagen && (
                    <Card.Image src={evento.imagen} alt={evento.nombre} height="h-48" />
                  )}
                  <Card.Body>
                    <div className="flex gap-2 mb-3">
                      {evento.tipoEvento === 'vegano' && (
                        <Badge variant="success" size="sm">
                          🌱 Festival Vegano
                        </Badge>
                      )}
                      {evento.destacado && (
                        <Badge variant="primary" size="sm">
                          ⭐ Destacado
                        </Badge>
                      )}
                    </div>
                    
                    <Card.Title as="h3" className="text-xl mb-2">
                      {evento.nombre}
                    </Card.Title>
                    
                    <p className="text-sm text-india-orange font-semibold mb-3">
                      {evento.categoria}
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p className="flex items-center gap-2">
                        <span>📅</span>
                        {formatearFecha(evento.fechaInicio || evento.fecha, evento.fechaFin)}
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📍</span>
                        {evento.ubicacion?.ciudad || evento.ciudad}
                      </p>
                      <p className="flex items-center gap-2">
                        <span>🕐</span>
                        {evento.horaInicio} - {evento.horaFin}
                      </p>
                    </div>
                    
                    {evento.web && (
                      <a 
                        href={evento.web}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" fullWidth variant="outline">
                          Más Información
                        </Button>
                      </a>
                    )}
                  </Card.Body>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/eventos">
                <Button size="lg" variant="outline">
                  Ver Todos los Eventos
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* SECCIÓN TESTIMONIOS - Preparada pero comentada */}
      {/* Descomentar cuando tengas testimonios reales */}
      {/*
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-india-dark mb-4">
              💬 Lo Que Dicen de Nosotros
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                nombre: "Nombre del Organizador",
                evento: "Festival X",
                texto: "Testimonio aquí...",
                foto: "/images/testimonios/persona1.jpg"
              }
            ].map((testimonio, index) => (
              <Card key={index} className="text-center">
                <Card.Body>
                  <div className="w-20 h-20 bg-india-orange rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {testimonio.nombre.charAt(0)}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonio.texto}"
                  </p>
                  <p className="font-bold text-india-dark">{testimonio.nombre}</p>
                  <p className="text-sm text-gray-600">{testimonio.evento}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Call to Action Final */}
      <section className="py-16 bg-gradient-to-r from-india-orange to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Quieres que Vayamos a Tu Evento?
          </h2>
          <p className="text-xl mb-4">
            Solicita tu presupuesto sin compromiso
          </p>
          <p className="text-lg mb-8 text-gray-100">
            Respondemos en menos de 24 horas • Presupuestos personalizados • 20+ años de experiencia
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contacto">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white bg-india-orange hover:bg-orange-600"
              >
                📧 Solicitar Presupuesto
              </Button>
            </Link>
            <a href="tel:+34663076631">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white bg-india-orange hover:bg-orange-600"
              >
                📱 Llamar Ahora
              </Button>
            </a>
            <a href="https://wa.me/34663076631" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white bg-india-orange hover:bg-orange-600"
              >
                💬 WhatsApp
              </Button>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm">
              También ofrecemos: 
              <Link to="/catering" className="underline hover:text-india-cream mx-2">
                Catering para Eventos Privados
              </Link>
              •
              <Link to="/clases" className="underline hover:text-india-cream mx-2">
                Clases de Cocina India
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}