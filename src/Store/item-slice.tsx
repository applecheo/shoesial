import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TImage = {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
};

export type TItems = {
  created_at: string;
  description: string;
  gender: string;
  id: number;
  image_id: TImage;
  name: string;
  price: number;
};

type TViewing = TItems | null;

export type TItemsInitialState = {
  allItems: TItems[];
  viewing: TViewing;
};

const itemsInitialState: TItemsInitialState = {
  allItems: [],
  viewing: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState: itemsInitialState,
  reducers: {
    updateItems(state, action: PayloadAction<TItemsInitialState>) {
      state.allItems = action.payload.allItems;
    },
    currentViewing(state, action: PayloadAction<TItemsInitialState>) {
      state.viewing = action.payload.viewing;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;
