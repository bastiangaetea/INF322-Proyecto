// /pages/VisitHistoryPage.jsx

import React, { useContext } from 'react';
import { VisitsContext } from '../context/VisitsContext'; // Usando VisitsContext
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const VisitHistoryPage = () => {
  const { historialVisitas } = useContext(VisitsContext); // Obteniendo el historial de visitas

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Historial de Visitas
      </Typography>
      {historialVisitas.length === 0 ? (
        <Typography>No hay visitas registradas.</Typography>
      ) : (
        <List>
          {historialVisitas.map((visit, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Visitante: ${visit.name}`}
                secondary={`Fecha: ${visit.date} | Departamento: ${visit.department} | Notas: ${visit.notes}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default VisitHistoryPage;
