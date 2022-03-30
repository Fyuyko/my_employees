import { createSlice } from "@reduxjs/toolkit";

// переключатель редактирования пользователя

const initialState = {
   editFormToggle: false,
   inputValid: {},
};

const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      editFormToggle: state => {state.editFormToggle = true},  //можно(!state.editFormToggle), но тут логичнее просто true
      inputValid: (state, action) => {
         const name = action.payload.nameValue;
         const value = action.payload.value;
         if (value.length === 0) {
            state.inputValid[name] = true;
         } else {
            state.inputValid[name] = false;
         }
      }
   }
});

const {actions, reducer} = profileSlice;

export default reducer;
export const {
   editFormToggle,
   inputValid
} = actions;