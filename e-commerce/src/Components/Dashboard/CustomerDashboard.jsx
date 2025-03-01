import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Box,
  Button,
  IconButton,
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
import { Download } from "@mui/icons-material";

const data = [
  { name: "JAN", value: 100000 },
  { name: "FEB", value: 120000 },
  { name: "MAR", value: 150000 },
  { name: "APR", value: 250000 },
  { name: "MAY", value: 200000 },
  { name: "JUN", value: 220000 },
  { name: "JUL", value: 180000 },
  { name: "AUG", value: 80000 },
  { name: "SEP", value: 240000 },
  { name: "OCT", value: 260000 },
  { name: "NOV", value: 280000 },
  { name: "DEC", value: 400000 },
];

const maxValue = 400000;

const pieData = [
  { name: "New", value: 62, color: "#775617" },
  { name: "Returning", value: 13, color: "#E6C076" },
  { name: "Inactive", value: 23, color: "#e5e5e5" },
];

const countryData = [
  {
    name: "United Kingdom",
    value: 139,
    trend: [
      { trend: 20 },
      { trend: 40 },
      { trend: 30 },
      { trend: 50 },
      { trend: 60 },
    ],
  },
  {
    name: "United Emirates",
    value: 283,
    trend: [
      { trend: 25 },
      { trend: 45 },
      { trend: 35 },
      { trend: 55 },
      { trend: 70 },
    ],
  },
  {
    name: "USA",
    value: 782,
    trend: [
      { trend: 30 },
      { trend: 50 },
      { trend: 40 },
      { trend: 60 },
      { trend: 80 },
    ],
  },
  {
    name: "Germany",
    value: 1923,
    trend: [
      { trend: 35 },
      { trend: 55 },
      { trend: 45 },
      { trend: 65 },
      { trend: 90 },
    ],
  },
  {
    name: "India",
    value: 103,
    trend: [
      { trend: 15 },
      { trend: 35 },
      { trend: 25 },
      { trend: 45 },
      { trend: 55 },
    ],
  },
  {
    name: "Singapore",
    value: 477,
    trend: [
      { trend: 28 },
      { trend: 48 },
      { trend: 38 },
      { trend: 58 },
      { trend: 75 },
    ],
  },
];

const COLORS = ["#6b7280", "#9ca3af", "#a16207"];

export default function CustomerDashboard() {
  return (
    <div className="flex flex-col items-center p-6 w-full max-w-6xl mx-auto">
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
  <Typography
    sx={{
      fontFamily: "Cookie",
      fontWeight: 400,
      fontSize: { xs: "32px", sm: "38px", md: "48px" },
      lineHeight: { xs: "42px", sm: "48px", md: "62.4px" },
      width: { xs: "130px", sm: "150px", md: "177px" },
      height: "62px",
      textAlign: "center", // Ensures text is properly centered
      letterSpacing: "0px",
      mt: { md: "-70px" },
      color: "#775617",
      ml:{lg:"-780px"}
    }}
  >
    customers
  </Typography>
</Box>


      <Box
        component="img"
        src={line3}
        alt="line3"
        sx={{
          width: "146px",
          ml: { lg: "-800px" },
          display: { xs: "none", md: "block" },
        }}
      />

      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }} // Column on mobile, row on tablet/laptop
        alignItems="center"
        justifyContent={{ xs: "center", lg: "flex-end" }} // Right align on laptop
        gap={{ xs: 2, md: 4 }}
        mt={2}
        mb={5}
        width="100%"
      >
        {/* Dropdowns */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }} // Mobile: column, Tablet/Laptop: row
          alignItems="center"
          gap={{ xs: 2, md: 4 }}
          width={{ xs: "100%", sm: "auto" }} // Full width on mobile
        >
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            width={{ xs: "100%", sm: "auto" }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#4d4d4d", fontWeight: "600" }}
            >
              Timeframe:
            </Typography>
            <Select
              defaultValue="All-time"
              sx={{ height: 32, minWidth: 120, width: "100%" }}
            >
              <MenuItem value="All-time">All-time</MenuItem>
            </Select>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            width={{ xs: "100%", sm: "auto" }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#4d4d4d", fontWeight: "600" }}
            >
              Source:
            </Typography>
            <Select
              defaultValue="All"
              sx={{ height: 32, minWidth: 100, width: "100%" }}
            >
              <MenuItem value="All">All</MenuItem>
            </Select>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            width={{ xs: "100%", sm: "auto" }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#4d4d4d", fontWeight: "600" }}
            >
              Medium:
            </Typography>
            <Select
              defaultValue="All"
              sx={{
                height: 32,
                minWidth: 100,
                width: "100%",
                fontWeight: "500",
              }}
            >
              <MenuItem value="All">All</MenuItem>
            </Select>
          </Box>
        </Box>

        {/* Download Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f3f4f6",
            color: "#4d4d4d",
            padding: "4px 12px",
            fontSize: "14px",
            borderRadius: "4px",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            fontWeight: "600",
            gap: 1,
            width: { xs: "100%", sm: "auto" }, // Full width on mobile
          }}
        >
          Download
          <Download className="text-[#4D4D4D]" fontSize="small" />
        </Button>
      </Box>

      <Card className="w-full p-4 !shadow-2xl lg:h-[46vh] !rounded-[26px] flex flex-col md:flex-row">
        <CardContent className="w-full">
          <Typography
            variant="h6"
            className="text-[#000000] !mb-2 !-mt-4 text-center md:text-left"
          >
            Overall Customer Acquisition
          </Typography>
          <hr className="text-[#E4E5E7] !mb-2" />
          <div className="w-full overflow-x-auto md:overflow-visible">
            {window.innerWidth < 768 ? (
              <ResponsiveContainer width="100%" height={950}>
                <div>
                  <BarChart
                    data={data}
                    layout="vertical"
                    margin={{ left: 50, right: 50, bottom: 20 }}
                    width={400}
                    height={data.length * 50}
                  >
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{
                        fill: "#838383",
                        fontSize: 12,
                        fontWeight: "600",
                      }}
                      axisLine={false}
                      tickLine={false}
                      width={190}
                    />

                    {/* <XAxis
                      type="number"
                      tickFormatter={(value) => ${value / 1000}k}
                      ticks={[0, 100000, 200000, 300000, 400000]}
                      tick={{
                        fill: "#838383",
                        fontSize: 12,
                        fontWeight: "600",
                      }}
                      axisLine={false}
                      tickLine={false}
                      width={100}
                      dx={-10}
                    /> */}

                    <Tooltip cursor={{ fill: "transparent" }} />

                    {data.map((entry, index) => (
                      <g key={index} transform={`translate(0, ${index * 50})`}>
                        <rect width={180} height={20} fill="#F2F7FF" rx={10} />
                        <rect
                          width={(entry.value / 400000) * 180}
                          height={20}
                          fill="#775617"
                          rx={10}
                        />
                      </g>
                    ))}
                  </BarChart>

                  {/* Separate X-Axis at the Bottom */}
                  <div
                    style={{
                      marginTop: "20px",
                      padding: "40px",
                      width: "100%",
                      backgroundColor: "#f9f9f9",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="100px" height="300">
                      {/* X-Axis Line (Now Vertical) */}
                      <line
                        x1="50"
                        y1="10"
                        x2="50"
                        y2="280"
                        stroke="#838383"
                        strokeWidth="2"
                      />

                      {/* X-Axis Ticks (Vertical) */}
                      {[0, 100000, 200000, 300000, 400000].map(
                        (value, index) => (
                          <g
                            key={index}
                            transform={`translate(50, ${
                              280 - (value / 400000) * 270
                            })`}
                          >
                            <line x2="-10" stroke="#838383" strokeWidth="2" />
                            <text
                              x="-15"
                              y="5"
                              fontSize="12"
                              fill="#838383"
                              textAnchor="end"
                              alignmentBaseline="middle"
                              style={{ fontWeight: "bold" }}
                            >
                              {value / 1000}k
                            </text>
                          </g>
                        )
                      )}
                    </svg>
                  </div>
                </div>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={data}
                  barCategoryGap={40}
                  margin={{ left: 4, bottom: 20 }}
                >
                  <XAxis
                    dataKey="name"
                    tick={{
                      fill: "#838383",
                      fontSize: 12,
                      fontWeight: "500",
                    }}
                    tickLine={false}
                    axisLine={false}
                    height={30}
                    interval={0}
                    dy={30}
                  />
                  <YAxis
                    tickFormatter={(value) =>
                      value === 0 ? "0" : `${value / 1000}k`
                    }
                    ticks={[0, 100000, 200000, 300000, 400000]}
                    tick={{ fill: "#838383", fontSize: 12, fontWeight: "600" }}
                    width={40}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip cursor={{ fill: "transparent" }} />
                  {data.map((entry, index) => (
                    <g
                      key={index}
                      transform={`translate(${index * 72 + 75}, -30)`}
                    >
                      <rect
                        y={220 - (maxValue / 400000) * 160}
                        width={20}
                        height={(maxValue / 400000) * 160}
                        fill="#F2F7FF"
                        rx={10}
                      />
                      <rect
                        y={218 - (entry.value / 400000) * 160}
                        width={20}
                        height={(entry.value / 400000) * 160}
                        fill="#775617"
                        rx={10}
                      />
                    </g>
                  ))}
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full p-6 !shadow-2xl mt-6 bg-white !rounded-[26px] !lg:h-[53vh]">
        <CardContent>
          <h2 className="text-lg font-semibold text-[#000000] mb-2">
            Countries
          </h2>
          <div className="space-y-2">
            {countryData.map((country, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-[#606060] text-sm font-[400]">
                  {country.name}
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#000000]">
                    {country.value}
                  </span>
                  <ResponsiveContainer width={80} height={30}>
                    <LineChart data={country.trend}>
                      <Line
                        type="monotone"
                        dataKey="trend"
                        stroke="#FFAD33"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="trend"
                        stroke="#167EF9"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="trend"
                        stroke="#A6ABC3"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full p-6 !shadow-2xl mt-6 !rounded-[26px]">
        <CardContent className="flex items-center justify-between">
          <div>
            <h2 className="text-[#4D4D4D] text-lg font-medium lg-mt-10 mb-4">
              Customer
            </h2>
            <p className="text-3xl font-bold text-[#000] mb-6">4,209</p>
            <div className="mt-4 space-y-2">
              {pieData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span
                    className="w-14 h-3 rounded-[3px]"
                    style={{ backgroundColor: entry.color }}
                  ></span>
                  <p className="text-[#4d4d4d] text-sm font-medium">
                    {entry.value}% {entry.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <PieChart width={180} height={180}>
  <Pie
    data={pieData}
    dataKey="value"
    outerRadius={70}
    innerRadius={40}
    stroke="none"
  >
    {pieData.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={entry.color} />
    ))}
  </Pie>
</PieChart>
        </CardContent>
      </Card>
    </div>
  );
}