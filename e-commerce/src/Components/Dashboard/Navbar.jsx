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
        <List
          className="flex-grow"
          sx={{
            marginTop: "70px",
          }}
        >
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding className="mb-2">
              <ListItemButton
                className={`${
                  item.active ? "bg-brown-700 text-white" : ""
                } hover:bg-[#775617] hover:text-white`}
              >
                {/* Icon */}
                <ListItemIcon className="min-w-[24px]">
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="w-6 h-6" // 24px x 24px
                  />
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
          <ListItem disablePadding className="mb-2">
            <ListItemButton className="flex justify-between hover:bg-[#775617] hover:text-white">
              <div className="flex items-center space-x-20">
                <ListItemText
                  primary="Name"
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0%",
                  }}
                />
                <ListItemIcon className="min-w-[24px]">
                  <img src={AvatarImg} alt="AvatarImg" className="w-6 h-6" />
                </ListItemIcon>
              </div>
            </ListItemButton>
          </ListItem>

          {/* Logout Button */}
          <ListItem disablePadding>
            <ListItemButton className="flex justify-between hover:bg-[#775617] hover:text-white">
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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
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
        sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* Header */}
        <AppBar
          position="static"
          className="bg-black shadow-none border-b border-gray-700"
          sx={{
            width: { xs: "100%", lg: "1184px" }, // Mobile: Full Width, Laptop/Desktop: 1184px
            height: "68px",
            top: "-1px",
            left: { lg: "256px", xs: "0px" }, // Desktop ke liye left shift, mobile per centered
            maxWidth: "100%", // Ensure it doesn’t overflow
            margin: "auto", // Center it on larger screens
          }}
        >
          <Toolbar>
            {/* Menu Icon (Only for small screens) */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon className="text-white" />
            </IconButton>

            {/* Search Bar */}
            <Box className="flex-grow flex items-center  rounded-lg px-4 py-2">
              <SearchIcon className="text-white mr-2" />
              <InputBase
                placeholder="Search..."
                className="flex-grow text-white placeholder-white"
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
            <Box className="ml-4 flex items-center">
              <Avatar className="bg-gray-600">T</Avatar>
              <Typography className="ml-2 text-white">Tooba</Typography>
            </Box>
          </Toolbar>
        </AppBar>

       
      </Box>
    </Box>
  );
};

export default Navbar;
