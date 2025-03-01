import {
  Select,
  MenuItem,
  TextField,
  Button,
  Card,
  Box,
  InputAdornment,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { MoreVertical } from "lucide-react";
import UnderlineImg from "../../Assests/Cardheadingline.png";
import { Search } from "lucide-react";
import { MoreHoriz } from "@mui/icons-material";

const orders = new Array(10).fill({
  id: "#123456",
  customer: "Customer",
  type: "Shipping",
  status: "Paid",
  product: "Product Name",
  total: "$12345",
  date: "Feb 10",
});
const selectStyles = {
  width: "137px", // Fixed width
  height: "40px", // Hug height
  borderRadius: "8px", // Border radius 8px
  justifyContent: "space-between", // Justify space-between
  padding: "8px 16px", // Padding: Top 8px, Right 16px, Bottom 8px, Left 16px
  border: "1px solid #B1B1B1", // Border 1px solid
  backgroundColor: "#ffffff", // White background
  color: "#000000", // Black text color for readability
};

export default function OrdersTable() {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [filters, setFilters] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div>
      <h2
        className="text-[48px] leading-[62.4px] font-normal mb-4"
        style={{
          fontFamily: "Cookie",
          fontWeight: 400,
          width: "177px",
          height: "62px",
          letterSpacing: "0%",
          color: "#775617",
        }}
      >
        Orders
      </h2>
      <Box
        component="img"
        src={UnderlineImg}
        alt="UnderlineImg"
        sx={{
          height: "25px",
          width: "307px",
          display: { xs: "none", md: "block" }, // Hide on mobile
        }}
      />

      <Card className="p-4 w-full">
        <div className="flex flex-wrap gap-4 mb-4 md:flex-nowrap">
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            displayEmpty
            className="border rounded-md"
            style={{
              width: "137px", // Fixed width
              height: "40px", // Hug height
              borderRadius: "8px", // Radius 8px
              justifyContent: "space-between", // Justify space-between
              padding: "8px 16px", // Padding (Top: 8px, Right: 16px, Bottom: 8px, Left: 16px)
              backgroundColor: "#775617", // Background color
              color: "#ffffff", // Text color for better contrast
            }}
          >
            <MenuItem value="">Type</MenuItem>
            <MenuItem value="Shipping">Shipping</MenuItem>
          </Select>

          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            displayEmpty
            style={selectStyles}
            className="w-full md:w-[137px]"
          >
            <MenuItem value="">Status</MenuItem>
            <MenuItem value="Paid">Paid</MenuItem>
          </Select>

          <Select
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            displayEmpty
            style={selectStyles}
            className="w-full md:w-[137px]"
          >
            <MenuItem value="">Order Date</MenuItem>
          </Select>

          <Select
            value={filters}
            onChange={(e) => setFilters(e.target.value)}
            displayEmpty
            style={selectStyles}
            className="w-full md:w-[137px]"
          >
            <MenuItem value="">All Filters</MenuItem>
          </Select>

          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            variant="outlined"
            sx={{
              height: "40px",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
            className="w-full md:w-[251px]" // Full width on mobile, fixed width on larger screens
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search style={{ color: "#B1B1B1" }} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px] md:min-w-full">
              <thead>
                <tr className="text-gray-700">
                  <th className="p-3">
                    <Checkbox
                      sx={{
                        color: "#007BFF",
                        "&.Mui-checked": { color: "#007BFF" },
                        "& .MuiSvgIcon-root": { borderRadius: "0px" },
                      }}
                    />
                    #123456
                  </th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 hidden md:table-cell">Product</th>
                  <th className="p-3 hidden md:table-cell">Total</th>
                  <th className="p-3 hidden md:table-cell">Date</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="p-3 flex items-center gap-2">
                      <Checkbox
                        sx={{
                          color: "#007BFF",
                          "&.Mui-checked": { color: "#007BFF" },
                          "& .MuiSvgIcon-root": { borderRadius: "0px" },
                        }}
                      />
                      {order.id}
                    </td>
                    <td className="p-3">{order.customer}</td>
                    <td className="p-3">{order.type}</td>
                    <td className="p-3">{order.status}</td>
                    <td className="p-3 hidden md:table-cell">
                      {order.product}
                    </td>
                    <td className="p-3 hidden md:table-cell">{order.total}</td>
                    <td className="p-3 hidden md:table-cell">{order.date}</td>
                    <td className="p-3">
                      <Button variant="ghost" size="icon">
                        <MoreHoriz className="w-5 h-5" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
