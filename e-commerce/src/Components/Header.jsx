import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "../Assests/Search.png";
import FavoriteIcon from "../Assests/Favorte.png";
import CartIcon from "../Assests/Addtocart.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FAF1E2",
          boxShadow: "none",
          height: { xs: "80px", md: "121px" }, // Responsive height
          width: { xs: "100%", lg: "1240px" }, // 100% on small screens, 1240px on large
          marginLeft: { xs: "auto", lg: "50px" }, // Auto margin for smaller screens
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            px: { xs: 2, md: 6 }, // Padding adjustment
          }}
        >
          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon sx={{ color: "#775617" }} />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              color: "#775617",
              fontFamily: "Cookie, cursive",
              fontWeight: 400,
              fontSize: { xs: "22px", md: "28px" },
              lineHeight: "62.4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Celestia Jewels
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
            {["Home", "Shop", "Collection", "About Us", "Contact"].map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#775617",
                  fontFamily: "Libre Bodoni, serif",
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  textTransform: "none",
                  height: "30px",
                  backgroundColor: "#FAF1E2",
                  "&:hover": { backgroundColor: "#E5D5C3" },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Icons */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {[SearchIcon, FavoriteIcon, CartIcon].map((icon, index) => (
              <IconButton key={index} sx={{ padding: 0 }}>
                <img
                  src={icon}
                  alt={`icon-${index}`}
                  style={{
                    width: "22.53px",
                    height: "22.53px",
                  }}
                />
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer for Navigation */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {["Home", "Shop", "Collection", "About Us", "Contact"].map((item) => (
            <ListItem button key={item} onClick={handleDrawerToggle}>
              <ListItemText primary={item} sx={{ textAlign: "center", color: "#775617" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
