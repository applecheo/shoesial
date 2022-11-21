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

export type TItemsInitialState = {
  allItems: TItems[];
};

const itemsInitialState: TItemsInitialState = {
  allItems: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState: itemsInitialState,
  reducers: {
    updateItems(state, action: PayloadAction<TItemsInitialState>) {
      state.allItems = action.payload.allItems;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;
