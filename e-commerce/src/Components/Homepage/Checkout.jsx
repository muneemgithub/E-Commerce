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
    <Box className="p-6 flex flex-col items-center">
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1214px",
          height: { xs: "auto", md: "542px" },
          backgroundImage: `url(${Herobgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
          }}
        >
          <Box sx={{ maxWidth: "800px", mx: "auto" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Libre Bodoni",
                fontWeight: 400,
                fontSize: { xs: "32px", sm: "40px", md: "48px" },
                lineHeight: { xs: "40px", sm: "50px", md: "60px" },
                color: "#fff",
                textAlign: "center",
                maxWidth: { xs: "100%", md: "780px" },
                height: "auto",
                ml: { xs: 0, md: "-200px" },
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
                maxWidth: { xs: "100%", md: "444px" },
                height: "auto",
                mx: "auto",
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
              fontSize: { xs: "24px", sm: "32px", md: "48px" },
              lineHeight: "58px",
              color: "#775617",
              width: "100%",
            maxWidth: "100%",
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

          <Box sx={{ spaceY: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: { xs: "20px", sm: "24px", md: "32px" }, // Responsive text size
                    lineHeight: { xs: "30px", sm: "36px", md: "48px" },
                    color: "#000",
                    mb: 1,
                  }}
                >
                  First Name*
                </Typography>
                <TextField
                  fullWidth
                  required
                  placeholder="Ex. John"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: { xs: "20px", sm: "24px", md: "32px" },
                    lineHeight: { xs: "30px", sm: "36px", md: "48px" },
                    color: "#000",
                    mb: 1,
                  }}
                >
                  Last Name*
                </Typography>
                <TextField
                  fullWidth
                  required
                  placeholder="Ex. Doe"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: { xs: "20px", sm: "24px", md: "32px" },
                lineHeight: { xs: "30px", sm: "36px", md: "48px" },
                color: "#000",
                mb: 1,
              }}
            >
              Company Name (Optional)
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Company Name"
              variant="outlined"
              sx={{
                height: "68px",
                borderRadius: "12px",
                p: "16px 1px",
              }}
            />

            <FormControl fullWidth>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: { xs: "20px", sm: "24px", md: "32px" },
                  lineHeight: { xs: "30px", sm: "36px", md: "48px" },
                  color: "#000",
                  mb: 1,
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
                fontSize: { xs: "20px", sm: "24px", md: "32px" },
                lineHeight: { xs: "30px", sm: "36px", md: "48px" },
                color: "#000",
                mb: 1,
              }}
            >
              Street Address*
            </Typography>
            <TextField
              fullWidth
              required
              placeholder="Enter Street Address"
              variant="outlined"
            />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: { xs: "20px", sm: "24px", md: "32px" },
                      lineHeight: { xs: "30px", sm: "36px", md: "48px" },
                      color: "#000",
                      mb: 1,
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
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: { xs: "20px", sm: "24px", md: "32px" },
                      lineHeight: { xs: "30px", sm: "36px", md: "48px" },
                      color: "#000",
                      mb: 1,
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
              </Grid>
            </Grid>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: { xs: "20px", sm: "24px", md: "32px" },
                lineHeight: { xs: "30px", sm: "36px", md: "48px" },
                color: "#000",
                mb: 1,
              }}
            >
              Zip Code*
            </Typography>
            <TextField
              fullWidth
              required
              placeholder="Enter Zip Code"
              variant="outlined"
            />

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: { xs: "20px", sm: "24px", md: "32px" },
                lineHeight: { xs: "30px", sm: "36px", md: "48px" },
                color: "#000",
                mb: 1,
              }}
            >
              Phone Number*
            </Typography>
            <TextField
              fullWidth
              required
              placeholder="Enter Phone Number"
              variant="outlined"
            />

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: { xs: "20px", sm: "24px", md: "32px" },
                lineHeight: { xs: "30px", sm: "36px", md: "48px" },
                color: "#000",
                mb: 1,
              }}
            >
              Email*
            </Typography>
            <TextField
              fullWidth
              required
              type="email"
              placeholder="Enter Email Address"
              variant="outlined"
            />

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: { xs: "20px", sm: "24px", md: "32px" },
                lineHeight: { xs: "30px", sm: "36px", md: "48px" },
                color: "#000",
                mb: 1,
              }}
            >
              Delivery Address*
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Mobile pe stack, tablet pe side-by-side
                gap: 2,
                alignItems: { xs: "stretch", sm: "center" }, // Mobile pe full-width buttons
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: "center",
                  width: { xs: "100%", sm: "auto" }, // Mobile pe full width, tablet pe auto
                  fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
                  py: { xs: 1, sm: 1.5 }, // Responsive padding
                }}
              >
                <Radio size="small" color="primary" />
                Same as Shipping Address
              </Button>

              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: "center",
                  width: { xs: "100%", sm: "auto" },
                  fontSize: { xs: "14px", sm: "16px" },
                  py: { xs: 1, sm: 1.5 },
                }}
              >
                <Radio size="small" color="primary" />
                Use Different Billing Address
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#f9fafb",
              p: { xs: 3, sm: 4, md: 6 }, // Responsive padding
              borderRadius: "12px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: { xs: "20px", sm: "24px", md: "32px" }, // Responsive font size
                lineHeight: { xs: "26px", sm: "30px", md: "38.73px" },
                color: "#000",
                mb: 2,
              }}
            >
              Order Summary
            </Typography>

            <Box sx={{ display: "grid", gap: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Items ({orderSummary.items})</Typography>
                <Typography>${orderSummary.subTotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Shipping</Typography>
                <Typography>${orderSummary.shipping.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Taxes</Typography>
                <Typography>${orderSummary.taxes.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Coupon</Typography>
                <Typography sx={{ color: "red" }}>
                  -${orderSummary.coupon.toFixed(2)}
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                }}
              >
                <Typography>Total</Typography>
                <Typography>${orderSummary.total.toFixed(2)}</Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                backgroundColor: "#1a237e",
                "&:hover": { backgroundColor: "#0d47a1" },
                fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive button text
                py: { xs: 1, sm: 1.5 }, // Responsive button padding
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Grid>

        {/* Delivery Icons */}
        <Box display="flex" justifyContent="center" width="100%">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
              maxWidth: "1041px",
              height: "auto",
              marginTop: "50px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {[
              { img: DelivertImg, title: "Delivery" },
              { img: MessageImg, title: "Customer Care" },
              { img: LockImg, title: "Payment Security" },
            ].map((item, index) => (
              <Grid
                key={index}
                item
                xs={12} // 1 per row on mobile
                sm={6} // 2 per row on tablet
                md={4} // 3 per row on desktop
                display="flex"
                justifyContent="center"
              >
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center p-4">
                    <img src={item.img} alt={item.title} />
                    <Typography
                      sx={{
                        fontFamily: "Cormorant Garamond",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "28px",
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Manrope",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                        width: { xs: "100%", sm: "276px" },
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
            ))}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Checkout;
