import { useState } from "react";
import Card from "./Product";
import { jewelleryData, categories } from "../../Data";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import lineOne from "../../Assests/Cardheadingline.png";
import lineTwo from "../../Assests/signupformunderline.png";

export default function JewelleryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  let filteredJewellery =
    selectedCategory === "all"
      ? jewelleryData.filter((item) => item.category === "gold").slice(0, 9)
      : jewelleryData.filter((item) => item.category === selectedCategory);

  if (showAll) {
    filteredJewellery = jewelleryData;
  }

  return (
    <div className="p-6 w-100 px-4">
      {/* Buttons */}
      <div className="flex justify-center w-full bg-yellow">
        <Box className="px-10 text-[#775617] w-full max-w-[1200px]">
          {/* Title + Buttons */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
            flexDirection={{ xs: "column", sm: "column", md: "row" }} // Responsive flex direction
            textAlign={{ xs: "center", sm: "center", md: "left" }} // Center align on mobile
            gap={{ xs: 2, sm: 2, md: 0 }} // Adjust spacing
          >
            {/* Our Featured Products */}
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Libre Bodoni",
                  fontWeight: 400,
                  fontSize: { xs: "28px", sm: "36px", md: "48px" }, // Adjust font sizes
                  lineHeight: { xs: "36px", sm: "44px", md: "60px" },
                  color: "#775617",
                }}
              >
                Our Featured Products
              </Typography>
            </Box>

            {/* Buttons */}
            <Box
              display="flex"
              gap={2}
              flexWrap="wrap" // Allow wrapping on smaller screens
              justifyContent={{ xs: "center", sm: "center", md: "flex-end" }} // Center buttons on mobile
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outlined"
                  sx={{
                    width: { xs: "100%", sm: "110px", md: "118px" }, // Adjust button width
                    height: "40px",
                    borderRadius: "8px",
                    border: "1px solid #775617",
                    padding: "10px",
                    color: selectedCategory === category ? "white" : "#775617",
                    backgroundColor:
                      selectedCategory === category ? "#775617" : "white",
                    textTransform: "capitalize",
                    fontFamily: "Libre Bodoni",
                    fontSize: "14px",
                    fontWeight: 400,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: "#775617",
                      color: "white",
                    },
                  }}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowAll(false);
                  }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Underline Image */}
          <Box
            component="img"
            src={lineOne}
            alt="Line1"
            sx={{
              width: "474px",
              height: "25px",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          />

          <Box
            component="img"
            src={lineTwo}
            alt="Line2"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          />
        </Box>
      </div>

      {/* Cards Grid */}
      <Box
        sx={{
          ml: { sm: 1, md: 0, lg: 3 },
          px: { xs: 2, sm: 0 }, // Mobile screen par left aur right se padding
          display: "flex",
          justifyContent: "center", // Center align for mobile
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={1} justifyContent="center">
            {filteredJewellery.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.id}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card title={item.title} img={item.img} name={item.name} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
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
    </div>
  );
}
