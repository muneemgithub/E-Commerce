import React from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import { useState } from "react";
import GoogleIcon from "../../Assests/Icon-Google.png";
import BgImg from "../../Assests/bgimage.png";
import underline from "../../Assests/signupformunderline.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
      <Box sx={{ position: "relative", width: "100%" }}>
        {/* Responsive Heading */}
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: { xs: "50px", md: "80px" }, // Mobile pe 50px, Tablet/Desktop pe 80px
            left: { xs: "20px", md: "100px" }, // Mobile pe left 20px
            fontSize: { xs: "24px", md: "40px" }, // Mobile 24px, Tablet/Desktop 40px
            lineHeight: { xs: "32px", md: "56px" },
            fontWeight: 600,
            fontFamily: "'Cormorant Garamond', serif",
            color: "#775617",
          }}
        >
          Clean Jewellery That Makes a Statement
        </Typography>

        <Box
          component="img"
          src={underline}
          alt="underline"
          sx={{
            height: "14.82px",
            position: "absolute",
            top: "140px",
            left: "70px",
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
        />
      </Box>

      <div
        className="flex justify-center items-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            width: { xs: "100%", sm: "600px", md: "800px", lg: "900px" }, // Responsive width
            height: "56px",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: { xs: "24px", sm: "32px", md: "40px" }, // Responsive font size
            lineHeight: "56px",
            textAlign: "center",
            color: "#775617",
            mt: { xs: "100px", sm: "150px", md: "200px" }, // Responsive margin top
          }}
        >
          Create Your Own Account
        </Typography>
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
        <Stack
          direction={{ xs: "column", sm: "row" }} // Mobile: column, Tablet/Desktop: row
          spacing={2} // Gap between buttons
          sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
        >
          <Button
            variant="contained"
            sx={{
              width: { xs: "100%", sm: "200px", md: "266px" }, // Mobile full width, Tablet/Desktop fixed width
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
            sx={{
              width: { xs: "100%", sm: "200px", md: "266px" }, // Responsive width
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
        </Stack>
      </div>
      <div
  className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20"
>
  <div
    className="w-full max-w-[900px] space-y-4 p-6 sm:p-8 md:p-10 rounded-lg"
  >
    {/* First Name */}
    <TextField
      label="First Name"
      variant="outlined"
      fullWidth
      sx={{
        borderRadius: "10px",
        "& .MuiOutlinedInput-root": { borderRadius: "10px" },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #775617",
        },
      }}
    />

    {/* Last Name */}
    <TextField
      label="Last Name"
      variant="outlined"
      fullWidth
      sx={{
        borderRadius: "10px",
        "& .MuiOutlinedInput-root": { borderRadius: "10px" },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #775617",
        },
      }}
    />

    {/* Email */}
    <TextField
      label="Email"
      variant="outlined"
      fullWidth
      sx={{
        borderRadius: "10px",
        "& .MuiOutlinedInput-root": { borderRadius: "10px" },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #775617",
        },
      }}
    />

    {/* Password */}
    <TextField
      label="Password"
      variant="outlined"
      type={showPassword ? "text" : "password"}
      fullWidth
      sx={{
        borderRadius: "10px",
        "& .MuiOutlinedInput-root": { borderRadius: "10px" },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #775617",
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />

    {/* Confirm Password */}
    <TextField
      label="Confirm Password"
      variant="outlined"
      type={showRePassword ? "text" : "password"}
      fullWidth
      sx={{
        borderRadius: "10px",
        "& .MuiOutlinedInput-root": { borderRadius: "10px" },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #775617",
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowRePassword(!showRePassword)}
              edge="end"
            >
              {showRePassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  </div>
</div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px", // Space between buttons
        }}
      >
        {/* Create Account Button */}
        <Button
          variant="contained"
          sx={{
            width: "371px",
            height: "56px",
            borderRadius: "10px",
            padding: "16px 122px",
            backgroundColor: "#775617",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#5e4312",
            },
          }}
        >
          Create Account
        </Button>

        {/* Google Sign-up Button */}
        <Button
          variant="outlined"
          sx={{
            width: "371px",
            height: "56px",
            borderRadius: "10px",
            padding: "16px 122px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px", // Space between icon & text
            border: "1px solid #775617",
            color: "#775617",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          <img src={GoogleIcon} alt="GoogleIcon" />
          Sign up with Google
        </Button>

        {/* Login Link */}
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <span>Already have an account? </span>
          <Button color="primary">Log in</Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
