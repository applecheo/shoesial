import { createSlice } from "@reduxjs/toolkit";

type TCartItem = {
  created_at: string;
  description: string;
  gender: string;
  id: number;
  image_id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
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
    add(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(
        (x: { id: number }) => x.id === item.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: item.id,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
          name: item.title,
          created_at: "",
          description: "",
          gender: "",
          image_id: 0,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
  },
});

export default cartSlice.reducer;
