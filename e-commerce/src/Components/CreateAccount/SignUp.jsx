import React from "react";
import { TextField, Button, IconButton } from "@mui/material";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import BgImg from "../../Assests/bgimage.png";
import underline from "../../Assests/signupformunderline.png";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  return (
    <div
    className="flex flex-col items-center justify-center min-h-screen bg-white bg-opacity-50 bg-cover bg-center"
    style={{
      backgroundImage: `url(${BgImg})`,
      backgroundSize: "cover", // Ensures full coverage
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
  
    }}
  >

<h1
  className="absolute"
  style={{
    height: "56px",
    top: "80px", 
    left: "100px", 
    transform: "rotate(0deg)",
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "56px",
    letterSpacing: "0%",
    color: "#775617",
  }}
>
  Clean Jewellery That Makes a Statement
</h1>

<img
  style={{
    height: "14.82px", 
    position: "absolute", 
    top: "140px", 
    left: "70px", 
  }}
  src={underline}
  alt="underline"
/>


      <div
        className="flex justify-center items-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%", 
        }}
      >
        <h2
          style={{
            width: "900px",
            height: "56px",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "56px",
            letterSpacing: "0%",
            color: "#775617",
            textAlign: "center",
            marginTop:"-200px"
          }}
        >
          Create Your Own Account
        </h2>
      </div>

      <div
        className="flex justify-center items-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%", // Full width
        }}
      >
        <Button
          variant="contained"
          style={{
            width: "266px",
            height: "52px",
            borderRadius: "10px",
            border: "1px solid #775617",
            backgroundColor: "#775617",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Sign in
        </Button>

        <Button
          variant="outlined"
          style={{
            width: "266px",
            height: "52px",
            borderRadius: "10px",
            border: "1px solid #775617",
            color: "#775617",
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "transparent",
          }}
        >
          Log in
        </Button>
      </div>

     
    </div>
  );
};

export default SignUpForm;

