import React from "react";
import { Box, Typography, Button } from "@mui/material";
import BanglesImg from "../../Assests/Bangles.png";

const CardItem = ({ image, title }) => (
  <Box
    sx={{
      width: "351px",
      height: "422px",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0px 4px 10px #F7E7CE63",
      backgroundColor: "#F7E7CE63",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src={image}
      alt={title}
      style={{
        width: "150px",
        height: "150px",
        objectFit: "cover",
        marginBottom: "10px",
      }}
    />
    <Typography
      variant="h6"
      sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "8px" }}
    >
      {title}
    </Typography>
    <Typography variant="body2" sx={{ textAlign: "center", color: "gray" }}>
      Request for Price
    </Typography>
  </Box>
);

const FeaturedProducts = () => {
  const items = [
    { image: BanglesImg, title: "Heritage Antique Bangles" },
    { image: "path-to-image2.jpg", title: "Navratan Teardrops" },
    { image: "path-to-image3.jpg", title: "Regal Pearl Jadau Choker" },
    { image: "path-to-image4.jpg", title: "Peacock Jhumkas" },
    { image: "path-to-image5.jpg", title: "Regal Pearl Jadau Choker" },
    { image: "path-to-image6.jpg", title: "Heritage Ruby Bangles" },
    { image: "path-to-image7.jpg", title: "Traditional Jadau Earrings 2.0" },
    { image: "path-to-image8.jpg", title: "Bloom Wear Diamond" },
    { image: "path-to-image9.jpg", title: "South Indian Ruby Bangles" },
  ];

  return (
    <Box className="flex flex-col items-center w-full px-8">
      {/* Featured Products Heading */}
      <Box className="relative flex flex-col items-start mb-6">
        <Typography variant="h4" className="text-[#5B3D12] font-serif font-bold">
          Our Featured Products
        </Typography>
        <Box className="w-full flex items-center mt-1">
          <Box className="w-6 h-6 bg-[#5B3D12] rounded-full"></Box>
          <Box className="h-[1px] bg-[#5B3D12] flex-1"></Box>
        </Box>
      </Box>

      {/* Category Buttons */}
      <Box className="flex gap-4 mb-8">
        {["All", "Gold Jewellery", "Diamond Jewellery", "Bridal Jewellery", "Kids Jewellery"].map(
          (category, index) => (
            <Button
              key={index}
              variant="outlined"
              className="border-[#5B3D12] text-[#5B3D12] font-serif normal-case px-4 py-1 rounded-md hover:bg-[#5B3D12] hover:text-white transition-all"
            >
              {category}
            </Button>
          )
        )}
      </Box>

      {/* Cards Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        {items.map((item, index) => (
          <CardItem key={index} image={item.image} title={item.title} />
        ))}
      </Box>

      {/* Shop The Collection Button */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button variant="contained" sx={{ backgroundColor: "#5B3D12", color: "white" }}>
          Shop The Collection
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
