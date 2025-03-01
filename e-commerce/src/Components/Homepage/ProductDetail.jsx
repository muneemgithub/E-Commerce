import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  MenuItem,
  TextField,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ProductImage from "../../Assests/Productdetail_image.png";
import THumbNailImg from "../../Assests/Image 57.png";
import ThumbNailImg2 from "../../Assests/Image 56.png";
import ThumbNail3 from "../../Assests/Image 58.png";
import ThumbNail4 from "../../Assests/Image 60.png";
import Oval1Img from "../../Assests/Oval 1.png";
import Oval2Img from "../../Assests/Oval 2.png";
import addtoCartImg from "../../Assests/Add shopping cart.png";
import lineOne from "../../Assests/Cardheadingline.png";
import lineTwo from "../../Assests/signupformunderline.png";
import PlayButtonImg from "../../Assests/Icon Button 7.png";
import DelivertImg from "../../Assests/Delivery time 3.png";
import MessageImg from "../../Assests/Love message 3.png";
import LockImg from "../../Assests/Lock landscape 3.png";
import CardImg1 from "../../Assests/img_1.jpg";
import CardImg2 from "../../Assests/Img-2.jpg";
import CardImg3 from "../../Assests/Img-3.jpg";
import CardImg4 from "../../Assests/Img-4.jpg";
import leftbtn from "../../Assests/weui_back-filled.png";
import rightbtn from "../../Assests/weui_back-filled-1.png";
import ImgOne from "../../Assests/Frame 289516.png";
import ImgTwo from "../../Assests/Frame 289516 (2).png";
import ImgThree from "../../Assests/Frame 289516 (1).png";
import StarIcon from "@mui/icons-material/Star";

const category = [
  { title: "Glamour Necklace", image: CardImg1, link: "/glamour" },
  { title: "Radiance Necklace", image: CardImg2, link: "/radiance" },
  { title: "Exquisite Earrings", image: CardImg3, link: "/exquisite" },
  { title: "Dreamy Necklace", image: CardImg4, link: "/dreamy" },
];

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

// Styled Image Component
const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "4px",
});

// Size Selector Component (Now separate)
const SizeSelector = ({ selectedSize, setSelectedSize }) => {
  const sizes = [48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70];

  return (
    <Box className="flex gap-2 mt-2">
      {sizes.map((size) => (
        <Box
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`w-[41px] h-[36px] flex items-center justify-center border rounded-[4px] cursor-pointer
            ${
              selectedSize === size
                ? "border-[#c5a56f] text-[#c5a56f] bg-white"
                : "border-gray-300 text-gray-800 bg-white"
            }`}
        >
          {size}
        </Box>
      ))}
    </Box>
  );
};

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(48);
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    ProductImage,
    THumbNailImg,
    ThumbNailImg2,
    ThumbNail3,
    ThumbNail4,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Grid container spacing={8}>
        {/* Left - Image Gallery */}
        <Grid item xs={12} md={6} className="relative">
          <Box className="sticky flex flex-col md:flex-row items-center md:items-start gap-4">
            {/* Thumbnail Images */}
            <Box
              className={`flex gap-2 md:flex-col`}
              sx={{
                position: { xs: "static", md: "relative" },
                top: { md: "18px" },
                left: { md: "20px" },
              }}
            >
              {productImages.map((img, index) => (
                <Box
                  key={index}
                  className={`cursor-pointer border ${
                    selectedImage === index
                      ? "border-[#c5a56f]"
                      : "border-gray-200"
                  } rounded-md overflow-hidden`}
                  onClick={() => setSelectedImage(index)}
                  sx={{
                    width: "64px",
                    height: "82px",
                    borderRadius: "4px",
                    border: "1px solid #0D554A",
                  }}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </Box>
              ))}
            </Box>

            {/* Main Image */}
            <Box
              className="relative rounded-lg"
              sx={{
                width: { xs: "100%", sm: "360px", md: "420px", lg: "477px" },
                height: { xs: "auto", sm: "500px", md: "580px", lg: "636px" },
                borderRadius: "8px",
                marginLeft: { xs: "0", md: "0", lg: "20px" },
              }}
            >
              <StyledImage
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full h-full object-contain p-4"
              />
            </Box>
          </Box>
        </Grid>

        {/* Right - Product Details */}
        <Grid item xs={12} md={6}>
          <Box className="h-full flex flex-col justify-between">
            <div>
              {/* Price */}
              <Typography
                variant="h5"
                className="mt-4 md:mt-0"
                sx={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: "600",
                  fontSize: { xs: "28px", md: "40px" },
                  lineHeight: "56px",
                  color: "#775617",
                }}
              >
                $620.73
              </Typography>

              {/* Title */}
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: "600",
                  fontSize: { xs: "28px", md: "40px" },
                  lineHeight: "56px",
                  color: "#775617",
                  mt: { xs: "10px", md: "20px" },
                }}
              >
                Luxury Charms Ring
              </Typography>

              {/* Code */}
              <Typography
                sx={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#323842",
                  mt: "8px",
                }}
              >
                Code: 78205
              </Typography>

              {/* Color */}
              <Typography
                sx={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#424955",
                  mt: "8px",
                }}
              >
                Color - Rose Gold
              </Typography>

              {/* Color Options */}
              <Box className="flex gap-2 mt-2">
                <img
                  src={Oval1Img}
                  alt="Oval1Img"
                  className="w-9 h-9 rounded-full border"
                />
                <img
                  src={Oval2Img}
                  alt="Oval2Img"
                  className="w-9 h-9 rounded-full border"
                />
              </Box>

              {/* Size Selection */}
              <Typography
                sx={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#424955",
                  mt: "16px",
                }}
              >
                Size - {selectedSize}{" "}
                <span className="underline text-sm text-gray-600 cursor-pointer">
                  What is my size?
                </span>
              </Typography>

              {/* Size Selector Component */}
              <Box className="mt-2">
                <SizeSelector
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />
              </Box>

              {/* Quantity Selector and Add to Cart */}
              <Box className="flex flex-col gap-4 mt-6">
                <Box className="flex items-center gap-2">
                  <Typography className="text-gray-800 font-bold">
                    Quantity:
                  </Typography>

                  <Box className="flex items-center">
                    <Button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-[39px] h-[44px] text-gray-600 bg-[#F3F4F6] rounded-[4px]"
                      sx={{ backgroundColor: "#F3F4F6" }}
                    >
                      -
                    </Button>

                    <Typography className="w-[38px] h-[43px] text-center bg-[#F3F4F6] rounded-[4px] flex items-center justify-center">
                      {quantity}
                    </Typography>

                    <Button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-[41px] h-[44px] text-gray-600 bg-[#F3F4F6] rounded-[4px] flex items-center justify-center"
                      sx={{ backgroundColor: "#F3F4F6" }}
                    >
                      +
                    </Button>
                  </Box>
                </Box>

                {/* Add to Cart & Buy Now Buttons */}
                <Box className="flex flex-col md:flex-row gap-4">
                  <Button
                    variant="outlined"
                    className="w-full md:w-[266px] h-[52px] rounded-[20px] border-[#0F3460] flex items-center justify-center gap-2 text-[#0F3460] font-semibold"
                  >
                    <img
                      src={addtoCartImg}
                      alt="Bag Icon"
                      className="w-6 h-6"
                    />
                    Add to Bag
                  </Button>

                  <Button
                    variant="contained"
                    className="w-full md:w-[266px] h-[52px] rounded-[10px] text-white font-semibold"
                    sx={{
                      textTransform: "none",
                      boxShadow: "none",
                      backgroundColor: "#0F3460",
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Box>

              {/* Extra Information Dropdowns */}
              <Box className="flex flex-wrap gap-4 mt-6">
                {["Delivery", "Payment", "Warranty", "Care"].map(
                  (label, index) => (
                    <TextField
                      key={index}
                      select
                      label={label}
                      variant="filled"
                      className="w-full md:w-[266px] bg-white"
                      sx={{
                        borderRadius: "4px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "4px",
                        },
                      }}
                    >
                      <MenuItem value="info1">{label} Info 1</MenuItem>
                      <MenuItem value="info2">{label} Info 2</MenuItem>
                      <MenuItem value="info3">{label} Info 3</MenuItem>
                    </TextField>
                  )
                )}
              </Box>
            </div>
          </Box>
        </Grid>
      </Grid>

      <Box className="text-center mb-12">
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
          Description
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
      </Box>
      <Typography
        sx={{
          width: { xs: "100%", sm: "80%", md: "900px", lg: "977px" }, // Responsive width
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: { xs: "24px", sm: "32px", md: "36px", lg: "40px" }, // Adjusted font size
          lineHeight: "56px",
          letterSpacing: "0%",
          color: "#775617",
          textAlign: { xs: "center", md: "left" }, // Center on small screens, left align on larger screens
          margin: { xs: "0 auto", md: "0 0 0 100px" }, // Centered on mobile, left margin on md+
          display: "block",
        }}
      >
        Exquisite Elegance and Timeless Charm
      </Typography>

      <Typography
        sx={{
          width: { xs: "100%", sm: "90%", md: "900px", lg: "977px" }, // Responsive width
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Adjust font size for devices
          lineHeight: { xs: "24px", sm: "26px", md: "28px" }, // Adjust line height
          letterSpacing: "0%",
          color: "#775617",
          textAlign: { xs: "center", md: "left" }, // Centered for mobile, left-aligned for tablet+
          margin: { xs: "0 auto", md: "0 0 0 100px" }, // Centered for mobile, left margin for tablet+
          display: "block",
        }}
      >
        Experience the perfect fusion of exquisite elegance and timeless charm,
        designed to complement every occasion. Our collection embodies grace,
        sophistication, and luxury, making each piece a statement of refined
        beauty. Crafted with meticulous attention to detail, every creation
        exudes a classic yet contemporary appeal.
      </Typography>

      <Box
  position="relative"
  sx={{
    width: "100%",
    maxWidth: "855px",
    height: { xs: "400px", sm: "500px", md: "700px", lg: "861px" }, // Set explicit height
    margin: "0 auto", // Centers the container
    overflow: "hidden", // Ensures no extra spacing issues
  }}
>
  {/* Background Image */}
  <Box
    component="img"
    src={THumbNailImg}
    alt="Background Image"
    sx={{
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0, // Align to top
      left: { xs: "0%", sm: "50%", md: "50%", lg: "50%" }, // Centering logic
      transform: { sm: "translateX(-50%)", md: "translateX(-50%)", lg: "translateX(-50%)" }, // Centers image
      borderRadius: "10px",
      objectFit: "cover",
    }}
  />

  {/* Play Button (Centered) */}
  <Box
    position="absolute"
    top="50%"
    left="50%"
    sx={{
      transform: "translate(-50%, -50%)", // Always centered
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Box
      component="img"
      src={PlayButtonImg}
      alt="Play Button"
      sx={{
        width: { xs: "50px", sm: "60px", md: "70px" }, // Responsive size
        height: { xs: "50px", sm: "60px", md: "70px" },
        borderRadius: "26px",
      }}
    />
  </Box>
</Box>


      {/* Delivery Icons */}
      <Grid
        container
        spacing={4} // Adjusted spacing for better responsiveness
        justifyContent="center"
        sx={{
          width: { xs: "100%", sm: "100%", md: "90%", lg: "1041px" }, // Responsive width
          height: "auto", // Height adjusts based on content
          marginTop: "50px",
          marginLeft: { xs: "0px", sm: "0px", md: "50px", lg: "100px" }, // Adjusted margin
        }}
      >
        {[
          { img: DelivertImg, title: "Delivery" },
          { img: MessageImg, title: "Customer Care" },
          { img: LockImg, title: "Payment Security" },
        ].map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
            {/* ✅ Responsive Cards */}
            <Card className="h-full">
              <CardContent className="flex flex-col items-center p-4">
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{ width: "50px", height: "50px" }} // Adjusted icon size
                />
                <Typography
                  sx={{
                    fontFamily: "Cormorant Garamond",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "22px",
                    textAlign: "center",
                    width: "100%", // Adjusted width for responsiveness
                    maxWidth: "276px",
                    color: "gray",
                    marginTop: "5px",
                  }}
                >
                  Ea esse elit anim commodo laborum pariatur nisi. Voluptate
                  elit d
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className="text-center mb-12" sx={{ mt: 16 }}>
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
          You May Also Like
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
      </Box>

      {/* Cards */}
      <Grid
        container
        spacing={4}
        justifyContent="center" // ✅ Centers items on all screens
      >
        {category.map((category, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            display="flex"
            justifyContent="center" // ✅ Ensures center alignment for all screen sizes
          >
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
                    background:
                      "linear-gradient(90deg, #197AED, #E3EFFD, #3A5E6E)",
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
            width: "500px",
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
            display: { xs: "none", sm: "none", md: "block" },
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
                    height: "270px",
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
      </Box>
    </div>
  );
};

export default ProductDetails;
