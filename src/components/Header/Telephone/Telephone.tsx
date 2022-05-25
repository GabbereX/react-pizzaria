import React, { FC } from 'react';
import styles from './Telephone.module.scss';

const Telephone: FC = () => {
  return <a href='tel:+78005553535' className={styles.telephone}>8 800 555-35-35</a>;
};

export default Telephone;
