/* eslint-disable react/no-unescaped-entities */
import { useDispatch } from "react-redux";

import { Favorite } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

import ProductDetailAccordion from "../../components/ProductDetailAccordion";
import SizeRadioButton from "../../components/SizeRadioButton";
import { items } from "../../data";
const ItemDetail = () => {
  const dispatch = useDispatch();
  const cartHandler = () => {
    console.log("add to cart");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          marginX: {
            sm: 0,
            md: 10,
          },
          marginY: { xs: 2, md: 8 },
        }}
      >
        <Box>
          <Grid container spacing={1}>
            {items[4].images.map((product) => (
              <Grid item xs={3} sm={6} key={product}>
                <img src={product} className="productDetail-img"></img>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Container maxWidth="xs">
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginY: 3,
            }}
          >
            <Button
              variant="contained"
              sx={{ marginBottom: 1, borderRadius: "16px" }}
              onClick={cartHandler}
            >
              Add to Bag
            </Button>
            <Button
              variant="contained"
              sx={{ borderRadius: "16px", background: "white" }}
            >
              Favorite
              <Favorite sx={{ color: yellow }} />
            </Button>
          </Box>
          <Typography variant="body1" component="p" sx={{ marginY: 3 }}>
            Paying homage to both heritage and innovation, we've blended 2 icons
            (old and new) to go beyond what's expected in the Nike Air Max
            Flyknit Racer. Incredibly light and airy Flyknit is paired with
            oh-so-comfy Air Max cushioning. Lace up and let your feet do the
            talking.
          </Typography>
          <ProductDetailAccordion />
        </Container>
      </Box>
    </>
  );
};
export default ItemDetail;
