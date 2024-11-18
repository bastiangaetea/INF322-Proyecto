import React from 'react'
import { createRoot } from 'react-dom/client';
import { PaymentProvider } from './context/PaymentContext';
import { VisitsProvider } from './context/VisitsContext';
import { ReservationProvider } from './context/ReservationContext';
import { UserProvider } from './context/UserContext';
import { DesgloseProvider } from './context/DesgloseContext';

import Layout from './components/layout'

import './stylesheets/index.scss'
import { BrowserRouter } from 'react-router-dom';
import Payment from './pages/payment';

document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root'));
root.render(
    <DesgloseProvider>
        <UserProvider>
            <PaymentProvider>
                <VisitsProvider>
                    <ReservationProvider>
                        <BrowserRouter>
                            <Layout />
                        </BrowserRouter>
                    </ReservationProvider>
                </VisitsProvider>
            </PaymentProvider>
        </UserProvider>
    </DesgloseProvider>
);
