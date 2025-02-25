import { Button } from "@mui/material";
import { Edit, Delete } from "lucide-react";

const products = [
  { id: 1, name: "Green Kundan", number: 400, status: "Active", image: "kundan1.jpg" },
  { id: 2, name: "Bridal Nath", number: 400, status: "Active", image: "nath.jpg" },
  { id: 3, name: "Green Kundan", number: 400, status: "Active", image: "kundan1.jpg" },
  { id: 4, name: "Kundan", number: 400, status: "Active", image: "kundan2.jpg" },
  { id: 5, name: "Green Kundan", number: 400, status: "Active", image: "kundan1.jpg" },
];

export default function ProductManagement() {
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Product Management</h2>
        <div className="flex gap-2">
          <Button variant="contained" className="bg-gray-200 text-black">Add New Product</Button>
          <Button variant="contained" className="bg-gray-200 text-black">Scan to Fill Form</Button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Product</th>
              <th className="p-3">No:</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="p-3 flex items-center gap-2">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded-md" />
                  {product.name}
                </td>
                <td className="p-3">{product.number}</td>
                <td className="p-3 text-green-600 font-bold">{product.status}</td>
                <td className="p-3 flex gap-2">
                  <Button variant="outlined" startIcon={<Edit />} className="border-gray-400 text-black">Edit</Button>
                  <Button variant="outlined" startIcon={<Delete />} className="border-red-400 text-red-600">Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}