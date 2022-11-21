import { useEffect } from "react";

import { Container, Grid } from "@mui/material";

import ItemCard from "../../components/ItemCard";
import { useAppDispatch, useAppSelector } from "../../custom/hooks";
import { fetchItemData } from "../../Store/item-actions";

const Collection = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchItemData());
  }, [dispatch]);
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
