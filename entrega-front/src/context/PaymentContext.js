import React, { createContext, useState } from 'react';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [pagosAnteriores, setPagosAnteriores] = useState([
    { mes: 'Septiembre 2024', monto: 185353, mdpg: 'T. Crédito' },
    { mes: 'Agosto 2024', monto: 205816, mdpg: 'T. Débito' },
    { mes: 'Julio 2024', monto: 198477, mdpg: 'T. Crédito' },
    { mes: 'Junio 2024', monto: 217428, mdpg: 'T. Crédito' },
  ]);

  const [deudaAlDia, setDeudaAlDia] = useState(false);

  const agregarPago = (mes, monto, mdpg) => {
    setPagosAnteriores((prevPagos) => [{ mes, monto, mdpg }, ...prevPagos]);
    setDeudaAlDia(true);
  };

  return (
    <PaymentContext.Provider value={{ pagosAnteriores, deudaAlDia, agregarPago }}>
      {children}
    </PaymentContext.Provider>
  );
};
