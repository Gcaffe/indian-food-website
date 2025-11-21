# 📦 COMPONENTES BASE - INSTRUCCIONES DE INSTALACIÓN

## ✅ COMPONENTES CREADOS

1. **Button.jsx** - Botones reutilizables (6 variantes, 4 tamaños)
2. **Card.jsx** - Tarjetas con sub-componentes (Image, Body, Title, Text, Footer)
3. **Input.jsx** - Campos de formulario (Input, Textarea, Select, Checkbox)
4. **Badge.jsx** - Etiquetas (genéricas + específicas para menú)
5. **Spinner.jsx** - Indicador de carga
6. **TestComponents.jsx** - Página de prueba para ver todos los componentes

---

## 📂 PASO 1: Copiar Archivos

Copia estos archivos a tu proyecto:

```
C:\Proyectos\IndiaFood\FrontEnd\src\components\common\
├── Button.jsx
├── Card.jsx
├── Input.jsx
├── Badge.jsx
└── Spinner.jsx

C:\Proyectos\IndiaFood\FrontEnd\src\pages\
└── TestComponents.jsx
```

---

## 🔧 PASO 2: Probar los Componentes

Edita tu `App.jsx` para cargar la página de prueba:

```jsx
import TestComponents from './pages/TestComponents';

function App() {
  return <TestComponents />;
}

export default App;
```

Guarda y revisa en el navegador: **http://localhost:5173**

Deberías ver una página completa con todos los componentes funcionando.

---

## 📖 CÓMO USAR CADA COMPONENTE

### **1. Button - Botones**

```jsx
import Button from '../components/common/Button';

// Botón básico
<Button>Click aquí</Button>

// Botón con variante
<Button variant="primary">Primario</Button>
<Button variant="secondary">Secundario</Button>
<Button variant="outline">Outline</Button>
<Button variant="success">Éxito</Button>
<Button variant="danger">Peligro</Button>
<Button variant="ghost">Ghost</Button>

// Botón con tamaño
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>
<Button size="xl">Extra Grande</Button>

// Botón con onClick
<Button onClick={() => alert('Hola!')}>
  Con función
</Button>

// Botón deshabilitado
<Button disabled>No disponible</Button>

// Botón ancho completo
<Button fullWidth>Ancho completo</Button>

// Botón de formulario
<Button type="submit">Enviar</Button>
```

---

### **2. Card - Tarjetas**

```jsx
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

// Tarjeta completa
<Card>
  <Card.Image 
    src="/images/plato.jpg" 
    alt="Nombre del plato"
  />
  <Card.Body>
    <Card.Title>Título del Plato</Card.Title>
    <Card.Text>
      Descripción deliciosa del plato...
    </Card.Text>
    <div className="flex gap-2 mb-4">
      <Badge.Vegano />
      <Badge.SinGluten />
    </div>
    <Button size="sm">Ver Más</Button>
  </Card.Body>
  <Card.Footer>
    <p className="text-sm">Precio: €12.50</p>
  </Card.Footer>
</Card>

// Tarjeta sin imagen
<Card>
  <Card.Body>
    <Card.Title>Solo texto</Card.Title>
    <Card.Text>Contenido...</Card.Text>
  </Card.Body>
</Card>

// Tarjeta sin hover
<Card hover={false}>
  <Card.Body>...</Card.Body>
</Card>
```

---

### **3. Input - Formularios**

```jsx
import { useState } from 'react';
import Input from '../components/common/Input';

function MiFormulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [acepto, setAcepto] = useState(false);

  return (
    <form>
      {/* Input de texto */}
      <Input
        label="Nombre"
        name="nombre"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      {/* Input de email */}
      <Input
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!email.includes('@') && email ? 'Email inválido' : ''}
        required
      />

      {/* Textarea */}
      <Input.Textarea
        label="Mensaje"
        name="mensaje"
        placeholder="Tu mensaje..."
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        rows={6}
        required
      />

      {/* Select */}
      <Input.Select
        label="Ciudad"
        name="ciudad"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
        options={[
          'Madrid',
          'Barcelona',
          'Valencia',
          'Sevilla',
        ]}
        required
      />

      {/* Checkbox */}
      <Input.Checkbox
        label="Acepto los términos y condiciones"
        name="terminos"
        checked={acepto}
        onChange={(e) => setAcepto(e.target.checked)}
        required
      />
    </form>
  );
}
```

---

### **4. Badge - Etiquetas**

```jsx
import Badge from '../components/common/Badge';

// Badges genéricos
<Badge>Default</Badge>
<Badge variant="primary">Primario</Badge>
<Badge variant="success">Éxito</Badge>
<Badge variant="warning">Advertencia</Badge>
<Badge variant="danger">Peligro</Badge>
<Badge variant="info">Info</Badge>

// Badges con ícono
<Badge icon="⭐">Destacado</Badge>
<Badge variant="success" icon="✓">Verificado</Badge>

// Badges para menú (predefinidos)
<Badge.Vegano />
<Badge.Vegetariano />
<Badge.SinGluten />
<Badge.BIO />
<Badge.Picante nivel="suave" />   // 🌶️
<Badge.Picante nivel="medio" />   // 🌶️🌶️
<Badge.Picante nivel="fuerte" />  // 🌶️🌶️🌶️

// Diferentes tamaños
<Badge size="sm">Pequeño</Badge>
<Badge size="md">Mediano</Badge>
<Badge size="lg">Grande</Badge>
```

---

### **5. Spinner - Loading**

```jsx
import { useState } from 'react';
import Spinner from '../components/common/Spinner';
import Button from '../components/common/Button';

function MiComponente() {
  const [cargando, setCargando] = useState(false);

  const cargarDatos = async () => {
    setCargando(true);
    // Simular carga
    await new Promise(r => setTimeout(r, 2000));
    setCargando(false);
  };

  return (
    <div>
      {/* Spinner simple */}
      <Spinner />

      {/* Spinner con texto */}
      <Spinner text="Cargando datos..." />

      {/* Spinner con tamaño */}
      <Spinner size="lg" />

      {/* Spinner de pantalla completa */}
      {cargando && (
        <Spinner fullScreen text="Procesando..." />
      )}

      {/* Condicional en componente */}
      {cargando ? (
        <Spinner />
      ) : (
        <div>Contenido cargado</div>
      )}

      <Button onClick={cargarDatos}>
        Cargar Datos
      </Button>
    </div>
  );
}
```

---

## 🎨 EJEMPLOS PRÁCTICOS

### **Ejemplo 1: Tarjeta de Plato del Menú**

```jsx
<Card>
  <Card.Image 
    src="/images/chicken-tikka.jpg" 
    alt="Chicken Tikka Masala"
    height="h-64"
  />
  <Card.Body>
    <Card.Title>Chicken Tikka Masala</Card.Title>
    <Card.Text>
      Pollo marinado en yogur y especias, cocinado en tandoor 
      y servido en una cremosa salsa de tomate.
    </Card.Text>
    
    <div className="flex gap-2 mb-4">
      <Badge.Picante nivel="medio" />
      <Badge.SinGluten />
    </div>
    
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold text-india-orange">
        €12.50
      </span>
      <Button size="sm">Pedir Ahora</Button>
    </div>
  </Card.Body>
</Card>
```

### **Ejemplo 2: Formulario de Contacto**

```jsx
import { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Spinner from '../components/common/Spinner';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    tipoEvento: '',
    numPersonas: '',
    mensaje: '',
  });
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    
    // Aquí iría la lógica de envío (EmailJS, API, etc.)
    await new Promise(r => setTimeout(r, 2000));
    
    alert('¡Mensaje enviado!');
    setEnviando(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-india-orange mb-6">
        Solicitar Presupuesto
      </h2>

      <Input
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Teléfono"
        type="tel"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        required
      />

      <Input
        label="Ciudad"
        name="ciudad"
        value={formData.ciudad}
        onChange={handleChange}
        required
      />

      <Input.Select
        label="Tipo de Evento"
        name="tipoEvento"
        value={formData.tipoEvento}
        onChange={handleChange}
        options={[
          { value: 'catering', label: 'Catering Privado' },
          { value: 'foodtruck', label: 'Foodtruck' },
          { value: 'clases', label: 'Clases de Cocina' },
        ]}
        required
      />

      <Input
        label="Número de Personas"
        type="number"
        name="numPersonas"
        value={formData.numPersonas}
        onChange={handleChange}
      />

      <Input.Textarea
        label="Cuéntanos sobre tu evento"
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        rows={6}
        required
      />

      <Button type="submit" fullWidth disabled={enviando}>
        {enviando ? 'Enviando...' : 'Solicitar Presupuesto'}
      </Button>

      {enviando && <Spinner fullScreen text="Enviando tu consulta..." />}
    </form>
  );
}
```

---

## ✅ VERIFICACIÓN

Después de copiar los archivos:

1. ✅ Los 5 componentes están en `/components/common/`
2. ✅ TestComponents.jsx está en `/pages/`
3. ✅ El servidor está corriendo (`npm run dev`)
4. ✅ Ves la página de prueba con todos los componentes
5. ✅ Todos los componentes se ven correctamente
6. ✅ Los botones responden al hover
7. ✅ El formulario funciona

---

## 🎯 PRÓXIMO PASO

Una vez verificado que todos los componentes funcionan, puedes:

1. **Eliminar** `TestComponents.jsx` (es solo para prueba)
2. **Crear** el Header y Footer
3. **Configurar** React Router
4. **Empezar** con el contenido real

---

**¿Todo funciona correctamente?** 🚀
