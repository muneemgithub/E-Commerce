import { Card, CardContent, TextField, Button, Select, MenuItem } from "@mui/material";
import { Upload } from "lucide-react";
import { useState } from "react";

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");
  const [status, setStatus] = useState("Active");
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Card className="p-6 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gold">Product Overview</h2>
      <CardContent className="space-y-6">
        <TextField
          label="Product Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Cost per item"
            variant="outlined"
            fullWidth
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="border-dashed border-2 border-gray-300 p-6 text-center rounded-lg">
          <Upload className="mx-auto mb-2 text-gray-400" />
          <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
          <label htmlFor="file-upload">
            <Button variant="contained" className="bg-gold">Add Files</Button>
          </label>
          <p className="text-gray-500 text-sm mt-2">Or Drop Files To Upload</p>
          {file && <p className="text-sm text-gray-700 mt-2">Selected file: {file.name}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            displayEmpty
            fullWidth
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
          <TextField
            label="Product Type"
            variant="outlined"
            fullWidth
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <Button variant="contained" fullWidth className="bg-black text-white">Save</Button>
      </CardContent>
    </Card>
  );
}
