import React, { FC, useEffect, useState } from 'react'
import styles from './ProductList.module.scss'
import { IPizza } from '../../../../core/models/IPizza'
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/redux'
import { fieldsValuesState } from '../../../../core/store/reducers/fieldsValuesSlice'
import Skeleton from '../../ui/Skeleton/Skeleton'
import ProductShortStory from '../../ordinary/ProductItem/ProductShortStory/ProductShortStory'
import EmptyProductList from '../../simple/EmptyProductList/EmptyProductList'
import { paramsState } from '../../../../core/store/reducers/paramsSlice'
import { itemsPerPage } from '../../../../core/constants/navigationList'


interface IData {
  data?: IPizza[]
  isFetching: boolean
}

const ProductList: FC<IData> = ({ data, isFetching }) => {
  const [processedData, setProcessedData] = useState<IPizza[] | null>(null)
  const { search: searchValue, searchOption } =
    useAppSelector(fieldsValuesState)
  const { setDataLength } = useAppDispatch()
  const { page } = useAppSelector(paramsState)

  useEffect(() => {
    if (data) {
      const filterData = data.filter(item => {
        const value = `${searchOption !== '2' && item.title} ${
          searchOption !== '1' && item.description
        }`
        return value.toLowerCase().includes(searchValue.toLowerCase())
      })

      setDataLength(filterData.length)

      const dataSliceEnd = Number(page) * itemsPerPage
      const dataSliceStart = dataSliceEnd - itemsPerPage
      const dataSlice = filterData.slice(dataSliceStart, dataSliceEnd)

      setProcessedData(dataSlice)
    }
  }, [data, searchValue, searchOption, page])

  return (
    <>
      {processedData?.length ? (
        <ul className={styles.goodsList}>
          {isFetching ? (
            <Skeleton />
          ) : (
            processedData.map(item => (
              <ProductShortStory
                key={item.id}
                data={item}
              />
            ))
          )}
        </ul>
      ) : isFetching && !processedData ? (
        <ul className={styles.goodsList}>
          <Skeleton />
        </ul>
      ) : (
        processedData?.length === 0 && <EmptyProductList />
      )}
    </>
  )
}

export default ProductList
