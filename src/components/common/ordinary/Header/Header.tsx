import React, { FC } from 'react';
import styles from './Header.module.scss';
import Info from '../../simple/Info/Info';
import CallRequest from '../../simple/CallRequest/CallRequest';
import Telephone from '../../simple/Telephone/Telephone';
import Authorization from '../../simple/Authorization/Authorization';
import Logo from '../../simple/Logo/Logo';
import Basket from '../../simple/Basket/Basket';
import NavigationContainer from '../../../containers/NavigationContainer/NavigationContainer';

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
          <NavigationContainer />
          <Authorization />
          <Basket />
        </div>
      </div>
    </header>
  );
};

export default Header;
