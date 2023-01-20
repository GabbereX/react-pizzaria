import React, { FC } from 'react';
import styles from './CrossIcon.module.scss';

const CrossIcon: FC = () => {
  return (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className={styles.icon}>
      <polygon points='18.41 2.36 12.05 8.73 5.69 2.36 2.86 5.19 9.22 11.56 2.86 17.92 5.69 20.75 12.05 14.38 18.41 20.75 21.24 17.92 14.88 11.56 21.24 5.19 18.41 2.36' />
    </svg>
  );
};

export default CrossIcon;
