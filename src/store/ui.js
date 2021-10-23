import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuType: 'main',
  userType: '',
  isAuthenticated: false,
  authToken: '',
  profile: {},
  classroom: {},
};
const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeMenuType: (ui, action) => {
      ui.menuType = action.payload.menuType;
    },
    changeUserType: (ui, action) => {
      ui.userType = action.payload.userType;
    },
    changeAuth: (ui, action) => {
      ui.isAuthenticated = action.payload.isAuthenticated;
      ui.authToken = action.payload.authToken;
    },
    setProfile: (ui, action) => {
      ui.profile = action.payload.profile;
    },
    setClassroom: (ui, action) => {
      ui.classroom = action.payload.classroom;
    },
    resetState: (ui) => {
      console.log('Resetting');
      ui.profile = {};
      ui.classroom = {};
      ui = initialState;
    },
    setProfilePicture: (ui, action) => {
      ui.profile.profile_picture = action.payload;
    },
  },
});

export default ui.reducer;
export const {
  changeMenuType,
  changeUserType,
  changeAuth,
  resetState,
  setProfile,
  setClassroom,
  setProfilePicture,
} = ui.actions;
