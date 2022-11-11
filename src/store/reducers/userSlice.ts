import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterFormParams } from "../../models/Filters";

interface User {
  login: string;
  password: string;
  favorites: number[];
  history: FilterFormParams[];
}
interface UserState {
  authorizedUser: User;
  isUserLoggedIn: boolean;
}

const initialState: UserState = {
  authorizedUser: {
    login: "",
    password: "",
    favorites: [],
    history: [],
  },
  isUserLoggedIn: false,
};

export const userSlice = createSlice({
  name: "userFeatures",
  initialState,
  reducers: {
    setAuthedUser(state, action: PayloadAction<User>) {
      state.authorizedUser = action.payload;
      state.isUserLoggedIn = true;
    },
    signOutUser(state) {
      state.authorizedUser = {
        login: "",
        password: "",
        favorites: [],
        history: [],
      };
      state.isUserLoggedIn = false;
    },
    setUserFavorites(state, action: PayloadAction<number>) {
      if (state.authorizedUser.favorites.includes(action.payload)) {
        state.authorizedUser.favorites = state.authorizedUser.favorites.filter(
          (value) => value !== action.payload
        );
      } else {
        state.authorizedUser.favorites.push(action.payload);
      }
    },
    setUserHistory(state, action: PayloadAction<FilterFormParams>) {
      state.authorizedUser.history.push(action.payload);
    },
  },
});

export default userSlice.reducer;
