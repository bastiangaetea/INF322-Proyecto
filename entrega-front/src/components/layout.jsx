import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import PaymentPage from '../pages/payment_page'
import Payment from '../pages/payment'

import NavBar from '../components/nav_bar'

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname)

  return (
      <div className='layout'>
        {location.pathname !== '/payment/pago' && (
        <h1 className="layout__title">Bienvenido al portal de tu comunidad!</h1>
      )}
        {location.pathname !== '/payment/pago' && <NavBar />}
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/payment/pago' element={<Payment />} />
          </Routes>
        </div>
      </div>
  )
}

export default Layout
