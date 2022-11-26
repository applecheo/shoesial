/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Favorite } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

import ProductDetailAccordion from "../../components/ProductDetailAccordion";
import SizeRadioButton from "../../components/SizeRadioButton";
import { supabase } from "../../config/supabaseClient";
import { useAppDispatch } from "../../custom/hooks";
import { cartActions } from "../../Store/cart-slice";

type TItemDetails = {
  created_at: string;
  description: string;
  gender: string;
  id: number;
  image_id: string[];
  name: string;
  price: number;
};

const ItemDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [itemDetail, setItemDetail] = useState<TItemDetails>(
    {} as TItemDetails
  );
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const fetchData = async () => {
    const { data, error } = await supabase
      .from("item")
      .select("*,image_id(image1,image2,image3,image4)")
      .eq("id", id);
    if (error !== null) {
      throw new Error("Could not fetch product data");
    }
    return data[0];
  };

  const fetchItemData = async () => {
    const fetchedItemDetail = await fetchData();
    fetchedItemDetail.image_id = Object.values(fetchedItemDetail?.image_id);
    setItemDetail(fetchedItemDetail);
  };

  useEffect(() => {
    fetchItemData();
  }, []);

  const cartHandler = () => {
    if (selectedValue) {
      console.log("hello");
      dispatch(
        cartActions.add({
          ...itemDetail,
          quantity: 0,
          totalPrice: 0,
          size: selectedValue,
        })
      );
    } else {
      console.log("nope");
    }
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
            {itemDetail?.image_id?.map((product) => (
              <Grid item xs={3} sm={6} key={product}>
                <img src={product} className="productDetail-img" />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Container maxWidth="xs">
          <Box>
            <Typography variant="h4" component="h4">
              {itemDetail?.name}
            </Typography>
            <Typography variant="subtitle1" component="p">
              {itemDetail?.gender}'s Shoes
            </Typography>
            <Typography variant="body1" component="p" sx={{ marginY: 2 }}>
              S${itemDetail?.price}
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Select Size</Typography>
              <Typography>Size Guide</Typography>
            </Box>
            <Grid container spacing={1} sx={{ marginTop: 1 }}>
              <SizeRadioButton
                selectedValue={selectedValue}
                handleChange={handleChange}
              />
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
            {itemDetail?.description}
          </Typography>
          <ProductDetailAccordion />
        </Container>
      </Box>
    </>
  );
};
export default ItemDetail;
