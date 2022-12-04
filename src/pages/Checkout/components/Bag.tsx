/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

import { DeleteOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import SelectQuantity from "../../../components/SelectQuantity";
import SelectSize from "../../../components/SelectSize";
import { useAppDispatch, useAppSelector } from "../../../custom/hooks";
import { fetchItemSize } from "../../../service";
import { cartActions } from "../../../Store/cart-slice";

export type TSizeAvailable = {
  created_at: string;
  id: number;
  isSold: boolean;
  item_id: {
    created_at: string;
    description: string;
    gender: string;
    id: number;
    image_id: number;
    name: string;
    price: number;
  };
  size: string;
};

const Bag = () => {
  const [sizeAvailable, setSizeAvailable] = useState<TSizeAvailable[]>([]);
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const fetchSize = async () => {
    const id = cartItems.map((item) => item.id.toString());
    const data = await fetchItemSize(id);
    setSizeAvailable(data);
  };

  useEffect(() => {
    fetchSize();
  }, []);

  const deleteHandler = (id: number, size: string) => {
    const itemToDelete = cartItems.find(
      (item) => item.id === id && item.size === size
    );
    if (itemToDelete) dispatch(cartActions.removeAll(itemToDelete));
  };

  return (
    <Box sx={{ mr: { xs: 0, sm: 5 } }} component="div">
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          textAlign: { xs: "center", sm: "left" },
          borderBottom: {
            xs: 1,
            sm: 0,
          },
          pb: {
            xs: 1,
            sm: 0,
          },
        }}
      >
        Bag
      </Typography>
      {cartItems.length !== 0 ? (
        cartItems.map((itemDetail) => (
          <Box
            key={`${itemDetail?.id}-${itemDetail?.size}`}
            sx={{
              display: "flex",
              borderBottom: 1,
              borderColor: grey[600],
              mb: 3,
            }}
            component="div"
          >
            <img
              src={itemDetail?.image_id[0]}
              alt={itemDetail?.name}
              className="checkout-img"
            />
            <Box sx={{ ml: 3 }} component="div">
              <Box
                sx={{
                  display: "flex",
                }}
                component="div"
              >
                <Typography variant="body1">{itemDetail?.name}</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pl: {
                      xs: 0,
                      sm: 10,
                    },
                  }}
                >
                  S${itemDetail?.price}
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ color: grey[600], mt: 1 }}>
                {itemDetail?.gender}'s Shoes
              </Typography>
              <Typography variant="body1" sx={{ color: grey[600], mt: 1 }}>
                Black/White
              </Typography>

              {sizeAvailable.length !== 0 && (
                <Box sx={{ display: "flex", my: 1 }} component="div">
                  <Box sx={{ display: "flex", mr: 1 }} component="div">
                    <Typography
                      variant="body1"
                      sx={{ color: grey[600], mr: 0.5 }}
                    >
                      Size
                    </Typography>
                    <SelectSize
                      itemSize={itemDetail?.size}
                      uniqueID={itemDetail?.uniqueId}
                      sizeAvailable={sizeAvailable}
                    />
                  </Box>

                  <Box sx={{ display: "flex" }} component="div">
                    <Typography
                      variant="body1"
                      sx={{ color: grey[600], mr: 0.5 }}
                    >
                      Quantity
                    </Typography>
                    <SelectQuantity
                      itemQuantity={itemDetail?.quantity.toString()}
                      uniqueID={itemDetail?.uniqueId}
                      sizeAvailable={sizeAvailable}
                    />
                  </Box>
                </Box>
              )}
              <Box sx={{ my: 2 }} component="div">
                <FavoriteBorderOutlined
                  sx={{ ml: 0.5, mr: 1.5, cursor: "pointer" }}
                />
                <DeleteOutlined
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    deleteHandler(itemDetail?.id, itemDetail?.size)
                  }
                />
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          There is nothing in your bag
        </Typography>
      )}
    </Box>
  );
};
export default Bag;
