import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setUserRole } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    setUserRole(role); // Guardamos el rol seleccionado
    navigate('/home'); // Redirigimos al dashboard después de seleccionar
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Selecciona tu Rol
      </Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSelectRole('D. 2A')}
          sx={{ mx: 1 }}
        >
          D. 2A
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleSelectRole('Admin')}
          sx={{ mx: 1 }}
        >
          Admin
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
