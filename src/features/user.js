import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  {
    firstName: "Bohdan",
    lastName: "Mykytey",
    email: "bohdan.mykytey@gmail.com",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    email: "robert.johnson@gmail.com",
  },
  {
    firstName: "Steve",
    lastName: "Smith",
    email: "stephen.smith@gmail.com",
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    show: (state, payload) => {
      return state.value = payload.value;
    },
    edit: (state, action) => {
      state.value.splice(action.payload.index, 1, action.payload);
    },
  },
});

export const { show } = userSlice.actions;
export const { edit } = userSlice.actions;

export default userSlice.reducer;