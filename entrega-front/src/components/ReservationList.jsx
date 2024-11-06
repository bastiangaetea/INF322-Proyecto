import React, { useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';

const ReservationList = () => {
  const { reservas } = useContext(ReservationContext);

  return (
    <div>
      <h3>Reservas Realizadas</h3>
      {reservas.length === 0 ? (
        <p>No hay reservas aún.</p>
      ) : (
        <ul>
          {reservas.map((reserva, index) => (
            <li key={index}>
              <strong>{reserva.espacio}</strong> - {reserva.fecha} a las {reserva.hora}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReservationList;
