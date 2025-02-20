import React from "react";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
// import { Libre_Bodoni, Poppins } from "next/font/google";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";


const Footer = () => {
  return (
    <>
      <Box className="relative px-6 sm:px-10 lg:px-24 bg-[#0F3460] dark:text-gray-800 bg-cover bg-center h-auto py-10">
        <Box className="relative container flex flex-col lg:flex-row justify-between space-y-0 lg:space-y-0 mx-auto">
          {/* Grid for Links Section */}
          <Box className="grid grid-cols-1 justify-between gap-x-4 gap-y-8 lg:w-[40%] sm:grid-cols-2 text-sm text-center sm:text-left">
            {/* About Us Section */}
            <Box className="w-full sm:w-auto">
              <Typography
                className={`text-white text-2xl font-[400] uppercase ps-4 text-start`}
              >
                About Us
              </Typography>
              <List className="text-white">
                {["Our mission", "Stores", "Careers"].map((item, index) => (
                  <ListItem
                    key={index}
                    className={`h-[4vh] text-xl font-[400] text-white capitalize cursor-pointer`}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* FAQ Section */}
            <Box className="w-full sm:w-auto leading-snug">
              <Typography
                className={`text-white text-2xl font-[400] uppercase ps-4 text-start`}
              >
                FAQ
              </Typography>
              <List className="text-white">
                {["Shipping", "Returns+Exchange", "Jewelry Care", "Warranty", "Ring Sizer", "Contact Us"].map(
                  (item, index) => (
                    <ListItem
                      key={index}
                      className={` h-[4vh] font-[400] text-white capitalize cursor-pointer text-xl`}
                    >
                      {item}
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          </Box>

          {/* Join Our Community Section */}
          <Box className="lg:w-[45%] w-full text-center sm:text-left">
            <Box className="space-y-3">
              <Typography className={`text-[32px] sm:text-[40px] text-[#fff]`}>
                Join Our Community
              </Typography>
              <Button
                className={`bg-[#775617] tracking-[1px]  text-white px-6 sm:px-10 w-full sm:w-[65%] rounded-md py-3 font-[600]`}
              >
                Your Email
              </Button>

              {/* Social Icons */}
              <Box className="flex justify-center sm:justify-start space-x-6">
                <YouTubeIcon fontSize="medium" className="rounded-full text-white p-1 w-10 h-10 cursor-pointer" />
                <InstagramIcon fontSize="medium" className="rounded-full text-white p-1 w-10 h-10 cursor-pointer" />
                <TwitterIcon fontSize="medium" className="rounded-full text-white p-1 w-10 h-10 cursor-pointer" />
                <Facebook fontSize="medium" className="rounded-full text-white p-1 w-10 h-10 cursor-pointer" />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Footer Terms */}
        <Box
          className={`flex justify-center items-center space-x-4 text-white !font-[300] text-[15px] mt-16`}
        >
          <span>TERMS AND CONDITIONS</span>
          <span>PRIVACY POLICY</span>
          <span>2022 jEWDIS iNC.</span>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
