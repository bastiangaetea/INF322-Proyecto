import React, { useState } from 'react';
import { Grid, Button, Typography, Container, TextField, Alert } from '@mui/material';

const floors = Array.from({ length: 12 }, (_, i) => i + 1);
const departmentsPerFloor = ['A', 'B', 'C', 'D'];

const DepartmentMessaging = ({ userRole }) => {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [messageHistory, setMessageHistory] = useState([
    {
      recipients: floors.flatMap((floor) => departmentsPerFloor.map((dept) => `${floor}${dept}`)),
      content: 'Aviso importante: El día jueves 14 de Noviembre de 2024 habrá un corte de agua por la mañana (de 9:00 a 11:00). Disculpen las molestias.',
      sentAt: 'Enviado el miércoles 13 de Noviembre de 2024 a las 12:00.',
    },
  ]);

  const handleDepartmentClick = (floor, department) => {
    const departmentId = `${floor}${department}`;
    setSelectedDepartments((prevSelected) =>
      prevSelected.includes(departmentId)
        ? prevSelected.filter((id) => id !== departmentId)
        : [...prevSelected, departmentId]
    );
    setError('');
  };

  const handleFloorSelect = (floor) => {
    const floorDepartments = departmentsPerFloor.map((dept) => `${floor}${dept}`);
    const isFloorSelected = floorDepartments.every((dept) => selectedDepartments.includes(dept));

    setSelectedDepartments((prevSelected) =>
      isFloorSelected
        ? prevSelected.filter((dept) => !floorDepartments.includes(dept))
        : [...prevSelected, ...floorDepartments.filter((dept) => !prevSelected.includes(dept))]
    );
    setError('');
  };

  const handleSendMessage = () => {
    if (selectedDepartments.length === 0) {
      setError('Selecciona al menos un departamento para enviar el mensaje.');
      return;
    }
    if (message.trim() === '') {
      setError('El mensaje no puede estar vacío.');
      return;
    }

    const today = new Date();
    const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const sentAt = `Enviado el ${days[today.getDay()]}.`;

    // Guardar el mensaje en el historial
    const newMessage = { recipients: [...selectedDepartments], content: message, sentAt };
    setMessageHistory((prevHistory) => [...prevHistory, newMessage]);

    // Limpiar el estado después de enviar el mensaje
    setSelectedDepartments([]);
    setMessage('');
    setError('');
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Sistema de Mensajería
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}

      {userRole === 'Admin' && (
        <>
          {/* Selector de departamentos */}
          <Grid container spacing={2}>
            {floors.map((floor) => (
              <Grid item xs={12} key={floor}>
                <Typography variant="h6">Piso {floor}</Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => handleFloorSelect(floor)}
                  style={{ marginBottom: '10px' }}
                >
                  Seleccionar Todo el Piso
                </Button>
                <Grid container spacing={1}>
                  {departmentsPerFloor.map((department) => {
                    const departmentId = `${floor}${department}`;
                    const isSelected = selectedDepartments.includes(departmentId);

                    return (
                      <Grid
                        item
                        xs={3}
                        key={departmentId}
                        onClick={() => handleDepartmentClick(floor, department)}
                        style={{
                          cursor: 'pointer',
                          padding: '10px',
                          border: isSelected ? '2px solid blue' : '1px solid gray',
                          backgroundColor: isSelected ? '#cfe8fc' : '#f5f5f5',
                          fontSize: isSelected ? '0.8rem' : '1rem',
                          textAlign: 'center',
                          borderRadius: '5px',
                        }}
                      >
                        {departmentId}
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            ))}
          </Grid>

          {/* Formulario de mensaje */}
          <div style={{ marginTop: '20px' }}>
            <Typography variant="h5" gutterBottom>Mensaje</Typography>
            <TextField
              label="Escribe tu mensaje"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
              style={{ marginTop: '20px' }}
            >
              Enviar Mensaje
            </Button>
          </div>
        </>
      )}

      {/* Historial de mensajes */}
      <div style={{ marginTop: '40px' }}>
        <Typography variant="h5" gutterBottom>Historial de Mensajes</Typography>
        {messageHistory.map((msg, index) => (
          <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
            <Typography variant="subtitle1">Destinatarios: {msg.recipients.join(', ')}</Typography>
            <Typography variant="body1">{msg.content}</Typography>
            <Typography variant="caption" color="textSecondary">{msg.sentAt}</Typography>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DepartmentMessaging;
