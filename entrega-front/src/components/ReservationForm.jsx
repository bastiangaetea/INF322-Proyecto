import React, { useState, useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';
import { TextField, Button, Typography, Box, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Card, CardMedia } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import QuinchoImage from '../assets/quincho.jpeg';
import MultiusoImage from '../assets/multiuso.jpeg';
import ClubhouseImage from '../assets/clubhouse.jpg';

const ReservationForm = () => {
  const today = new Date();
  const [fecha, setFecha] = useState(today);
  const [hora, setHora] = useState(today);
  const [espacio, setEspacio] = useState('Quincho');
  const { reservas, reservarEspacio } = useContext(ReservationContext);

  const handleConfirmarReserva = () => {
    const nuevaReserva = {
      espacio,
      fecha: fecha.toISOString().split('T')[0],
      hora: hora.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    };

    // Verificamos si el espacio está disponible antes de hacer la reserva
    const disponible = reservarEspacio(espacio, nuevaReserva.fecha, nuevaReserva.hora);

    if (!disponible) {
      alert('Este espacio ya está reservado en la fecha y hora seleccionada.');
    } else {
      alert('Reserva realizada con éxito.');
    }
  };

  const handleImageClick = (value) => {
    setEspacio(value);  // Establece el espacio seleccionado cuando se hace clic en la imagen
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ mt: 4 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%" maxWidth={400}>
          <DateCalendar
            value={fecha}
            onChange={(newValue) => setFecha(newValue)}
            disablePast
          />
          <TimePicker
            label="Hora"
            value={hora}
            onChange={(newValue) => setHora(newValue)}
            ampm={false}  // Formato de 24 horas
            fullWidth
            sx={{ mt: 2 }}
          />
        </Box>
      </LocalizationProvider>

      {/* Selección del espacio con imágenes */}
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel component="legend">Selecciona un Espacio</FormLabel>
        <RadioGroup
          aria-label="espacio"
          name="espacio"
          value={espacio}
          onChange={(e) => setEspacio(e.target.value)}
          sx={{
            display: 'flex',  // Las opciones deben ir en fila
            flexDirection: 'row',  // Las opciones se distribuyen en horizontal
            justifyContent: 'center',  // Centramos las opciones en el contenedor
          }}
        >
          {/* Espacio Quincho */}
          <FormControlLabel
            value="Quincho"
            control={<Radio />}
            label="Quincho"
            sx={{
              mx: 2,
              display: 'flex',
              flexDirection: 'column',  // La imagen y el texto se alinean en columna
              alignItems: 'center',
              textAlign: 'center',  // Centrar el texto sobre la imagen
            }}
            labelPlacement="top"
          />
          <Card
            sx={{ maxWidth: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => handleImageClick('Quincho')}  // Cambia el valor de 'espacio' al hacer clic
          >
            <CardMedia
              component="img"
              height="140"
              image={QuinchoImage}
              alt="Quincho"
            />
          </Card>

          {/* Espacio Sala Multiuso */}
          <FormControlLabel
            value="Sala Multiuso"
            control={<Radio />}
            label="Sala Multiuso"
            sx={{
              mx: 2,
              display: 'flex',
              flexDirection: 'column',  // La imagen y el texto se alinean en columna
              alignItems: 'center',
              textAlign: 'center',  // Centrar el texto sobre la imagen
            }}
            labelPlacement="top"
          />
          <Card
            sx={{ maxWidth: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => handleImageClick('Sala Multiuso')}  // Cambia el valor de 'espacio' al hacer clic
          >
            <CardMedia
              component="img"
              height="140"
              image={MultiusoImage}
              alt="Sala Multiuso"
            />
          </Card>

          {/* Espacio Clubhouse */}
          <FormControlLabel
            value="Clubhouse"
            control={<Radio />}
            label="Clubhouse"
            sx={{
              mx: 2,
              display: 'flex',
              flexDirection: 'column',  // La imagen y el texto se alinean en columna
              alignItems: 'center',
              textAlign: 'center',  // Centrar el texto sobre la imagen
            }}
            labelPlacement="top"
          />
          <Card
            sx={{ maxWidth: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => handleImageClick('Clubhouse')}  // Cambia el valor de 'espacio' al hacer clic
          >
            <CardMedia
              component="img"
              height="140"
              image={ClubhouseImage}
              alt="Clubhouse"
            />
          </Card>
        </RadioGroup>
      </FormControl>

      <Button onClick={handleConfirmarReserva} variant="contained" color="primary" sx={{ mt: 2 }}>
        Confirmar Reserva
      </Button>
    </Box>
  );
};

export default ReservationForm;
