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
import MyModal from '../components/modal';
import { useNavigate } from 'react-router-dom';

export const PaymentPage = () => {
  const { pagosAnteriores, deudaAlDia } = useContext(PaymentContext);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const pagoProximo = { mes: 'Octubre 2024', monto: 178987, mdpg: '--', id: '--' }

  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment/pago');
  };

  return (
    <>
      <h2>Bienvenido a la página de pagos.</h2>
      <p>Aquí podrás realizar el pago de tus gastos comunes y ver los pagos realizados en meses anteriores.</p>
      
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
      <br/>
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
    </>
  );
}

export default PaymentPage;
