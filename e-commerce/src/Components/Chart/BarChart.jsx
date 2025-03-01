import React from "react";
import { Card, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample Data
const revenueData = [
  { name: "Jan", profit: 12000 },
  { name: "Feb", profit: 18000 },
  { name: "Mar", profit: 15000 },
  { name: "Apr", profit: 22000 },
  { name: "May", profit: 19000 },
  { name: "Jun", profit: 25000 },
  { name: "Jul", profit: 30000 },
  { name: "Aug", profit: 35000 },
  { name: "Sep", profit: 40000 },
];

const RevenueBarChart = () => {
  return (
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
  );
};

export default RevenueBarChart;
