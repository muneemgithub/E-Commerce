import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  LineChart,
  Line,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import line3 from "../../Assests/Cardheadingline.png";

const data = [
  { name: "JAN", value: 100 },
  { name: "FEB", value: 150 },
  { name: "MAR", value: 200 },
  { name: "APR", value: 250 },
  { name: "MAY", value: 300 },
  { name: "JUN", value: 180 },
  { name: "JUL", value: 270 },
  { name: "AUG", value: 100 },
  { name: "SEP", value: 280 },
  { name: "OCT", value: 320 },
  { name: "NOV", value: 290 },
  { name: "DEC", value: 310 },
];

const pieData = [
  { name: "New", value: 62 },
  { name: "Returning", value: 13 },
  { name: "Inactive", value: 23 },
];

const countryData = [
  { name: "United Kingdom", value: 139, trend: [100, 120, 139] },
  { name: "United Emirates", value: 283, trend: [250, 270, 283] },
  { name: "USA", value: 782, trend: [700, 750, 782] },
  { name: "Germany", value: 1923, trend: [1800, 1900, 1923] },
  { name: "India", value: 103, trend: [90, 95, 103] },
  { name: "Singapore", value: 477, trend: [450, 460, 477] },
];

const COLORS = ["#6b7280", "#9ca3af", "#a16207"];

export default function CustomerDashboard() {
  return (
    <div className="flex flex-col items-center p-6 w-full max-w-6xl mx-auto">
      <Typography
        sx={{
          fontFamily: "Cookie, cursive",
          fontWeight: 400,
          fontSize: { xs: "32px", sm: "38px", md: "48px" },
          lineHeight: { xs: "42px", sm: "48px", md: "62.4px" },
          width: { xs: "130px", sm: "150px", md: "177px" },
          height: "62px",
          ml: { sm: "200px", md: "0px", lg: "-800px" },
          textAlign: { xs: "center", sm: "left", md: "center" },
          letterSpacing: "0px",
          mt: { lg: "-70px" },
        }}
      >
        customers
      </Typography>

      <Box
        component="img"
        src={line3}
        alt="line3"
        sx={{
          width: "146px",
          ml: { lg: "-800px" },
        }}
      />

      <Box
        display="flex"
        alignItems="center"
        justifyContent={{ xs: "center", lg: "start" }} // Center on small screens, left on lg
        gap={{ lg: "94px" }} // Space between elements on lg
        flexDirection={{ xs: "column", lg: "row" }} // Column on small, row on lg
        mt={{ xs: "20px", lg: "-20px" }} // Adjust top margin
        ml={{ lg: "534px" }} // Adjust left margin for lg screens
        width={{ lg: "789.56px" }} // Set width on lg screens
        height={{ lg: "42.07px" }} // Set height on lg screens
      >
        {/* Dropdowns */}
        <Box display="flex" gap={2}>
          <Select defaultValue="All-time">
            <MenuItem value="All-time">All-time</MenuItem>
          </Select>
          <Select defaultValue="All">
            <MenuItem value="All">All</MenuItem>
          </Select>
          <Select defaultValue="All">
            <MenuItem value="All">All</MenuItem>
          </Select>
        </Box>

        {/* Download Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "6px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#0056b3" },
          }}
        >
          Download
        </Button>
      </Box>

      <Card className="w-full p-4 shadow-md">
        <CardContent>
          <Typography variant="h6" className="text-gray-600 mb-2">
            Overall Customer Acquisition
          </Typography>
          <BarChart width={600} height={200} data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="value" fill="#a16207" />
          </BarChart>
        </CardContent>
      </Card>

      <Card className="w-full p-4 shadow-md mt-6">
        <CardContent>
          <Typography variant="h6" className="text-gray-600 mb-2">
            Country-wise Customers
          </Typography>
          <div className="grid grid-cols-2 gap-4">
            {countryData.map((country, index) => (
              <div key={index} className="flex justify-between items-center">
                <Typography className="text-gray-700">
                  {country.name}
                </Typography>
                <div className="flex items-center gap-2">
                  <Typography className="font-semibold">
                    {country.value}
                  </Typography>
                  <LineChart width={100} height={30} data={country.trend}>
                    <Line
                      type="monotone"
                      dataKey="trend"
                      stroke="#a16207"
                      strokeWidth={2}
                    />
                  </LineChart>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full p-4 shadow-md mt-6">
        <CardContent>
          <Typography variant="h6" className="text-gray-600 mb-2">
            Customer Distribution
          </Typography>
          <div className="flex justify-center">
            <PieChart width={300} height={200}>
              <Pie data={pieData} dataKey="value" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
