import { createSlice } from "@reduxjs/toolkit";

const ui = createSlice({
  name: "ui",
  initialState: {
    menuType: 'main',
  },
  reducers: {
    changeMenuType: (ui, action) => {
      ui.menuType = action.payload.menuType;
    },
  },
});

export default ui.reducer;
export const { changeMenuType } = ui.actions;
