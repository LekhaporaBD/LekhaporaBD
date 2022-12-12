import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuType: 'main',
  userType: '',
  isAuthenticated: false,
  id_number : '',
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
      ui.id_number = action.payload.id_number;
    },
    changeAuth: (ui, action) => { 
      ui.isAuthenticated = action.payload.isAuthenticated;
      ui.authToken = action.payload.authToken;
      ui.id_number = action.payload.id_number;
    },
    setProfile: (ui, action) => {
      ui.profile = action.payload.profile;
    },
    setClassroom: (ui, action) => {
      ui.classroom = action.payload.classroom;
    },
    resetState: (ui) => {
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
