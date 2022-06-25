export interface IParams<C, O> {
  category?: C;
  sortBy?: string;
  order?: O;
  title?: string;
  description?: string;
}

export type TParamsState = IParams<number, boolean>;
export type TParamsURL = IParams<string, string>;
export type TURLSearchParams = Record<string, string | number | boolean>;

export interface ISearchParams {
  title: string;
  description: string;
}
