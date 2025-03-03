import {
  Button,
  TextField,
  Card,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import UnderlineImg from "../../Assests/Cardheadingline.png";
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
      <div className="lg:flex items-center justify-between w-full">
  {/* Heading */}
  <h2
    className="text-[48px] leading-[62.4px] font-normal"
    style={{
      fontFamily: "Cookie",
      fontWeight: 400,
      height: "62px",
      letterSpacing: "0%",
      color: "#775617",
    }}
  >
    Edit Product
  </h2>
  

  {/* Buttons - Only visible on lg screens */}
  <div className="flex flex-row gap-2">
    <Button
      variant="outlined"
      className="!h-[50px] lg:h-[63px] !font-[700] !text-[24px] rounded-[10px] flex items-center gap-[10px] lg:gap-[17px] border !border-[#D9D9D9] !text-[#424242] w-auto"
    >
      <ArrowLeftIcon className="w-4 h-4 lg:w-5 lg:h-5 !text-[#424242]" />{" "}
      <span className="text-sm lg:text-base">Add New Product</span>
    </Button>

    <Button
      variant="outlined"
      className="bg-gray-200 !text-[#424242] !font-[700] !text-[24px] border !border-[#D9D9D9] !h-[50px] lg:h-[63px] w-auto"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none", // Prevents uppercase text
      }}
    >
      <ScanIcon className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-4" />{" "}
      <span className="text-sm lg:text-base">Scan to Fill Form</span>
    </Button>
  </div>
</div>

<Box
  component="img"
  src={UnderlineImg}
  alt="UnderlineImg"
  sx={{
    height: "25px",
    width: "307px",
    display: { xs: "none", lg: "block" },
    mt: { lg: "-10px" },
    ml: { lg: "-670px" },
  }}
/>


      <div className="flex flex-col lg:flex-row mt-6 w-full gap-2">
        <Card
          className="shadow-md !lg:w-[55%] !w-[100%] !lg:h-[70vh] !md:h-[20vh]"
          sx={{
            borderRadius: "10px",
            border: "1px solid #D9D9D9",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "22px",
          }}
        >
          <span
            className="text-[#424242] font-bold md:text-[30px] mt-2 text-[20px] !md:text-start !text-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              lineHeight: "36px",
              letterSpacing: "0px",
              width: "385px",
              height: "36px",
              display: "block",
            }}
          >
            Product Image
          </span>
          <CardContent className="flex flex-col items-center">
            {/* Tag Typography */}

            <Typography
              className="text-[#424242] md:text-[24px] text-[18px] !-mt-6"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                letterSpacing: "0px",
                width: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: { md: "-400px", xs: "0" },
              }}
            >
              Tag
            </Typography>

            {/* TextField */}
            <TextField
              placeholder="Type.."
              variant="outlined"
              fullWidth
              sx={{
                width: { xs: "100%", sm: "450px", md: "516px" },
                height: "60px",
                borderRadius: "10px",
                padding: "10px 32px",
                gap: "10px",
                border: "#343434",
                "& .MuiInputBase-input": {
                  height: "20px",
                  padding: "10px",
                },
              }}
            />

            {/* Product Image */}
            <img
              src={product.image}
              alt="Product"
              className="w-52 h-52 object-cover mt-4 bg-[#f4f4f4] p-5"
            />

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-6 mt-4 md:w-[321px] w-[75%]">
              <Button
                variant="outlined"
                sx={{
                  flex: 1, // Equal width buttons
                  height: "40px",
                  borderRadius: "8px",
                  border: "1px solid #775617",
                  fontWeight: "700",
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
                  height: "40px",
                  borderRadius: "8px",
                  border: "1px solid #A50E0E",
                  fontWeight: "700",
                  color: "#A50E0E",
                  textTransform: "none", // Prevents uppercase text
                  "&:hover": {
                    backgroundColor: "#A50E0E",
                    color: "#fff",
                  },
                }}
              >
                Remove
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* General Information Section */}
        <Card className="p-4 !lg:w-[50%] !md:w-[40%] !w-[100%] !lg:ml-4 items-center !ms-0 !lg:ms-0 !md:ps-32 md:mt-2 lg:mt-0 mt-0">
          <CardContent>
            <span
              className="text-[#424242] font-bold -mt-7 md:text-[30px] text-[24px] !md:text-start"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
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
              className="!mt-1"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "36px",
                letterSpacing: "0px",
                width: "167px",
                height: "16px",
                color: "#424242",
              }}
            >
              Product Name
            </Typography>

            <div className="grid gap-4 mt-8">
              <TextField
                name="name"
                value={product.name}
                onChange={handleChange}
                fullWidth
                className="!-ms-10 !md:ms-0"
                sx={{
                  width: { xs: "62%", sm: "513px", lg: "480px" }, // Responsive width
                  height: "60px",
                  borderRadius: "10px",
                  padding: "10px 32px",
                  gap: "1px",
                  ml: { lg: "-50px" },
                  "& .MuiInputBase-input": {
                    height: "24px",
                    padding: "10px",
                    border: "#343434",
                  },
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
                  height: "16px",
                  color: "#424242",
                }}
              >
                Product Type
              </Typography>
              <TextField
                name="type"
                value={product.type}
                onChange={handleChange}
                fullWidth
                className="!-ms-10 !md:ms-0"
                sx={{
                  width: { xs: "62%", sm: "513px", lg: "480px" },
                  height: "60px",
                  borderRadius: "10px",
                  padding: "10px 32px",
                  gap: "1px",
                  ml: { lg: "-50px" },
                  "& .MuiInputBase-input": {
                    height: "24px",
                    padding: "10px",
                    border: "#343434",
                  },
                }}
              />
              <div className="flex">
                {/* Price Typography */}
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "16px",
                    width: "61px",
                    color: "#424242",
                  }}
                >
                  Price
                </Typography>

                {/* Discount Typography */}
                <Typography
                  className="!ms-14 !md:ms-0"
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "16px",
                    width: "61px",
                    color: "#424242",
                    marginLeft: "140px",
                  }}
                >
                  Discount
                </Typography>
              </div>

              <div className="flex md:flex-row !-mt-2 !-ms-10 md:!ms-4">
                <TextField
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  sx={{
                    width: "171px", // Fixed width
                    height: "50px", // Fixed height
                    borderRadius: "10px",
                    padding: "10px 32px",
                    gap: "10px",
                    ml: { lg: "-50px" },
                    "& .MuiInputBase-input": {
                      height: "24px",
                      padding: "10px",
                      border: "#343434",
                    },
                  }}
                />

                <TextField
                  name="discount"
                  value={product.discount}
                  onChange={handleChange}
                  sx={{
                    width: "171px", // Fixed width
                    height: "50px", // Fixed height
                    borderRadius: "10px",
                    padding: "10px 32px",
                    gap: "10px",
                    ml: { lg: "-50px" },
                    "& .MuiInputBase-input": {
                      height: "24px",
                      padding: "10px",
                      border: "#343434",
                    },
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
                  color: "#424242",
                }}
              >
                Product Description
              </Typography>
              <TextField
                placeholder="Description..."
                name="description"
                value={product.description}
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
                className="!-ms-8 md:-ms-0"
                sx={{
                  width: { xs: "100%", sm: "517px", lg: "480px" },
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

      <div className="flex md:flex-row flex-col gap-4 mt-4">
        <Button
          variant="outlined"
          sx={{
            width: "250px",
            height: "46px",
            padding: "2px 3px",
            gap: "10px",
            textTransform: "none",
            color: "#775617",
            fontWeight: "700",
            border: "1px solid #775617",
          }}
        >
          <DownloadIcon />
          Add another Image
        </Button>

        <Button
          variant="outlined"
          sx={{
            width: "250px",
            height: "46px",
            padding: "2px 3px",
            gap: "10px",
            textTransform: "none",
            color: "#fff",
            fontWeight: "700",
            background: "#775617",
          }}
        >
          Save Product
        </Button>
      </div>
    </div>
  );
}
