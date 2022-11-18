import * as React from "react";

import { grey } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectSize() {
  const [quantity, setQuantity] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ mt: 0.3 }}>
        <Select
          value={quantity}
          onChange={handleChange}
          displayEmpty
          autoWidth
          inputProps={{ "aria-label": "Without label" }}
          sx={{ height: 20, color: grey[600] }}
        >
          <MenuItem value={1} sx={{ color: grey[600] }}>
            1
          </MenuItem>
          <MenuItem value={2} sx={{ color: grey[600] }}>
            2
          </MenuItem>
          <MenuItem value={3} sx={{ color: grey[600] }}>
            3
          </MenuItem>
          <MenuItem value={4} sx={{ color: grey[600] }}>
            4
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
