import { IProduct } from '../models/IOrder'

export const checkForDoubles =
  (actionPayloadProduct: IProduct) =>
    (product: IProduct) =>
      (
        product.id === actionPayloadProduct.id &&
        product.types === actionPayloadProduct.types &&
        product.sizes === actionPayloadProduct.sizes
      )

export const getProductsFromLocalStorage = (): Array<IProduct> => {
  const products = localStorage.getItem('pizzaria_products')

  return products ? JSON.parse(products) : []
}
