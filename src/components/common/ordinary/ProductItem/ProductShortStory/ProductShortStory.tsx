import { FC, ReactNode, useState } from 'react'
import CountUp from 'react-countup'

import Modal from '../../../ui/Modal/Modal'
import ProductFullStory from '../ProductFullStory/ProductFullStory'

import { useAppDispatch, useAppSelector } from '../../../../../core/hooks/redux'
import { orderState } from '../../../../../core/store/reducers/orderSlice'

import { IPizza } from '../../../../../core/models/IPizza'

import styles from './ProductShortStory.module.scss'
import ModalFooter from '../../../simple/ModalFooter/ModalFooter'

interface IData {
  data: IPizza
}

let oldPrice: number | null = null

const ProductShortStory: FC<IData> = ({ data }) => {
  const { imageUrl, title, description, price, id } = data
  const { currentProduct } = useAppSelector(orderState)
  const { pushCheckedProduct } = useAppDispatch()

  const [ isModalClose, setIsModalClose ] = useState<boolean>(false)

  const addProductToCart = (): void => {
    currentProduct && pushCheckedProduct(currentProduct)
    setIsModalClose(true)
  }

  const renderOpenModalButton = (): ReactNode => (
    <button
      className={ `${ styles.order } orange-button` }
    >
      Заказать
    </button>
  )

  const renderFooterModal = (newPrice: number): ReactNode =>
    <ModalFooter
      resolveAction={ addProductToCart }
      cancelAction={ setIsModalClose }
    >
      Стоимость:&#160;
      <CountUp
        start={ oldPrice || price }
        end={ newPrice }
        duration={ 0.3 }
        onUpdate={ () => (oldPrice = newPrice) }
      />
      <span>&#160;₽</span>
    </ModalFooter>

  return (
    <li className={ styles.container }>
      <img
        src={ imageUrl }
        alt={ title }
        className={ styles.image }
      />
      <div className={ styles.info }>
        <h3 className={ styles.title }>{ title }</h3>
        <p className={ styles.description }>{ description }</p>
        <div className={ styles.price }>
          <div className={ styles.cost }>от { price } ₽</div>
          <Modal
            id={ `goods-item-${ id }` }
            button={ renderOpenModalButton() }
            title={ title }
            maxWidth={ 920 }
            footerChildren={
              renderFooterModal(currentProduct?.price || price)
            }
            isModalClose={ isModalClose }
            setIsModalClose={ setIsModalClose }
          >
            <ProductFullStory data={ data } />
          </Modal>
        </div>
      </div>
    </li>
  )
}

export default ProductShortStory
