import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCartItem = {
  created_at: string;
  description: string;
  gender: string;
  id: number;
  image_id: string[];
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  size: string;
  uniqueId: string;
};

type TCartInitialState = {
  items: TCartItem[];
  totalQuantity: number;
};

const cartInitialState: TCartInitialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    add(state, action: PayloadAction<TCartItem>) {
      const item = action.payload;
      const existingItem = state.items.find(
        (x: { id: number; size: string }) =>
          x.id === item.id && x.size === item.size
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({ ...item, quantity: 1, totalPrice: item.price });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },

    removeAll(state, action: PayloadAction<TCartItem>) {
      const itemToDelete = action.payload;

      if (itemToDelete) {
        const filteredItem = state.items.filter(
          (x) => x.uniqueId !== itemToDelete.uniqueId
        );

        state.items = filteredItem;
        state.totalQuantity = state.totalQuantity - itemToDelete.quantity;
      }
    },

    // updateSize(state,action:PayloadAction<TCartItem>){
    //   const itemToUpdate=action.payload
    //   if(itemToUpdate.)
    // }
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
