/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router";

import { Box, Grid, Paper, Typography } from "@mui/material";

import { TImage } from "../Store/item-slice";

type TItem = {
  id: number;
  name: string;
  gender: string;
  price: number;
  image_id: TImage;
};
const ItemCard = ({ name, gender, price, image_id }: TItem) => {
  const navigate = useNavigate();
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      onClick={() => navigate(`/collections/shoes/${name}`)}
    >
      <Paper elevation={3}>
        <img className="card-img" src={image_id?.image1} alt={name} />
        <Box paddingX={1}>
          <Typography component="h2" variant="subtitle1">
            {name}
          </Typography>
          <Box>
            <Typography variant="subtitle2" component="p" marginTop={0}>
              {gender}'s Shoe
            </Typography>
            <Typography variant="subtitle2" component="p" marginTop={1}>
              S${price}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};
export default ItemCard;
