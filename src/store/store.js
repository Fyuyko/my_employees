import { configureStore } from "@reduxjs/toolkit";

import employees from '../components/employeeList/employeeListSlice';
import filters from '../components/appFilter/appFilterSlice';
import profile from '../components/employeeProfile/employeeProfileSlice';
import user from '../components/employee/employeeSlice';

const store = configureStore({
   reducer: {employees, filters, profile, user},
   middleware: getDefaultMiddleware => getDefaultMiddleware(),
   devTools: process.env.NODE_ENV !== 'production',
});

export default store;