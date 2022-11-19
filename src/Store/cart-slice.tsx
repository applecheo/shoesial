import { createSlice } from "@reduxjs/toolkit";

const cartInitialState: any = {
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
        (x: { id: string }) => x.id === item.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: item.id,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
          name: item.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
  },
});

export default cartSlice.reducer;
