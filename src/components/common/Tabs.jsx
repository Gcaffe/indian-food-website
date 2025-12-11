/**
 * Componente Tabs - Pestañas reutilizables
 * 
 * Uso:
 * <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
 *   <Tabs.Tab id="tab1" icon="🌱">Tab 1</Tabs.Tab>
 *   <Tabs.Tab id="tab2" icon="🍗">Tab 2</Tabs.Tab>
 * </Tabs>
 */

import { useState } from 'react';

export default function Tabs({ children, activeTab: controlledActiveTab, onTabChange, className = '' }) {
  // Soporte para tabs controladas (desde fuera) o no controladas (interno)
  const [internalActiveTab, setInternalActiveTab] = useState(0);
  
  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;
  
  const handleTabClick = (index) => {
    if (isControlled && onTabChange) {
      onTabChange(index);
    } else {
      setInternalActiveTab(index);
    }
  };

  const tabs = Array.isArray(children) ? children : [children];

  return (
    <div className={`w-full ${className}`}>
      {/* Barra de pestañas */}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          
          return (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`
                flex items-center gap-2 px-6 py-4 font-semibold text-base
                border-b-2 transition-all duration-300 whitespace-nowrap
                ${isActive 
                  ? 'border-india-orange text-india-orange bg-india-orange/5' 
                  : 'border-transparent text-gray-600 hover:text-india-orange hover:bg-gray-50'
                }
              `}
            >
              {tab.props.icon && (
                <span className="text-2xl">{tab.props.icon}</span>
              )}
              <span>{tab.props.children}</span>
              {tab.props.badge && (
                <span className="ml-2 px-2 py-0.5 bg-india-orange text-white text-xs rounded-full">
                  {tab.props.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="pt-6">
        {tabs[activeTab]?.props.content}
      </div>
    </div>
  );
}

// Sub-componente Tab (solo define estructura, no se renderiza directamente)
Tabs.Tab = function Tab({ children, icon, badge, content }) {
  return null; // Este componente es solo para estructura
};
