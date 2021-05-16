import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: {
    menuType: 'main',
    userType: '',
    isAuthenticated: false,
    authToken: ''
  },
  reducers: {
    changeMenuType: (ui, action) => {
      ui.menuType = action.payload.menuType;
    },
    changeUserType: (ui, action) => {
      ui.userType = action.payload.userType
    },
    changeAuth: (ui, action) => {
      ui.isAuthenticated = action.payload.isAuthenticated
      ui.authToken = action.payload.authToken
    }
  },
});

export default ui.reducer;
export const { changeMenuType, changeUserType, changeAuth } = ui.actions;
