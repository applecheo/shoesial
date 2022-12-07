import { supabase } from "../config/supabaseClient";
import { itemsActions, TItemsInitialState } from "./item-slice";
import { uiActions } from "./ui-slice";

export const fetchItemData = () => {
  return async (
    dispatch: (arg0: {
      payload: TItemsInitialState | undefined;
      type: "items/updateItems" | "ui/loading";
    }) => void
  ) => {
    dispatch(uiActions.loading());

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
        })
      );
    } catch (error) {
      console.log(error);
    }
    dispatch(uiActions.loading());
  };
};
