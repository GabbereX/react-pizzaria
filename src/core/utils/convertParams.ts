import { TParamsState, TParamsURL, TURLSearchParams } from '../models/IParams';

const convertParams = (params: TParamsState | URLSearchParams) => {
  if (params instanceof URLSearchParams) {
    return convertForState(params);
  } else {
    return convertForURL(params);
  }
};

function convertForURL(params: TParamsState) {
  const { sortBy, order, category } = params;

  const convertedParams: TParamsURL = {
    sortBy,
    order: order ? 'desc' : 'asc',
  };

  category !== 0 && (convertedParams.category = String(category));

  return convertedParams;
}

export function convertForState(params: URLSearchParams) {
  const convertedParams: TURLSearchParams = {};

  for (const [key, value] of params.entries()) {
    convertedParams[key] = value;
  }

  convertedParams.category = +convertedParams.category || 0;
  convertedParams.order = convertedParams.order === 'desc';

  return convertedParams;
}

export default convertParams;
