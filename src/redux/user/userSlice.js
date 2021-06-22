import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    userEmail: null,
    userPhotoUrl: null,
    userId: null,
    userAccount: null,
  },
  reducers: {
    userState: (state, action) => {
      state.userName = action.payload.displayName;
      state.userEmail = action.payload.email;
      state.userPhotoUrl = action.payload.photoUrl;
      state.userId = action.payload.user_id;
      state.userAccount =
        action.payload.email.substring(
          action.payload.email.lastIndexOf("@") + 1
        ) === "gmail.com"
          ? "Gmail"
          : "GitHub";
    },

    userReset: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userPhotoUrl = null;
      state.userId = null;
      state.userAccount = null;
    },
  },
});

export const { userState, userReset } = userSlice.actions;

export const selectName = (state) => state.user.userName;
export const selectId = (state) => state.user.userId;
export const selectEmail = (state) => state.user.userEmail;
export const selectPhoto = (state) => state.user.userPhotoUrl;
export const selectAccount = (state) => state.user.userAccount;

export default userSlice.reducer;
