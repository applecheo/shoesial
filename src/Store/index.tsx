import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart-slice";
import itemReducer from "./item-slice";

const store = configureStore({
  reducer: { item: itemReducer, cart: cartReducer },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
