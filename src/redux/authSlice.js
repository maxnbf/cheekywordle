import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user_info: {}, isAuthenticated: false },
  reducers: {
    signUpResponse(state, action) {
      state.user_info = action.payload;
      state.isAuthenticated = !(action.payload == {});
    },
    signInResponse: (state, action) => {
      state.user_info = action.payload;
      state.isAuthenticated = !(action.payload == {});
    },
  },
});

export const { signInResponse, signUpResponse } = authSlice.actions;
export default authSlice.reducer;
