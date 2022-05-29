import React, { FC, useEffect } from 'react';
import styles from './GoodsList.module.scss';
import GoodsItem from './GoodsItem/GoodsItem';
import { fetchData } from '../../../../store/reducers/fetchData';
import { IPizza } from '../../../../interfaces/IPizza';

const GoodsList: FC = () => {
  const { data, error, isLoading } = fetchData.useFetchAllDataQuery(1);
  const [createPost, { error: createError, isLoading: isCreateLoading }] =
    fetchData.useCreateItemMutation();
  const [updateItem, {}] = fetchData.useUpdateItemMutation();
  const [deleteItem, {}] = fetchData.useDeleteItemMutation();

  // добавить новый компонент

  const handlerCreate = async () => {
    const title = prompt();
    await createPost({ title } as IPizza);

  };

  // удалиит компонент

  const handleRemove = (e: MouseEvent) => {
    e.stopPropagation();
    deleteItem(post);
  };

  // обновить компонент

  const handleUpdate = () => {
    const title = prompt();
    updateItem({ ...post, title });
  };

  return (
    <ul className={styles.goodsList}>
      <button onClick={handlerCreate}>Добавить Новый Продукт</button>
      <div onClick={handleUpdate}>
        <button onClick={() => handleRemove}>Удалить продукт</button>
      </div>

      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
      <GoodsItem />
    </ul>
  );
};

export default GoodsList;
