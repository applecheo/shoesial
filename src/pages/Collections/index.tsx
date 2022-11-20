import { Container, Grid } from "@mui/material";

import ItemCard from "../../components/ItemCard";
import { useAppSelector } from "../../custom/hooks";

const Collection = () => {
  const items = useAppSelector((state) => state.item.allItems);
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
