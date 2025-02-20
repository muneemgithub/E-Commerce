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
          top: "150px",
          marginLeft: "70px",
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
          marginLeft: "100px",
          display: "block",
          margin: "0 auto",
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
          width: "100%", // Full width
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

      <form className="flex justify-center items-center w-full">
        <TextField
          placeholder="First Name"
          variant="outlined"
          fullWidth
          className="mb-4"
          InputProps={{
            style: {
              width: "900px",
              height: "52px",
              borderRadius: "10px",
              marginLeft: "220px",
              marginTop: "20px",
            },
          }}
        />

        <TextField
          className="mb-4 w-full"
          placeholder="Last Name"
          variant="outlined"
          fullWidth
          InputProps={{
            style: {
              width: "900px", // Exact width
              height: "52px", // Exact height
              borderRadius: "10px", // Rounded corners
              marginLeft: "220px",
              marginTop: "20px",
            },
          }}
        />
        <TextField
          className="mb-4 w-full"
          placeholder="Email"
          variant="outlined"
          fullWidth
          InputProps={{
            style: {
              width: "900px", // Exact width
              height: "52px", // Exact height
              borderRadius: "10px", // Rounded corners
              marginLeft: "220px",
              marginTop: "20px",
            },
          }}
        />
        <div className="mb-4 relative">
          <TextField
            placeholder="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            InputProps={{
              style: {
                width: "900px", // Exact width
                height: "52px", // Exact height
                borderRadius: "10px", // Rounded corners
                marginLeft: "220px",
                marginTop: "20px",
              },
            }}
          />
        </div>
        <div className="mb-4 relative">
          <TextField
            placeholder="Re Enter Password"
            variant="outlined"
            type={showRePassword ? "text" : "password"}
            fullWidth
            InputProps={{
              style: {
                width: "900px", // Exact width
                height: "52px", // Exact height
                borderRadius: "10px", // Rounded corners
                marginLeft: "220px",
                marginTop: "20px",
              },
            }}
          />
        </div>
        <div className="flex items-center justify-center w-screen h-screen">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#775617",
              borderRadius: "10px",
              padding: "16px 122px",
              height: "56px",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              marginLeft: "520px",
              marginTop: "50px",
            }}
          >
            Create Account
          </Button>
        </div>

        <div className="flex justify-center">
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            style={{
              borderRadius: "10px",
              border: "1px solid #775617",
              padding: "16px 86px",
              height: "56px",
              color: "#775617",
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "transparent",
              marginLeft: "520px",
              marginTop: "20px",
            }}
          >
            Sign up with Google
          </Button>
        </div>

        <div
          className="text-center"
          style={{
            marginLeft: "600px",
            marginTop: "10px",
          }}
        >
          <span>Already have account? </span>
          <Button color="primary">Log in</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
