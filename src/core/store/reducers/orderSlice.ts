import { IOrder, IProduct } from '../../models/IOrder'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { checkForDoubles, getProductsFromLocalStorage } from '../../utils/orderUtils'

export const initialState: IOrder = {
  checkedProducts: getProductsFromLocalStorage(),
  currentProduct: null
}

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setCurrentProduct(state, action: PayloadAction<IProduct | null>) {
      state.currentProduct = action.payload
    },

    pushCheckedProduct(state, action: PayloadAction<IProduct>) {
      const isDouble = checkForDoubles(action.payload)
      const doubleProduct = state.checkedProducts.find(isDouble)

      if (doubleProduct) {
        state.checkedProducts = state.checkedProducts.map(product => {
          const { count, price } = product

          return isDouble(product)
            ? {
              ...product,
              count: count + action.payload.count,
              price: price + action.payload.price
            }
            : product
        })
      } else state.checkedProducts.push(action.payload)
    },

    deleteCheckedProduct(state, action: PayloadAction<IProduct>) {
      const isDouble = checkForDoubles(action.payload)

      state.checkedProducts = state.checkedProducts.filter(product =>
        !isDouble(product))
    },

    deleteCheckedProducts(state) {
      state.checkedProducts = []
    },

    editCheckedProduct(state, action: PayloadAction<IProduct>) {
      const isDouble = checkForDoubles(action.payload)

      state.checkedProducts = state.checkedProducts.map(product => {
        return isDouble(product)
          ? action.payload
          : product
      })
    }
  }
})

export const orderActions = orderSlice.actions
export const orderState = (state: RootState) => state.orderSlice
export default orderSlice.reducer