import { Button, TextField, Card, CardContent } from "@mui/material";
import { useState } from "react";

export default function EditProduct() {
  const [product, setProduct] = useState({
    name: "BBA",
    type: "Necklace",
    price: "100.00",
    discount: "20%",
    description: "",
    image: "/necklace.png", // Placeholder image
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold text-gray-700">Edit Product</h2>
      <div className="grid grid-cols-2 gap-8 mt-6 w-full max-w-4xl">
        {/* Product Image Section */}
        <Card className="p-4 shadow-md w-full">
          <CardContent className="flex flex-col items-center">
            <span className="text-gray-600 font-medium mb-2">Product Image</span>
            <img src={product.image} alt="Product" className="w-48 h-48 object-cover" />
            <div className="flex gap-2 mt-4">
              <Button variant="contained" color="primary">Replace</Button>
              <Button variant="contained" color="error">Remove</Button>
            </div>
            <Button className="mt-4" variant="outlined">Add another Image</Button>
          </CardContent>
        </Card>

        {/* General Information Section */}
        <Card className="p-4 shadow-md w-full">
          <CardContent>
            <span className="text-gray-600 font-medium">General Information</span>
            <div className="grid gap-4 mt-4">
              <TextField label="Product Name" name="name" value={product.name} onChange={handleChange} fullWidth />
              <TextField label="Product Type" name="type" value={product.type} onChange={handleChange} fullWidth />
              <div className="flex gap-4">
                <TextField label="Price" name="price" value={product.price} onChange={handleChange} fullWidth />
                <TextField label="Discount" name="discount" value={product.discount} onChange={handleChange} fullWidth />
              </div>
              <TextField label="Product Description" name="description" value={product.description} onChange={handleChange} multiline rows={3} fullWidth />
            </div>
          </CardContent>
        </Card>
      </div>
      <Button variant="contained" color="success" className="mt-6 px-6">Save Product</Button>
    </div>
  );
}
