export interface IOrder {
  checkedProducts: Array<IProduct>
  currentProduct: IProduct | null
}

export interface IProduct {
  id: string
  title: string
  types: number
  sizes: number
  price: number
  count: number
}