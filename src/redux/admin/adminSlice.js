import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminEmail: null,
    adminError: null
  },
  reducers: {
    adminState: (state, action) => {
      state.adminEmail = action.payload.email;
    },
    adminLogOut: (state) => {
      state.adminEmail = null;
    },
    adminError: (state, action) => {
      state.adminError = action.payload.error;
    }
  },
});
export const { adminState, adminLogOut, adminError } = adminSlice.actions;

export const selectAdminEmail = (state) => state.admin.adminEmail;
export const selectAdminError = (state) => state.admin.adminError;

export default adminSlice.reducer;
