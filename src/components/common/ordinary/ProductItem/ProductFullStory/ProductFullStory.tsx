import { FC, ReactNode, useEffect, useState } from 'react'

import { useAppDispatch } from '../../../../../core/hooks/redux'

import { IPizza } from '../../../../../core/models/IPizza'
import { IProduct } from '../../../../../core/models/IOrder'

import styles from './ProductFullStory.module.scss'
import CountProduct from '../../CountProduct/CountProduct'

interface IProps {
  data: IPizza
}

interface ICheckedButtonArgs {
  isSize?: boolean
  content: number
  index: number
}

const ProductFullStory: FC<IProps> = ({ data }) => {
  const {
    id,
    imageUrl,
    title,
    description,
    price,
    sizes,
    types
  } = data

  const [ checkedSize, setCheckedSize ] = useState<number>(sizes[0])
  const [ checkedType, setCheckedType ] = useState<number>(types[0])
  const [ count, setCount ] = useState<number>(1)

  const { setCurrentProduct } = useAppDispatch()

  const renderCheckedButton = ({
    isSize = true, content, index
  }: ICheckedButtonArgs): ReactNode => {
    const state = isSize ? checkedSize : checkedType

    return (
      <button
        key={ index }
        className={ `
          light-gray-button
          ${ styles.checked_button }
          ${ content === state
          ? styles.checked_button_active
          : '' }
        ` }
        onClick={ () => isSize
          ? setCheckedSize(content)
          : setCheckedType(content)
        }
      >
        {
          isSize
            ? `${ content }см`
            : content === 0 ? 'Тонкое' : 'Толстое'
        }
      </button>
    )
  }

  useEffect(() => {
    const priceBySize = price / 100 * (sizes.indexOf(checkedSize) * 10)
    const priceByType = price / 100 * (checkedType * 10)

    const currentProduct: IProduct = {
      id,
      title,
      types: checkedType,
      sizes: checkedSize,
      price: Math.round(price + priceBySize + priceByType) * count,
      count
    }

    setCurrentProduct(currentProduct)

    return () => {
      setCurrentProduct(null)
    }
  }, [ checkedType, checkedSize, count ])

  return (
    <div className={ styles.container }>
      <img
        src={ imageUrl }
        alt={ title }
        className={ styles.image }
      />

      <div className={ styles.delimiter } />

      <div className={ styles.description_container }>
        <p className={ styles.description }>
          { description }
        </p>

        <div className={ styles.options }>
          <span>Размер:</span>
          <div className='d-flex'>
            {
              sizes.map((size, index) =>
                renderCheckedButton({ content: size, index }))
            }
          </div>
        </div>

        <div className={ styles.options }>
          <span>Тесто:</span>
          <div className='d-flex'>
            {
              types.map((type, index) =>
                renderCheckedButton({ isSize: false, content: type, index }))
            }
          </div>
        </div>

        <div className={ styles.options }>
          <span>Количество:</span>
          <CountProduct
            count={ count }
            setCount={ setCount }
          />
        </div>
      </div>
    </div>
  )
}

export default ProductFullStory