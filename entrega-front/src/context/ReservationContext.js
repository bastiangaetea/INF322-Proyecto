import React, { createContext, useState } from 'react';

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  // Reservas iniciales, incluyendo las predeterminadas para el 15 de noviembre a las 20:00
  const [reservas, setReservas] = useState([
    { espacio: 'Quincho', fecha: '2024-11-15', hora: '20:00' },
    { espacio: 'Sala Multiuso', fecha: '2024-11-15', hora: '20:00' },
    { espacio: 'Clubhouse', fecha: '2024-11-15', hora: '20:00' },
  ]);

  // Función para verificar si un espacio está disponible
  const estaDisponible = (espacio, fecha, hora) => {
    return !reservas.some(
      (reserva) => reserva.espacio === espacio && reserva.fecha === fecha && reserva.hora === hora
    );
  };

  // Función para hacer una nueva reserva
  const reservarEspacio = (espacio, fecha, hora) => {
    if (estaDisponible(espacio, fecha, hora)) {
      const nuevaReserva = { espacio, fecha, hora };
      setReservas((prevReservas) => [...prevReservas, nuevaReserva]);
      return true; // Reserva exitosa
    }
    return false; // El espacio ya está reservado
  };

  return (
    <ReservationContext.Provider value={{ reservas, reservarEspacio, estaDisponible }}>
      {children}
    </ReservationContext.Provider>
  );
};
