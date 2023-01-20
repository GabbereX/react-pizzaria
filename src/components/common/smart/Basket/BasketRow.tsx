import React, { FC, useEffect, useState } from 'react'
import { IProduct } from '../../../../core/models/IOrder'
import styles from './Basket.module.scss'
import DeleteIcon from '../../ui/icons/DeleteIcon/DeleteIcon'
import { useAppDispatch } from '../../../../core/hooks/redux'
import CountProduct from '../../ordinary/CountProduct/CountProduct'
import CountUp from 'react-countup'

interface IProps {
  product: IProduct
}

let oldPrice: { [key: string]: number } = {}

const BasketRow: FC<IProps> = ({ product }) => {
  const { id, title, sizes, types, count, price } = product

  const [ countState, setCountState ] = useState<number>(count)
  const [ retailPrice ] = useState<number>(price / count)
  const [ newPrice, setNewPrice ] = useState<number>(price)

  const { deleteCheckedProduct, editCheckedProduct } = useAppDispatch()

  useEffect(() => {
    count !== countState &&
    editCheckedProduct({
      ...product,
      count: countState,
      price: retailPrice * countState
    })
  }, [ countState ])

  useEffect(() => {
    setNewPrice(price)
  }, [ price ])

  return (
    <tr key={ id + sizes + types }>
      <td>
        { `
          ${ title },
          ${ sizes }см,
          ${ types > 0 ? 'толстое' : 'тонкое' } тесто
        ` }
      </td>

      <td>
        <CountProduct
          count={ countState }
          isSmallCount
          setCount={ setCountState }
        />
      </td>
      <td>
        <CountUp
          start={ oldPrice[id + sizes + types] || price }
          end={ newPrice }
          duration={ 0.3 }
          onUpdate={ () => (oldPrice[id + sizes + types] = price) }
        />
        &#160;₽
      </td>
      <td>
        <button
          className={ styles.delete_button }
          onClick={ () => deleteCheckedProduct(product) }
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  )
}

export default BasketRow