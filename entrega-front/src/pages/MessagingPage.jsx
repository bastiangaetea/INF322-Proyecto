import React, { useContext } from 'react';
import DepartmentMessaging from '../components/DepartmentMessaging'; // Asegúrate de que este sea el componente actualizado
import Container from '@mui/material/Container';
import { UserContext } from '../context/UserContext';

const MessagingPage = () => {
  const { userRole } = useContext(UserContext);

  return (
    <Container maxWidth="md">
      <DepartmentMessaging userRole={userRole} />
    </Container>
  );
};

export default MessagingPage;
