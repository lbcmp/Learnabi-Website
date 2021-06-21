import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: null,
        userId: null,
        userEmail: null
    },
    reducers: {
        userState: (state, action) {
            state.userName = action.payload.displayName;
            state.userId = action.payload.id;
            state.userEmail = action.payload.email
        }
    }
})

export const { userState } = userSlice.actions;

export const selectName = (state) => state.user.userName;
export const selectId = (state) => state.user.userId;
export const selectEmail = (state) => state.user.userEmail;

export default userSlice.reducer;