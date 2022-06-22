import { ChangeEvent, useEffect, useState } from 'react';
import { useAppSelector } from './redux';
import { fieldsValuesState } from '../store/reducers/fieldsValuesSlice';
import {
  TStringIndexSignature,
  useFieldsDispatch,
} from './redux/useFieldsDispatch';

const useInput = (key: string, globalState: boolean) => {
  const globalValue = useAppSelector(fieldsValuesState);
  const setGlobalValue: TStringIndexSignature = useFieldsDispatch();
  const [value, setValue] = useState<string>(globalValue[key] || '');

  useEffect(() => {
    if (globalState) {
      setValue(globalValue[key]);
    }
  }, [globalValue[key]]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (globalState) {
      const methodName = `set${key[0].toUpperCase() + key.slice(1)}Field`;
      setGlobalValue[methodName](e.target.value);
    } else {
      setValue(e.target.value);
    }
  };

  return { value, onChange };
};

export default useInput;
