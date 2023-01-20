import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../common/simple/Footer/Footer'
import Header from '../common/ordinary/Header/Header'
import Main from '../common/simple/Main/Main'
import MainPage from '../pages/MainPage'
import AboutUsPage from '../pages/AboutUsPage'
import PaymentPage from '../pages/PaymentPage'
import DeliveryPage from '../pages/DeliveryPage'
import ContactsPage from '../pages/ContactsPage'
import NotFoundPage from '../pages/NotFoundPage'

export const AppRoute: FC = () => {
  return (
    <BrowserRouter basename='/react-pizzaria'>
      <Header />
      <Routes>
        <Route
          element={ <Main /> }>
          <Route
            path='/'
            element={ <MainPage /> } />
          <Route
            path='/aboutus'
            element={ <AboutUsPage /> } />
          <Route
            path='/payment'
            element={ <PaymentPage /> } />
          <Route
            path='/delivery'
            element={ <DeliveryPage /> } />
          <Route
            path='/contacts'
            element={ <ContactsPage /> } />
          <Route
            path='*'
            element={ <NotFoundPage /> } />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
