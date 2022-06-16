import React, { FC } from 'react';
import styles from './Info.module.scss';

const Info: FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTop}>
        Доставка пиццы <span className={styles.infoRed}>Симферополь</span>
      </div>
      <div className={styles.infoBottom}>
        Время доставки <span className={styles.infoRed}>&bull;</span> до 31 мин
      </div>
    </div>
  );
};

export default Info;
