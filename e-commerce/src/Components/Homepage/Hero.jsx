import React from "react";
import { Box, Typography } from "@mui/material";
import HeroSectionImg from "../../Assests/HeroSectionImg.png";
import LineOne from "../../Assests/Line_1.png";
import RectangleImg from "../../Assests/Rectangle 3.png";
import LineThree from "../../Assests/Line3.png";
import bgimg from "../../Assests/Rectangle 2394.png";
import { useTheme, useMediaQuery } from "@mui/material";

function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* Mobile & Tablet View */}
      {isMobile && (
        <Box
          sx={{
            backgroundColor: "#0F3460",
            width: "100%",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
        >
          <Box sx={{ width: "100%", mb: 4 }}>
            <img
              src={HeroSectionImg}
              alt="Luxury Jewelry"
              style={{
                width: "80%",
                height: "auto",
                margin: "0 auto",
                borderRadius: "0 0 50px 50px",
              }}
            />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                color: "#FAF1E2",
                fontFamily: "Cookie, cursive",
                fontSize: "1.5rem",
                mb: 2,
              }}
            >
              Women's Collection
            </Typography>

            <img
              src={LineOne}
              alt="LineOne"
              style={{ width: "60%", margin: "0 auto" }}
            />

            <Typography
              variant="h3"
              sx={{
                color: "#FAF1E2",
                fontFamily: "Cookie",
                fontSize: "2rem",
                my: 3,
              }}
            >
              Experience Luxury, Wear Confidence.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#FAF1E2",
                fontFamily: "Libre Bodoni, serif",
                fontSize: "1rem",
                lineHeight: 1.5,
              }}
            >
              Every Piece Tells a Story – Elevate Your Style with Handcrafted
              Jewelry That Captures the Essence of Luxury and Grace.
            </Typography>
          </Box>
        </Box>
      )}

      {/* Desktop View */}
      {!isMobile && (
        <Box
          sx={{
            backgroundColor: "#0F3460",
            width: "1240px",
            height: "619px",
            position: "absolute",
            top: "90px",
            left: "49px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          {/* Left Side Images */}
          <Box sx={{ position: "relative", width: "50%", height: "100%" }}>
            <img
              src={HeroSectionImg}
              alt="Luxury Jewelry"
              style={{
                width: "272px",
                height: "381.96px",
                position: "absolute",
                top: "130px",
                left: "150px",
                borderRadius: "0 0 50px 50px",
              }}
            />
            <img
              src={bgimg}
              alt="bgimg"
              style={{
                width: "100%",
                height: "458px",
                position: "absolute",
                top: "109px",
                left: "415px",
              }}
            />

            <img
              src={RectangleImg}
              alt="RectangleImg"
              style={{
                width: "133.25px",
                height: "133.25px",
                position: "absolute",
                top: "420.82px",
                left: "360px",
                borderRadius: "40px",
              }}
            />

            <img
              src={LineThree}
              alt="LineThree"
              style={{
                width: "162px",
                height: "14px",
                position: "absolute",
                top: "520px",
                left: "200px",
              }}
            />

            <img
              src={LineThree}
              alt="LineThree"
              style={{
                width: "171px",
                height: "14px",
                position: "absolute",
                top: "370px",
                left: "50px",
                transform: "rotate(270.4deg)",
              }}
            />
          </Box>

          {/* Right Side Content */}
          <Box sx={{ width: "50%", pl: 4 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Cookie, cursive",
                  fontSize: "2rem",
                  mb: 2,
                  ml: 20,
                }}
              >
                Women's Collection
              </Typography>
              <img
                src={LineOne}
                alt="LineOne"
                style={{
                  width: "217px",
                  display: "block",
                  marginLeft: "270px",
                }}
              />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "Cookie",
                fontSize: "2rem",
                lineHeight: 1.2,
                mb: 4,
                ml:-26,
              }}
            >
              Experience Luxury, Wear Confidence.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "Libre Bodoni, serif",
                fontSize: "1.25rem",
                lineHeight: 1.5,
                maxWidth: "360px",
                
              }}
            >
              Every Piece Tells a Story – Elevate Your Style with Handcrafted
              Jewelry That Captures the Essence of Luxury and Grace.
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}

export default HeroSection;
