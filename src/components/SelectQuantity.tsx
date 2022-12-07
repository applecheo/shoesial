import * as React from "react";

import { grey } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useAppDispatch } from "../custom/hooks";
import { TSizeAvailable } from "../pages/Checkout/components/Bag";
import { HashMap } from "../pages/ItemDetail";
import { cartActions } from "../Store/cart-slice";

type TQuantityProps = {
  itemQuantity: string;
  uniqueID: string;
  sizeAvailable: TSizeAvailable[];
};
export default function SelectQuantity({
  itemQuantity,
  uniqueID,
  sizeAvailable,
}: TQuantityProps) {
  const [quantity, setQuantity] = React.useState(itemQuantity);
  const dispatch = useAppDispatch();
  const [id] = uniqueID.split("_");

  const handleChange = (e: SelectChangeEvent, uniqueID: string) => {
    const updatedValue = e.target.value;
    setQuantity(updatedValue);
    dispatch(
      cartActions.updateQuantity({
        uniqueID,
        updatedValue,
      })
    );
  };

  const products = sizeAvailable.filter(
    (x: { item_id: { id: number } }) => x.item_id.id == parseInt(id)
  );
  const sizeQuantity = products.map(
    (product: { size: string }) => product.size
  );
  const sizeMap: HashMap = {};
  for (const i of sizeQuantity) {
    if (!sizeMap[i]) {
      sizeMap[i] = 1;
    } else {
      sizeMap[i]++;
    }
  }
  const QUANTITY_AVAIL = Object.values(sizeMap);
  const listQuantity = [];

  for (let i = 1; i <= QUANTITY_AVAIL.length; i++) {
    listQuantity.push(i);
  }
  return (
    <div>
      <FormControl sx={{ mt: 0.3 }}>
        <Select
          value={quantity}
          onChange={(e) => handleChange(e, uniqueID)}
          displayEmpty
          autoWidth
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            height: 20,
            color: grey[600],
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {listQuantity.map((quantity) => (
            <MenuItem
              key={quantity}
              value={quantity}
              sx={{ color: grey[600], fontSize: 12, fontWeight: "bold" }}
            >
              {quantity}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
