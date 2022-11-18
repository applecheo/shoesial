/* eslint-disable react/no-unescaped-entities */
import { Box } from "@mui/material";

import Bag from "./components/Bag";
import Summary from "./components/Summary";

const Checkout = () => {
  return (
    <>
      <Box
        sx={{
          marginY: { xs: 1.5, sm: 5 },
          px: { xs: 0, md: 5 },
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Bag />
        <Summary />
      </Box>
    </>
  );
};
export default Checkout;
