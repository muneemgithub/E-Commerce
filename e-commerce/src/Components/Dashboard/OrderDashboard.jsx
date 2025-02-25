import { Select, MenuItem, TextField, Button, Card } from "@mui/material";
import { useState } from "react";
import { MoreVertical } from "lucide-react";

const orders = new Array(10).fill({
  id: "#123456",
  customer: "Customer",
  type: "Shipping",
  status: "Paid",
  product: "Product Name",
  total: "$12345",
  date: "Feb 10",
});

export default function OrdersTable() {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [filters, setFilters] = useState("");
  const [search, setSearch] = useState("");

  return (
    <Card className="p-4 w-full">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>
      <div className="flex gap-4 mb-4">
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          displayEmpty
          className="bg-white border rounded-md"
        >
          <MenuItem value="">Type</MenuItem>
          <MenuItem value="Shipping">Shipping</MenuItem>
        </Select>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          displayEmpty
          className="bg-white border rounded-md"
        >
          <MenuItem value="">Status</MenuItem>
          <MenuItem value="Paid">Paid</MenuItem>
        </Select>
        <Select
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          displayEmpty
          className="bg-white border rounded-md"
        >
          <MenuItem value="">Order Date</MenuItem>
        </Select>
        <Select
          value={filters}
          onChange={(e) => setFilters(e.target.value)}
          displayEmpty
          className="bg-white border rounded-md"
        >
          <MenuItem value="">All Filters</MenuItem>
        </Select>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="bg-white border rounded-md"
        />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Product</th>
              <th className="p-3">Total</th>
              <th className="p-3">Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.type}</td>
                <td className="p-3">{order.status}</td>
                <td className="p-3">{order.product}</td>
                <td className="p-3">{order.total}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}