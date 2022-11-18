import { Container, Grid } from "@mui/material";

import ItemCard from "../../components/ItemCard";
import { items } from "../../data";

const Collection = () => {
  return (
    <>
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={5}>
          {items.map((item) => (
            <ItemCard key={item?.id} {...item} />
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default Collection;