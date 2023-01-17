import { IProduct } from '../models/IOrder'

export const checkForDoubles =
  (actionPayloadProduct: IProduct) =>
    (product: IProduct) =>
      (
        product.id === actionPayloadProduct.id &&
        product.types === actionPayloadProduct.types &&
        product.sizes === actionPayloadProduct.sizes
      )
