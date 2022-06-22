import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IInitialState {
  [key: string]: string
  search: string;
}

const initialState: IInitialState = {
  search: '',
};

const fieldsValuesSlice = createSlice({
  name: 'fieldsValuesSlice',
  initialState,
  reducers: {
    setSearchField(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const fieldsValuesAction = fieldsValuesSlice.actions;
export const fieldsValuesState = (state: RootState) => state.fieldsValuesSlice;
export default fieldsValuesSlice.reducer;
