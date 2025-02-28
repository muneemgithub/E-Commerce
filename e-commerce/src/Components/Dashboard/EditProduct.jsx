import {
  Button,
  TextField,
  Card,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import line3 from "../../Assests/Cardheadingline.png";
import { ArrowLeftIcon, ScanIcon } from "lucide-react";
import NecklaceImg from "../../Assests/Diamond-Necklace-Jewelry-Design-Charming-Jewellery-removebg-preview 1.png";
export default function EditProduct() {
  const [product, setProduct] = useState({
    name: "BBA",
    type: "Necklace",
    price: "100.00",
    discount: "20%",
    description: "",
    image: NecklaceImg,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex flex-col md:flex-row justify-between items-center  gap-4">
        {/* Heading */}
        <h2
          className="text-[32px] md:text-[40px] font-normal leading-[40px] md:leading-[50px] h-[40px] md:h-[50px]"
          style={{ fontFamily: "Cookie", color: "#775617" }}
        >
          Edit Product
        </h2>
        {/* <img src={line3} alt="line3" /> */}

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <Button
            variant="outlined"
            className="h-[50px] md:h-[63px] rounded-[10px] flex items-center gap-[10px] md:gap-[17px] border border-[#D9D9D9] text-[#424242] w-full md:w-auto"
          >
            <ArrowLeftIcon className="w-4 h-4 md:w-5 md:h-5 text-[#424242]" />{" "}
            <span className="text-sm md:text-base">Add New Product</span>
          </Button>

          <Button
            variant="outlined"
            className="bg-gray-200 text-[#424242] border border-[#D9D9D9] h-[50px] md:h-[63px] w-full md:w-auto"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none", // Prevents uppercase text
            }}
          >
            <ScanIcon className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-4" />{" "}
            <span className="text-sm md:text-base">Scan to Fill Form</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-6 w-full max-w-4xl">
        {/* Product Image Section */}
        <span
          className="text-gray-600 font-bold text-[32px] leading-[36px] w-[235px] h-[36px] 
  fixed top-[220px] left-[317px]"
        >
          Product Image
        </span>

        <Card
          className="p-4 shadow-md w-full md:w-[516px] mt-10"
          sx={{
            height: "590px",
            borderRadius: "10px",
            border: "1px solid #D9D9D9",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "22px",
          }}
        >
          <CardContent className="flex flex-col items-center">
            {/* Tag Typography */}
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "36px",
                letterSpacing: "0px",
                width: "44px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: { md: "-400px", xs: "0" }, // Responsive margin
              }}
            >
              Tag
            </Typography>

            {/* TextField */}
            <TextField
              placeholder="Type"
              variant="outlined"
              fullWidth
              sx={{
                width: { xs: "100%", sm: "450px", md: "516px" },
                height: "60px",
                borderRadius: "10px",
                padding: "10px 32px",
                gap: "10px",
              }}
            />

            {/* Product Image */}
            <img
              src={product.image}
              alt="Product"
              className="w-48 h-48 object-cover mt-4"
            />

            {/* Buttons */}
            <div className="flex gap-6 mt-4 w-[351px]">
              <Button
                variant="outlined"
                sx={{
                  flex: 1, // Equal width buttons
                  height: "50px",
                  borderRadius: "10px",
                  border: "1px solid #775617",
                  color: "#775617",
                  textTransform: "none", // Prevents uppercase text
                  "&:hover": {
                    backgroundColor: "#775617",
                    color: "#fff",
                  },
                }}
              >
                Replace
              </Button>

              <Button
                variant="outlined"
                sx={{
                  flex: 1, // Equal width buttons
                  height: "50px",
                  borderRadius: "10px",
                  border: "1px solid #A50E0E",
                  color: "#A50E0E", // Text color same as border
                  textTransform: "none", // Prevents uppercase text
                  "&:hover": {
                    backgroundColor: "#A50E0E",
                    color: "#fff", // White text on hover
                  },
                }}
              >
                Remove
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* General Information Section */}
        <Card className="p-4 w-full ml-14 ">
          <CardContent>
            <span
              className="text-gray-600 font-bold"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "36px",
                letterSpacing: "0px",
                width: "385px",
                height: "36px",
                display: "block",
              }}
            >
              General Information
            </span>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "36px",
                letterSpacing: "0px",
                width: "167px",
                height: "36px",
              }}
            >
              Product Name
            </Typography>

            <div className="grid gap-4 mt-4">
              <TextField
                name="name"
                value={product.name}
                onChange={handleChange}
                fullWidth
                sx={{
                  width: { xs: "100%", sm: "513px", lg: "480px" }, // Responsive width
                  height: "60px",
                  borderRadius: "10px",
                  padding: "10px 32px",
                  gap: "1px",
                  ml: { lg: "-50px" },
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "36px",
                  letterSpacing: "0px",
                  width: "167px",
                  height: "36px",
                }}
              >
                Product Type
              </Typography>
              <TextField
                name="type"
                value={product.type}
                onChange={handleChange}
                fullWidth
                sx={{
                  width: { xs: "100%", sm: "513px", lg: "480px" }, // Responsive width
                  height: "60px",
                  borderRadius: "10px",
                  padding: "10px 32px",
                  gap: "1px",
                  ml: { lg: "-50px" },
                }}
              />
              <div className="flex gap-4 items-center">
                {/* Price Typography */}
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "36px",
                    width: "61px", // Fixed width
                  }}
                >
                  Price
                </Typography>

                {/* Discount Typography */}
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "36px",
                    width: "61px", // Fixed width
                    marginLeft: "140px", // Space between text
                  }}
                >
                  Discount
                </Typography>
              </div>

              <div className="flex gap-4 mt-2">
                <TextField
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  sx={{
                    width: "251px", // Fixed width
                    height: "60px", // Fixed height
                    borderRadius: "10px",
                    padding: "10px 32px",
                    gap: "10px",
                    ml: { lg: "-50px" },
                  }}
                />

                <TextField
                  name="discount"
                  value={product.discount}
                  onChange={handleChange}
                  sx={{
                    width: "251px", // Fixed width
                    height: "60px", // Fixed height
                    borderRadius: "10px",
                    padding: "10px 32px",
                    gap: "10px",
                    ml: { lg: "-50px" },
                  }}
                />
              </div>

              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "36px",
                  letterSpacing: "0px",
                  height: "36px",
                }}
              >
                Product Description
              </Typography>
              <TextField
                placeholder="Product Description"
                name="description"
                value={product.description}
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
                sx={{
                  width: { xs: "100%", sm: "517px", lg: "480px" }, // Responsive width
                  height: "138px",
                  borderRadius: "10px",
                  padding: "10px 32px",
                  gap: "10px",
                  ml: { lg: "-50px" },
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex gap-4 mt-4">
        <Button
          variant="outlined"
          sx={{
            width: "368px", // Fixed width
            height: "56px", // Fixed height
            padding: "12px 23px", // Padding (Top, Right, Bottom, Left)
            gap: "10px", // Space between elements inside the button
            textTransform: "none", // Prevent uppercase text
          }}
        >
          Add another Image
        </Button>

        <Button
          variant="contained"
          sx={{
            width: "379px", // Fixed width
            height: "56px", // Fixed height
            padding: "12px 23px", // Padding (Top, Right, Bottom, Left)
            gap: "10px", // Space between elements inside the button
            backgroundColor: "#775617", // Custom background color
            color: "#fff", // White text color for contrast
            textTransform: "none", // Prevents uppercase text
            "&:hover": {
              backgroundColor: "#5e4512", // Slightly darker shade on hover
            },
          }}
        >
          Save Product
        </Button>
      </div>
    </div>
  );
}
