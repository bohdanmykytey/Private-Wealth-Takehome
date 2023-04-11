import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  {
    userIndex: 1,
    firstName: "Bohdan",
    lastName: "Mykytey",
    email: "bohdan.mykytey@gmail.com",
  },
  {
    userIndex: 2,
    firstName: "Bob",
    lastName: "Johnson",
    email: "robert.johnson@gmail.com",
  },
  {
    userIndex: 3,
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
      state.value = payload.value;
    },
    edit: (state, action) => {
      state.value.splice(action.payload.index, 1, action.payload);
    },
  },
});

export const { show } = userSlice.actions;
export const { edit } = userSlice.actions;

export default userSlice.reducer;
