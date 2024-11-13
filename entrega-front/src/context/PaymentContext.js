import React, { createContext, useState } from 'react';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [pagosAnteriores, setPagosAnteriores] = useState([
    { mes: 'Septiembre 2024', monto: 185353, mdpg: 'T. Crédito', id: 2395 },
    { mes: 'Agosto 2024', monto: 205816, mdpg: 'T. Débito', id: 2019 },
    { mes: 'Julio 2024', monto: 198477, mdpg: 'T. Crédito', id: 1493 },
    { mes: 'Junio 2024', monto: 217428, mdpg: 'T. Crédito', id: 950 },
  ]);

  const [deudaAlDia, setDeudaAlDia] = useState(false);

  const agregarPago = (mes, monto, mdpg, id) => {
    setPagosAnteriores((prevPagos) => [{ mes, monto, mdpg, id }, ...prevPagos]);
    setDeudaAlDia(true);
  };

  return (
    <PaymentContext.Provider value={{ pagosAnteriores, deudaAlDia, agregarPago }}>
      {children}
    </PaymentContext.Provider>
  );
};
