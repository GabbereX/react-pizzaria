import { FC } from 'react'

import styles from './CountProduct.module.scss'

interface IProps {
  count: number
  setCount: (count: number) => void
  isSmallCount?: boolean
}

const CountProduct: FC<IProps> = ({
  count,
  setCount,
  isSmallCount = false
}) => {
  const countButtonClasses =
    `${ styles.count } ` +
    `${ isSmallCount ? styles.count_small : '' } ` +
    'light-gray-button'

  return (
    <div className='d-flex flex-align-center flex-justify-center'>
      <button
        className={ countButtonClasses }
        onClick={ () => setCount(count > 1 ? (count - 1) : 1) }
      >
        <span>-</span>
      </button>
      <span className={ styles.count_number }>
        { count }
      </span>
      <button
        className={ countButtonClasses }
        onClick={ () => setCount(count + 1) }
      >
        <span>+</span>
      </button>
    </div>
  )
}

export default CountProduct