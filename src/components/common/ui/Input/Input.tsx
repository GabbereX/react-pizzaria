import React, { ChangeEvent, FC } from 'react'
import './Input.scss'
import { IField } from '../../../../core/constants/fields'
import useInput from '../../../../core/hooks/useInput'
import { useAppDispatch } from '../../../../core/hooks/redux'

type TProps = { options: IField }

const Input: FC<TProps> = ({ options }) => {
  const { key, type, label, marginRight, width, labelVisibility, globalState } =
    options
  const { value, onChange } = useInput(key, globalState)
  const { setPage } = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(1)
    onChange(e)
  }

  return (
    <div
      key={key}
      className={'input__container'}
      style={{ marginRight }}>
      <input
        className={'input'}
        type={type}
        required
        style={{ width }}
        value={value}
        onChange={handleChange}
      />
      <label
        className={`input__label ${
          labelVisibility ? 'input__label--visible' : 'input__label--hidden'
        }`}>
        {label}
      </label>
      <span className={'input__focus-line'}></span>
    </div>
  )
}

export default Input
