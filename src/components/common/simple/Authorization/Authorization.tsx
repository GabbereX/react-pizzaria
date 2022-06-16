import React, { FC } from 'react';
import styles from './Authorization.module.scss';

const Authorization: FC = () => {
  return <a href='http://localhost:3000' className={styles.authorization}>Войти</a>;
};

export default Authorization;
