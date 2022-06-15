import React, { FC } from 'react';
import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import Info from './Info/Info';
import CallRequest from './CallRequest/CallRequest';
import Telephone from './Telephone/Telephone';
import Navigation from './Navigation/Navigation';
import Authorization from './Authorization/Authorization';
import Basket from './Basket/Basket';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <div className={styles.headerTop}>
          <Logo />
          <Info />
          <CallRequest />
          <Telephone />
        </div>
        <div className={styles.headerBottom}>
          <Navigation />
          <Authorization />
          <Basket />
        </div>
      </div>
    </header>
  );
};

export default Header;
