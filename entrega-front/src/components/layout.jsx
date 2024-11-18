import React from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'

import HomePage from '../pages/home_page'
import PaymentPage from '../pages/payment_page'
import Payment from '../pages/payment'
import RegisterVisitPage from '../pages/Register_visits';
import VisitsHistoryPage from '../pages/Register';
import MessagingPage from '../pages/MessagingPage';
import ReservationPage from '../pages/ReservationPage';
import Login from '../pages/login';

import NavBar from '../components/nav_bar'
import Logo from '../assets/logo.jpg'

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className="layout">
      <div className="layout__header">
        <Link to="/home" className="layout__logo">
          <img src={Logo} alt="Logo" style={{ height: '80px' }} />
        </Link>
        {location.pathname !== '/payment/pago' && (
          <h1 className="layout__title">¡Bienvenido al portal de tu comunidad!</h1>
        )}
      </div>
      {(location.pathname !== '/payment/pago' && location.pathname !== '/') && <NavBar />}
      <div className="layout__page">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment/pago" element={<Payment />} />
          <Route path="/Register" element={<RegisterVisitPage />} />
          <Route path="/RegisterVisits" element={<VisitsHistoryPage />} />
          <Route path="/messaging" element={<MessagingPage />} />
          <Route path="/reservar" element={<ReservationPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default Layout
