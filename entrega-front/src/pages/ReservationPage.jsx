import React from 'react';
import ReservationForm from '../components/ReservationForm';
import ReservationList from '../components/ReservationList';

const ReservationPage = () => {
  return (
    <div>
      <h2>Reservar Espacios Comunes</h2>
      <ReservationForm />
      <br />
      <ReservationList />
    </div>
  );
};

export default ReservationPage;
