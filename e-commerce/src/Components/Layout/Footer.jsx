import React from "react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import InstagramIcon from "../../Assests/Insta.png";
import YouTubeIcon from "../../Assests/Youtube.png";
import TwitterIcon from "../../Assests/Twitter.png";
import SkypeIcon from "../../Assests/Skype.png";

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
                sx={{
                  color: "white",
                  fontSize: "30px",
                  fontFamily: "'Libre Bodoni', serif",
                  fontWeight: 400,
                  lineHeight: "37.5px",
                  textTransform: "uppercase",
                  textAlign: "start",
                  paddingLeft: "1rem", // Equivalent to ps-4
                }}
              >
                About Us
              </Typography>
              <List sx={{ color: "white", width: "174px", height: "114px" }}>
                {["Our mission", "Stores", "Careers"].map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{ height: "38px", cursor: "pointer", p: 0 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "30px",
                        fontFamily: "'Libre Bodoni', serif",
                        fontWeight: 400,
                        lineHeight: "37.5px",
                        textTransform: "capitalize",
                      }}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              ;
            </Box>
            {/* FAQ Section */}
            <Box
              sx={{ width: "272.18px", height: "266px", lineHeight: "37.5px" }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "30px",
                  fontFamily: "'Libre Bodoni', serif",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  textAlign: "start",
                  paddingLeft: "1rem", // Equivalent to ps-4
                }}
              >
                FAQ
              </Typography>
              <List sx={{ color: "white", marginTop: "8px" }}>
                {[
                  "Shipping",
                  "Returns+Exchange",
                  "Jewelry Care",
                  "Warranty",
                  "Ring Sizer",
                  "Contact Us",
                ].map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      height: "37.5px", // Adjusted for even spacing
                      fontSize: "20px", // Keeping `text-xl` equivalent
                      fontFamily: "'Libre Bodoni', serif",
                      fontWeight: 400,
                      textTransform: "capitalize",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
            ;
          </Box>

          {/* Join Our Community Section */}
          <Box className="lg:w-[45%] w-full text-center sm:text-left">
            <Box className="space-y-3">
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "32px", sm: "40px", md: "48px" }, // Responsive font sizes
                  fontFamily: "'Libre Bodoni', serif",
                  fontWeight: 400,
                  lineHeight: "60px",
                  letterSpacing: "0%",
                  height: "60px",
                }}
              >
                Join Our Community
              </Typography>
              
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#775617B5",
                  color: "white",
                  px: { xs: 6, sm: 10 },
                  width: { xs: "100%", sm: "65%" },
                  borderRadius: "10px",
                  py: 3,
                  fontWeight: 600,
                  letterSpacing: "1px",
                  "&:hover": {
                    backgroundColor: "#644a12", // Darker shade for hover effect
                  },
                }}
              >
                Your Email
              </Button>
              {/* Social Icons */}
              <Box className="flex justify-center sm:justify-start space-x-6">
                <img
                  src={YouTubeIcon}
                  alt="YouTube"
                  className="rounded-full p-1 w-10 h-10 cursor-pointer"
                />
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="rounded-full p-1 w-10 h-10 cursor-pointer"
                />
                <img
                  src={TwitterIcon}
                  alt="Twitter"
                  className="rounded-full p-1 w-10 h-10 cursor-pointer"
                />
                <img
                  src={SkypeIcon}
                  alt="Skype"
                  className="rounded-full p-1 w-10 h-10 cursor-pointer"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Footer Terms */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            color: "white",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "22.5px",
            marginTop: "64px",
            height: "23px",
          }}
        >
          <Typography>TERMS AND CONDITIONS</Typography>
          <Typography>PRIVACY POLICY</Typography>
          <Typography>2022 JEWDIS INC.</Typography>
        </Box>
        ;
      </Box>
    </>
  );
};

export default Footer;
