import { Box, Button } from "@mui/material";
import { ArrowLeftIcon, ScanIcon } from "lucide-react";
import KundanImg from "../../Assests/image 10.png";
import NathImg from "../../Assests/Frame 1261153219.png";
import Kundan2Img from "../../Assests/Frame 1261153220.png";
import editicon from "../../Assests/ic_round-edit.png";
import deleticon from "../../Assests/material-symbols_delete-outline-rounded.png";
import UnderlineImg from "../../Assests/Cardheadingline.png";

const products = [
  {
    id: 1,
    name: "Green Kundan",
    number: 400,
    status: "Active",
    image: KundanImg,
  },
  { id: 2, name: "Bridal Nath", number: 400, status: "Active", image: NathImg },
  {
    id: 3,
    name: "Green Kundan",
    number: 400,
    status: "Active",
    image: KundanImg,
  },
  { id: 4, name: "Kundan", number: 400, status: "Active", image: Kundan2Img },
  {
    id: 5,
    name: "Green Kundan",
    number: 400,
    status: "Active",
    image: KundanImg,
  },
];

export default function ProductManagement() {
  return (
    <div className="p-4 md:p-6 w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        {/* Heading */}
        <div className="text-center relative">
          <h2
            className="text-[32px] md:text-[40px] font-normal leading-[40px] md:leading-[50px] h-[40px] md:h-[50px]"
            style={{ fontFamily: "Cookie", color: "#775617" }}
          >
            Product Management
          </h2>

          <Box
            component="img"
            src={UnderlineImg}
            alt="UnderlineImg"
            sx={{
              height: "25px",
              width: "307px",
              marginTop: "5px", // Adjust spacing between text & image
              display: { xs: "none", md: "block" }, // Hide on mobile
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <Button
            variant="outlined"
            className="h-[50px] md:h-[63px] rounded-[10px] flex items-center gap-[10px] md:gap-[17px] border border-[#D9D9D9] text-[#424242] w-full md:w-auto"
          >
            <ArrowLeftIcon className="w-4 h-4 md:w-5 md:h-5 text-[#424242]" />
            <span className="h-[36px] font-[Inter] font-bold text-[20px] leading-[36px] text-[#424242] whitespace-nowrap">
              Add New Product
            </span>
          </Button>

          <Button
            variant="outlined"
            className="h-[50px] md:h-[63px] rounded-[10px] flex items-center gap-[10px] md:gap-[17px] border border-[#D9D9D9] text-[#424242] w-full md:w-auto"
            // style={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            //   textTransform: "none", // Prevents uppercase text
            // }}
          >
            <ScanIcon className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-4" />{" "}
            <span className="h-[36px] font-[Inter] font-bold text-[20px] leading-[36px] text-[#424242] whitespace-nowrap">
              Scan to Fill Form
            </span>
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="shadow-md rounded-lg overflow-hidden mt-10">
        <div className="hidden md:block">
          {/* Desktop & Tablet Table */}
          <table className="w-full text-left">
            <thead>
              <tr className="text-[#424242] text-[24px] md:text-[32px] font-bold leading-[28px] md:leading-[36px]">
                <th className="p-3 font-[Inter]">Product</th>
                <th className="p-3 font-[Inter]">No:</th>
                <th className="p-3 font-[Inter]">Status</th>
                <th className="p-3 font-[Inter]">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t text-center">
                  {/* Product Image and Name */}
                  <td className="p-3 flex flex-col md:flex-row items-center gap-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[100px] h-[100px] md:w-[158px] md:h-[158px] rounded-md"
                    />
                    <span className="w-[120px] md:w-[170px] h-[36px] text-[18px] md:text-[24px] leading-[24px] md:leading-[36px] font-normal text-[#424242]">
                      {product.name}
                    </span>
                  </td>

                  {/* Product Number */}
                  <td className="p-3">{product.number}</td>

                  {/* Product Status */}
                  <td className="p-3 text-green-600 font-bold">
                    {product.status}
                  </td>

                  {/* Action Buttons */}
                  <td className="p-3">
                    <div className="flex flex-col md:flex-row gap-2 justify-center">
                      {/* Edit Button */}
                      <Button
                        variant="outlined"
                        className="w-full md:w-[120px] h-[36px] rounded-[10px] border border-gray-400 text-black flex items-center gap-[8px] justify-center"
                      >
                        <img
                          src={editicon}
                          alt="editicon"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">Edit</span>
                      </Button>

                      {/* Remove Button */}
                      <Button
                        variant="outlined"
                        className="w-full md:w-[120px] h-[36px] rounded-[10px] border border-red-400 text-red-600 flex items-center gap-[8px] justify-center"
                      >
                        <img
                          src={deleticon}
                          alt="delete icon"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">Remove</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Cards */}
        <div className="md:hidden flex flex-col gap-4 p-4">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-3 shadow-sm">
              {/* Product Image & Name */}
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[80px] h-[80px] rounded-md"
                />
                <div>
                  <p className="text-[18px] font-bold text-[#424242]">
                    {product.name}
                  </p>
                  <p className="text-gray-600">No: {product.number}</p>
                  <p className="text-green-600 font-bold">{product.status}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-3 flex flex-col gap-2">
                <Button
                  variant="outlined"
                  className="w-full h-[36px] rounded-[10px] border border-gray-400 text-black flex items-center gap-[8px] justify-center"
                >
                  <img src={editicon} alt="editicon" className="w-4 h-4" />
                  <span className="text-sm">Edit</span>
                </Button>

                <Button
                  variant="outlined"
                  className="w-full h-[36px] rounded-[10px] border border-red-400 text-red-600 flex items-center gap-[8px] justify-center"
                >
                  <img src={deleticon} alt="delete icon" className="w-4 h-4" />
                  <span className="text-sm">Remove</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
