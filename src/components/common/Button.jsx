/**
 * Componente Button - Botón reutilizable con múltiples variantes
 * 
 * Uso:
 * <Button>Click aquí</Button>
 * <Button variant="secondary">Secundario</Button>
 * <Button size="lg">Grande</Button>
 * <Button onClick={handleClick}>Con función</Button>
 */

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
  ...props 
}) {
  // Estilos base que siempre se aplican
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variantes de color
  const variants = {
    primary: 'bg-india-orange text-white hover:bg-orange-600 shadow-md hover:shadow-lg hover:scale-105',
    secondary: 'border-2 border-india-orange text-india-orange hover:bg-india-orange hover:text-white',
    outline: 'border-2 border-india-dark text-india-dark hover:bg-india-dark hover:text-white',
    success: 'bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg',
    danger: 'bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg',
    ghost: 'text-india-orange hover:bg-india-cream',
  };
  
  // Tamaños
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };
  
  // Ancho completo
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
