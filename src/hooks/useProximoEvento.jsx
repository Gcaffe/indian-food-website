/**
 * Hook useProximoEvento
 * Detecta el próximo evento y determina su tipo (vegano/general)
 * 
 * Uso:
 * const { proximoEvento, tipoEvento } = useProximoEvento();
 */

import { useState, useEffect } from 'react';
import contentData from '../config/content.json';

export default function useProximoEvento() {
  const [proximoEvento, setProximoEvento] = useState(null);
  const [tipoEvento, setTipoEvento] = useState('general'); // default

  useEffect(() => {
    const detectarProximoEvento = () => {
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0); // Resetear horas para comparar solo fechas

      // Obtener eventos desde content.json
      const eventosData = contentData.eventos || [];

      // Filtrar eventos futuros o de hoy
      const eventosFuturos = eventosData.filter(evento => {
        // Usar fechaFin para ver si el evento todavía está activo o es futuro
        const fechaEvento = new Date(evento.fechaFin || evento.fechaInicio || evento.fecha);
        fechaEvento.setHours(0, 0, 0, 0);
        return fechaEvento >= hoy;
      });

      // Ordenar por fecha (más próximo primero)
      eventosFuturos.sort((a, b) => {
        return new Date(a.fechaInicio || a.fecha) - new Date(b.fechaInicio || b.fecha);
      });

      // Obtener el más próximo
      if (eventosFuturos.length > 0) {
        const evento = eventosFuturos[0];
        setProximoEvento(evento);
        setTipoEvento(evento.tipoEvento || 'general');
      } else {
        // No hay eventos futuros, usar tipo general por defecto
        setProximoEvento(null);
        setTipoEvento('general');
      }
    };

    detectarProximoEvento();
  }, []);

  return {
    proximoEvento,
    tipoEvento,
    esVegano: tipoEvento === 'vegano',
    esGeneral: tipoEvento === 'general'
  };
}
