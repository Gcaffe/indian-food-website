/**
 * Componente Badge - Etiquetas para categorizar contenido
 * 
 * Uso:
 * <Badge>Vegano</Badge>
 * <Badge variant="success">Sin Gluten</Badge>
 * <Badge variant="info" icon="🌱">BIO</Badge>
 */

export default function Badge({ 
  children, 
  variant = 'default',
  size = 'md',
  icon,
  className = '',
  ...props 
}) {
  // Estilos base
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-all duration-300';
  
  // Variantes de color
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-india-orange/10 text-india-orange border border-india-orange',
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    danger: 'bg-red-100 text-red-800 border border-red-200',
    info: 'bg-blue-100 text-blue-800 border border-blue-200',
    vegano: 'bg-green-100 text-green-700 border border-green-300',
    vegetariano: 'bg-lime-100 text-lime-700 border border-lime-300',
    sinGluten: 'bg-amber-100 text-amber-700 border border-amber-300',
    picante: 'bg-red-100 text-red-700 border border-red-300',
    bio: 'bg-emerald-100 text-emerald-700 border border-emerald-300',
  };
  
  // Tamaños
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };
  
  return (
    <span 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
}

// Badges predefinidos para el menú
Badge.Vegano = function Vegano({ size = 'md', className = '' }) {
  return (
    <Badge variant="vegano" size={size} icon="🌱" className={className}>
      Vegano
    </Badge>
  );
};

Badge.Vegetariano = function Vegetariano({ size = 'md', className = '' }) {
  return (
    <Badge variant="vegetariano" size={size} icon="🥬" className={className}>
      Vegetariano
    </Badge>
  );
};

Badge.SinGluten = function SinGluten({ size = 'md', className = '' }) {
  return (
    <Badge variant="sinGluten" size={size} icon="🌾" className={className}>
      Sin Gluten
    </Badge>
  );
};

Badge.Picante = function Picante({ size = 'md', nivel = 'medio', className = '' }) {
  const iconos = {
    suave: '🌶️',
    medio: '🌶️🌶️',
    fuerte: '🌶️🌶️🌶️',
  };
  
  return (
    <Badge variant="picante" size={size} icon={iconos[nivel]} className={className}>
      Picante
    </Badge>
  );
};

Badge.BIO = function BIO({ size = 'md', className = '' }) {
  return (
    <Badge variant="bio" size={size} icon="⭐" className={className}>
      BIO/ECO
    </Badge>
  );
};
