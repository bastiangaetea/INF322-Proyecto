import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import { UserContext } from '../context/UserContext';

export const NavBar = () => {
  const { userRole, setUserRole } = useContext(UserContext); // Accedemos al rol y función para cambiarlo
  const navigate = useNavigate(); // Hook para navegar programáticamente

  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  const handleLogout = () => {
    setUserRole(null); // Reiniciar el rol (simula cerrar sesión)
    navigate('/'); // Redirigir a la página de login
  };

  return (
    <nav className="nav-bar">
      <NavLink to="/home" className="nav-bar__logo">
        <img src={Logo} alt="Logo" className="nav-bar__logo-image" />
      </NavLink>
      <div className="nav-bar__links">
        {userRole === 'D. 2A' && (
          <>
            <NavLink className={navLinkClass} to="/home">Inicio</NavLink>
            <NavLink className={navLinkClass} to="/payment">Gastos Comunes</NavLink>
            <NavLink className={navLinkClass} to="/Register">Registrar visitas</NavLink>
            <NavLink className={navLinkClass} to="/RegisterVisits">Registro de visitas</NavLink>
            <NavLink className={navLinkClass} to="/messaging">Mensajería</NavLink>
            <NavLink className={navLinkClass} to="/reservar">Reservar Espacios</NavLink>
          </>
        )}
        {userRole === 'Admin' && (
          <>
            <NavLink className={navLinkClass} to="/home">Inicio</NavLink>
            <NavLink className={navLinkClass} to="/payment">Gastos Comunes</NavLink>
            <NavLink className={navLinkClass} to="/Register">Registrar visitas</NavLink>
            <NavLink className={navLinkClass} to="/RegisterVisits">Registro de visitas</NavLink>
            <NavLink className={navLinkClass} to="/messaging">Mensajería</NavLink>
            <NavLink className={navLinkClass} to="/reservar">Reservar Espacios</NavLink>
          </>
        )}
        {userRole !== 'Admin' && userRole !== 'D. 2A' && (
          <>
            <NavLink className={navLinkClass} to="/">Login</NavLink>
          </>
        )}
      </div>
      {/* Botón de Cerrar Sesión */}
      {userRole && (
        <button
          className="nav-bar__logout-button"
          onClick={handleLogout}
          style={{
            marginLeft: 'auto',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '5px',
            fontSize: '1rem',
          }}
        >
          Cerrar Sesión
        </button>
      )}
    </nav>
  );
};

export default NavBar;
