/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import { useAppSelector } from "../../../custom/hooks";

const Summary = () => {
  const [totalPrice, setTotalPrice] = useState("0.00");
  const itemPrice = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const summaryTotal = itemPrice.map((x) => x.price * x.quantity);
    const totalPrice = summaryTotal
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toString();

    setTotalPrice(`${totalPrice}.00`);
  }, [itemPrice]);
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
        {totalPrice.length !== 0 ? (
          <Typography variant="body1">S${totalPrice}</Typography>
        ) : (
          <Typography variant="body1">S$0.00</Typography>
        )}
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
          S${totalPrice}
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
