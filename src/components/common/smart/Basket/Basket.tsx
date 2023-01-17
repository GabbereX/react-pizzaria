import React, { FC, ReactNode, useEffect, useState } from 'react'

import Modal from '../../ui/Modal/Modal'

import { useAppSelector } from '../../../../core/hooks/redux'
import { orderState } from '../../../../core/store/reducers/orderSlice'

import { thead } from '../../../../core/constants/basketOption'

import styles from './Basket.module.scss'
import BasketRow from './BasketRow'
import ModalFooter from '../../simple/ModalFooter/ModalFooter'
import CountUp from 'react-countup'
import { IProduct } from '../../../../core/models/IOrder'

let oldTotalPrice: number | null = null

const Basket: FC = () => {
  const { checkedProducts } = useAppSelector(orderState)

  const getTotalPrice = (products: IProduct[]): number =>
    products.reduce((acc, item) => acc + item.price, 0)

  const [ isModalClose, setIsModalClose ] = useState<boolean>(false)
  const [ totalPrice, setTotalPrice ] =
    useState<number>(getTotalPrice(checkedProducts) ?? 0)

  const submitApplication = (): void => {
    setIsModalClose(true)
  }

  const renderBasketButton = (): ReactNode => (
    <button className={ `${ styles.basket } orange-button` }>Корзина</button>
  )

  const renderProductNotFound = (): ReactNode => (
    <div className={ styles.not_found }>
      В корзине нет товаров.
    </div>
  )

  const renderTable = (): ReactNode => (
    <table className={ styles.table }>
      <thead>
      <tr>
        {
          thead.map(textCell =>
            <th key={ textCell }>{ textCell }</th>)
        }
      </tr>
      </thead>
      <tbody>
      {
        [ ...checkedProducts ]
          .sort((prev, next) => prev.title.localeCompare(next.title))
          .map(product =>
            <BasketRow
              key={ product.id + product.sizes + product.types }
              product={ product } />)
      }
      </tbody>
    </table>
  )

  const renderFooterModal = () => (
    <ModalFooter
      resolveAction={ checkedProducts.length ? submitApplication : undefined }
      cancelAction={ setIsModalClose }
      resolveText='Отправить заявку'
      canselText='Закрыть'
    >
      {
        checkedProducts.length ?
          <>
            Стоимость:&#160;
            <CountUp
              start={ oldTotalPrice || totalPrice }
              end={ totalPrice }
              duration={ 0.3 }
              onUpdate={ () => (oldTotalPrice = totalPrice) }
            />
            <span>&#160;₽</span>
          </> : null
      }
    </ModalFooter>
  )

  useEffect(() => {
    localStorage.setItem('pizzaria_products', JSON.stringify(checkedProducts))

    const newTotalPrice = getTotalPrice(checkedProducts) ?? 0

    setTotalPrice(newTotalPrice)
  }, [ checkedProducts ])

  return (
    <Modal
      id='cart-modal'
      button={ renderBasketButton() }
      title='Корзина'
      maxWidth={ 630 }
      isModalClose={ isModalClose }
      footerChildren={ renderFooterModal() }
      setIsModalClose={ setIsModalClose }
    >
      {
        checkedProducts.length
          ? renderTable()
          : renderProductNotFound()
      }
    </Modal>
  )
}

export default Basket
