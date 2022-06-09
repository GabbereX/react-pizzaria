import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.local.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import AboutUs from './pages/AboutUs/AboutUs';
import Payment from './pages/Payment/Payment';
import Delivery from './pages/Delivery/Delivery';
import Contacts from './pages/Contacts/Contacts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
