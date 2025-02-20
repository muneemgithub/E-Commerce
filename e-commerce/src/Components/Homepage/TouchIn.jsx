import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import LocationOnIcon from "../../Assests/location.png";
import PhoneIcon from "../../Assests/Container.png";
import EmailIcon from "../../Assests/Icon.png";

const TouchIn = () => {
  return (
    <Container maxWidth="lg" className="py-16">
     
      {/* Get In Touch Section */}
      <Box className="text-center mb-12">
        <Typography
          variant="h3"
          className="text-[#333] font-serif mb-4 text-center w-full"
          sx={{
            fontSize: "40px",
            fontWeight: "400",
            lineHeight: "48px",
            textAlign: "center",
          }}
        >
          Get In Touch
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            className="text-gray-600"
            sx={{
              maxWidth: "455.23px",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "24px",
              textAlign: "center",
              margin: "0 auto", // Center horizontally
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet viverra nunc. Donec nec commodo erat.
          </Typography>
        </Box>
      </Box>

      {/* Contact Info Cards */}
      <Grid container spacing={4} sx={{ mt: 4 }}> {/* Added marginTop here */}
  <Grid item xs={12} md={4}>
    <Paper
      elevation={0}
      className="flex flex-col items-center justify-center text-center"
      sx={{
        width: "250px",
        minHeight: "140px",
        borderRadius: "7px",
        border: "1px solid #ccc",
        padding: "31px",
        backgroundColor: "#F3F3F6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img
        src={LocationOnIcon}
        alt="LocationOnIcon"
        className="text-[#b19777]"
        sx={{ fontSize: 40, mb: 1 }} 
      />
      <Typography variant="h6" sx={{ mb: 1 }}> {/* Added marginBottom */}
        152 Street 2714 Pakistan
      </Typography>
      <Typography variant="body2" className="text-gray-600">
        Lorem ipsum dolor sit amet viverra
      </Typography>
    </Paper>
  </Grid>

  <Grid item xs={12} md={4}>
    <Paper
      elevation={0}
      className="flex flex-col items-center justify-center text-center"
      sx={{
        width: "250px",
        minHeight: "140px",
        borderRadius: "7px",
        border: "1px solid #ccc",
        padding: "31px",
        backgroundColor: "#F3F3F6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img
        src={PhoneIcon}
        alt="PhoneIcon"
        className="text-[#b19777]"
        sx={{ fontSize: 40, mb: 1 }}
      />
      <Typography variant="h6" sx={{ mb: 1 }}>
        152 Street 2714 Pakistan
      </Typography>
      <Typography variant="body2" className="text-gray-600">
        Lorem ipsum dolor sit amet viverra
      </Typography>
    </Paper>
  </Grid>

  <Grid item xs={12} md={4}>
    <Paper
      elevation={0}
      className="flex flex-col items-center justify-center text-center"
      sx={{
        width: "250px",
        minHeight: "140px",
        borderRadius: "7px",
        border: "1px solid #ccc",
        padding: "31px",
        backgroundColor: "#F3F3F6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img
        src={EmailIcon}
        alt="EmailIcon"
        className="text-[#b19777]"
        sx={{ fontSize: 40, mb: 1 }}
      />
      <Typography variant="h6" sx={{ mb: 1 }}>
        152 Street 2714 Pakistan
      </Typography>
      <Typography variant="body2" className="text-gray-600">
        Lorem ipsum dolor sit amet viverra
      </Typography>
    </Paper>
  </Grid>
</Grid>


      {/* Contact Form */}
      <Box
        className="max-w-3xl mx-auto"
        sx={{
          backgroundColor: "white",
          boxShadow: 3, // MUI Shadow
          borderRadius: "10px",
          p: 4, // Padding
          mt: 5, // Margin top
        }}
      >
        <Typography
          variant="h4"
          className="text-center font-serif"
          sx={{
            color: "#775617",
            fontSize: "40px",
            fontWeight: 400,
            lineHeight: "48px",
            width: "159.25px",
            height: "48px",
            margin: "0 auto", // Center align
          }}
        >
          Send Us
        </Typography>

        <Typography
          variant="body1"
          className="text-center text-gray-600"
          sx={{
            width: "741px",
            height: "48px",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "24px",
            margin: "0 auto", // Center align
          }}
        >
          Connect with us for all your queries and updates, or you can share
          your problems in a chat with our contact officer.
        </Typography>

        <Box component="form" className="space-y-6">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Name"
                variant="filled"
                className="bg-gray-50"
                sx={{
                  width: "365px",
                  //   height: "46px",
                  borderRadius: "10px",
                  padding: "13.5px 16px",
                  marginLeft: "100px",
                  "& .MuiInputBase-root": {
                    borderRadius: "10px",
                    padding: "13.5px 16px",
                    backgroundColor: "#F8F8F8", // Optional: Ensures background matches
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Email"
                variant="filled"
                className="bg-gray-50"
                sx={{
                  width: "365px",
                  height: "46px",
                  borderRadius: "10px",
                  padding: "13.5px 16px",
                  "& .MuiInputBase-root": {
                    borderRadius: "10px",
                    padding: "13.5px 16px",
                    backgroundColor: "#F8F8F8",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Phone number"
                variant="filled"
                className="bg-gray-50"
                sx={{
                  width: "760px",
                  height: "46px",
                  borderRadius: "10px",
                  marginLeft: "150px",
                  padding: "13.5px 16px",
                  "& .MuiInputBase-root": {
                    borderRadius: "10px",
                    padding: "13.5px 16px",
                    backgroundColor: "#F8F8F8",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Your Message"
                multiline
                rows={4}
                variant="outlined"
                className="bg-gray-50"
                sx={{
                  width: "760px",
                  height: "120px",
                  minHeight: "120px",
                  marginLeft: "150px",
                  borderRadius: "10px",
                  padding: "16px",
                  "& .MuiInputBase-root": {
                    borderRadius: "10px",
                    padding: "16px",
                    backgroundColor: "#F8F8F8",
                  },
                }}
              />
            </Grid>
          </Grid>

          <Box className="flex justify-end ">
            <Button
              variant="contained"
              sx={{
                width: "166px",
                height: "46px",
                borderRadius: "10px",
                paddingTop: "12.25px",
                backgroundColor: "#14274A",
                "&:hover": {
                  backgroundColor: "#1a3259",
                },
                textTransform: "none",
                marginLeft: "750px",
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TouchIn;
