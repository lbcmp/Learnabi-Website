import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice';
import adminReducer from './admin/adminSlice';
import employeeReducer from './employee/employeeSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        employee: employeeReducer
    },
})