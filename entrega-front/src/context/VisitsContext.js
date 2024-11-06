// /context/VisitsContext.js

import React, { createContext, useState } from 'react';

export const VisitsContext = createContext();

export const VisitsProvider = ({ children }) => {
  const [historialVisitas, setHistorialVisitas] = useState([]);

  const addVisitRecord = (visitData) => {
    setHistorialVisitas((prevRecords) => [...prevRecords, visitData]);
  };

  return (
    <VisitsContext.Provider value={{ historialVisitas, addVisitRecord }}>
      {children}
    </VisitsContext.Provider>
  );
};
