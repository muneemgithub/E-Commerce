import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Divider,
  Card,
  CardContent,
  Container,
  Radio,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Herobgimg from "../../Assests/shoppingcartimg.png";
import lineOne from "../../Assests/Cardheadingline.png";
import DelivertImg from "../../Assests/Delivery time 3.png";
import MessageImg from "../../Assests/Love message 3.png";
import LockImg from "../../Assests/Lock landscape 3.png";
import PaypalImg from "../../Assests/logo 1.png";
import VisaImg from "../../Assests/business_15801076-removebg-preview.png";
import GoogleImg from "../../Assests/google_13170545-removebg-preview.png";
import GooglePayImg from "../../Assests/money (1).png";
import CreditPayImg from "../../Assests/credit-card.png";

const Checkoutpage = () => {
  const orderSummary = {
    items: 0,
    subTotal: 160.2,
    shipping: 110.0,
    taxes: 50.0,
    coupon: -10.0,
    total: 150.0,
  };

  return (
    <Box className="p-6 flex flex-col items-center">
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "1214px" },
          height: { xs: "auto", md: "542px" },
          backgroundImage: `url(${Herobgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Overlay */}

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
          }}
        >
          <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Libre Bodoni",
                fontWeight: 400,
                fontSize: { xs: "32px", sm: "40px", md: "48px" },
                lineHeight: { xs: "40px", sm: "50px", md: "60px" },
                color: "#fff",
                textAlign: "center",
                width: { xs: "100%", md: "780px" },
                height: "60px",
                marginLeft: "-200px",
              }}
            >
              Checkout
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "Libre Bodoni",
                fontWeight: 400,
                fontSize: { xs: "20px", sm: "22px", md: "24px" },
                lineHeight: { xs: "28px", sm: "30px", md: "30px" },
                color: "#fff",
                textAlign: "center",
                width: { xs: "100%", md: "444px" },
                height: "120px",
                margin: "0 auto",
              }}
            >
              You're Almost There! Secure Your Order with a Smooth & Safe
              Checkout.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Grid container spacing={4} justifyContent={"space-between"}>
        {/* Billing Details Form */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Libre Bodoni",
              fontWeight: 400,
              fontSize: { xs: "28px", sm: "36px", md: "48px" }, // Responsive font size
              lineHeight: { xs: "36px", sm: "48px", md: "60px" }, // Adjusting line height
              color: "#775617",
              width: { xs: "100%", md: "497px" }, // Full width on small screens
              height: "auto", // Auto height for responsiveness
              textAlign: "center", // Center align on small screens
            }}
          >
            Billing Details
          </Typography>

          <Box
            component="img"
            src={lineOne}
            alt="lineOne"
            sx={{
              width: "474px",
              height: "25px",
              marginLeft: "100px",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          />

          <Box className="space-y-4">
            <TextField
              fullWidth
              required
              placeholder="Ex. Jhon"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    {/* Golden Radio Button */}
                    <Radio
                      size="small"
                      sx={{
                        color: "#D4AF37", // Golden color
                        "&.Mui-checked": {
                          color: "#D4AF37",
                        },
                      }}
                    />

                    {/* Image */}
                    <img
                      src={PaypalImg}
                      alt="Icon"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "8px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  paddingLeft: "10px",
                },
              }}
            />

            <TextField
              fullWidth
              required
              placeholder="**** **** **** 8047"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    {/* Golden Radio Button */}
                    <Radio
                      size="small"
                      sx={{
                        color: "#D4AF37", // Golden color
                        "&.Mui-checked": {
                          color: "#D4AF37",
                        },
                      }}
                    />

                    {/* Image */}
                    <img
                      src={VisaImg}
                      alt="Icon"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "8px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  paddingLeft: "10px",
                },
              }}
            />

            <TextField
              fullWidth
              required
              placeholder="Google Pay"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    {/* Golden Radio Button */}
                    <Radio
                      size="small"
                      sx={{
                        color: "#D4AF37", // Golden color
                        "&.Mui-checked": {
                          color: "#D4AF37",
                        },
                      }}
                    />

                    {/* Image */}
                    <img
                      src={GoogleImg}
                      alt="Icon"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "8px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  paddingLeft: "10px",
                },
              }}
            />

            <TextField
              fullWidth
              required
              placeholder="Google Pay"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    {/* Golden Radio Button */}
                    <Radio
                      size="small"
                      sx={{
                        color: "#D4AF37", // Golden color
                        "&.Mui-checked": {
                          color: "#D4AF37",
                        },
                      }}
                    />

                    {/* Image */}
                    <img
                      src={GooglePayImg}
                      alt="Icon"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "8px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  paddingLeft: "10px",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderRadius: "12px",
                padding: "12px 16px",
                width: "100%",
              }}
            >
              {/* Golden Radio Button */}
              <Radio
                size="small"
                sx={{
                  color: "#D4AF37", // Golden color
                  "&.Mui-checked": {
                    color: "#D4AF37",
                  },
                }}
              />

              {/* Image */}
              <img
                src={CreditPayImg}
                alt="Icon"
                style={{ width: "40px", height: "40px", borderRadius: "8px" }}
              />

              {/* Text */}
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                Add new credit/debit card
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "39.01px",
                letterSpacing: "0%",
                color: "#000",
                width: "311px",
                height: "39px",
                marginTop: "11px",
                marginLeft: "5px",
              }}
            >
              Card Holder Name*
            </Typography>

            <TextField
              required
              placeholder="Ex. John"
              variant="outlined"
              fullWidth
              sx={{
                width: { xs: "100%", md: "842px" }, // Responsive width
                height: "68px",
                "& .MuiOutlinedInput-root": {
                  height: "68px", // Setting height
                  borderRadius: "12px", // Optional: Rounded corners
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "39.01px",
                letterSpacing: "0%",
                color: "#000",
                width: "311px",
                height: "39px",
                marginTop: "11px",
                marginLeft: "5px",
              }}
            >
                Card Number**
            </Typography>

            <TextField
              required
              placeholder="4716 9627 1635 8047"
              variant="outlined"
              fullWidth
              sx={{
                width: { xs: "100%", md: "842px" }, // Responsive width
                height: "68px",
                "& .MuiOutlinedInput-root": {
                  height: "68px", // Setting height
                  borderRadius: "12px", // Optional: Rounded corners
                },
              }}
            />

<Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "39.01px",
                letterSpacing: "0%",
                color: "#000",
                width: "311px",
                height: "39px",
                marginTop: "11px",
                marginLeft: "5px",
              }}
            >
                Expiry Date*
            </Typography>

            <TextField
  required
  placeholder="02/30"
  variant="outlined"
  fullWidth
  sx={{
    width: { xs: "100%", md: "409px" }, 
    height: "68px",
    borderRadius: "12px",
    padding: "16px 35px 16px 49px", 
    "& .MuiOutlinedInput-root": {
      height: "68px", 
      borderRadius: "12px", 
    },
  }}
/>

          </Box>
          <FormControlLabel
  control={
    <Checkbox
      sx={{
        color: "#D4AF37", // Golden color
        "&.Mui-checked": {
          color: "#D4AF37",
        },
      }}
    />
  }
  label={
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "16px",
        color: "#000",
      }}
    >
      I agree to the terms and conditions
    </Typography>
  }
/>
        </Grid>
        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Box className="bg-gray-50 p-6 rounded-lg">
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "38.73px",
                letterSpacing: "0%",
                color: "#000", // Aap color adjust kar sakte hain
                width: "267px",
                height: "39px",
              }}
            >
              Order Summary
            </Typography>

            <Box className="space-y-3">
              <Box className="flex justify-between">
                <Typography>Items ({orderSummary.items})</Typography>
                <Typography>${orderSummary.subTotal.toFixed(2)}</Typography>
              </Box>
              <Box className="flex justify-between">
                <Typography>Shipping</Typography>
                <Typography>${orderSummary.shipping.toFixed(2)}</Typography>
              </Box>
              <Box className="flex justify-between">
                <Typography>Taxes</Typography>
                <Typography>${orderSummary.taxes.toFixed(2)}</Typography>
              </Box>
              <Box className="flex justify-between">
                <Typography>Coupon</Typography>
                <Typography className="text-red-500">
                  ${orderSummary.coupon.toFixed(2)}
                </Typography>
              </Box>
              <Divider className="my-2" />
              <Box className="flex justify-between font-bold">
                <Typography>Total</Typography>
                <Typography>${orderSummary.total.toFixed(2)}</Typography>
              </Box>
            </Box>

            <Button
              variant="outlined"
              fullWidth
              className="mt-6 bg-[#1a237e] hover:bg-[#0d47a1]"
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Grid>

        {/* Delivery Icons */}
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "20px",
          }}
        >
          <Grid item xs={4}>
            <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center p-4">
                <img src={DelivertImg} alt="DelivertImg" />
                <Typography
                  sx={{
                    fontFamily: "Cormorant Garamond",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "28px",
                    textAlign: "center",
                  }}
                >
                  Delivery
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "26px",
                    textAlign: "center",
                    width: "276px",
                    height: "52px",
                    color: "gray",
                  }}
                >
                  Ea esse elit anim commodo laborum pariatur nisi. Voluptate
                  elit d
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center p-4">
                <img src={MessageImg} alt="MessageImg" />
                <Typography
                  sx={{
                    fontFamily: "Cormorant Garamond",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "28px",
                    textAlign: "center",
                  }}
                >
                  Customer care
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "26px",
                    textAlign: "center",
                    width: "276px",
                    height: "52px",
                    color: "gray",
                  }}
                >
                  Ea esse elit anim commodo laborum pariatur nisi. Voluptate
                  elit d
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center p-4">
                <img src={LockImg} alt="LockImg" />
                <Typography
                  sx={{
                    fontFamily: "Cormorant Garamond",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "28px",
                    textAlign: "center",
                  }}
                >
                  Payment security
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "26px",
                    textAlign: "center",
                    width: "276px",
                    height: "52px",
                    color: "gray",
                  }}
                >
                  Ea esse elit anim commodo laborum pariatur nisi. Voluptate
                  elit d
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkoutpage;
