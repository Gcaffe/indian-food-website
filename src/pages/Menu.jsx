/**
 * Página Menu - Menú completo con pestañas
 * Detecta automáticamente qué pestaña activar según el próximo evento
 */

import { useState, useEffect } from 'react';
import Tabs from '../components/common/Tabs';
import MenuItem from '../components/menu/MenuItem';
import useProximoEvento from '../hooks/useProximoEvento';
import contentData from '../config/content.json';
const menuData = contentData.menu;

export default function Menu() {
  // Detectar próximo evento y su tipo (ahora lee de content.json)
  const { proximoEvento, tipoEvento, esVegano } = useProximoEvento();
  
  // Determinar pestaña activa inicial según tipo de evento
  const [activeTab, setActiveTab] = useState(esVegano ? 0 : 1);

  // Actualizar pestaña activa cuando se detecte el tipo de evento
  useEffect(() => {
    // Si es evento vegano → pestaña 0 (Vegano)
    // Si es evento general → pestaña 1 (Completo)
    setActiveTab(esVegano ? 0 : 1);
  }, [esVegano]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-india-cream to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-india-orange to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4  font-display">
            🍛 Nuestro Menú 🍛
          </h1>
          <p className="text-xl mb-6">
            Auténtica cocina india adaptada al paladar europeo
          </p>
          
          {/* Info del próximo evento (si existe) */}
          {proximoEvento && (
            <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-sm font-medium">
                📅 Próximo evento: <span className="font-bold">{proximoEvento.nombre}</span>
              </p>
              <p className="text-sm">
                {new Date(proximoEvento.fecha).toLocaleDateString('es-ES', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })} en {proximoEvento.ubicacion.ciudad}
              </p>
              {esVegano && (
                <p className="text-sm mt-2 bg-green-500 text-white px-3 py-1 rounded-full inline-block">
                  🌱 Menú 100% Vegano disponible
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Tabs del Menú */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
          {/* TAB 1: MENÚ VEGANO */}
          <Tabs.Tab 
            icon="🌱" 
            badge={menuData.menuVegano.length}
            content={
              <div>
                {/* Header Vegano */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-8 border-l-4 border-green-500">
                  <h2 className="text-3xl font-bold text-india-dark mb-2 font-display">
                    🌱 Menú 100% Vegano
                  </h2>
                  <p className="text-lg text-gray-700">
                    Deliciosos platos plant-based con todo el sabor de la India. 
                    Perfectos para festivales veganos como BioCultura, BeVegui, Vegandale y más.
                  </p>
                </div>

                {/* Grid de platos veganos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuData.menuVegano.map((item) => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            }
          >
            Menú Vegano
          </Tabs.Tab>

          {/* TAB 2: MENÚ COMPLETO */}
          <Tabs.Tab 
            icon="🍗" 
            badge={menuData.menuCompleto.length}
            content={
              <div>
                {/* Header Completo */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 mb-8 border-l-4 border-india-orange">
                  <h2 className="text-3xl font-bold text-india-dark mb-2 font-display">
                    🍗 Menú Completo
                  </h2>
                  <p className="text-lg text-gray-700">
                    Nuestra carta completa con opciones veganas y platos tradicionales con pollo. 
                    Ideal para festivales gastronómicos generales y ferias.
                  </p>
                </div>

                {/* Grid de platos completos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuData.menuCompleto.map((item) => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            }
          >
            Menú Completo
          </Tabs.Tab>

          {/* TAB 3: BEBIDAS */}
          <Tabs.Tab 
            icon="🍹" 
            badge={menuData.bebidas.length}
            content={
              <div>
                {/* Header Bebidas */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-8 border-l-4 border-india-turquoise">
                  <h2 className="text-3xl font-bold text-india-dark mb-2 font-display">
                    🍹 Bebidas
                  </h2>
                  <p className="text-lg text-gray-700">
                    Refrescos tradicionales indios, cervezas importadas y más opciones 
                    para acompañar tu comida.
                  </p>
                </div>

                {/* Categorías de bebidas */}
                {['Refrescos', 'Bebidas Tradicionales', 'Cervezas', 'Vinos y Refrescos', 'Chupitos', 'Agua'].map((categoria) => {
                  const bebidasCategoria = menuData.bebidas.filter(b => b.categoria === categoria);
                  
                  if (bebidasCategoria.length === 0) return null;
                  
                  return (
                    <div key={categoria} className="mb-10">
                      <h3 className="text-2xl font-bold text-india-dark mb-4 flex items-center gap-2">
                        <span className="w-2 h-8 bg-india-orange rounded-full"></span>
                        {categoria}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bebidasCategoria.map((item) => (
                          <MenuItem key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            }
          >
            Bebidas
          </Tabs.Tab>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-india-orange to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-display">
            ¿Listo para una explosión de sabores?
          </h2>
          <p className="text-xl mb-8">
            Visítanos en nuestro próximo evento o solicita nuestro servicio de catering
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/eventos"
              className="bg-white text-india-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Ver Próximos Eventos
            </a>
            <a
              href="/contacto"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-india-orange transition-all duration-300"
            >
              Solicitar Catering
            </a>
          </div>
        </div>
      </section>

      {/* Info adicional */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-india-dark mb-4">
            ℹ️ Información Importante
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-bold text-india-orange mb-2">Alérgenos</h4>
              <p className="text-sm">
                Todos nuestros platos pueden contener trazas de frutos secos, gluten y lácteos. 
                Si tienes alguna alergia, consúltanos antes de realizar tu pedido.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-india-orange mb-2">Opciones Personalizadas</h4>
              <p className="text-sm">
                ¿Necesitas adaptar algún plato? Podemos ajustar el nivel de picante, 
                eliminar ingredientes o preparar porciones especiales. ¡Pregúntanos!
              </p>
            </div>
            <div>
              <h4 className="font-bold text-india-orange mb-2">Eventos Especiales</h4>
              <p className="text-sm">
                El menú puede variar según el evento. En festivales veganos como BioCultura 
                ofrecemos exclusivamente nuestro menú 100% vegano.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-india-orange mb-2">Contacto</h4>
              <p className="text-sm">
                ¿Preguntas sobre el menú? Llámanos al +34 XXX XXX XXX o 
                escríbenos a info@saboresdelaindia.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
