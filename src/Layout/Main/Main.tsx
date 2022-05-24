import React, { FC } from 'react';
import styles from './Main.module.scss';
import Shop from "./Shop/Shop";

const Main: FC = () => {
  return (
    <main className={styles.main}>
        <Shop />
    </main>
  );
};

export default Main;
