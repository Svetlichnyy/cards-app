import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  login: string;
  password: string;
}
interface UserState {
  searchWord: string;
  authorizedUser: User;
  isUserLoggedIn: boolean;
}

const initialState: UserState = {
  authorizedUser: {
    login: "",
    password: "",
  },
  searchWord: "",
  isUserLoggedIn: false,
};

export const userSlice = createSlice({
  name: "userFeatures",
  initialState,
  reducers: {
    setSearchWord(state, action: PayloadAction<string>) {
      state.searchWord = action.payload;
    },
    setAuthedUser(state, action: PayloadAction<User>) {
      state.authorizedUser = action.payload;
      state.isUserLoggedIn = true;
    },
    signOutUser(state) {
      state.authorizedUser = { login: "", password: "" };
      state.isUserLoggedIn = false;
    },
  },
});

export default userSlice.reducer;
