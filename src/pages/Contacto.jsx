/**
 * Página Contacto - Formulario de contacto con EmailJS
 */

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Spinner from '../components/common/Spinner';

export default function Contacto() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Por favor, completa todos los campos obligatorios.'
      });
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Por favor, introduce un email válido.'
      });
      return;
    }

    setFormStatus({ loading: true, success: false, error: false, message: '' });

    try {
      // Enviar email con EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: '¡Mensaje enviado con éxito! Te contactaremos pronto.'
      });

      // Limpiar formulario
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        message: ''
      });

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false, message: '' }));
      }, 5000);

    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos por teléfono.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-india-cream to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-india-orange to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 font-display">
            📧 Contacto
          </h1>
          <p className="text-xl">
            ¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte!
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-india-dark mb-6 font-display">
              Envíanos un mensaje
            </h2>
            <p className="text-gray-600 mb-8">
              Completa el formulario y te contactaremos lo antes posible. 
              También puedes llamarnos o escribirnos directamente.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <Input
                label="Nombre completo"
                name="from_name"
                type="text"
                value={formData.from_name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />

              {/* Email */}
              <Input
                label="Email"
                name="from_email"
                type="email"
                value={formData.from_email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />

              {/* Teléfono */}
              <Input
                label="Teléfono"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+34 663 076 631"
              />

              {/* Mensaje */}
              <Input.Textarea
                label="¿Qué necesitas?"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Cuéntanos sobre tu evento, número de personas, fecha, tipo de servicio (catering, foodtruck, clases)..."
              />

              {/* Mensaje de estado */}
              {formStatus.success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  ✅ {formStatus.message}
                </div>
              )}

              {formStatus.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  ❌ {formStatus.message}
                </div>
              )}

              {/* Botón enviar */}
              <Button
                type="submit"
                size="lg"
                fullWidth
                disabled={formStatus.loading}
              >
                {formStatus.loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Spinner size="sm" color="white" />
                    Enviando...
                  </span>
                ) : (
                  '📧 Enviar Mensaje'
                )}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Al enviar este formulario, aceptas que procesemos tus datos para contactarte.
              </p>
            </form>
          </div>

          {/* Información de contacto */}
          <div>
            {/* Datos de contacto */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-india-dark mb-6 font-display">
                Información de contacto
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-india-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-india-dark mb-1">Email</h4>
                    <a 
                      href="mailto:info@saboresdelaindia.com"
                      className="text-india-orange hover:underline"
                    >
                      info@saboresdelaindia.com
                    </a>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-india-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-india-dark mb-1">Teléfono</h4>
                    <a 
                      href="tel:+34 663 076 631"
                      className="text-india-orange hover:underline"
                    >
                      +34 663 076 631
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-india-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-india-dark mb-1">Ubicación</h4>
                    <p className="text-gray-600">
                      Madrid, España<br />
                      Servicio móvil por toda España
                    </p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-india-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-india-dark mb-1">Horario de atención</h4>
                    <p className="text-gray-600">
                      Lunes - Viernes: 9:00 - 20:00<br />
                      Sábado: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-gradient-to-r from-india-orange to-orange-600 rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Síguenos en redes sociales
              </h3>
              <p className="mb-6">
                Mantente al día con nuestros eventos, nuevos platos y promociones especiales.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white hover:text-india-orange rounded-full flex items-center justify-center transition-all duration-300 text-2xl"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white hover:text-india-orange rounded-full flex items-center justify-center transition-all duration-300 text-2xl"
                  aria-label="Instagram"
                >
                  📸
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 hover:bg-white hover:text-india-orange rounded-full flex items-center justify-center transition-all duration-300 text-2xl"
                  aria-label="Twitter"
                >
                  🐦
                </a>
              </div>
            </div>

            {/* Preguntas frecuentes */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <h3 className="text-2xl font-bold text-india-dark mb-4 font-display">
                ¿Tienes preguntas?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-india-orange">✓</span>
                  <span>Trabajamos en eventos por toda España</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-india-orange">✓</span>
                  <span>Menús personalizables (vegano, sin gluten, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-india-orange">✓</span>
                  <span>Presupuestos sin compromiso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-india-orange">✓</span>
                  <span>Más de 20 años de experiencia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-india-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-display">
            ¿Prefieres llamarnos directamente?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Estamos disponibles de lunes a viernes de 9:00 a 20:00
          </p>
          <a
            href="tel:+34 663 076 631"
            className="inline-block bg-india-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            📱 Llamar ahora
          </a>
        </div>
      </section>
    </div>
  );
}