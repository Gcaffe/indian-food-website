/**
 * Página de prueba para visualizar todos los componentes base
 * 
 * Este archivo es SOLO para desarrollo/testing
 * Puedes eliminarlo en producción
 */

import { useState } from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Badge from '../components/common/Badge';
import Spinner from '../components/common/Spinner';

export default function TestComponents() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoEvento, setTipoEvento] = useState('');
  const [aceptoTerminos, setAceptoTerminos] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Formulario enviado (simulación)');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-india-cream py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-india-orange text-center mb-12">
          Componentes Base - Sabores de la India
        </h1>

        {/* SECCIÓN: BOTONES */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-india-dark mb-6">1. Botones</h2>
          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primario</Button>
              <Button variant="secondary">Secundario</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="success">Éxito</Button>
              <Button variant="danger">Peligro</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Pequeño</Button>
              <Button size="md">Mediano</Button>
              <Button size="lg">Grande</Button>
              <Button size="xl">Extra Grande</Button>
            </div>
            
            <div>
              <Button disabled>Deshabilitado</Button>
            </div>
            
            <div>
              <Button fullWidth>Ancho Completo</Button>
            </div>
          </div>
        </section>

        {/* SECCIÓN: TARJETAS */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-india-dark mb-6">2. Tarjetas (Cards)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Card.Image 
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" 
                alt="Curry indio"
              />
              <Card.Body>
                <Card.Title>Chicken Tikka Masala</Card.Title>
                <Card.Text>
                  Delicioso pollo en salsa cremosa de tomate con especias tradicionales.
                </Card.Text>
                <div className="flex gap-2 mb-4">
                  <Badge.Picante nivel="medio" size="sm" />
                  <Badge.SinGluten size="sm" />
                </div>
                <Button size="sm" fullWidth>Ver Receta</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Tarjeta sin imagen</Card.Title>
                <Card.Text>
                  Las tarjetas son flexibles y pueden usarse con o sin imagen.
                </Card.Text>
                <Button variant="secondary" size="sm">Acción</Button>
              </Card.Body>
            </Card>

            <Card hover={false}>
              <Card.Body>
                <Card.Title>Sin efecto hover</Card.Title>
                <Card.Text>
                  Esta tarjeta no tiene el efecto de elevación al pasar el mouse.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <p className="text-sm text-gray-500">Footer de la tarjeta</p>
              </Card.Footer>
            </Card>
          </div>
        </section>

        {/* SECCIÓN: BADGES */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-india-dark mb-6">3. Badges (Etiquetas)</h2>
          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold mb-4">Badges Genéricos:</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge>Default</Badge>
              <Badge variant="primary">Primario</Badge>
              <Badge variant="success">Éxito</Badge>
              <Badge variant="warning">Advertencia</Badge>
              <Badge variant="danger">Peligro</Badge>
              <Badge variant="info">Info</Badge>
            </div>

            <h3 className="font-semibold mb-4">Badges para Menú:</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge.Vegano />
              <Badge.Vegetariano />
              <Badge.SinGluten />
              <Badge.BIO />
              <Badge.Picante nivel="suave" />
              <Badge.Picante nivel="medio" />
              <Badge.Picante nivel="fuerte" />
            </div>

            <h3 className="font-semibold mb-4">Tamaños:</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Badge size="sm">Pequeño</Badge>
              <Badge size="md">Mediano</Badge>
              <Badge size="lg">Grande</Badge>
            </div>
          </div>
        </section>

        {/* SECCIÓN: INPUTS */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-india-dark mb-6">4. Inputs y Formularios</h2>
          <div className="bg-white rounded-lg p-6">
            <form onSubmit={handleSubmit} className="max-w-2xl">
              <Input
                label="Nombre"
                name="nombre"
                placeholder="Tu nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />

              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input.Select
                label="Tipo de Evento"
                name="tipoEvento"
                value={tipoEvento}
                onChange={(e) => setTipoEvento(e.target.value)}
                options={[
                  { value: 'catering', label: 'Catering Privado' },
                  { value: 'foodtruck', label: 'Foodtruck para Festival' },
                  { value: 'clases', label: 'Clases de Cocina' },
                  { value: 'otros', label: 'Otros' },
                ]}
                required
              />

              <Input.Textarea
                label="Mensaje"
                name="mensaje"
                placeholder="Cuéntanos sobre tu evento..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows={6}
                required
              />

              <Input.Checkbox
                label="Acepto los términos y condiciones"
                name="terminos"
                checked={aceptoTerminos}
                onChange={(e) => setAceptoTerminos(e.target.checked)}
                required
              />

              <div className="flex gap-4">
                <Button type="submit" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar Formulario'}
                </Button>
                <Button type="button" variant="secondary">
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* SECCIÓN: SPINNER */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-india-dark mb-6">5. Spinner (Loading)</h2>
          <div className="bg-white rounded-lg p-6">
            <div className="flex flex-wrap gap-8 items-center justify-around">
              <div className="text-center">
                <Spinner size="sm" />
                <p className="mt-2 text-sm text-gray-600">Pequeño</p>
              </div>
              
              <div className="text-center">
                <Spinner size="md" />
                <p className="mt-2 text-sm text-gray-600">Mediano</p>
              </div>
              
              <div className="text-center">
                <Spinner size="lg" />
                <p className="mt-2 text-sm text-gray-600">Grande</p>
              </div>
              
              <div className="text-center">
                <Spinner size="xl" />
                <p className="mt-2 text-sm text-gray-600">Extra Grande</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Spinner text="Cargando datos..." />
            </div>

            <div className="mt-8">
              <Button onClick={() => setLoading(!loading)}>
                {loading ? 'Ocultar' : 'Mostrar'} Spinner Pantalla Completa
              </Button>
              {loading && <Spinner fullScreen text="Procesando tu solicitud..." />}
            </div>
          </div>
        </section>

        {/* FOOTER DE PRUEBA */}
        <div className="text-center text-gray-600 mt-16">
          <p>✅ Todos los componentes base están funcionando correctamente</p>
          <p className="text-sm mt-2">Puedes eliminar este archivo en producción</p>
        </div>
      </div>
    </div>
  );
}
