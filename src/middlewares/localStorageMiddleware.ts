import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const storageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (action.type === "userFeatures/setAuthedUser") {
      localStorage.setItem(
        `lastAuthedUser`,
        JSON.stringify(action.payload, null, 2)
      );
    }
    const result = next(action);
    return result;
  };
