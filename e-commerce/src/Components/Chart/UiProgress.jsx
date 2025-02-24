import React from "react";
import { Typography, LinearProgress } from "@mui/material";

const UIprogress = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index}>
          <Typography>{item.label}</Typography>
          <LinearProgress variant="determinate" value={item.value} />
        </div>
      ))}
    </div>
  );
};

export default UIprogress;
