import * as React from "react";

import { Box, Grid, Radio, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function SizeRadioButton() {
  const SHOE_SIZE = ["6", "6.5", "7", "7.5", "8", "8.5", "9", " 9.5", "10"];

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      {SHOE_SIZE.map((size) => (
        <Grid
          item
          xs={2}
          key={size}
          sx={{
            borderRadius: "16px",
            background: grey[100],
            margin: 1,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography variant="body1">US {size}</Typography>
            <Radio {...controlProps(size)} color="default" />
          </Box>
        </Grid>
      ))}
    </>
  );
}
