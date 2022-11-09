import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  login: string;
  password: string;
}
interface UserState {
  authorizedUser: User;
  isUserLoggedIn: boolean;
  favorites: number[];
}

const initialState: UserState = {
  authorizedUser: {
    login: "",
    password: "",
  },
  isUserLoggedIn: false,
  favorites: [],
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
      state.authorizedUser = { login: "", password: "" };
      state.isUserLoggedIn = false;
    },
    setUserFavorites(state, action: PayloadAction<number>) {
      if (state.favorites.includes(action.payload)) {
        state.favorites.filter((value) => value !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export default userSlice.reducer;
