import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IInitialState {
  [key: string]: string;
  search: string;
  searchOption: string;
}

const initialState: IInitialState = {
  search: '',
  searchOption: '0',
};

const fieldsValuesSlice = createSlice({
  name: 'fieldsValuesSlice',
  initialState,
  reducers: {
    setSearchField(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSearchOption(state, action: PayloadAction<string>) {
      state.searchOption = action.payload;
    },
  },
});

export const fieldsValuesAction = fieldsValuesSlice.actions;
export const fieldsValuesState = (state: RootState) => state.fieldsValuesSlice;
export default fieldsValuesSlice.reducer;
