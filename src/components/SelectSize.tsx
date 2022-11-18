import * as React from "react";

import { grey } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectSize() {
  const [size, setSize] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ mt: 0.3 }}>
        <Select
          value={size}
          onChange={handleChange}
          displayEmpty
          autoWidth
          inputProps={{ "aria-label": "Without label" }}
          sx={{ height: 20, color: grey[600] }}
        >
          <MenuItem value={9.5} sx={{ color: grey[600] }}>
            9.5
          </MenuItem>
          <MenuItem value={10} sx={{ color: grey[600] }}>
            10
          </MenuItem>
          <MenuItem value={10.5} sx={{ color: grey[600] }}>
            10.5
          </MenuItem>
          <MenuItem value={11} sx={{ color: grey[600] }}>
            11
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
