import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IInitialState {
  dataLength: number
}

const initialState: IInitialState = {
  dataLength: 0
}

const utilsSlice = createSlice({
  name: 'utilsSlice',
  initialState,
  reducers: {
    setDataLength(state, action: PayloadAction<number>) {
      state.dataLength = action.payload
    }
  }
})

export const utilsAction = utilsSlice.actions
export const utilsState = (state: RootState) => state.utilsSlice
export default utilsSlice.reducer
