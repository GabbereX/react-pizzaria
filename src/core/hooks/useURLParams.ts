import { RefObject, useEffect } from 'react'
import { TParamsState, TParamsURL } from '../models/IParams'
import { paramsState } from '../store/reducers/paramsSlice'
import { entryState } from '../store/reducers/entrySlice'
import { useAppDispatch, useAppSelector } from './redux'
import {
  URLSearchParamsInit,
  useLocation,
  useSearchParams
} from 'react-router-dom'
import { fieldsValuesState } from '../store/reducers/fieldsValuesSlice'
import convertParams from '../utils/convertParams'
import scrollIntoViewRef from '../utils/scrollIntoViewRef'

const useURLParams = (shopSelectionRef: RefObject<HTMLAnchorElement>) => {
  const entry = useAppSelector(entryState)
  const params = useAppSelector(paramsState)
  const { search: searchValue, searchOption } =
    useAppSelector(fieldsValuesState)
  const { setParams, setEntry, setSearchField, setSearchOption } =
    useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  // set params to state
  useEffect(() => {
    if (!entry && location.search) {
      const stateParams = convertParams(searchParams) as TParamsState
      setParams(stateParams)
      // set search params value and option
      const searchParam = searchParams.get('searchValue')
      const searchOptionParam = searchParams.get('searchOption')
      searchParam && setSearchField(searchParam)
      searchOptionParam && setSearchOption(searchOptionParam)
      // scroll to view
      scrollIntoViewRef(shopSelectionRef)
    }
    setEntry()
  }, [])

  // set params to URL
  useEffect(() => {
    if (entry) {
      const URLParams: URLSearchParamsInit = {
        ...(convertParams(params) as TParamsURL)
      }
      searchValue && (URLParams['searchValue'] = searchValue)
      searchOption !== '0' && (URLParams['searchOption'] = searchOption)

      setSearchParams(URLParams)
      location.hash === '#check-pizza' && scrollIntoViewRef(shopSelectionRef)
      location.search === '?sortBy=rating&order=desc&page=1' &&
        window.history.replaceState(null, 'search', window.location.pathname)
    }
  }, [params, searchValue, searchOption, location.hash, location.search])

  return [params]
}

export default useURLParams
