import { supabase } from "../config/supabaseClient";
import { itemsActions, TItemsInitialState } from "./item-slice";

export const fetchItemData = () => {
  return async (
    dispatch: (arg0: {
      payload: TItemsInitialState;
      type: "items/updateItems";
    }) => void
  ) => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("item")
        .select("*,image_id(image1,image2,image3,image4)");
      if (error !== null) {
        throw new Error("Could not fetch product data");
      }
      return data;
    };
    try {
      const fetchedItems = await fetchData();
      dispatch(
        itemsActions.updateItems({
          allItems: fetchedItems,
          viewing: null,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
