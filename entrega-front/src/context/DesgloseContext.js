import React, { createContext, useState } from 'react';

export const DesgloseContext = createContext();

export const DesgloseProvider = ({ children }) => {
  const [desglosesAnteriores, setDesglosesAnteriores] = useState([
    { mes: 'Septiembre 2024', monto: 2049990, remuneraciones: 2000000, mantenimiento: 49990 },
    { mes: 'Agosto 2024', monto: 2150356, remuneraciones: 2000000, mantenimiento: 150356 },
    { mes: 'Julio 2024', monto: 2100490, remuneraciones: 2000000, mantenimiento: 100490 },
    { mes: 'Junio 2024', monto: 2000000, remuneraciones: 2000000, mantenimiento: 0 },
  ]);

  const agregarDesglose = (mes, monto, remuneraciones, mantenimiento) => {
    setDesglosesAnteriores((prevDesgloses) => [{ mes, monto, remuneraciones, mantenimiento }, ...prevDesgloses]);
  };

  return (
    <DesgloseContext.Provider value={{ desglosesAnteriores, agregarDesglose }}>
      {children}
    </DesgloseContext.Provider>
  );
};
