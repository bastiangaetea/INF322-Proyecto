import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export const Payment = () => {
  const [value, setValue] = useState('Santander **** 1234');
  const [paymentMethods, setPaymentMethods] = useState([
    'Santander **** 1234',
    'BCI Débito **** 4231',
  ]);
  const [open, setOpen] = useState(false);
  const [newCard, setNewCard] = useState({
    bank: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    cardHolderName: '',
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validaciones específicas para cada campo numérico
    if (name === "cardNumber" && !/^\d*$/.test(value)) return; // Solo dígitos
    if (name === "expiryMonth" && !/^\d*$/.test(value)) return; // Solo dígitos
    if (name === "expiryYear" && !/^\d*$/.test(value)) return; // Solo dígitos
    if (name === "cvv" && !/^\d*$/.test(value)) return; // Solo dígitos

    setNewCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCard = () => {
    const { bank, cardNumber, expiryMonth, expiryYear, cvv, cardHolderName } = newCard;
    if (bank && cardNumber.length === 16 && ((expiryYear >= 2024 && expiryMonth >= 11) || (expiryYear > 2024)) && expiryMonth && expiryYear && cvv.length === 3 && cardHolderName) {
      const formattedCard = `${bank} **** ${cardNumber.slice(-4)}`;
      setPaymentMethods((prevMethods) => [...prevMethods, formattedCard]);
      setValue(formattedCard); // Opcional: seleccionar la nueva tarjeta automáticamente
      setNewCard({
        bank: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
        cardHolderName: '',
      });
      handleCloseModal();
    } else {
      if (expiryYear < 2025 && expiryMonth < 11)
        alert("Por favor, ingrese una fecha de vencimiento válida")
      else {
        alert("Por favor, complete todos los campos correctamente.");
      }
    }
  };

  const handlePayment = () => {
    if (value) {
      alert(`Procesando el pago con la tarjeta seleccionada: ${value}`);
      // Aquí puedes añadir la lógica para realizar el pago
    } else {
      alert("Por favor, seleccione un método de pago.");
    }
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/payment');
  };

  return (
    <>
      <h2>Pagando gastos comunes</h2>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Elige cómo pagar</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {paymentMethods.map((method) => (
            <FormControlLabel key={method} value={method} control={<Radio />} label={method} />
          ))}
        </RadioGroup>
      </FormControl>
      <br />
      <Button variant="contained" onClick={handleOpenModal}>
        Agregar nueva tarjeta
      </Button>

      {/* Modal */}
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Agregar nueva tarjeta</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="bank"
            label="Banco"
            fullWidth
            value={newCard.bank}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="cardNumber"
            label="Número de Tarjeta (16 dígitos)"
            type="text"
            fullWidth
            value={newCard.cardNumber}
            onChange={handleInputChange}
            inputMode="numeric"
            inputProps={{ maxLength: 16 }}
          />
          <TextField
            margin="dense"
            name="expiryMonth"
            label="Mes de Vencimiento (MM)"
            type="text"
            fullWidth
            value={newCard.expiryMonth}
            onChange={handleInputChange}
            inputMode="numeric"
            inputProps={{ maxLength: 2 }}
          />
          <TextField
            margin="dense"
            name="expiryYear"
            label="Año de Vencimiento (YYYY)"
            type="text"
            fullWidth
            value={newCard.expiryYear}
            onChange={handleInputChange}
            inputMode="numeric"
            inputProps={{ maxLength: 4 }}
          />
          <TextField
            margin="dense"
            name="cvv"
            label="CVV"
            type="text"
            fullWidth
            value={newCard.cvv}
            onChange={handleInputChange}
            inputMode="numeric"
            inputProps={{ maxLength: 3 }}
          />
          <TextField
            margin="dense"
            name="cardHolderName"
            label="Nombre del Titular"
            fullWidth
            value={newCard.cardHolderName}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          <Button onClick={handleAddCard} variant="contained">Agregar</Button>
        </DialogActions>
      </Dialog>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <Button variant="contained" onClick={handlePayment} style={{ marginLeft: '700px' }}>
        Realizar pago
      </Button>
      <Button variant='contained' onClick={handleCancel} style={{ marginLeft: '10px' }}>
        Cancelar Pago
      </Button>
    </>
  );
};

export default Payment;
