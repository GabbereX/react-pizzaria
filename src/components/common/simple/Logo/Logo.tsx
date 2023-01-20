import React, { FC } from 'react';
import styles from './Logo.module.scss';
import logoSVG from '../../../../assets/images/svg/logo.svg';
import { Link } from 'react-router-dom';

const Logo: FC = () => {
  return (
    <Link to='/' className={styles.logo}>
      <img
        className={styles.logoImage}
        width='50'
        src={logoSVG}
        alt='Онлайн пиццерия в Симферополе'
      />
      <h1 className={styles.logoText}>Pizzaria</h1>
    </Link>
  );
};

export default Logo;
