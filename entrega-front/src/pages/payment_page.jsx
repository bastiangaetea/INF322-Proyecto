import React, { useContext, useState } from 'react';
import { PaymentContext } from '../context/PaymentContext';
import Button from '@mui/material/Button';
import PaidIcon from '@mui/icons-material/Paid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { DesgloseContext } from '../context/DesgloseContext';
import { UserContext } from '../context/UserContext';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const modalStyle = {
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

export const PaymentPage = () => {
  const { pagosAnteriores, deudaAlDia } = useContext(PaymentContext);
  const { desglosesAnteriores, agregarDesglose } = useContext(DesgloseContext);
  const { userRole } = useContext(UserContext);

  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useState({
    mes: '',
    monto: '',
    remuneraciones: '',
    mantenimiento: '',
  });

  const navigate = useNavigate();

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setFormValues({ mes: '', monto: '', remuneraciones: '', mantenimiento: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { mes, monto, remuneraciones, mantenimiento } = formValues;

    if (mes && monto && remuneraciones && mantenimiento) {
      agregarDesglose(mes, parseFloat(monto), parseFloat(remuneraciones), parseFloat(mantenimiento));
      handleCloseModal();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const pagoProximo = { mes: 'Octubre 2024', monto: 178987, mdpg: '--', id: '--' };

  const handlePayment = () => {
    navigate('/payment/pago');
  };

  return (
    <>
      <h2>Bienvenido a la página de pagos.</h2>
      <p>Aquí podrás realizar el pago de tus gastos comunes y ver los pagos realizados en meses anteriores.</p>

      {userRole === 'D. 2A' && (
        <>
          {!deudaAlDia ? (
            <>
              <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
                <Table sx={{ maxWidth: 600 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Periodo</TableCell>
                      <TableCell align="right">Monto a Cancelar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">{pagoProximo.mes}</TableCell>
                      <TableCell align="right">{pagoProximo.monto}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <br />
              <Button variant="contained" startIcon={<PaidIcon />} onClick={handlePayment}>
                Pagar
              </Button>
            </>
          ) : (
            <p><strong>Las deudas se encuentran al día.</strong></p>
          )}

          <h2>Pagos Anteriores</h2>
          <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
            <Table sx={{ maxWidth: 600 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Periodo</TableCell>
                  <TableCell align="right">Monto Cancelado</TableCell>
                  <TableCell align="right">Medio de Pago</TableCell>
                  <TableCell align="right">ID de Pago</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pagosAnteriores.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">{row.mes}</TableCell>
                    <TableCell align="right">{row.monto}</TableCell>
                    <TableCell align="right">{row.mdpg}</TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <h2>Desglose de Gastos Comunes</h2>
          <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
            <Table sx={{ maxWidth: 600 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Periodo</TableCell>
                  <TableCell align="right">Monto Total</TableCell>
                  <TableCell align="right">Remuneraciones</TableCell>
                  <TableCell align="right">Mantenimiento</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {desglosesAnteriores.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">{row.mes}</TableCell>
                    <TableCell align="right">{row.monto}</TableCell>
                    <TableCell align="right">{row.remuneraciones}</TableCell>
                    <TableCell align="right">{row.mantenimiento}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      {userRole === 'Admin' && (
        <>
          <h2>Desglose de Gastos Comunes</h2>
          <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
            <Table sx={{ maxWidth: 600 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Periodo</TableCell>
                  <TableCell align="right">Monto Total</TableCell>
                  <TableCell align="right">Remuneraciones</TableCell>
                  <TableCell align="right">Mantenimiento</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {desglosesAnteriores.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">{row.mes}</TableCell>
                    <TableCell align="right">{row.monto}</TableCell>
                    <TableCell align="right">{row.remuneraciones}</TableCell>
                    <TableCell align="right">{row.mantenimiento}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <Button variant="contained" onClick={handleOpenModal}>
            Añadir Nuevo Desglose
          </Button>

          {/* Modal para añadir desglose */}
          <Modal open={openModal} onClose={handleCloseModal}>
            <Box sx={modalStyle}>
              <h3>Añadir Nuevo Desglose</h3>
              <TextField
                fullWidth
                label="Mes"
                name="mes"
                value={formValues.mes}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Monto Total"
                name="monto"
                value={formValues.monto}
                onChange={handleChange}
                margin="normal"
                type="number"
              />
              <TextField
                fullWidth
                label="Remuneraciones"
                name="remuneraciones"
                value={formValues.remuneraciones}
                onChange={handleChange}
                margin="normal"
                type="number"
              />
              <TextField
                fullWidth
                label="Mantenimiento"
                name="mantenimiento"
                value={formValues.mantenimiento}
                onChange={handleChange}
                margin="normal"
                type="number"
              />
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 2, width: '100%' }}
              >
                Guardar
              </Button>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

export default PaymentPage;
