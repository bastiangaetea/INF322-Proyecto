// /pages/VisitsHistoryPage.jsx

import React, { useContext } from 'react';
import { VisitsContext } from '../context/VisitsContext'; // Importando el contexto correcto
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const VisitsHistoryPage = () => {
  const { historialVisitas } = useContext(VisitsContext); // Usando VisitsContext

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Historial de Visitas
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="visits history table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre de la Visita</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Notas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {historialVisitas.map((visit, index) => (
              <TableRow key={index}>
                <TableCell>{visit.name}</TableCell>
                <TableCell>{visit.date}</TableCell>
                <TableCell>{visit.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default VisitsHistoryPage;
