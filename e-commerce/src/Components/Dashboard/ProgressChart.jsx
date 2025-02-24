import React from "react";
import { Card, Typography, CircularProgress } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import UIprogress from "../Chart/UiProgress";

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

const ProgressChart = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Top Cards */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="p-4 shadow-md">
          <Typography variant="h6">Today's Sales</Typography>
          <Typography variant="h4">$20.4K</Typography>
          <Typography variant="body2">We have sold 123 items</Typography>
          <CircularProgress variant="determinate" value={70} />
        </Card>
        <Card className="p-4 shadow-md">
          <Typography variant="h6">Today's Revenue</Typography>
          <Typography variant="h4">$8.2K</Typography>
          <Typography variant="body2">Available to payout</Typography>
          <CircularProgress variant="determinate" value={80} />
        </Card>
        <Card className="p-4 shadow-md">
          <Typography variant="h6">In Escrow</Typography>
          <Typography variant="h4">$18.2K</Typography>
          <Typography variant="body2">Available to payout</Typography>
          <CircularProgress variant="determinate" value={50} />
        </Card>
      </div>

      {/* Total Revenue Bar Chart */}
      <Card className="p-4 shadow-md">
        <Typography variant="h6">Total Revenue</Typography>
        <Typography variant="h4">$50.4K</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="profit" fill="#8B5A2B" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Most Sold Items (Ek Hi Card Me Saari Items) */}
      <Card className="p-4 shadow-md">
        <Typography variant="h6">Most Sold Items</Typography>
        <UIprogress items={items} />
      </Card>
    </div>
  );
};

export default ProgressChart;
