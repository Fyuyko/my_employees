import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   filters: ['all', 'city', 'company'],
   activeFilter: 'all',
};


const filtersSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      filtersNameChanged: (state, action) => {
         state.activeFilter = action.payload;
      },
      filtersCityChanged: (state, action) => {
         state.activeFilter = action.payload;
      }
   }
});

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
   filtersNameChanged,
   filtersCityChanged,
} = actions;

