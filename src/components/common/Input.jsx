/**
 * Componente Input - Campo de entrada para formularios
 * 
 * Uso:
 * <Input 
 *   label="Nombre" 
 *   name="nombre" 
 *   placeholder="Tu nombre" 
 *   required 
 * />
 * 
 * <Input 
 *   label="Email" 
 *   type="email" 
 *   error="Email inválido" 
 * />
 */

export default function Input({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props
}) {
  const inputId = name || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`mb-4 ${className}`}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-india-dark mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {/* Input */}
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`
          w-full px-4 py-3 border rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-india-orange focus:border-transparent
          transition-all duration-300
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      />
      
      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

// Sub-componente: Textarea
Input.Textarea = function Textarea({
  label,
  name,
  placeholder = '',
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) {
  const textareaId = name || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`mb-4 ${className}`}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={textareaId}
          className="block text-sm font-medium text-india-dark mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {/* Textarea */}
      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`
          w-full px-4 py-3 border rounded-lg resize-none
          focus:outline-none focus:ring-2 focus:ring-india-orange focus:border-transparent
          transition-all duration-300
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      />
      
      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

// Sub-componente: Select
Input.Select = function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  required = false,
  disabled = false,
  placeholder = 'Selecciona una opción',
  className = '',
  ...props
}) {
  const selectId = name || `select-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`mb-4 ${className}`}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={selectId}
          className="block text-sm font-medium text-india-dark mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {/* Select */}
      <select
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`
          w-full px-4 py-3 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-india-orange focus:border-transparent
          transition-all duration-300
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      
      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

// Sub-componente: Checkbox
Input.Checkbox = function Checkbox({
  label,
  name,
  checked,
  onChange,
  required = false,
  disabled = false,
  className = '',
  ...props
}) {
  const checkboxId = name || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`flex items-center mb-4 ${className}`}>
      <input
        id={checkboxId}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-4 h-4 text-india-orange border-gray-300 rounded focus:ring-india-orange focus:ring-2 disabled:cursor-not-allowed"
        {...props}
      />
      {label && (
        <label 
          htmlFor={checkboxId}
          className="ml-2 text-sm text-india-dark cursor-pointer"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
    </div>
  );
};
