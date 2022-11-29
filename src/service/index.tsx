import { supabase } from "../config/supabaseClient";

export const fetchItemDetail = async (id: string) => {
  const { data, error } = await supabase
    .from("item")
    .select("*,image_id(image1,image2,image3,image4)")
    .eq("id", id);
  if (error !== null) {
    throw new Error("Could not fetch product data");
  }
  return data[0];
};

export const fetchItemSize = async (id: string[]) => {
  const { data, error } = await supabase
    .from("product")
    .select("*,item_id(*)")
    .in("item_id", id)
    .eq("isSold", "false");

  if (error !== null) {
    throw new Error("Could not fetch size data");
  }
  return data;
};
