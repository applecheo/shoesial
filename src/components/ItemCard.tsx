/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router";

import { Box, Grid, Paper, Typography } from "@mui/material";

type TItem = {
  id: number;
  name: string;
  gender: string;
  price: number;
  images: string[];
};
const ItemCard = ({ name, gender, price, images }: TItem) => {
  const navigate = useNavigate();
  return (
    <Grid
      item
      xs={3}
      sx={{ minWidth: 288 }}
      onClick={() => navigate(`/collections/shoes/${name}`)}
    >
      <Paper elevation={3}>
        <img className="card-img" src={images?.[0]} alt={name} />
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
