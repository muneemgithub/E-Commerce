import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Paper,
  Container,
  CardContent,
  Card,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import Herobgimg from "../../Assests/shoppingcartimg.png";
import GreenKundanImg from "../../Assests/image 10.png";
import GoldmodernImg from "../../Assests/Frame 1261153219.png";
import DelivertImg from "../../Assests/Delivery time 3.png";
import MessageImg from "../../Assests/Love message 3.png";
import LockImg from "../../Assests/Lock landscape 3.png";
import bgimg from "../../Assests/Rectangle 2394.png";

const initialProducts = [
  {
    id: 1,
    name: "Green Kundan",
    type: "Earrings",
    price: 12.5,
    quantity: 4,
    image: GreenKundanImg,
  },
  {
    id: 2,
    name: "Gold Modern",
    type: "Nath",
    price: 30.0,
    quantity: 3,
    image: GoldmodernImg,
  },
  {
    id: 3,
    name: "Calathea Medallion",
    type: "Nath",
    price: 30.0,
    quantity: 2,
    image: GreenKundanImg,
  },
];

const ShoppingCart = () => {
  const [products, setProducts] = useState(initialProducts);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id, change) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + change) }
          : product
      )
    );
  };

  const removeItem = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const shipping = 0;
  const taxes = 0;
  const discount = 10;
  const total = subtotal + shipping + taxes - discount;

  return (
    <div className="p-6 flex flex-col items-center">
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
       <img
  src={bgimg}
  alt="bgimg"
  style={{
    width: "913px",
    height: "358px",
    position: "absolute",
    top: "113px",
    objectFit: "cover",
  }}
/>

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
              Shopping Cart
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
              Your handpicked selections are waiting! Make sure everything looks
              perfect before you move to the checkout and secure your order.
            </Typography>
          </Box>
        </Container>
      </Box>

      <div
        className="w-[741px] h-[83px] rounded-[12px] bg-[#8B5E34] text-white 
  flex justify-between items-center px-[71px] py-[24px] gap-1 mt-5 
  max-md:w-full max-md:h-auto max-md:flex-wrap max-md:justify-center max-md:gap-4"
      >
        <Typography className="text-sm md:text-base">Product</Typography>
        <Typography className="text-sm md:text-base">Price</Typography>
        <Typography className="text-sm md:text-base">Quantity</Typography>
        <Typography className="text-sm md:text-base">Subtotal</Typography>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
        <div className="lg:col-span-2">
          <Paper className="mb-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-4 gap-4 p-4 items-center border-b 
        max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-6 max-md:text-center"
              >
                {/* Product Image & Name */}
                <div className="flex items-center gap-2 max-sm:flex-col max-sm:items-center">
                  <IconButton
                    size="small"
                    onClick={() => removeItem(product.id)}
                  >
                    <CloseIcon />
                  </IconButton>
                  <div className="w-[132px] h-[126px] rounded-[8px] bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Typography variant="subtitle2">{product.name}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {product.type}
                    </Typography>
                  </div>
                </div>

                {/* Price */}
                <Typography className="max-md:text-center">
                  ${product.price.toFixed(2)}
                </Typography>

                {/* Quantity Selector */}
                <div
                  className="flex items-center justify-center gap-2 
          w-[144px] h-[45px] rounded-[12px] border border-gray-300 p-2
          max-sm:w-full max-sm:h-auto"
                >
                  <IconButton
                    size="small"
                    onClick={() => updateQuantity(product.id, -1)}
                  >
                    <RemoveIcon sx={{ fontSize: "20px" }} />
                  </IconButton>
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    {product.quantity}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => updateQuantity(product.id, 1)}
                  >
                    <AddIcon sx={{ fontSize: "20px" }} />
                  </IconButton>
                </div>

                {/* Subtotal */}
                <Typography className="max-md:text-center">
                  ${(product.price * product.quantity).toFixed(2)}
                </Typography>
              </div>
            ))}
          </Paper>

          <div className="flex gap-4">
            <Button
              variant="outlined"
              sx={{
                width: "231px",
                height: "63px",
                borderRadius: "19px",
                border: "1px solid #775617",
                padding: "10px 16px",
                gap: "10px",
                color: "#775617",
                "&:hover": {
                  backgroundColor: "#F5F5F5", // Optional hover effect
                  borderColor: "#5A3F12",
                },
              }}
            >
              Coupon Code
            </Button>

            <Button
              variant="contained"
              sx={{
                width: "231px",
                height: "63px",
                borderRadius: "10px",
                border: "1px solid #0F3460",
                padding: "10px 16px",
                gap: "10px",
                backgroundColor: "#0F3460",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#0C2A50",
                },
              }}
            >
              Apply Code
            </Button>
          </div>
          {/* Delivery Icons */}
          <Grid
            container
            spacing={0} // Ensuring the exact 72px gap
            justifyContent="center"
            sx={{
              width: "1041px",
              height: "160px",
              marginTop: "50px",
              marginLeft: "200px",
            }}
          >
            <Grid item sx={{ width: "276px", marginRight: "72px" }}>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-4">
                  <img src={DelivertImg} alt="Delivery" />
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

            <Grid item sx={{ width: "276px", marginRight: "72px" }}>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-4">
                  <img src={MessageImg} alt="Customer Care" />
                  <Typography
                    sx={{
                      fontFamily: "Cormorant Garamond",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "28px",
                      textAlign: "center",
                    }}
                  >
                    Customer Care
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

            <Grid item sx={{ width: "276px" }}>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-4">
                  <img src={LockImg} alt="Payment Security" />
                  <Typography
                    sx={{
                      fontFamily: "Cormorant Garamond",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "28px",
                      textAlign: "center",
                    }}
                  >
                    Payment Security
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
        </div>

        <div className="lg:col-span-1">
          <Paper className="p-6">
            <Typography variant="h6" className="mb-4">
              Order Summary
            </Typography>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Typography>Items</Typography>
                <Typography>
                  {products.reduce((sum, p) => sum + p.quantity, 0)}
                </Typography>
              </div>

              <div className="flex justify-between">
                <Typography>Sub Total</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
              </div>

              <div className="flex justify-between">
                <Typography>Shipping</Typography>
                <Typography>${shipping.toFixed(2)}</Typography>
              </div>

              <div className="flex justify-between">
                <Typography>Taxes</Typography>
                <Typography>${taxes.toFixed(2)}</Typography>
              </div>

              <div className="flex justify-between">
                <Typography>Coupon</Typography>
                <Typography>-${discount.toFixed(2)}</Typography>
              </div>

              <div className="flex justify-between pt-3 border-t">
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">${total.toFixed(2)}</Typography>
              </div>
            </div>

            <Button
              variant="contained"
              fullWidth
              className="mt-6 bg-[#8B5E34] hover:bg-[#724d2a]"
            >
              Proceed to Checkout
            </Button>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
