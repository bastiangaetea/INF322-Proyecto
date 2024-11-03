import React from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import PaymentPage from '../pages/payment_page'
import Payment from '../pages/payment'

import NavBar from '../components/nav_bar'
import Logo from '../assets/logo.jpg'

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className="layout">
      <div className="layout__header">
        <Link to="/" className="layout__logo">
          <img src={Logo} alt="Logo" style={{ height: '80px' }} />
        </Link>
        {location.pathname !== '/payment/pago' && (
          <h1 className="layout__title">¡Bienvenido al portal de tu comunidad!</h1>
        )}
      </div>
      {location.pathname !== '/payment/pago' && <NavBar />}
      <div className="layout__page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lightbulb" element={<LightbulbPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment/pago" element={<Payment />} />
        </Routes>
      </div>
    </div>
  )
}

export default Layout
