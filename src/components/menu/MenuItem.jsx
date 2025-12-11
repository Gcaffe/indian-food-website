/**
 * Componente MenuItem - Tarjeta de plato del menú
 * 
 * Uso:
 * <MenuItem item={platoData} />
 */

import Badge from '../common/Badge';
import Card from '../common/Card';

export default function MenuItem({ item }) {
  // Función para obtener el badge correcto según el tipo
  const renderBadges = () => {
    return (
      <div className="flex flex-wrap gap-2 mb-3">
        {item.badges?.map((badge, index) => {
          switch(badge) {
            case 'vegano':
              return <Badge.Vegano key={index} size="sm" />;
            case 'vegetariano':
              return <Badge.Vegetariano key={index} size="sm" />;
            case 'sinGluten':
              return <Badge.SinGluten key={index} size="sm" />;
            case 'picante-suave':
              return <Badge.Picante key={index} nivel="suave" size="sm" />;
            case 'picante-medio':
              return <Badge.Picante key={index} nivel="medio" size="sm" />;
            case 'picante-fuerte':
              return <Badge.Picante key={index} nivel="fuerte" size="sm" />;
            default:
              return <Badge key={index} size="sm">{badge}</Badge>;
          }
        })}
      </div>
    );
  };

  return (
    <Card>
      {/* Imagen */}
      {item.imagen && (
        <Card.Image 
          src={item.imagen} 
          alt={item.nombre}
          height="h-56"
        />
      )}

      <Card.Body padding="p-5">
        {/* Header: Nombre */}
        <div className="mb-2">
          <Card.Title as="h3" className="text-xl mb-1">
            {item.nombre}
          </Card.Title>
          {item.nombreOriginal && (
            <p className="text-sm text-india-orange font-medium italic">
              {item.nombreOriginal}
            </p>
          )}
          {/* Cantidad/Volumen (sin precio) */}
          {item.cantidad && (
            <p className="text-xs text-gray-500 mt-1">{item.cantidad}</p>
          )}
          {item.volumen && (
            <p className="text-xs text-gray-500 mt-1">{item.volumen}</p>
          )}
        </div>

        {/* Badges */}
        {item.badges && item.badges.length > 0 && renderBadges()}

        {/* Categoría */}
        {item.categoria && (
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
            {item.categoria}
          </p>
        )}

        {/* Descripción */}
        <Card.Text className="text-sm text-gray-700 mb-3">
          {item.descripcion}
        </Card.Text>

        {/* Variantes (si tiene) */}
        {item.variantes && item.variantes.length > 0 && (
          <div className="mb-3">
            <p className="text-sm font-semibold text-india-dark mb-1">Opciones:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {item.variantes.map((variante, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-india-orange mr-2">•</span>
                  <span>{variante}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Nota especial (si tiene) */}
        {item.nota && (
          <div className="mt-3 p-3 bg-india-cream rounded-lg">
            <p className="text-sm text-india-dark italic">
              {item.nota}
            </p>
          </div>
        )}

        {/* Alérgenos (si tiene) */}
        {item.alergenos && item.alergenos.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              <span className="font-semibold">Alérgenos:</span>{' '}
              {item.alergenos.join(', ')}
            </p>
          </div>
        )}
      </Card.Body>

      {/* Badge de Destacado (opcional) */}
      {item.destacado && (
        <div className="absolute top-4 right-4">
          <Badge variant="primary" className="shadow-lg">
            ⭐ Destacado
          </Badge>
        </div>
      )}
    </Card>
  );
}
