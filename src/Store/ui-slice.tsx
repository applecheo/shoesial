import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = { isLoading: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    loading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
