import { TParamsState, TParamsURL, TURLSearchParams } from '../models/IParams';

const convertParams = (params: TParamsState | URLSearchParams) => {
  if (params instanceof URLSearchParams) {
    return convertForState(params);
  } else {
    return convertForURL(params);
  }
};

function convertForURL(params: TParamsState) {
  const { sortBy, order, category, title, description } = params;

  const convertedParams: TParamsURL = {
    sortBy,
    order: order ? 'desc' : 'asc',
  };

  description && (convertedParams.description = description);
  category !== 0 && (convertedParams.category = String(category));
  title && (convertedParams.title = title);

  return convertedParams;
}

function convertForState(params: URLSearchParams) {
  const convertedParams: TURLSearchParams = {};

  for (const [key, value] of params.entries()) {
    convertedParams[key] = value;
  }

  convertedParams.category = +convertedParams.category || 0;
  convertedParams.order = convertedParams.order === 'desc';
  !convertedParams.description && (convertedParams.description = '');
  !convertedParams.title && (convertedParams.title = '');

  return convertedParams;
}

export default convertParams;
