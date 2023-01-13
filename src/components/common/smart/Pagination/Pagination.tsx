import React, { FC } from 'react'
import {
  itemsPerPage
} from '../../../../core/constants/navigationList'
import styles from './Pagination.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/redux'
import { paramsState } from '../../../../core/store/reducers/paramsSlice'
import { utilsState } from '../../../../core/store/reducers/utilsSlice'

const Pagination: FC = () => {
  const { page } = useAppSelector(paramsState)
  const { dataLength } = useAppSelector(utilsState)
  const { setPage } = useAppDispatch()

  return (
    <>
      {dataLength > itemsPerPage && (
        <ul className={styles.list}>
          {[...new Array(Math.ceil(dataLength / itemsPerPage))].map(
            (_, index) => (
              <li
                key={index}
                className={styles.item}>
                <button
                  className={`${styles.button} orange-button`}
                  onClick={() => setPage(index + 1)}
                  style={{
                    background: index + 1 === page ? 'var(--red)' : ''
                  }}>
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      )}
    </>
  )
}

export default Pagination
