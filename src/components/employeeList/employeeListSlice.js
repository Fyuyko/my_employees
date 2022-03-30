import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

// получение данных с api, отображение индикатора загрузки

const initialState = {
   employees: [],
   employeesLoadingStatus: 'loading'
};

export const fetchEmployees = createAsyncThunk(
   'employees/fetchEmployees',
   async () => {
      const {request} = useHttp();
      return await request("https://jsonplaceholder.typicode.com/users");
   }
);

const employeesSlice = createSlice({
   name: 'employees',
   initialState,
   reducers: {
      sendUser: (state, action) => {   //изменение json
         state.employees = state.employees.map(employee => {return employee.id===action.payload.id ? employee = action.payload.user : employee});
   }},
   extraReducers: (builder) => {
      builder
         .addCase(fetchEmployees.pending, state => {state.employeesLoadingStatus = 'loading'})  //получение данных с api
         .addCase(fetchEmployees.fulfilled, (state, action) => {
               state.employeesLoadingStatus = 'idle';
               state.employees = action.payload;
         })
         .addCase(fetchEmployees.rejected, state => {
               state.employeesLoadingStatus = 'error';
         })
         .addDefaultCase(() => {});
   }
})

const {actions, reducer} = employeesSlice;

export default reducer;
export const {
   sendUser,
   employeesFetching,
   employeesFetched,
   employeesFetchingError
} = actions;