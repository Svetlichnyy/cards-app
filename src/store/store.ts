import { combineReducers, configureStore } from "@reduxjs/toolkit";

import searchReducer from "./reducers/PersonSlice";
import { personAPI } from "../services/PersonService";

const rootReducer = combineReducers({
  searchReducer,
  [personAPI.reducerPath]: personAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(personAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
