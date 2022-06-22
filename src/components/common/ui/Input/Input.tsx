import React, { FC } from 'react';
import './Input.scss';
import { IField } from '../../../../core/constants/fields';
import useInput from '../../../../core/hooks/useInput';

type TProps = { options: IField };

const Input: FC<TProps> = ({ options }) => {
  const { key, type, label, marginRight, width, labelVisibility, globalState } =
    options;
  const inputValue = useInput(key, globalState);

  return (
    <div key={key} className={'input__container'} style={{ marginRight }}>
      <input
        className={'input'}
        type={type}
        required
        style={{ width }}
        {...inputValue}
      />
      <label
        className={`input__label ${
          labelVisibility ? 'input__label--visible' : 'input__label--hidden'
        }`}
      >
        {label}
      </label>
      <span className={'input__focus-line'}></span>
    </div>
  );
};

export default Input;
