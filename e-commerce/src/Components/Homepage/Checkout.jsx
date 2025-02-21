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
} from "@mui/material";
import Herobgimg from "../../Assests/shoppingcartimg.png";
import lineOne from "../../Assests/Cardheadingline.png";
import DelivertImg from "../../Assests/Delivery time 3.png";
import MessageImg from "../../Assests/Love message 3.png";
import LockImg from "../../Assests/Lock landscape 3.png";

const Checkout = () => {
  const orderSummary = {
    items: 0,
    subTotal: 160.2,
    shipping: 110.0,
    taxes: 50.0,
    coupon: -10.0,
    total: 150.0,
  };

  return (
    <Box className="p-6" sx={{
        marginLeft:"50px"
    }}>
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
              fontSize: "48px",
              lineHeight: "60px",
              color: "#775617",
              width: "497px",
              height: "60px",
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
              marginRight: "770px",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          />

          <Box className="space-y-4">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "32px",
                    lineHeight: "48px",
                    color: "#000",
                    width: "186px",
                    height: "48px",
                    marginBottom: "8px",
                  }}
                >
                  First Name*
                </Typography>

                <TextField
                  fullWidth
                  required
                  placeholder="Ex.Jhon"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "32px",
                    lineHeight: "48px",
                    color: "#000",
                    width: "186px",
                    height: "48px",
                    marginBottom: "8px",
                  }}
                >
                  Last Name*
                </Typography>
                <TextField
                  fullWidth
                  required
                  placeholder="Ex.Doe"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "48px",
                color: "#000",
                // width: "186px",
                height: "48px",
              }}
            >
              Company Name(Optional)
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Company Name"
              variant="outlined"
              sx={{
                
                height: "68px",
                borderRadius: "12px",
                padding: "16px 1px", // Top, Bottom, Left, Right Padding
              }}
            />

            <FormControl fullWidth>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "32px",
                  lineHeight: "48px",
                  color: "#000",
                  // width: "186px",
                  height: "48px",
                }}
              >
                Country Name*
              </Typography>
              <Select placeholder="Country" required defaultValue="">
                <MenuItem value="US">United States</MenuItem>
                <MenuItem value="UK">United Kingdom</MenuItem>
                <MenuItem value="CA">Canada</MenuItem>
              </Select>
            </FormControl>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "48px",
                color: "#000",
                // width: "186px",
                height: "48px",
              }}
            >
              Street Address*
            </Typography>
            <TextField
              fullWidth
              label="Street Address"
              required
              placeholder="Enter Street Address"
              variant="outlined"
            />

            <FormControl fullWidth>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "32px",
                  lineHeight: "48px",
                  color: "#000",
                  // width: "186px",
                  height: "48px",
                }}
              >
                City*
              </Typography>
              <Select label="City" required defaultValue="">
                <MenuItem value="NY">New York</MenuItem>
                <MenuItem value="LA">Los Angeles</MenuItem>
                <MenuItem value="CH">Chicago</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "32px",
                  lineHeight: "48px",
                  color: "#000",
                  // width: "186px",
                  height: "48px",
                }}
              >
                State*
              </Typography>
              <Select label="State" required defaultValue="">
                <MenuItem value="NY">New York</MenuItem>
                <MenuItem value="CA">California</MenuItem>
                <MenuItem value="TX">Texas</MenuItem>
              </Select>
            </FormControl>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "48px",
                color: "#000",
                // width: "186px",
                height: "48px",
              }}
            >
              Zip Code*
            </Typography>
            <TextField
              fullWidth
              label="Zip Code"
              required
              placeholder="Enter Zip Code"
              variant="outlined"
            />

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "48px",
                color: "#000",
                // width: "186px",
                height: "48px",
              }}
            >
              Phone Number*
            </Typography>
            <TextField
              fullWidth
              label="Phone Number"
              required
              placeholder="Enter Phone Number"
              variant="outlined"
            />

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "48px",
                color: "#000",
                // width: "186px",
                height: "48px",
              }}
            >
              Email*
            </Typography>
            <TextField
              fullWidth
              label="Email"
              required
              type="email"
              placeholder="Enter Email Address"
              variant="outlined"
            />

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "48px",
                color: "#000",
                // width: "186px",
                height: "48px",
              }}
            >
              Delivery Address*
            </Typography>
            <Box className="flex gap-4 items-center">
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <Radio size="small" color="primary" />
                Same as Shipping Address
              </Button>

              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <Radio size="small" color="primary" />
                Use Different Billing Address
              </Button>
            </Box>
          </Box>
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

export default Checkout;
