import React, { FC } from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation: FC = () => {
  const links = [
    { path: '/', text: 'Главная' },
    { path: '/aboutus', text: 'О нас' },
    { path: '/#check-pizza', text: 'Выбрать пиццу' },
    { path: '/payment', text: 'Оплата' },
    { path: '/delivery', text: 'Доставка' },
    { path: '/contacts', text: 'Контакты' },
  ];

  const getLink = (path: string, text: string) => {
    const checkLink = text !== 'Выбрать пиццу';
    const As = checkLink ? Link : HashLink;

    return (
      <As
        to={path}
        {...(!checkLink ? { smooth: true } : {})}
        className={styles.navigationLink}
      >
        {text}
      </As>
    );
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {links.map(({ path, text }, index) => (
          <li key={index} className={styles.navigationItem}>
            {getLink(path, text)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
