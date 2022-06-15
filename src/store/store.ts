import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { requestAPI } from './reducers/requestAPI';

export const reducers = {
  [requestAPI.reducerPath]: requestAPI.reducer,
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
