/**
 * Página de prueba para Header y Footer
 * TEMPORAL - Eliminar después de configurar Router
 */

import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';

export default function TestLayout() {
  return (
    <Layout>
      {/* Contenido de prueba */}
      <div className="bg-gradient-to-b from-india-cream to-white">
        {/* Hero simple */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-india-orange mb-6">
              ¡Header y Footer Funcionando! 🎉
            </h1>
            <p className="text-xl text-india-dark mb-8">
              El layout está completo. Ahora puedes navegar por el menú y ver cómo funciona.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">Solicitar Presupuesto</Button>
              <Button variant="secondary" size="lg">Ver Menú</Button>
            </div>
          </div>
        </section>

        {/* Sección de características */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-india-dark mb-12">
              Prueba el Header
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-india-cream rounded-lg">
                <div className="text-4xl mb-4">🍛</div>
                <h3 className="text-xl font-bold mb-2 text-india-dark">Navegación Desktop</h3>
                <p className="text-gray-600">
                  En pantallas grandes, verás el menú completo con submenu en "Servicios"
                </p>
              </div>
              
              <div className="text-center p-6 bg-india-cream rounded-lg">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-2 text-india-dark">Menú Móvil</h3>
                <p className="text-gray-600">
                  En móvil, haz click en el ícono ☰ para abrir el menú hamburguesa
                </p>
              </div>
              
              <div className="text-center p-6 bg-india-cream rounded-lg">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-2 text-india-dark">Header Sticky</h3>
                <p className="text-gray-600">
                  Haz scroll hacia abajo - el header se queda fijo arriba
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido de relleno para probar scroll */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-india-dark mb-8">
              Prueba el Scroll
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Este contenido es solo para probar el scroll y ver que el header se queda fijo arriba.
              </p>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <div className="bg-india-orange/10 border-l-4 border-india-orange p-6 rounded-r-lg">
                <p className="font-semibold text-india-dark mb-2">✓ Verifica que funcione:</p>
                <ul className="space-y-2">
                  <li>• El header se queda fijo al hacer scroll</li>
                  <li>• El menú móvil abre y cierra correctamente</li>
                  <li>• Los links de navegación funcionan</li>
                  <li>• El submenu de "Servicios" aparece al hover (desktop)</li>
                  <li>• El footer está completo con toda la información</li>
                </ul>
              </div>
              
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                architecto beatae vitae dicta sunt explicabo.
              </p>
              
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </section>

        {/* Sección del Footer */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-india-dark mb-6">
              Prueba el Footer
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Haz scroll hasta abajo para ver el footer completo con:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-india-cream rounded-lg">
                <p className="font-semibold">📱 Redes Sociales</p>
              </div>
              <div className="p-4 bg-india-cream rounded-lg">
                <p className="font-semibold">🔗 Enlaces Rápidos</p>
              </div>
              <div className="p-4 bg-india-cream rounded-lg">
                <p className="font-semibold">📧 Contacto</p>
              </div>
              <div className="p-4 bg-india-cream rounded-lg">
                <p className="font-semibold">📰 Newsletter</p>
              </div>
            </div>
            <p className="text-gray-600">
              ⬇️ Sigue haciendo scroll para llegar al footer ⬇️
            </p>
          </div>
        </section>

        {/* Más contenido de relleno */}
        <section className="py-20 bg-gradient-to-b from-white to-india-cream">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <p className="text-lg text-gray-700">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint 
              occaecati cupiditate non provident.
            </p>
            
            <p className="text-lg text-gray-700">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum 
              fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>

            <div className="text-center py-12">
              <p className="text-2xl font-bold text-india-orange mb-4">
                ⬇️ Ya casi llegas al Footer ⬇️
              </p>
              <p className="text-gray-600">
                Un poco más de scroll...
              </p>
            </div>

            <p className="text-lg text-gray-700">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus 
              id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor 
              repellendus.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
