import React from "react";
import { Card, Typography, CircularProgress, TableCell, Table, TableContainer, TableHead, TableRow, TableBody, Paper } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import UIprogress from "../Chart/UiProgress";
import line3 from "../../Assests/Cardheadingline.png";
import CricularImg from "../../Assests/Group 268.png";
import CricularImg2 from "../../Assests/Group 1000003295.png";
import CricularImg3 from "../../Assests/Group 1000003296.png";

// Dummy Data for the Bar Chart
const revenueData = [
  { name: "Jan", profit: 12000 },
  { name: "Feb", profit: 18000 },
  { name: "Mar", profit: 15000 },
  { name: "Apr", profit: 22000 },
  { name: "May", profit: 19000 },
  { name: "Jun", profit: 25000 },
];

const items = [
  { label: "Jeans", value: 70 },
  { label: "Shirts", value: 40 },
  { label: "Belts", value: 60 },
  { label: "Caps", value: 80 },
  { label: "Others", value: 20 },
];

const orders = [
  { product: 'Iphone 13 Pro', orderId: '#11232', date: 'Jun 29,2022', customer: 'Afaq Karim', status: 'Delivered', amount: '$400.00' },
  { product: 'Mackbook Pro', orderId: '#11232', date: 'Jun 29,2022', customer: 'Afaq Karim', status: 'Pending', amount: '$288.00' },
  { product: 'Apple Watch', orderId: '#11232', date: 'Jun 29,2022', customer: 'Afaq Karim', status: 'Canceled', amount: '$500.00' },
  { product: 'Microsoft Book', orderId: '#11232', date: 'Jun 29,2022', customer: 'Afaq Karim', status: 'Delivered', amount: '$100.00' },
  { product: 'Apple Pen', orderId: '#11232', date: 'Jun 29,2022', customer: 'Afaq Karim', status: 'Delivered', amount: '$60.00' },
  { product: 'Airpods', orderId: '#11232', date: 'Jun 29,2022', customer: 'Afaq Karim', status: 'Delivered', amount: '$80.00' },
];

const ProgressChart = () => {
  return (
    <div className="p-6 space-y-6">
      <Typography
        sx={{
          fontFamily: "Cookie, cursive",
          fontWeight: 400,
          fontSize: { xs: "32px", sm: "38px", md: "48px" }, 
          lineHeight: { xs: "42px", sm: "48px", md: "62.4px" },
          width: { xs: "130px", sm: "150px", md: "162px" },
          height: { xs: "45px", sm: "55px", md: "62px" },
          ml: { sm: "200px", md: "0px" }, 
          textAlign: { xs: "center", sm: "left", md: "center" }, 
          letterSpacing: "0%",
        }}
      >
        Dashboard
      </Typography>

      <img src={line3} alt="line3" />
      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1052px] mx-auto px-4 sm:pl-[220px] sm:pr-4">
        {/* Card 1 */}
        <Card className="p-4 shadow-md w-full max-w-[280px] h-[150px] rounded-lg border border-gray-300">
          <Typography
            sx={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "18.47px",
            }}
          >
            Today's Sales
          </Typography>

          {/* Amount & Circular Progress in a Row */}
          <div className="flex items-center justify-between">
            <Typography
              sx={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "31.66px",
              }}
            >
              $20.4K
            </Typography>
            <img src={CricularImg} alt="CricularImg" />
          </div>

          <Typography
            sx={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "18.47px",
            }}
          >
            We have sold 123 items
          </Typography>
        </Card>

        {/* Card 2 */}
        <Card className="p-4 shadow-md w-full max-w-[280px] h-[150px] rounded-lg border border-gray-300">
          <Typography
            sx={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "18.47px",
            }}
          >
            Today's Revenue
          </Typography>

          <div className="flex items-center justify-between">
            <Typography
              sx={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "31.66px",
              }}
            >
              $8.2K
            </Typography>
            <img src={CricularImg2} alt="CricularImg2" />
          </div>

          <Typography
            sx={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "18.47px",
            }}
          >
            Available to payout
          </Typography>
        </Card>

        {/* Card 3 */}
        <Card className="p-4 shadow-md w-full max-w-[280px] h-[150px] rounded-lg border border-gray-300">
          <Typography
            sx={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "18.47px",
            }}
          >
            In Escrow
          </Typography>

          <div className="flex items-center justify-between">
            <Typography
              sx={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "31.66px",
              }}
            >
              $18.2K
            </Typography>
            <img src={CricularImg3} alt="CricularImg3" />
          </div>

          <Typography
            sx={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "18.47px",
            }}
          >
            Available to payout
          </Typography>
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1052px] mx-auto">
  {/* Total Revenue Chart (W: 689px, H: 305px) */}
  <Card className="p-4 shadow-md w-full lg:w-[689px] h-[305px]">
    <Typography variant="h6">Total Revenue</Typography>
    <Typography variant="h4">$50.4K</Typography>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={revenueData}
        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="profit" fill="#8B5A2B" barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  </Card>

  {/* Most Sold Items (W: 337px, H: 305px) */}
  <Card className="p-4 shadow-md w-full lg:w-[337px] h-[305px]">
    <Typography variant="h6">Most Sold Items</Typography>
    <UIprogress items={items} />
  </Card>
</div>
<div className="p-4">
      <TableContainer component={Paper}>
        <Table className="min-w-full">
          <TableHead>
            <TableRow className="bg-[#F2F4FF]">
              <TableCell>Products</TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Customer name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    order.status === 'Delivered' ? 'bg-green-200 text-green-800' :
                    order.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  );
};

export default ProgressChart;
