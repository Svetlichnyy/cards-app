import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userSlice";
import { personAPI } from "../services/personService";
import { storageMiddleware } from "../middlewares/localStorageMiddleware";

const rootReducer = combineReducers({
  userReducer,
  [personAPI.reducerPath]: personAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(personAPI.middleware,storageMiddleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
