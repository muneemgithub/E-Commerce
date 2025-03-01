import {
  Card,
  CardContent,
  TextField,
  Button,
  Select,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { Upload } from "lucide-react";
import { useState } from "react";
import UnderlineImg from "../../Assests/Cardheadingline.png";

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");
  const [status, setStatus] = useState("Active");
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);
  const [currency, setCurrency] = useState("USD");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Product Overview Heading Outside Card */}
      <div className="relative"
      >
        <h2
          className="text-[32px] leading-[42px] md:text-[48px] lg:ml-[-120px] md:leading-[62.4px] font-normal h-[62px]"
          style={{ fontFamily: "Cookie", color: "#775617" }}
        >
          Product Management
        </h2>

        <Box
        className="lg:ml-[-120px]"
          component="img"
          src={UnderlineImg}
          alt="UnderlineImg"
          sx={{
            height: "25px",
            width: "307px",
            marginTop: "5px",
            display: { xs: "none", md: "block" }, // Hide on mobile
          }}
        />
      </div>

      <Card
        className="p-6 w-full sm:w-[90%] md:w-[100%] lg:w-[1080px] mx-auto"
        sx={{
          backgroundColor: "transparent",
          ml: { xs: "0px", sm: "0px", md: "-80px", lg: "-160px" }, 
        }}
      >
        <CardContent className="space-y-6">
          <Typography
            variant="h5"
            sx={{
              width: "1065px",
              height: "36px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "0px",
              color: "#424242",
            }}
          >
            Product Title
          </Typography>

          <TextField
            placeholder="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              width: "100%",
              maxWidth: "1065px",
              height: "48px",
              borderRadius: "10px",
              padding: "10px 32px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px", // Rounded corners
                "& fieldset": {
                  borderColor: "#424242", // MUI default border color
                },
                "&:hover fieldset": {
                  borderColor: "#424242", // Border on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#424242", // Border when focused
                },
              },
            }}
          />
          <Typography
            variant="h5"
            sx={{
              width: "1065px",
              height: "36px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "0px",
              color: "#424242",
            }}
          >
            Description
          </Typography>
          <TextField
            placeholder="Description"
            fullWidth
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              width: "100%",
              maxWidth: "1065px",
              height: "123px",
              borderRadius: "10px",
              padding: "10px 32px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px", // Rounded corners
                "& fieldset": {
                  borderColor: "#424242", // MUI default border color
                },
                "&:hover fieldset": {
                  borderColor: "#424242", // Border on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#424242", // Border when focused
                },
              },
            }}
          />
          <Typography
            variant="h5"
            sx={{
              width: "1065px",
              height: "36px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "0px",
              color: "#424242",
            }}
          >
            Pricing
          </Typography>
          <div className="grid grid-cols-2 gap-6">
            {/* Price Column */}
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "36px",
                  color: "#424242",
                  marginBottom: "4px", // Spacing below label
                }}
              >
                Price
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #424242",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  gap: "10px",
                  width: "100%",
                  maxWidth: "516px",
                  height: "60px",
                }}
              >
                <TextField
                  placeholder="Price"
                  fullWidth
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": { border: "none" }, // Remove extra border
                    },
                  }}
                />
                <Select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  displayEmpty
                  sx={{
                    minWidth: "100px",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" }, // Remove border
                  }}
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="GBP">GBP</MenuItem>
                </Select>
              </Box>
            </div>

            {/* Cost Column */}
            <div className="flex flex-col">
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "36px",
                  color: "#424242",
                  marginBottom: "4px", // Spacing below label
                }}
              >
                Cost per item
              </Typography>
              <TextField
                placeholder="Cost"
                fullWidth
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                sx={{
                  width: "100%",
                  maxWidth: "516px",
                  height: "60px",
                  borderRadius: "10px",
                  border: "1px solid #424242",
                  padding: "10px 20px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    "& fieldset": { border: "none" }, // Extra border remove karna
                  },
                }}
              />
            </div>
          </div>
          <Typography
            variant="h5"
            sx={{
              width: "1065px",
              height: "36px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "36px",
              letterSpacing: "0px",
              color: "#424242",
            }}
          >
            Media
          </Typography>
          <div
            className="w-full max-w-[664px] h-auto border border-[#424242] rounded-[10px] 
             flex flex-col items-center justify-center p-[40px] sm:p-[59px_100px] md:p-[59px_348px] 
             gap-[10px] mx-auto mt-[30px] sm:mt-[60px]"
          >
            <Upload className="mx-auto mb-2 text-gray-400" />
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />

            <label htmlFor="file-upload">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#775617",
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px",
                  minWidth: "110px",
                  minHeight: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  "&:hover": { backgroundColor: "#644c13" }, // Hover effect
                }}
              >
                Add Files
              </Button>
            </label>

            <Typography
              sx={{
                width: "237px",
                height: "36px",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "36px",
                letterSpacing: "0px",
                color: "#999999",
              }}
            >
              Or Drop Files To Upload
            </Typography>

            {file && (
              <p className="text-sm text-gray-700 mt-2">
                Selected file: {file.name}
              </p>
            )}
          </div>

          <div className="w-full max-w-[1064px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Product Status */}
            <div className="flex flex-col w-full">
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "36px",
                  color: "#424242",
                }}
              >
                Product Status
              </Typography>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                displayEmpty
                fullWidth
                sx={{
                  width: "100%",
                  maxWidth: "489px",
                  height: "60px",
                  borderRadius: "10px",
                  border: "1px solid #343434",
                  padding: "10px 32px",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </div>

            {/* Product Type */}
            <div className="flex flex-col w-full">
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "36px",
                  color: "#424242",
                }}
              >
                Product Type
              </Typography>
              <TextField
                placeholder="Type..."
                fullWidth
                value={type}
                onChange={(e) => setType(e.target.value)}
                sx={{
                  width: "100%",
                  maxWidth: "489px",
                  height: "60px",
                  borderRadius: "10px",
                  border: "1px solid #343434",
                  padding: "10px 32px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    "& fieldset": { border: "none" },
                  },
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#070B1D",
                color: "white",
                width: "311px",
                height: "46px",
                borderRadius: "10px",
                padding: "12.25px 37px 13.75px 37px",
                "&:hover": { backgroundColor: "#050817" }, // Slightly darker hover effect
              }}
            >
              Save
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
