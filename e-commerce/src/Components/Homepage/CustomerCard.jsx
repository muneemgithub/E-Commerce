"use client";

import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import lineOne from "../../Assests/Cardheadingline.png";
import lineTwo from "../../Assests/signupformunderline.png";
import ImgOne from "../../Assests/Frame 289516.png";
import ImgTwo from "../../Assests/Frame 289516 (2).png";
import ImgThree from "../../Assests/Frame 289516 (1).png";
import leftbtn from "../../Assests/weui_back-filled.png";
import rightbtn from "../../Assests/weui_back-filled-1.png";

// Testimonial Data
const reviews = [
  {
    name: "Emily K.",
    text: "Luxury & elegance combined! The jewelry looks even more beautiful in person. Highly recommend!",
    rating: 5,
    img: ImgOne,
  },
  {
    name: "David R.",
    text: "Perfect gift! The quality is outstanding, and the sparkle is breathtaking. My wife adored it!",
    rating: 4,
    img: ImgTwo,
  },
  {
    name: "Sarah M.",
    text: "Absolutely stunning! The craftsmanship is exquisite, and the packaging felt so luxurious. Love it!",
    rating: 3,
    img: ImgThree,
  },
];

// Star Rating Component
function StarRating({ rating }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          sx={{
            width: 20,
            height: 20,
            color: i < rating ? "#FBBF24" : "#D1D5DB",
          }}
        />
      ))}
    </Box>
  );
}

// Main Testimonial Card Component
export default function TestimonialCards() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        p: 3,
      }}
    >
      {/* Heading */}
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
        What Our Customers Say
      </Typography>
      <Box
        component="img"
        src={lineOne}
        alt="lineOne"
        sx={{
          width: "474px",
          height: "25px",
          marginRight: "770px",
          display: { xs: "none", sm: "none", md: "block" }
        }}
      />

      <Box
        component="img"
        src={lineTwo}
        alt="lineTwo"
        sx={{
          display: { xs: "none", sm: "none", md: "block" }
        }}
      />


      {/* Testimonial Cards */}
      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <Avatar
                src={review.img}
                alt={review.name}
                sx={{
                  width: "90.45px",
                  height: "92px",
                  borderRadius: "37px",
                  position: "absolute",
                  top: "-25px",
                  zIndex: 10,
                  padding: "5px",
                }}
              />

              {/* Card */}
              <Card
                sx={{
                  bgcolor: "#06254BAB",
                  color: "white",
                  p: 3,
                  borderRadius: "10px",
                  boxShadow: 3,
                  width: "350px",
                  height: "250px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  marginTop: "45px", // Adjust card position to align with avatar
                }}
              >
                <CardContent sx={{ flexGrow: 1, mt: "50px" }}>
                  {/* Adjust content to avoid overlapping with avatar */}
                  <Typography variant="body1">{review.text}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                    {review.name}
                  </Typography>
                </CardContent>
                <StarRating rating={review.rating} />
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Buttons Section */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
        <Button
          sx={{
            width: "74px",
            height: "63px",
            borderRadius: "32px",
            padding: "5px 1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <img
            src={leftbtn}
            alt="leftbtn"
            style={{ width: "40px", height: "40px" }}
          />
        </Button>
        <Button
          sx={{
            width: "74px",
            height: "63px",
            borderRadius: "32px",
            padding: "5px 1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <img
            src={rightbtn}
            alt="rightbtn"
            style={{ width: "40px", height: "40px" }}
          />
        </Button>
      </Box>
    </Box>
  );
}
