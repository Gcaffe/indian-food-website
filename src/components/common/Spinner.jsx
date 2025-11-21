/**
 * Componente Spinner - Indicador de carga
 * 
 * Uso:
 * <Spinner />
 * <Spinner size="lg" />
 * <Spinner text="Cargando..." />
 */

export default function Spinner({ 
  size = 'md',
  color = 'orange',
  text,
  fullScreen = false,
  className = ''
}) {
  // Tamaños del spinner
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4',
  };
  
  // Colores
  const colors = {
    orange: 'border-india-orange',
    turquoise: 'border-india-turquoise',
    white: 'border-white',
    gray: 'border-gray-600',
  };
  
  const spinnerElement = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div 
        className={`
          ${sizes[size]} 
          ${colors[color]} 
          border-t-transparent 
          rounded-full 
          animate-spin
        `}
      />
      {text && (
        <p className="mt-4 text-india-dark font-medium">
          {text}
        </p>
      )}
    </div>
  );
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        {spinnerElement}
      </div>
    );
  }
  
  return spinnerElement;
}