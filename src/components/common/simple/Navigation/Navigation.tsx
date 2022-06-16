import React, { FC } from 'react';
import styles from './Navigation.module.scss';

interface IProps {
  renderLinks: () => JSX.Element[];
}

const Navigation: FC<IProps> = ({ renderLinks }) => {
  return (
    <nav>
      <ul className={styles.list}>
        {renderLinks()}
      </ul>
    </nav>
  );
};

export default Navigation;
