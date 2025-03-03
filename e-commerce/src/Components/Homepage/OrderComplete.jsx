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
import CompleteOrderImg from "../../Assests/CompleteOrderIcon.png";
import Underline from "../../Assests/Cardheadingline.png";
import bgimg from "../../Assests/Rectangle 2394.png";

const initialProducts = [
  {
    id: 1,
    name: "Green Kundan",
    type: "Earrings",
    price: 12.5,
    image: GreenKundanImg,
  },
  {
    id: 2,
    name: "Gold Modern",
    type: "Nath",
    price: 12.5,
    image: GoldmodernImg,
  },
  {
    id: 3,
    name: "Calathea Medallion",
    type: "Nath",
    price: 12.5,
    image: GreenKundanImg,
  },
];

const OrderComplete = () => {
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

      <div className="w-[113px] h-[112px] p-[25px] flex items-center justify-center mx-auto">
        <img
          src={CompleteOrderImg}
          alt="Complete Order"
          className="w-full h-full object-contain"
        />
      </div>

      <Typography
        sx={{
          width: "100%",
          maxWidth: "456px",
          height: "auto",
          fontFamily: "Poppins",
          fontWeight: 800,
          fontSize: { xs: "24px", sm: "30px", md: "36px" },
          lineHeight: { xs: "32px", sm: "44px", md: "54px" },
          letterSpacing: "0%",
          color: "#775617",
          textAlign: "center",
          mx: "auto",
        }}
      >
        Your Order is Completed!
      </Typography>

      <Typography
        sx={{
          width: "100%",
          maxWidth: "456px",
          height: "auto",
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: { xs: "14px", sm: "15px", md: "16px" },
          lineHeight: { xs: "20px", sm: "22px", md: "24px" },
          letterSpacing: "0%",
          color: "#000",
          textAlign: "center",
          mx: "auto",
        }}
      >
        Thank you. Your Order has been received.
      </Typography>

      <Typography
        sx={{
          width: { xs: "90%", sm: "80%", md: "497px" },
          height: "auto",
          fontFamily: "Libre Bodoni",
          fontWeight: 400,
          fontSize: { xs: "28px", sm: "36px", md: "48px" },
          lineHeight: { xs: "36px", sm: "48px", md: "60px" },
          letterSpacing: "0%",
          color: "#775617",
          marginLeft: { xs: "auto", sm: "auto", md: "-700px" },
          textAlign: { xs: "center", sm: "center", md: "left" },
          display: "block",
        }}
      >
        Products
      </Typography>

      <img
        src={Underline}
        alt="Underline"
        style={{
          width: "497px",
          height: "25px",
          display: "block",
          marginLeft: "-700px",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
        <div className="lg:col-span-2">
          <Paper
            sx={{
              width: { xs: "100%", md: "1228px" },
              height: { xs: "auto", md: "488px" },
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
            className="mb-4"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-4 gap-4 p-4 items-center border-b relative"
              >
                {/* Product Info Section */}
                <div className="flex items-center gap-2">
                  <IconButton
                    size="small"
                    onClick={() => removeItem(product.id)}
                  >
                    <CloseIcon />
                  </IconButton>

                  <div className="w-[91px] h-[92px] rounded-[8px] overflow-hidden">
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

                {/* Price at the Bottom of Card */}
                <div className="absolute right-4 flex justify-center items-center mt-4">
                  <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                    ${(product.price * product.quantity).toFixed(2)}
                  </Typography>
                </div>
              </div>
            ))}
          </Paper>

          <div>
            <Paper className="p-6">
              <div className="space-y-3">
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

                <div className="flex justify-between">
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">${total.toFixed(2)}</Typography>
                </div>
              </div>
            </Paper>
          </div>

          {/* Delivery Icons */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              width: { xs: "100%", md: "1041px" },
              height: "auto",
              marginTop: "50px",
            
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
                xs={12} // Mobile: 1 card per row
                sm={6} // Tablet: 2 cards per row
                md={4} // Laptop/Desktop: 3 cards per row
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
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
