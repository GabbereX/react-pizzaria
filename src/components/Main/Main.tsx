import React, { FC, Fragment } from 'react';
import styles from './Main.module.scss';
import Shop from './Shop/Shop';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Payment from '../../pages/Payment/Payment';
import Delivery from '../../pages/Delivery/Delivery';
import Contacts from '../../pages/Contacts/Contacts';
import NotFound from '../../pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';

const Main: FC = () => {
  return (
    <Fragment>
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </Fragment>
  );
};

export default Main;
