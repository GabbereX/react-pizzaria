import axios from 'axios';
import { IPizza } from '../../interfaces/IPizza';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  data: Array<IPizza> | [];
  isLoading: boolean;
  error: string;
}

const initialState: IInitialState = {
  data: [],
  isLoading: false,
  error: '',
};

export const fetchData = createAsyncThunk(
  'data/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IPizza[]>(
        'https://628ed24a0e69410599d0fe4d.mockapi.io/items'
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Не удалось...');
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchData.fulfilled.type]: (state, action: PayloadAction<IPizza[]>) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    [fetchData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default dataSlice.reducer;
