import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Herobgimg from "../../Assests/Collectionimage.png";
import bgimg from "../../Assests/Group 1116606618.png";
import lineOne from "../../Assests/Cardheadingline.png";
import GoldNacklaceImg from "../../Assests/image 6.png";
import EarringsImg from "../../Assests/image 10.png";
import BridalNathImg from "../../Assests/Frame 1261153219.png";
import PastelGreenImg from "../../Assests/Frame 1261153220.png";
import Product from "./Product";
import { jewelleryData } from "../../Data";

const CollectionPage = () => {
  const cards = [
    { img: EarringsImg, alt: "Earrings", label: "Bridal Nath" },
    { img: GoldNacklaceImg, alt: "Gold Necklace", label: "Pastel Green" },
    { img: BridalNathImg, alt: "Bridal Nath" },
    { img: PastelGreenImg, alt: "Pastel Green" },
  ];
  const [showAll, setShowAll] = useState(false);

  const displayedJewellery = showAll
    ? jewelleryData
    : jewelleryData.slice(0, 12);

  return (
    <Box className="w-full">
      {/* Hero Section */}
      <Box
        className="relative text-white flex items-center justify-center bg-cover bg-center"
        sx={{
          backgroundImage: `url(${Herobgimg})`,
          width: { xs: "100%", sm: "100%", md: "100%", lg: "1240px" }, // Fixed width on lg
          height: { xs: "300px", sm: "400px", md: "500px", lg: "700px" }, // Responsive height
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "0 auto", // Centered on large screens
        }}
      >
        <Box
          component="img"
          src={bgimg}
          alt="bgimg"
          sx={{
            width: { xs: "80%", sm: "70%", md: "60%", lg: "auto" },
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>

      <Box className="max-w-6xl mx-auto p-4">
        <Grid container spacing={2} justifyContent="center">
          {displayedJewellery.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Product title={item.title} img={item.img} name={item.name} />
            </Grid>
          ))}
        </Grid>

        {!showAll && (
          <Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              mt={3} // Thoda margin upar se
              pr={2} // Right side pe padding
            >
              <Button
                variant="contained"
                sx={{
                  width: "229px",
                  height: "49px",
                  borderRadius: "10px",
                  padding: "10px",
                  gap: "10px",
                  backgroundColor: "#0F3460",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#092A4A",
                  },
                }}
                onClick={() => setShowAll(true)}
              >
                Show All
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      {/* New Arrivals Section */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Libre Bodoni",
          fontWeight: 400,
          fontSize: { xs: "28px", sm: "36px", md: "48px" }, // Responsive font size
          lineHeight: { xs: "38px", sm: "50px", md: "60px" },
          letterSpacing: "0px",
          color: "#775617",
          ml: { xs: "20px", md: "50px" },
          mt: 4,
        }}
      >
        New Arrivals
      </Typography>

      <Box
        component="img"
        src={lineOne}
        alt="lineOne"
        sx={{
          width: { xs: "250px", sm: "350px", md: "474px" }, // Responsive width
          height: "auto",
          ml: { xs: "20px", md: "50px" },
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />

      {/* Card Grid */}
      <Box className="max-w-6xl mx-auto p-4">
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Box className="relative overflow-hidden">
                <Box
                  component="img"
                  src={card.img}
                  alt={card.alt}
                  sx={{
                    width: "100%", // Full width on all screens
                    maxWidth: "602px", // Keeps max size
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CollectionPage;
