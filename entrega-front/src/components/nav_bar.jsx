import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.jpg';


export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  return (
    <nav className='nav-bar'>
      <NavLink to='/' className='nav-bar__logo'>
        <img src={Logo} alt='Logo' className='nav-bar__logo-image' />
      </NavLink>
      <div className='nav-bar__links'>
        <NavLink className={navLinkClass} to='/'>Inicio</NavLink>
        <NavLink className={navLinkClass} to='/payment'>Pago</NavLink>
        <NavLink className={navLinkClass} to='/Register'>Registrar visitas</NavLink>
        <NavLink className={navLinkClass} to='/RegisterVisits'>Registro de visitas</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
