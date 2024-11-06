import React, { useState, useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';

const ReservationForm = () => {
  const { reservarEspacio, estaDisponible } = useContext(ReservationContext);
  const [espacio, setEspacio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [error, setError] = useState('');

  const handleReserva = () => {
    if (espacio && fecha && hora) {
      if (estaDisponible(espacio, fecha, hora)) {
        reservarEspacio(espacio, fecha, hora);
        alert(`Reserva confirmada para ${espacio} el ${fecha} a las ${hora}.`);
        setEspacio('');
        setFecha('');
        setHora('');
        setError('');
      } else {
        setError('Este espacio ya está reservado en la fecha y hora seleccionadas.');
      }
    } else {
      setError('Por favor, complete todos los campos.');
    }
  };

  return (
    <div>
      <h3>Reservar un Espacio Común</h3>
      <label>
        Espacio:
        <select value={espacio} onChange={(e) => setEspacio(e.target.value)}>
          <option value="">Seleccione un espacio</option>
          <option value="Quincho">Quincho</option>
          <option value="Sala Multiuso">Sala Multiuso</option>
          <option value="Clubhouse">Clubhouse</option>
        </select>
      </label>
      <br />
      <label>
        Fecha:
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      </label>
      <br />
      <label>
        Hora:
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleReserva}>Confirmar Reserva</button>
    </div>
  );
};

export default ReservationForm;
