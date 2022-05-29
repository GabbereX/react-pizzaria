import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { fetchData } from './reducers/fetchData';

const rootReducer = combineReducers({
  [fetchData.reducerPath]: fetchData.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(fetchData.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store = setupStore();
