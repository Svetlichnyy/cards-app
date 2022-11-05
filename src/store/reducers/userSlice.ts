import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  login: string;
  password: string;
}
interface UserState {
  searchWord: string;
  authorizedUser: User;
  isSomeUserLoggedIn: boolean;
}

const initialState: UserState = {
  authorizedUser: {
    login: "",
    password: "",
  },
  searchWord: "",
  isSomeUserLoggedIn: false,
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
      state.isSomeUserLoggedIn = !state.isSomeUserLoggedIn;
    },
  },
});

export default userSlice.reducer;
