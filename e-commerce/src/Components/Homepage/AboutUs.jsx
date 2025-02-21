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
import cardLine from "../../Assests/herosection line.png"

const AboutUs = () => {
  return (
    <Box className="w-full">
      {/* Hero Section */}
      <Box
        className="relative h-[500px] text-white flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Herobgimg})`,
          width: "1240px",
          margin: "0 auto",
        }}
      >
        {/* Overlay */}
        <Box className="absolute inset-0 bg-[#0F3460C9]"></Box>

        <Container maxWidth="lg" className="relative z-10">
          <Box className="max-w-2xl">
            <Typography
              variant="h2"
              className="font-['Libre_Bodoni'] font-medium text-[64px] leading-[80px] tracking-normal"
              style={{
                width: "656px",
                height: "160px",
                left: "30px",
                position: "absolute",
                top: "-150px",
              }}
            >
              Crafting Elegance One Piece at a Time
            </Typography>
            <img src={heroline} alt="heroline" />
            <Typography
              variant="subtitle1"
              className="font-['Libre_Bodoni'] font-normal text-[32px] leading-[40px] tracking-normal"
              style={{
                width: "617px",
                height: "40px",
                position: "absolute",
                top: "20px",
                left: "515px",
              }}
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
                fontSize: "40px",
                lineHeight: "60px",
                color: "#775617",
                width: "247px",
                height: "60px",
                position: "absolute",
                left: "700px",
                marginTop: "-100px",
              }}
            >
              Our Journey
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "30px",
                letterSpacing: "0%",
                color: "gray",
                width: "564px",
                height: "390px",
                position: "absolute",
                left: "669px",
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
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "0%",
              width: "896px",
              height: "108px",
              position: "relative",
              color: "#77561799",
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
                fontSize: { xs: "32px", sm: "40px", md: "48px" },
                lineHeight: { xs: "40px", sm: "50px", md: "72px" },
                textAlign: { xs: "center", md: "left" },
                color: "#775617",
                width: { xs: "100%", md: "822px" },
                mb: 2,
                marginLeft: "100px",
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
