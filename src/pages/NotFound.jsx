import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-india-cream flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-india-orange mb-4">404</h1>
        <h2 className="text-3xl font-bold text-india-dark mb-6">Pagina No Encontrada</h2>
        <p className="text-lg text-gray-600 mb-8">
          Lo sentimos, la pagina que buscas no existe.
        </p>
        <Link to="/">
          <Button size="lg">Volver al Inicio</Button>
        </Link>
      </div>
    </div>
  );
}
