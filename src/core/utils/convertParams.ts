import { TParamsState, TParamsURL, TURLSearchParams } from '../models/IParams'

const convertParams = (
  params: TParamsState | URLSearchParams,
  withPage: boolean = true
) => {
  if (params instanceof URLSearchParams) {
    return convertForState(params)
  } else {
    const optimizedParams = { ...params }
    !withPage && delete optimizedParams.page
    return convertForURL(optimizedParams)
  }
}

function convertForURL(params: TParamsState) {
  const { sortBy, order, category, page } = params

  const convertedParams: TParamsURL = {
    sortBy,
    order: order ? 'desc' : 'asc'
  }

  page && (convertedParams.page = String(page))
  category !== 0 && (convertedParams.category = String(category))

  return convertedParams
}

export function convertForState(params: URLSearchParams) {
  const convertedParams: TURLSearchParams = {}

  for (const [key, value] of params.entries()) {
    convertedParams[key] = value
  }

  convertedParams.category = +convertedParams.category || 0
  convertedParams.order = convertedParams.order === 'desc'
  convertedParams.page = +convertedParams.page || 1

  return convertedParams
}

export default convertParams
