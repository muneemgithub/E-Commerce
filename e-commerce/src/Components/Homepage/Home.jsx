import React from "react";
import HeroSection from "./Hero";
import JewelleryFilter from "./JewellryFilter";
import ShopByCategory from "./ShopByCategory";
import { Box } from "@mui/material";
import TestimonialCards from "./CustomerCard";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Box
        sx={{
          mt: { lg: 90, xs: 0, sm: 0, md: 0, xl: 0 },
          display: { lg: "block", xl: "none" },
        }}
      >
        <JewelleryFilter />
      </Box>

      <ShopByCategory />
      <TestimonialCards />
    </>
  );
};

export default Home;
