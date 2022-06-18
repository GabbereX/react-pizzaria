import { IParams } from '../models/IParams';

interface IOptimizedParams {
  sortBy: string;
  order: string;
  category?: number;
}

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
