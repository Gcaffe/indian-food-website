/**
 * Página Catering - Servicio de catering para eventos privados
 * Enfoque: Elegancia, personalización, servicio completo
 */

import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';

export default function Catering() {
  // Ventajas del catering
  const ventajas = [
    {
      icono: '🎨',
      titulo: 'Menús Personalizados',
      descripcion: 'Diseñamos el menú perfecto para tu evento. Adaptamos cada plato a tus preferencias y necesidades dietéticas.'
    },
    {
      icono: '👨‍🍳',
      titulo: 'Servicio Completo',
      descripcion: 'No solo comida: incluimos montaje, personal profesional, vajilla, mantelería y coordinación del servicio.'
    },
    {
      icono: '📍',
      titulo: 'Tu Ubicación',
      descripcion: 'Vamos donde tú decidas: fincas, hoteles, jardines, oficinas o tu propio hogar en Madrid.'
    },
    {
      icono: '⭐',
      titulo: '20+ Años',
      descripcion: 'Más de dos décadas creando experiencias gastronómicas memorables en eventos especiales.'
    }
  ];

  // Tipos de eventos
  const tiposEventos = [
    {
      icono: '💍',
      titulo: 'Bodas & Aniversarios',
      descripcion: 'El día más especial merece un menú único. Creamos experiencias gastronómicas inolvidables.',
      capacidad: '50-200 personas',
      destacado: true
    },
    {
      icono: '🏢',
      titulo: 'Eventos Corporativos',
      descripcion: 'Reuniones de empresa, conferencias y presentaciones con servicio profesional.',
      capacidad: '20-150 personas',
      destacado: false
    },
    {
      icono: '🎂',
      titulo: 'Cumpleaños',
      descripcion: 'Celebraciones familiares y de amigos con menús adaptados a todos los gustos.',
      capacidad: '20-80 personas',
      destacado: false
    },
    {
      icono: '🤝',
      titulo: 'Team Building',
      descripcion: 'Fortalece el equipo de trabajo con una experiencia gastronómica compartida.',
      capacidad: '20-100 personas',
      destacado: false
    },
    {
      icono: '🍸',
      titulo: 'Cócteles & Recepciones',
      descripcion: 'Canapés y aperitivos elegantes para eventos de networking y recepciones.',
      capacidad: '30-150 personas',
      destacado: false
    },
    {
      icono: '🎉',
      titulo: 'Fiestas Privadas',
      descripcion: 'Cualquier celebración en fincas, jardines o espacios privados.',
      capacidad: '20-120 personas',
      destacado: false
    }
  ];

  // Nuestro proceso
  const proceso = [
    {
      numero: '1',
      titulo: 'Consulta Inicial',
      descripcion: 'Hablamos contigo para entender tu visión del evento. Consulta gratuita y sin compromiso.',
      duracion: 'Gratuito'
    },
    {
      numero: '2',
      titulo: 'Propuesta Personalizada',
      descripcion: 'Diseñamos un menú a medida y te enviamos presupuesto detallado en 24-48 horas.',
      duracion: '1-2 días'
    },
    {
      numero: '3',
      titulo: 'Degustación (Opcional)',
      descripcion: 'Para bodas y eventos grandes, ofrecemos degustación previa del menú seleccionado.',
      duracion: 'Opcional'
    },
    {
      numero: '4',
      titulo: 'Día del Evento',
      descripcion: 'Nuestro equipo llega con antelación, monta todo y coordina el servicio de principio a fin.',
      duracion: 'Tu evento'
    }
  ];

  // Opciones de servicio
  const opcionesMenu = [
    {
      nombre: 'Servicio de Mesa',
      descripcion: 'Formal y elegante. Ideal para bodas y eventos de gala.',
      incluye: ['Entrada', 'Plato principal', 'Postre', 'Personal de servicio', 'Vajilla de cerámica', 'Mantelería'],
      ideal: 'Bodas, aniversarios, cenas de gala'
    },
    {
      nombre: 'Buffet Libre',
      descripcion: 'Variedad y libertad de elección. Perfecto para eventos corporativos.',
      incluye: ['5-8 platos variados', 'Estación de ensaladas', 'Pan y bebidas', 'Montaje de buffet', 'Personal de apoyo'],
      ideal: 'Eventos corporativos, cumpleaños grandes'
    },
    {
      nombre: 'Cóctel / Canapés',
      descripcion: 'Elegante y dinámico. Para recepciones y networking.',
      incluye: ['10-12 variedades de canapés', 'Servicio de bandeja', 'Personal de sala', 'Bebidas y refrescos'],
      ideal: 'Inauguraciones, recepciones, networking'
    }
  ];

  // Galería de eventos (placeholders)
  const galeriaEventos = [
    {
      imagen: '/images/catering/boda-1.jpg',
      tipo: 'Boda',
      descripcion: 'Celebración elegante para 120 invitados',
      ubicacion: 'Finca La Romaní, Madrid'
    },
    {
      imagen: '/images/catering/corporativo-1.jpg',
      tipo: 'Evento Corporativo',
      descripcion: 'Presentación de producto',
      ubicacion: 'Hotel Ritz, Madrid'
    },
    {
      imagen: '/images/catering/cumpleanos-1.jpg',
      tipo: 'Cumpleaños',
      descripcion: 'Celebración familiar 50 aniversario',
      ubicacion: 'Jardín privado, Las Rozas'
    },
    {
      imagen: '/images/catering/buffet-1.jpg',
      tipo: 'Buffet',
      descripcion: 'Buffet corporativo variado',
      ubicacion: 'Oficinas centrales, Madrid'
    },
    {
      imagen: '/images/catering/servicio-mesa.jpg',
      tipo: 'Servicio de Mesa',
      descripcion: 'Cena de gala formal',
      ubicacion: 'Palacio de congresos'
    },
    {
      imagen: '/images/catering/coctel-1.jpg',
      tipo: 'Cóctel',
      descripcion: 'Recepción de empresa',
      ubicacion: 'Centro de negocios, Madrid'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-india-cream">
      {/* Hero Section - Elegante */}
      <section className="relative bg-india-dark text-white overflow-hidden">
        <div className="relative h-[600px]">
          {/* Imagen de fondo */}
          <img
            src="/images/catering/hero-catering.jpg"
            alt="Catering Sabores de la India"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay elegante */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          
          {/* Contenido */}
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-india-gold text-india-dark font-semibold">
                ✨ Servicio Completo en Madrid
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-display">
                Catering para Eventos Especiales
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200">
                Menús personalizados y servicio profesional para bodas, eventos corporativos y celebraciones privadas
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contacto">
                  <Button size="lg" className="bg-india-gold text-india-dark hover:bg-yellow-400 font-semibold">
                    Solicitar Presupuesto
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-india-dark"
                  >
                    Ver Menú Base
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas del Catering */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-india-dark mb-4 font-display">
              ¿Por Qué Nuestro Catering?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 20 años creando experiencias gastronómicas memorables en eventos especiales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ventajas.map((ventaja, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gradient-to-b from-india-cream to-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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

      {/* Tipos de Eventos */}
      <section className="py-16 bg-gradient-to-b from-india-cream to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-india-dark mb-4 font-display">
              Eventos Que Hacemos Especiales
            </h2>
            <p className="text-xl text-gray-600">
              Cada evento es único, cada menú es personalizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiposEventos.map((evento, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  evento.destacado ? 'ring-2 ring-india-gold' : ''
                }`}
              >
                <Card.Body>
                  <div className="text-center">
                    <div className="text-5xl mb-4">{evento.icono}</div>
                    {evento.destacado && (
                      <Badge variant="primary" size="sm" className="mb-3 bg-india-gold text-india-dark">
                        ⭐ Especialidad
                      </Badge>
                    )}
                    <Card.Title as="h3" className="text-2xl mb-3 font-display">
                      {evento.titulo}
                    </Card.Title>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {evento.descripcion}
                    </p>
                    <div className="inline-block bg-india-cream px-4 py-2 rounded-full">
                      <p className="text-sm font-semibold text-india-dark">
                        👥 {evento.capacidad}
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              <strong>Nota:</strong> Para eventos con menos de 20 personas, consultar disponibilidad y condiciones especiales.
            </p>
          </div>
        </div>
      </section>

      {/* Qué Incluye el Servicio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-india-dark mb-4 font-display">
              Servicio Completo Incluido
            </h2>
            <p className="text-xl text-gray-600">
              No solo comida: una experiencia gastronómica integral
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {opcionesMenu.map((opcion, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <Card.Body>
                  <h3 className="text-2xl font-bold text-india-dark mb-3 font-display">
                    {opcion.nombre}
                  </h3>
                  <p className="text-gray-600 mb-4 italic">
                    {opcion.descripcion}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-india-dark mb-2">Incluye:</h4>
                    <ul className="space-y-2">
                      {opcion.incluye.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-india-orange mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-600">
                      <strong>Ideal para:</strong> {opcion.ideal}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* Servicios adicionales incluidos */}
          <div className="bg-gradient-to-r from-india-gold/20 to-india-orange/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-india-dark mb-6 text-center font-display">
              ✨ Servicios Adicionales Incluidos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icono: '👔', texto: 'Personal profesional uniformado' },
                { icono: '🍽️', texto: 'Vajilla de cerámica y cristalería' },
                { icono: '🎨', texto: 'Mantelería y decoración de mesas' },
                { icono: '⏰', texto: 'Montaje y desmontaje completo' },
                { icono: '🧼', texto: 'Limpieza posterior del servicio' },
                { icono: '📋', texto: 'Coordinación del timing' },
                { icono: '🌿', texto: 'Opciones vegetarianas/veganas' },
                { icono: '🚫', texto: 'Menús sin gluten disponibles' }
              ].map((servicio, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">{servicio.icono}</div>
                  <p className="text-sm text-gray-700 font-medium">{servicio.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Proceso */}
      <section className="py-16 bg-gradient-to-b from-india-cream to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-india-dark mb-4 font-display">
              Cómo Trabajamos
            </h2>
            <p className="text-xl text-gray-600">
              Un proceso sencillo para crear tu evento perfecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proceso.map((paso, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 h-full shadow-lg hover:shadow-xl transition-shadow">
                  {/* Número del paso */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-india-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {paso.numero}
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-india-dark mb-3">
                      {paso.titulo}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {paso.descripcion}
                    </p>
                    <Badge size="sm" className="bg-india-cream text-india-dark">
                      {paso.duracion}
                    </Badge>
                  </div>
                </div>
                
                {/* Flecha conectora (excepto en el último) */}
                {index < proceso.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-india-orange text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8 bg-india-gold/20 rounded-lg p-6">
            <p className="text-gray-700">
              <strong className="text-india-dark">💡 Nota:</strong> La degustación previa es opcional y recomendada especialmente para bodas y eventos grandes. 
              Te permite probar los platos antes del gran día.
            </p>
          </div>
        </div>
      </section>

      {/* Galería de Eventos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-india-dark mb-4 font-display">
              Eventos Que Hemos Hecho Inolvidables
            </h2>
            <p className="text-xl text-gray-600">
              Cada evento es único, cada experiencia es memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galeriaEventos.map((evento, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-64">
                  <img
                    src={evento.imagen}
                    alt={evento.tipo}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-india-gold text-india-dark font-semibold">
                      {evento.tipo}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-bold mb-1">{evento.descripcion}</h3>
                    <p className="text-sm text-gray-200 flex items-center gap-1">
                      <span>📍</span>
                      {evento.ubicacion}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zona de Servicio */}
      <section className="py-16 bg-gradient-to-b from-india-cream to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-india-dark mb-6 font-display">
            📍 Zona de Servicio
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-xl text-gray-700 mb-4">
              Actualmente ofrecemos servicio de catering en la <strong className="text-india-orange">Comunidad de Madrid</strong>
            </p>
            <p className="text-gray-600 mb-6">
              Nos desplazamos a fincas, hoteles, jardines, oficinas y domicilios particulares en toda la región.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
              {[
                'Madrid Capital',
                'Las Rozas',
                'Pozuelo',
                'Majadahonda',
                'Boadilla',
                'Alcobendas',
                'San Sebastián de los Reyes',
                'Alcalá de Henares',
                'Y toda la Comunidad'
              ].map((zona, index) => (
                <div key={index} className="bg-india-cream rounded-lg p-3">
                  <span className="text-india-orange">✓</span> {zona}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN TESTIMONIOS - Preparada pero comentada */}
      {/* Descomentar cuando tengas testimonios reales */}
      {/*
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-india-dark mb-4 font-display">
              💬 Lo Que Dicen Nuestros Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                nombre: "Nombre del Cliente",
                evento: "Boda - 150 invitados",
                texto: "Testimonio aquí...",
                estrellas: 5
              }
            ].map((testimonio, index) => (
              <Card key={index} className="text-center">
                <Card.Body>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonio.estrellas)].map((_, i) => (
                      <span key={i} className="text-india-gold text-xl">⭐</span>
                    ))}
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
      <section className="py-16 bg-gradient-to-r from-india-dark via-gray-900 to-india-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-display">
            ¿Listo Para Tu Evento Perfecto?
          </h2>
          <p className="text-xl mb-4">
            Solicita tu menú personalizado sin compromiso
          </p>
          <p className="text-lg mb-8 text-gray-300">
            Respondemos en menos de 24 horas • Presupuestos detallados • Degustación opcional • 20+ años de experiencia
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link to="/contacto">
              <Button 
                size="lg"
                className="bg-india-gold text-india-dark hover:bg-yellow-400 font-semibold"
              >
                📧 Solicitar Presupuesto
              </Button>
            </Link>
            <a href="tel:+34663076631">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-india-dark"
              >
                📱 Llamar Ahora
              </Button>
            </a>
            <a href="https://wa.me/34663076631" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-india-dark"
              >
                💬 WhatsApp
              </Button>
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300">
              También ofrecemos: 
              <Link to="/foodtruck" className="underline hover:text-india-gold mx-2">
                Foodtruck para Festivales
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}