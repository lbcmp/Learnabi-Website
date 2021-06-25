import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    userEmail: null,
    userPhotoUrl: null,
    userId: null,
    userAccount: null,
    userTitle: null
  },
  reducers: {
    userState: (state, action) => {
      state.userName = action.payload.displayName;
      state.userTitle = action.payload.title;
      state.userEmail = action.payload.userEmail;
      state.userPhotoUrl = action.payload.photoUrl;
      state.userId = action.payload.user_id;
      state.userAccount =
        action.payload.userEmail.substring(
          action.payload.userEmail.lastIndexOf("@") + 1
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
export const selectTitle = (state) => state.user.userTitle;

export default userSlice.reducer;
