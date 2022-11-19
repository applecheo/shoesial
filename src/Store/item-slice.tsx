import { createSlice } from "@reduxjs/toolkit";

const itemsInitialState: any = {
  allItems: [],
  viewing: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState: itemsInitialState,
  reducers: {
    updateItems(state, action) {
      state.allItems = action.payload;
    },
    currentViewing(state, action) {
      state.viewing = action.payload;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;
