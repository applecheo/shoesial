/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Summary = () => {
  return (
    <Box>
      <Box sx={{ marginY: 0.5 }}>
        <Typography variant="h5" sx={{ marginBottom: 1.5 }}>
          Summary
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginY: 1,
        }}
      >
        <Typography variant="body1">Subtotal</Typography>
        <Typography variant="body1">S$100.00</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginY: 0.5,
        }}
      >
        <Typography variant="body1" sx={{ pr: 14 }}>
          Estimated Delivery & Handling
        </Typography>
        <Typography variant="body1">Free</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginY: 2,
          borderTop: 1,
          borderBottom: 1,
          borderColor: grey[500],
        }}
      >
        <Typography variant="body1" sx={{ paddingY: 2 }}>
          Total
        </Typography>
        <Typography variant="body1" sx={{ paddingY: 2 }}>
          S$100.00
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginY: 2,
        }}
      >
        <Button variant="contained" sx={{ borderRadius: "16px" }}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
};
export default Summary;
