import React from "react";
import { Box, Typography } from "@mui/material";
import HeroSectionImg from "../../Assests/HeroSectionImg.png";
import LineOne from "../../Assests/Line_1.png";
import RectangleImg from "../../Assests/Rectangle 3.png";
import LineThree from "../../Assests/Line3.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0F3460",
        width: "1240px",
        height: "619px",
        position: "absolute",
        top: "121px",
        left: "49px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        // padding: "32px",
        color: "white",
        
      }}
    >
      <img
        src={HeroSectionImg}
        alt="Luxury Jewelry"
        style={{
          width: "272px",
          height: "381.96px",
          position: "absolute",
          top: "130px",
          left: "150px",
          borderBottomRightRadius: "50px",
          borderBottomLeftRadius: "50px",
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
      {/* LineThree below HeroSectionImg */}
      <img
        src={LineThree}
        alt="LineThree"
        style={{
          width: "162px",
          height: "14px",
          position: "absolute",
          top: "520px",
          left: "200px",
          // border: "1px solid",
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
      
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:"-100px", marginLeft:"800px" }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#FAF1E2",
            height: "47px",
            fontFamily: "Cookie, cursive",
            fontWeight: 400,
            fontSize: "20px",
            letterSpacing: "0",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Women's Collection
        </Typography>

        <img
          src={LineOne}
          alt="LineOne"
          style={{
            width: "217px",
            height: "14px",
          }}
        />
      </Box>

      {/* Headline */}
      <Typography
        variant="h3"
        sx={{
          color: "#FAF1E2",
          height: "62px",
          fontFamily: "Cookie",
          fontWeight: 400,
          marginLeft: "300px",
          fontSize: "40px",
          lineHeight: "62.4px",
          letterSpacing: "0",
          textAlign: "center",
        }}
      >
        Experience Luxury, Wear Confidence.
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "#FAF1E2",
          width: "444px",
          height: "90px",
          fontFamily: "Libre Bodoni, serif",
          fontWeight: 400,
          marginLeft: "500px",
          fontSize: "25px",
          lineHeight: "30px",
          letterSpacing: "0",
          textAlign: "center",
        }}
      >
        Every Piece Tells a Story – Elevate Your Style with Handcrafted Jewelry
        That Captures the Essence of Luxury and Grace.
      </Typography>
    </Box>
  );
};

export default HeroSection;
