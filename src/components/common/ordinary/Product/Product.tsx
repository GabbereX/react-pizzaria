import React, { FC, RefObject } from 'react'
import ProductList from '../../smart/ProductList/ProductList'
import ErrorResponse from '../../simple/ErrorResponse/ErrorResponse'
import useRequestAPI from '../../../../core/hooks/useRequestAPI'

interface IProps {
  shopSelectionRef: RefObject<HTMLAnchorElement>
}

const Product: FC<IProps> = ({ shopSelectionRef }) => {
  const { data, isFetching, error } = useRequestAPI(shopSelectionRef)

  return (
    <>
      {!error ? (
        <ProductList
          data={data}
          isFetching={isFetching}
        />
      ) : (
        <ErrorResponse />
      )}
    </>
  )
}

export default Product
