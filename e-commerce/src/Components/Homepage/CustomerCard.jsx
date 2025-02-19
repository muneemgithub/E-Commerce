"use client";

import { Avatar, Card, CardContent, Typography, Box, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

// Testimonial Data
const reviews = [
  {
    name: "Emily K.",
    text: "Luxury & elegance combined! The jewelry looks even more beautiful in person. Highly recommend!",
    rating: 5,
    img: "https://placehold.co/100x100",
  },
  {
    name: "David R.",
    text: "Perfect gift! The quality is outstanding, and the sparkle is breathtaking. My wife adored it!",
    rating: 4,
    img: "https://placehold.co/100x100",
  },
  {
    name: "Sarah M.",
    text: "Absolutely stunning! The craftsmanship is exquisite, and the packaging felt so luxurious. Love it!",
    rating: 3,
    img: "https://placehold.co/100x100",
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
    <Box sx={{ display: "flex", justifyContent: "center", minHeight: "100vh",  p: 3 }}>
      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                bgcolor: "#1e3a8a",
                color: "white",
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                width: "300px", // Fixed width
                height: "350px", // Fixed height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mt: -6 }}>
                <Avatar
                  src={review.img}
                  alt={review.name}
                  sx={{ width: 80, height: 80, border: "4px solid white" }}
                />
              </Box>
              <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                <Typography variant="body1">{review.text}</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                  {review.name}
                </Typography>
              </CardContent>
              <StarRating rating={review.rating} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
