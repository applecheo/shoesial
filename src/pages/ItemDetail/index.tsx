/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Typography } from "@mui/material";

import SizeRadioButton from "../../components/SizeRadioButton";

const ItemDetail = () => {
  return (
    <Container sx={{ marginY: 5 }} maxWidth="sm">
      <Box>
        <Typography variant="h4" component="h4">
          Nike Air Max Flyknit Racer
        </Typography>
        <Typography variant="subtitle1" component="p">
          Men's Shoes
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginY: 2 }}>
          S$245
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Select Size</Typography>
          <Typography>Size Guide</Typography>
        </Box>
        <Grid container spacing={1} sx={{ marginTop: 1 }}>
          <SizeRadioButton />
        </Grid>
      </Box>
    </Container>
  );
};
export default ItemDetail;
