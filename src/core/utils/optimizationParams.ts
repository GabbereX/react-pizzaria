import { IOptimizedParams, IParams } from '../models/IParams';

type TOptimizationParams = (params: IParams) => IOptimizedParams;

const optimizationParams: TOptimizationParams = params => {
  const { sortBy, order, category, title, description } = params;

  const optimizedParams: IOptimizedParams = {
    sortBy,
    order: order ? 'desc' : 'asc',
  };

  title && (optimizedParams.title = title);
  description && (optimizedParams.description = description);
  category !== 0 && (optimizedParams.category = String(category));

  return optimizedParams;
};

export default optimizationParams;
