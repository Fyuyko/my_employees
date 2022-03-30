import { createSlice } from "@reduxjs/toolkit";

//получение юзера для отображения в профиле

const initialState = {
   user: {},
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      putUser: (state, action) => {   
         state.user = action.payload;
      },
      editUser: (state, action) => {
         const name = action.payload.nameValue;
         state.user[name] = action.payload.newValue;
      },
   }
});

const {actions, reducer} = userSlice;

export default reducer;
export const {
   putUser,
   editUser,
} = actions;