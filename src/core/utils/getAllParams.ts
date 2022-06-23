type TGetAllParams = Record<string, string | number | boolean>;

const getAllParams = (searchParams: URLSearchParams) => {
  const params: TGetAllParams = {};

  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  params.category = +params.category || 0;
  params.order = params.order === 'desc';
  !params.description && (params.description = '')
  !params.title && (params.title = '')

  return params;
};

export default getAllParams;
