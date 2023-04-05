import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;

export const indexSlice = createSlice({
  name: "index",
  initialState: initialStateValue,
  reducers: {
    getIndex: (state, action) => {
      return state = action.payload;
    },
  },
});

export const { getIndex } = indexSlice.actions;

export default indexSlice.reducer;