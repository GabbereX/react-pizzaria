export interface IParams<C, O> {
  category?: C;
  sortBy?: string;
  order?: O;
  searchValue?: string;
  searchOption?: string;
}

export type TParamsState = IParams<number, boolean>;
export type TParamsURL = IParams<string, string>;
export type TURLSearchParams = Record<string, string | number | boolean>;
