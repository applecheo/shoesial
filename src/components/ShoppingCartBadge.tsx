import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -1,
    top: 15,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  const quantity = useSelector((state: any) => state.cart.totalQuantity);
  const navigate = useNavigate();
  return (
    <IconButton aria-label="cart" sx={{ mr: 3 }}>
      <StyledBadge badgeContent={quantity} color="secondary">
        <ShoppingCartIcon onClick={() => navigate("/checkout")} />
      </StyledBadge>
    </IconButton>
  );
}
