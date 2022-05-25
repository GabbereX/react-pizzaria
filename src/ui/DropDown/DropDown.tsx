import React, { FC, ReactNode, useState } from 'react';
import styles from './DropDown.module.scss';

interface IDropDownProps {
  button: ReactNode;
  children: ReactNode;
}

const DropDown: FC<IDropDownProps> = ({ button, children }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return <div>{button}</div>;
};

export default DropDown;
