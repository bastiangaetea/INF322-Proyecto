// /pages/RegisterVisitPage.jsx

import React, { useState, useContext } from 'react';
import { VisitsContext } from '../context/VisitsContext'; // Cambiado a VisitsContext
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const RegisterVisitPage = () => {
  const { addVisitRecord } = useContext(VisitsContext); // Usando VisitsContext
  const [visitData, setVisitData] = useState({
    name: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVisitRecord(visitData);
    setVisitData({ name: '', date: '', notes: '' }); // Limpiar campos después de agregar la visita
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Registrar Visita
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre de la visita"
          name="name"
          value={visitData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Fecha"
          name="date"
          type="date"
          value={visitData.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <TextField
          label="Notas"
          name="notes"
          value={visitData.notes}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Agregar Visita
        </Button>
      </form>
    </Container>
  );
};

export default RegisterVisitPage;
