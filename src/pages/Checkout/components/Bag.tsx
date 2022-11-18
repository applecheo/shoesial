/* eslint-disable react/no-unescaped-entities */
import { DeleteOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import SelectQuantity from "../../../components/SelectQuantity";
import SelectSize from "../../../components/SelectSize";
import { items } from "../../../data";

const IMG1 = items[4].images[0];

const Bag = () => {
  return (
    <Box sx={{ mr: { xs: 0, sm: 5 } }}>
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
      <Box
        sx={{
          display: "flex",
          borderBottom: 1,
          borderColor: grey[600],
          mb: 3,
        }}
      >
        <img src={IMG1} alt={IMG1} className="checkout-img" />
        <Box sx={{ ml: 3 }}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography variant="body1">Nike Air Max Flyknit Racer</Typography>
            <Typography
              variant="body1"
              sx={{
                pl: {
                  xs: 0,
                  sm: 10,
                },
              }}
            >
              S$100.00
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ color: grey[600], mt: 1 }}>
            Men's Shoes
          </Typography>
          <Typography variant="body1" sx={{ color: grey[600], mt: 1 }}>
            Black/White
          </Typography>

          <Box sx={{ display: "flex", my: 1 }}>
            <Box sx={{ display: "flex", mr: 1 }}>
              <Typography variant="body1" sx={{ color: grey[600], mr: 0.5 }}>
                Size
              </Typography>
              <SelectSize />
            </Box>

            <Box sx={{ display: "flex" }}>
              <Typography variant="body1" sx={{ color: grey[600], mr: 0.5 }}>
                Quantity
              </Typography>
              <SelectQuantity />
            </Box>
          </Box>
          <Box sx={{ my: 2 }}>
            <FavoriteBorderOutlined
              sx={{ ml: 0.5, mr: 1.5, cursor: "pointer" }}
            />
            <DeleteOutlined sx={{ cursor: "pointer" }} />
          </Box>
        </Box>
      </Box>

      {/* ////////////////////////////////////////////////////////////////////// */}
      <Box
        sx={{
          display: "flex",
          borderBottom: 1,
          borderColor: grey[600],
          mb: 3,
        }}
      >
        <img src={IMG1} alt={IMG1} className="checkout-img" />
        <Box sx={{ ml: 3 }}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography variant="body1">Nike Air Max Flyknit Racer</Typography>
            <Typography
              variant="body1"
              sx={{
                pl: {
                  xs: 0,
                  sm: 10,
                },
              }}
            >
              S$100.00
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ color: grey[600], mt: 1 }}>
            Men's Shoes
          </Typography>
          <Typography variant="body1" sx={{ color: grey[600], mt: 1 }}>
            Black/White
          </Typography>

          <Box sx={{ display: "flex", my: 1 }}>
            <Box sx={{ display: "flex", mr: 1 }}>
              <Typography variant="body1" sx={{ color: grey[600], mr: 0.5 }}>
                Size
              </Typography>
              <SelectSize />
            </Box>

            <Box sx={{ display: "flex" }}>
              <Typography variant="body1" sx={{ color: grey[600], mr: 0.5 }}>
                Quantity
              </Typography>
              <SelectQuantity />
            </Box>
          </Box>
          <Box sx={{ my: 2 }}>
            <FavoriteBorderOutlined
              sx={{ ml: 0.5, mr: 1.5, cursor: "pointer" }}
            />
            <DeleteOutlined sx={{ cursor: "pointer" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Bag;
