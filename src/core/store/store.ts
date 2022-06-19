import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { requestAPI } from './reducers/requestAPI';
import entrySlice, { entryAction } from './reducers/entrySlice';
import paramsSlice, { paramsActions } from './reducers/paramsSlice';

export const actionsRoot = {
  ...paramsActions,
  ...entryAction,
};

export const reducers = {
  [requestAPI.reducerPath]: requestAPI.reducer,
  paramsSlice,
  entrySlice,
};

const rootReducer = combineReducers(reducers);

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(requestAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store = setupStore();
