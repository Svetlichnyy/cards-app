import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const storageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (action.type === "userFeatures/setAuthedUser") {
      console.log(action);
      const state = store.getState();
      localStorage.setItem(
        `lastAuthedUser`,
        JSON.stringify(state.userReducer.authorizedUser, null, 2)
      );
    }
    const result = next(action);
    return result;
  };
