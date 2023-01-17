import { FC, ReactNode } from 'react'

import styles from './ModalFooter.module.scss'

interface IProps {
  children: ReactNode
  resolveAction?: () => void
  cancelAction?: (closeModal: boolean) => void
  resolveText?: string
  canselText?: string
}

const ModalFooter: FC<IProps> = ({
  children,
  resolveAction,
  cancelAction,
  resolveText = 'Добавить в корзину',
  canselText = 'Отмена'
}) => {
  return (
    <div className={ styles.footer_content }>
      <div className={ styles.final_price }>
        { children }
      </div>

      {
        resolveAction &&
        <button
          className='orange-button'
          onClick={ resolveAction }
        >
          { resolveText }
        </button>
      }

      {
        cancelAction &&
        <button
          className='light-gray-button'
          onClick={ () => cancelAction(true) }
        >
          { canselText }
        </button>
      }
    </div>
  )
}

export default ModalFooter