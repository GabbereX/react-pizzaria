import React, { FC, useRef } from 'react'
import styles from './Shop.module.scss'
import Filter from '../Filter/Filter'
import Sort from '../Sort/Sort'
import Search from '../Search/Search'
import Product from '../../ordinary/Product/Product'
import Pagination from '../Pagination/Pagination'

const Shop: FC = () => {
  const shopSelectionRef = useRef<HTMLAnchorElement>(null)

  return (
    <section
      ref={shopSelectionRef}
      className={`${styles.section} container`}>
      <div className={`${styles.container}`}>
        <h2 className='title'>Выбрать пиццу</h2>
        <div className={styles.shopSortAndFilter}>
          <Filter />
          <Sort />
        </div>
        <Search />
        <Product shopSelectionRef={shopSelectionRef} />
        <Pagination />
      </div>
    </section>
  )
}

export default Shop
