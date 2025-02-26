import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Herobgimg from "../../Assests/aboutusbgimage.jpg";
import heroline from "../../Assests/herosection line.png";
import StoryImg from "../../Assests/ABoutUsstory.png";
import lineOne from "../../Assests/Cardheadingline.png";
import lineTwo from "../../Assests/signupformunderline.png";
import UncompromisingImg from "../../Assests/Uncompromising.png";
import EthicalImg from "../../Assests/Ethical.png";
import CustomerImg from "../../Assests/Customer.png";
import cardLine from "../../Assests/herosection line.png";

const AboutUs = () => {
  return (
    <Box className="w-full">
      {/* Hero Section */}
      <Box
        className="relative h-[500px] text-white flex items-center justify-center bg-cover bg-center px-4"
        style={{
          backgroundImage: `url(${Herobgimg})`,
          maxWidth: "1240px", // Fixed width on large screens
          width: "100%", // Responsive for smaller screens
          margin: "0 auto",
        }}
      >
        {/* Overlay */}
        <Box className="absolute inset-0 bg-[#0F3460C9]"></Box>

        <Container maxWidth="lg" className="relative z-10">
          <Box className="max-w-2xl text-center mx-auto">
            {/* Heading */}
            <Typography
              variant="h2"
              className="font-['Libre_Bodoni'] font-medium text-[32px] sm:text-[48px] lg:text-[64px] leading-[40px] sm:leading-[60px] lg:leading-[80px] tracking-normal"
            >
              Crafting Elegance One Piece at a Time
            </Typography>

            {/* Image */}
            <Box className="flex justify-center my-2">
              <img
                src={heroline}
                alt="heroline"
                className="w-1/2 sm:w-1/3 lg:w-[300px]"
              />
            </Box>

            {/* Subtitle */}
            <Typography
              variant="subtitle1"
              className="font-['Libre_Bodoni'] font-normal text-[16px] sm:text-[24px] lg:text-[32px] leading-[20px] sm:leading-[30px] lg:leading-[40px] tracking-normal"
            >
              Timeless Elegance Crafted for Every Story
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" className="my-16">
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
            Our Story
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
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="rounded-lg overflow-hidden">
              <img
                src={StoryImg}
                alt="Jewelry Collection"
                className="w-full h-auto object-cover"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                color: "#775617",
                fontSize: { xs: "24px", sm: "32px", md: "40px" }, // Responsive font size
                lineHeight: { xs: "36px", sm: "50px", md: "60px" }, // Responsive line height
                textAlign: { xs: "center", md: "left" }, // Center on small screens, left on md+
                position: { lg: "absolute" }, // Absolute only on LG screens
                width: "247px",
                mx: { xs: "auto", lg: "0" },
                top: { lg: "950px" },
              }}
            >
              Our Journey
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                color: "gray",
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" }, // Responsive font size
                lineHeight: { xs: "24px", sm: "28px", md: "30px" }, // Adjusted line height
                width: { xs: "90%", sm: "80%", md: "600px", lg: "564px" }, // Adjust width
                height: "auto", // Remove fixed height for better responsiveness
                textAlign: { xs: "center", md: "left" }, // Center on small screens
                position: { lg: "absolute" }, // Absolute only on LG screens
                left: { lg: "669px" }, // Positioning only for LG
                mx: { xs: "auto", lg: "0" }, // Center text in small screens
                mt: { xs: "10px", md: "0" }, // Adjust margin-top for small screens
              }}
            >
              Celestial Jewels was crafted from passion to create true beauty in
              jewelry. It is an expression of craftsmanship and passion for life
              and its meanings embodied in art. With meticulous care, we bring
              together the finest precious stones and metals to create pieces
              that tell stories.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Mission & Values Section */}
      <Box className="bg-gray-50 py-16">
        <Container maxWidth="lg">
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
            Our Misson & Values
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
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "40px",
              lineHeight: "60px",
              letterSpacing: "0%",
              width: "381px",
              height: "60px",
              color: "#775617",
            }}
          >
            What We Stand For
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              color: "#77561799",
              fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "24px" }, // Responsive font size
              lineHeight: { xs: "26px", sm: "30px", md: "32px", lg: "36px" }, // Adjusted line height
              width: { xs: "90%", sm: "80%", md: "700px", lg: "896px" }, // Responsive width
              height: "auto", // Remove fixed height for better responsiveness
              textAlign: { xs: "center", md: "left" }, // Center text in small screens
              position: "relative", // Keep it relative for flexibility
              mx: "auto", // Center on small screens
            }}
          >
            At Celestia Jewels, our mission is to create exquisite, high-quality
            jewelry that brings elegance and confidence to every wearer. We are
            committed to
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                image: UncompromisingImg,
                title: "Uncompromising Quality",
                description:
                  "Every piece is crafted with precision and care, using only the finest materials.",
              },
              {
                image: EthicalImg,
                title: "Ethical Sourcing",
                description:
                  "We ensure all our materials are ethically sourced and sustainable.",
              },
              {
                image: CustomerImg,
                title: "Customer Satisfaction",
                description:
                  "Your satisfaction is our priority, with personalized service at every step.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="h-full shadow-none border">
                  {/* Image at the Top */}
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    className="object-cover"
                  />

                  {/* Content Below */}
                  <CardContent className="text-center">
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "29.05px",
                        letterSpacing: "0%",
                        width: "291px",
                        height: "29px",
                        position: "relative",
                        right: "17px",
                        color: "#775617",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Inter",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "19.36px",
                        letterSpacing: "0%",
                        width: "291px",
                        height: "57px",
                        position: "relative",
                        left: "7px",
                        color: "#775617B0",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Craftsmanship Section */}
      <Box className="relative h-[400px] bg-slate-700 text-white flex items-center mt-16">
        <Container maxWidth="lg">
          {/* Heading + Lines (Above Card) */}
          <Box className="absolute top-[-120px] left-0 w-full text-center md:text-left">
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: { xs: "32px", sm: "40px", md: "48px", lg: "56px" }, // Responsive font size
                lineHeight: { xs: "40px", sm: "50px", md: "72px" }, // Responsive line height
                textAlign: { xs: "center", md: "left" }, // Mobile par center, lg par left
                color: "#775617",
                width: { xs: "90%", md: "822px" }, // Mobile par full width, lg par fixed
                mb: 2,
                mx: { xs: "auto", md: "100px" }, // Mobile par center, md par left shift
              }}
            >
              Craftsmanship & Quality
            </Typography>

            {/* Line One */}
            <Box
              component="img"
              src={lineOne}
              alt="lineOne"
              sx={{
                width: "474px",
                height: "25px",
                marginLeft: "100px",
                display: { xs: "none", sm: "none", md: "block" },
                marginTop: "-10px",
              }}
            />

            {/* Line Two */}
            <Box
              component="img"
              src={lineTwo}
              alt="lineTwo"
              sx={{
                marginLeft: "100px",
                display: { xs: "none", sm: "none", md: "block" },
              }}
            />
          </Box>

          {/* Card Section */}
          <Box className="text-center">
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Libre Bodoni",
                fontWeight: 500,
                fontSize: { xs: "32px", sm: "36px", md: "40px" },
                lineHeight: { xs: "40px", sm: "45px", md: "50px" },
                textAlign: { xs: "center", md: "left" },
                width: { xs: "100%", md: "424px" },
                height: "50px",
                color: "#fff",
              }}
            >
              The Art of Fine Jewelry
            </Typography>
            <img src={cardLine} alt="cardLine" />

            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Libre Bodoni",
                fontWeight: 700,
                fontSize: { xs: "18px", sm: "22px", md: "24px" },
                lineHeight: { xs: "26px", sm: "28px", md: "30px" },
                textAlign: { xs: "center", md: "left" },
                width: { xs: "100%", md: "790px" },
                height: "63px",
                marginLeft: { xs: "0px", md: "195px" },
                color: "#fff",
              }}
            >
              How the pieces are made, materials used, and attention to detail
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
