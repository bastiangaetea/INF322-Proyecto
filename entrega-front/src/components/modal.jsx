import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const MyModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment/pago');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Confirmación de Pago
        </Typography>
        <Typography sx={{ mt: 2 }}>
          ¿Está seguro de que desea realizar el pago?
        </Typography>
        <Button onClick={handlePayment} variant="contained" sx={{ mt: 2 }}>
          Confirmar Pago
        </Button>
        <Button onClick={onClose} sx={{ mt: 2, ml: 1 }}>
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
};

export default MyModal;
