import React, { useState, useContext } from 'react';
import { VisitsContext } from '../context/VisitsContext'; // Cambiado a VisitsContext
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const RegisterVisitPage = () => {
  let today = new Date();
  console.log(today);
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);

  const { addVisitRecord } = useContext(VisitsContext); // Usando VisitsContext
  const [visitData, setVisitData] = useState({
    name: '',
    date: today,
    department: '103A',
    notes: ''
  });

  const departments = ['103A']; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVisitRecord(visitData); // Pasar el objeto con el departamento
    setVisitData({ name: '', date: today, department: '103A', notes: '' }); // Limpiar campos después de agregar la visita
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
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Departamento</InputLabel>
          <Select
            label="Departamento"
            name="department"
            value={visitData.department}
            onChange={handleChange}
          >
            {departments.map((dept) => (
              <MenuItem key={dept} value={dept}>
                {dept}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
