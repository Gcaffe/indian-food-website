/**
 * Componente Card - Tarjeta reutilizable para contenido
 * 
 * Uso:
 * <Card>
 *   <Card.Image src="..." alt="..." />
 *   <Card.Body>
 *     <Card.Title>Título</Card.Title>
 *     <Card.Text>Contenido</Card.Text>
 *   </Card.Body>
 * </Card>
 */

export default function Card({ children, className = '', hover = true, ...props }) {
  const hoverClass = hover ? 'hover:shadow-xl hover:scale-105' : '';
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Sub-componente: Imagen de la tarjeta
Card.Image = function CardImage({ src, alt = '', className = '', height = 'h-48', ...props }) {
  return (
    <div className={`${height} overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        {...props}
      />
    </div>
  );
};

// Sub-componente: Cuerpo de la tarjeta
Card.Body = function CardBody({ children, className = '', padding = 'p-6', ...props }) {
  return (
    <div className={`${padding} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Sub-componente: Título de la tarjeta
Card.Title = function CardTitle({ children, className = '', as = 'h3', ...props }) {
  const Tag = as;
  
  return (
    <Tag 
      className={`text-xl font-bold text-india-dark mb-2 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

// Sub-componente: Texto de la tarjeta
Card.Text = function CardText({ children, className = '', ...props }) {
  return (
    <p className={`text-gray-600 mb-4 ${className}`} {...props}>
      {children}
    </p>
  );
};

// Sub-componente: Footer de la tarjeta
Card.Footer = function CardFooter({ children, className = '', ...props }) {
  return (
    <div 
      className={`border-t border-gray-200 px-6 py-4 bg-gray-50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
