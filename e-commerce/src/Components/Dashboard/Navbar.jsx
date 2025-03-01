import React, { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  NotificationsNone,
} from "@mui/icons-material";
import LogoDashboard from "../../Assests/Celestia Jewels.png";
import DashboardImg from "../../Assests/dashboard-square-02.png";
import InventoryImg from "../../Assests/task-daily-01 (1).png"; // Renamed
import OrderImg from "../../Assests/invoice-01.png";
import AvatarImg from "../../Assests/Avatar.png";
import LogoutImg from "../../Assests/logout-02.png";
import NotificationImg from "../../Assests/notifications.png";
import ChatImg from "../../Assests/chat.png";

const drawerWidth = 240;

const Navbar = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Dashboard", icon: DashboardImg, active: true },
    { text: "Inventory", icon: InventoryImg }, // Updated variable name
    { text: "Orders", icon: OrderImg },
    { text: "Dashboard", icon: DashboardImg, active: true },
    { text: "Dashboard", icon: DashboardImg, active: true },
    { text: "Product Management", icon: InventoryImg, active: true }, // Updated
  ];

  const drawer = (
    <Box>
      <Box className="absolute top-[38px] left-[28px]">
        <img
          src={LogoDashboard}
          alt="LogoDashboard"
          className="w-[134px] h-[42px]"
        />
      </Box>
      <Box className="h-screen flex flex-col">
        {/* Menu List */}
        <List className="flex-grow" sx={{ marginTop: "70px" }}>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding className="mb-2">
              <ListItemButton
                className={`${item.active ? "text-white" : ""}`}
                sx={{
                  "&:hover": {
                    backgroundColor: "#775617", // Background color on hover
                    color: "white", // Text color on hover
                  },
                }}
              >
                {/* Icon */}
                <ListItemIcon className="min-w-[24px]">
                  <img src={item.icon} alt={item.text} className="w-6 h-6" />
                </ListItemIcon>

                {/* Text */}
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0%",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Name & Avatar - Always at Bottom */}
        <Box className="mt-auto">
          <ListItemButton
            className="flex justify-between"
            sx={{
              "&:hover": {
                backgroundColor: "#775617", 
                color: "white", 
                "& .MuiListItemText-primary": {
                  color: "white", 
                },
              },
            }}
          >
            <div className="flex items-center space-x-20">
              <ListItemText
                primary="Name"
                primaryTypographyProps={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  ml: { lg: "8px" },
                }}
              />
              <ListItemIcon className="min-w-[24px]">
                <img src={AvatarImg} alt="AvatarImg" className="w-6 h-6" />
              </ListItemIcon>
            </div>
          </ListItemButton>

          {/* Logout Button */}
          <ListItem disablePadding>
          <ListItemButton
            className="flex justify-between"
            sx={{
              "&:hover": {
                backgroundColor: "#775617", 
                color: "white", 
                "& .MuiListItemText-primary": {
                  color: "white", 
                },
              },
            }}
          >
              <div className="flex items-center space-x-20">
                <ListItemText
                  primary="Logout"
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0%",
                  }}
                />
                <ListItemIcon className="min-w-[24px]">
                  <img src={LogoutImg} alt="LogoutImg" className="w-6 h-6" />
                </ListItemIcon>
              </div>
            </ListItemButton>
          </ListItem>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box className="flex">
      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
      >
        {/* Mobile & Tablet drawer (Toggle Button se Open Hoga) */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "none" }, // Mobile & Tablet ke liye
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Laptop & Large Screens ke liye Permanent Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" }, // Sirf Laptop aur Large screens ke liye
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        className="flex-grow"
        sx={{ width: { lg: `calc(100% - ${drawerWidth} px)` } }}
      >
        {/* Header */}
        <AppBar
          position="static"
          className="bg-black shadow-none border-b border-gray-700"
          sx={{
            width: { xs: "100%", lg: "1184px" }, // Mobile: Full Width, Laptop/Desktop: 1184px
            height: "68px",
            top: "-1px",
            background: "#070B1D",
            left: { lg: "256px", xs: "0px" }, // Desktop ke liye left shift, mobile pe centered
            maxWidth: "100%",
            margin: "auto",
          }}
        >
          <Toolbar>
            {/* Menu Icon (Only for mobile & tablet screens) */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }} // Sirf mobile & tablet screens ke liye
            >
              <MenuIcon className="text-white" />
            </IconButton>

            {/* Search Bar */}
            <Box className="flex-grow flex items-center rounded-lg px-4 py-2">
              <SearchIcon className="text-white mr-2" />
              <InputBase
                placeholder="Search..."
                sx={{
                  color: "white",
                  "&::placeholder": {
                    color: "white",
                    opacity: 1,
                  },
                }}
              />
            </Box>

            {/* Notifications */}
            <img
              src={NotificationImg}
              alt="Notification"
              style={{ width: "28px", height: "28px" }}
            />
            <img src={ChatImg} alt="ChatImg" />

            {/* Avatar & Name */}
            <Box className="ml-4 flex items-center lg:mr-16">
              <Avatar className="!bg-[#775617] mr-2">T</Avatar>
              <Typography className="ml-2 text-white">Tooba</Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navbar;
