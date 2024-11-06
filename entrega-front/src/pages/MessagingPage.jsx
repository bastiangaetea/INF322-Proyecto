// /pages/MessagingPage.jsx
import React from 'react';
import DepartmentSelector from '../components/DepartmentSelector';
import Container from '@mui/material/Container';

const MessagingPage = () => {
  return (
    <Container maxWidth="md">
      <h2>Sistema de Mensajería</h2>
      <DepartmentSelector />
    </Container>
  );
};

export default MessagingPage;
