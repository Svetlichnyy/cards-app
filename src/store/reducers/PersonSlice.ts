import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PersonState {
  searchWord: string;
}

const initialState: PersonState = {
  searchWord: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchWord(state, action: PayloadAction<string>) {
      state.searchWord = action.payload;
    },
  },
});

export default searchSlice.reducer;
