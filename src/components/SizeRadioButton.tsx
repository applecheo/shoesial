/* eslint-disable react/prop-types */
import { Box, Grid, Paper, Radio, Typography } from "@mui/material";

type TSelectProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue: string;
};

export default function SizeRadioButton({
  handleChange,
  selectedValue,
}: TSelectProps) {
  const SHOE_SIZE = ["9", "9.5", "10"];

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
        <Grid item xs={4} md={4} key={size}>
          <Paper elevation={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography component="h2" variant="body1" sx={{ paddingTop: 1 }}>
                US{size}
              </Typography>
              <Radio {...controlProps(size)} color="default" />
            </Box>
          </Paper>
        </Grid>
      ))}
    </>
  );
}
