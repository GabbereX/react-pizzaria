import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
  fieldsValuesAction,
  fieldsValuesState,
} from '../store/reducers/fieldsValuesSlice';

interface IStringIndexSignature {
  [key: string]: ActionCreatorWithPayload<string>;
}
type TFieldsValuesAction = typeof fieldsValuesAction;

const useInput = (key: string, globalState: boolean) => {
  const globalValue = useAppSelector(fieldsValuesState);
  const setGlobalValue: IStringIndexSignature =
    useAppDispatch() as TFieldsValuesAction;
  const [value, setValue] = useState<string>(globalValue[key] || '');

  const methodName = `set${key[0].toUpperCase() + key.slice(1)}Field`;

  useEffect(() => {
    if (globalState) {
      setValue(globalValue[key]);
    }
  }, [globalValue[key]]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (globalState) {
      setGlobalValue[methodName](e.target.value);
    } else {
      setValue(e.target.value);
    }
  };

  return { value, onChange };
};

export default useInput;
