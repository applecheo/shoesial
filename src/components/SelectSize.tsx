import * as React from "react";

import { grey } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { TSizeAvailable } from "../pages/Checkout/components/Bag";
import { HashMap } from "../pages/ItemDetail";

type TSizeProps = {
  itemSize: string;
  uniqueID: string;
  sizeAvailable: TSizeAvailable[];
};
export default function SelectSize({
  itemSize,
  sizeAvailable,
  uniqueID,
}: TSizeProps) {
  const [size, setSize] = React.useState(itemSize);

  const [id] = uniqueID.split("-");
  const numberOfSizeAvailable = sizeAvailable.filter(
    (x) => x.item_id.id == parseInt(id)
  );
  const sizeAvail = numberOfSizeAvailable.map(
    (product: { size: string }) => product.size
  );

  const sizeMap: HashMap = {};
  for (const i of sizeAvail) {
    if (!sizeMap[i]) {
      sizeMap[i] = 1;
    } else {
      sizeMap[i]++;
    }
  }

  const SHOE_SIZE = Object.keys(sizeMap);

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ mt: 0.3, minWidth: 60 }}>
        <Select
          onChange={handleChange}
          autoWidth
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            height: 20,
            color: grey[600],
            textAlign: "center",
            fontSize: 12,
            fontWeight: "bold",
          }}
          defaultValue={""}
        >
          {SHOE_SIZE.map((size) => (
            <MenuItem
              value={size}
              sx={{ color: grey[600], fontSize: 12, fontWeight: "bold" }}
              key={size}
            >
              {size.replace("US", "")}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
