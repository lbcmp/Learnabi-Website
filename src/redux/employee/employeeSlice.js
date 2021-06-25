import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employeeName: null,
        employeeEmail: null,
        employeeImage: null,
        employeeTitle: null,
    },
    reducers: {
        employeeState: (state, action) => {
            state.employeeName = action.payload.name;
            state.employeeEmail = action.payload.email;
            state.employeeImage = action.payload.image;
            state.employeeTitle = action.payload.title;
        }
    }
});

export const { employeeState } = employeeSlice.actions;

export const selectEmployeeName = state => state.employee.employeeName;
export const selectEmployeeEmail = state => state.employee.employeeEmail;
export const selectEmployeeImage = state => state.employee.employeeImage;
export const selectEmployeeTitle = state => state.employee.employeeTitle;


export default employeeSlice.reducer;