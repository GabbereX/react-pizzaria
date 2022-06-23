export interface IParams {
  category?: number;
  sortBy?: string;
  order?: boolean;
  title?: string;
  description?: string;
}

export interface IOptimizedParams {
  category?: string;
  sortBy?: string;
  order?: string;
  title?: string;
  description?: string;
}

export interface ISearchParams {
  title: string;
  description: string;
}
