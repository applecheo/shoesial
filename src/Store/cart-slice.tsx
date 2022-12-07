import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TUpdateSize = {
  uniqueID: string;
  updatedValue: string;
};
type TUpdateQuantity = {
  uniqueID: string;
  updatedValue: string;
};

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

    updateQuantity(state, action: PayloadAction<TUpdateQuantity>) {
      const itemToUpdateDetail = action.payload;
      const updateTotalQuantity = (
        initialQuantity: number,
        updatedQuantity: number
      ) => {
        if (initialQuantity < updatedQuantity) {
          return (state.totalQuantity += Math.abs(
            updatedQuantity - initialQuantity
          ));
        } else if (initialQuantity > updatedQuantity) {
          return (state.totalQuantity -= Math.abs(
            initialQuantity - updatedQuantity
          ));
        } else {
          return (state.totalQuantity += 0);
        }
      };
      if (itemToUpdateDetail) {
        const itemToUpdate = state.items.find(
          (x) => x.uniqueId === itemToUpdateDetail.uniqueID
        );
        if (itemToUpdate) {
          const updatedQuantity = parseInt(itemToUpdateDetail.updatedValue);
          const initialQuantity = itemToUpdate.quantity;
          updateTotalQuantity(initialQuantity, updatedQuantity);

          itemToUpdate.quantity = parseInt(itemToUpdateDetail.updatedValue);

          const updatedPrice =
            parseInt(itemToUpdateDetail.updatedValue) * itemToUpdate.price;
          itemToUpdate.totalPrice = updatedPrice;

          state.items = [...state.items];
        }
      }
    },
    updateSize(state, action: PayloadAction<TUpdateSize>) {
      const itemToUpdateDetail = action.payload;
      if (itemToUpdateDetail) {
        const itemToUpdate = state.items.find(
          (x) => x.uniqueId === itemToUpdateDetail.uniqueID
        );
        if (itemToUpdate) {
          itemToUpdate.size = itemToUpdateDetail.updatedValue;
          const [productID, , id] = itemToUpdate.uniqueId.split("_");
          itemToUpdate.uniqueId = productID.concat(
            `_${itemToUpdateDetail.updatedValue}_${id}`
          );
          state.items = [...state.items];
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
