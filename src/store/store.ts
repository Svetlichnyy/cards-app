import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userSlice";
import { storageMiddleware } from "../middlewares/localStorageMiddleware";
import { personAPI } from "../services/personService";

const rootReducer = combineReducers({
  userReducer,
  [personAPI.reducerPath]: personAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(personAPI.middleware, storageMiddleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
