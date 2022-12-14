import { useNavigate } from "react-router";

import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/collections/shoes");
  };
  return (
    <>
      <Box component="div" sx={{ maxWidth: screen }}>
        <img
          className="home-img"
          src="//cdn.shopify.com/s/files/1/0027/2236/5553/files/SneakerSurge-WebBanner.jpg?v=1614876630"
          alt="home-page-picture"
        ></img>
        <Box
          sx={{
            maxWidth: 700,
            textAlign: "center",
            margin: "auto",
            paddingTop: { xs: 8, md: 15 },
          }}
          component="div"
        >
          <Typography variant="h3" component="h3">
            DELVE INTO SNEAKERS THAT WILL BE FOLLOWED
          </Typography>
          <Button
            onClick={navigateHandler}
            variant="contained"
            sx={{ marginTop: 5 }}
            size="large"
          >
            Explore
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
