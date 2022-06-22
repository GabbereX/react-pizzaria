import {ActionCreatorWithPayload, bindActionCreators} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import {fieldsValuesAction} from "../../store/reducers/fieldsValuesSlice";

export interface TStringIndexSignature {
  [key: string]: ActionCreatorWithPayload<string>;
}

export const useFieldsDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(fieldsValuesAction, dispatch);
};