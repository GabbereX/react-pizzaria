import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../components/Header/Navigation/Navigation.module.scss';

const NotFound: FC = () => {
  return (
    <div className='error'>
      Такой страницы не существует.
      <br />
      <Link to='/' className={styles.navigationLink}>
        Перейти на главную
      </Link>
    </div>
  );
};

export default NotFound;
