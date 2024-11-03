import React, { useState } from 'react'
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

function createData(mes, monto, mdpg) {
  return { mes, monto, mdpg };
}


const pagos_anteriores = [
  createData('Septiembre 2024', 185353, 'T. Crédito'),
  createData('Agosto 2024', 205816, 'T. Débito'),
  createData('Julio 2024', 198477, 'T. Crédito'),
  createData('Junio 2024', 217428, 'T. Crédito')
];

export const PaymentPage = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <label>
        <h2>Bienvenido a la página de pagos.</h2>
        Aquí podrás realizar el pago de tus gastos comunes y ver los pagos realizados en meses anteriores.
      </label>
      <br/>
      <br/>
      <br/>
      <label>
        El monto de Octubre de 2024 es de: <strong>$178.987</strong> CLP.
      </label>
      <br/>
      <br/>
      <Button variant="contained" startIcon={<PaidIcon />} onClick={handleOpenModal}>Pagar</Button>
      <MyModal open={openModal} onClose={handleCloseModal}/>
      <br/>
      <br/>
      <h2>Pagos Anteriores</h2>
      <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
        <Table sx={{ maxWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Periodo</TableCell>
              <TableCell align="right">Monto Cancelado</TableCell>
              <TableCell align="right">Medio de Pago</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pagos_anteriores.map((row) => (
              <TableRow
                key={row.mes}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.mes}
                </TableCell>
                <TableCell align="right">{row.monto}</TableCell>
                <TableCell align="right">{row.mdpg}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default PaymentPage
