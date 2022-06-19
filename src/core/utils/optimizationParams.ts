import { IOptimizedParams, IParams } from '../models/IParams';

type TOptimizationParams = (params: IParams) => IOptimizedParams;

const optimizationParams: TOptimizationParams = params => {
  const { sortBy, order, category } = params;

  const optimizedParams: IOptimizedParams = {
    sortBy,
    order: order ? 'desc' : 'asc',
  };

  category !== 0 && (optimizedParams.category = category);

  return optimizedParams;
};

export default optimizationParams;
