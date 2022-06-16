import React, { FC } from 'react';
import styles from './Logo.module.scss';
import logoSVG from '../../../../assets/images/svg/logo.svg';

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <img
        className={styles.logoImage}
        width='50'
        src={logoSVG}
        alt='Онлайн пиццерия в Симферополе'
      />
      <h1 className={styles.logoText}>
        Pizzaria
      </h1>
    </div>
  );
};

export default Logo;
