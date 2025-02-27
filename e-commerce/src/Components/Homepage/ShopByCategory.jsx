import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ShopByOne from "../../Assests/shopby1.jpg";
import Earring from "../../Assests/Earning.jpg";
import Naclace from "../../Assests/Nacklace.jpg";
import Ring from "../../Assests/Ring.jpg";
import leftArrow from "../../Assests/carbon_next-outline.png";
import rightArrow from "../../Assests/carbon_next-outline (1).png";
import lineOne from "../../Assests/Cardheadingline.png";
import lineTwo from "../../Assests/signupformunderline.png";

const categories = [
  { title: "BRACELETE", image: ShopByOne, link: "/bracelets" },
  { title: "EARRINGS", image: Earring, link: "/earrings" },
  { title: "NACLACE", image: Naclace, link: "/necklaces" },
  { title: "RINGS", image: Ring, link: "/rings" },
];

const ShopByCategory = () => {
  return (
    <Box
      className="relative container mx-auto px-8 py-16"
      sx={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}
    >
      {/* Heading & Lines */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Libre Bodoni",
          fontWeight: 400,
          fontSize: { xs: "32px", sm: "40px", md: "48px" },
          lineHeight: { xs: "40px", sm: "50px", md: "60px" },
          textAlign: { xs: "center", md: "left" },
          mb: 2,
          color: "#775617",
          marginRight: { xs: "0", md: "770px" },
        }}
      >
        Shop By Category
      </Typography>

      <Box
        component="img"
        src={lineOne}
        alt="lineOne"
        sx={{
          width: "474px",
          height: "25px",
          marginRight: "770px",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />

      <Box
        component="img"
        src={lineTwo}
        alt="lineTwo"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />

      {/* Left Arrow */}
      <Box
        component="img"
        src={leftArrow}
        alt="Left Arrow"
        className="cursor-pointer"
        sx={{
          position: "absolute",
          left: "-40px",
          top: "65%",
          transform: "translateY(-50%)",
          width: "68px",
          height: "72px",
          zIndex: 10,
          cursor: "pointer",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />

      {/* Cards */}
      <Grid container spacing={4} justifyContent="center">
  {categories.map((category, index) => (
    <Grid item xs={12} sm={6} md={3} key={index} display="flex" justifyContent="center">
      <Box
        className="relative cursor-pointer group overflow-hidden rounded-lg"
        sx={{
          width: "258.33px", 
          height: "305.86px",
          borderRadius: "20px",
          marginTop: "50px",
          padding: "8px 17px",
          backgroundImage: `url(${category.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          "&:hover .category-overlay": { opacity: 1 },
          "&:hover .category-button": {
            transform: "translateY(0)",
            opacity: 1,
          },
        }}
      >
        {/* Dark Overlay */}
        <Box className="category-overlay absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0" />

        {/* Button */}
        <Box className="category-button mb-4 w-full flex justify-center transform translate-y-0 opacity-1 transition-all duration-300">
          <button
            className="flex items-center justify-center rounded-full hover:bg-opacity-90 transition-colors"
            style={{
              width: "212px",
              height: "53px",
              borderRadius: "10px",
              padding: "0",
              background: "linear-gradient(90deg, #197AED, #E3EFFD, #3A5E6E)",
              backdropFilter: "blur(4px)",
            }}
          >
            <span
              style={{
                fontFamily: "Libre Bodoni, serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "30px",
                textAlign: "center",
                color: "#775617",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              {category.title}
            </span>
          </button>
        </Box>
      </Box>
    </Grid>
  ))}
</Grid>


      {/* Right Arrow */}
      <Box
        component="img"
        src={rightArrow}
        alt="Right Arrow"
        className="cursor-pointer"
        sx={{
          position: "absolute",
          right: "-52px",
          top: "65%",
          transform: "translateY(-50%)",
          width: "68px",
          height: "72px",
          zIndex: 10,
          cursor: "pointer",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
    </Box>
  );
};

export default ShopByCategory;
