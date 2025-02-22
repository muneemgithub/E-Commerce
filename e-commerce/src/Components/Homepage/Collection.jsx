import { Card, CardContent, CardMedia, Button, Typography } from "@mui/material";

const products = [
  { name: "Navratan Teardrops", price: "$250 $300", img: "navratan.png" },
  { name: "Bloom Wear Diamond", price: "$250 $350", img: "diamond.png" },
  { name: "South Indian Ruby Bangles", price: "$280 $350", img: "ruby-bangles.png" },
  { name: "Heritage Antique Bangles", price: "$250 $300", img: "antique-bangles.png" },
  { name: "Regal Pearl Jadau Choker", price: "$250 $300", img: "pearl-choker.png" },
];

const newArrivals = [
  { name: "Bridal Nath", img: "bridal-nath.png" },
  { name: "Bridal Gold", img: "bridal-gold.png" },
  { name: "Pastel Green", img: "pastel-green.png" },
];

export default function JewelryCollection() {
  return (
    <div className="p-8 bg-gray-100">
      <Typography variant="h4" className="text-center font-bold mb-6">
        Our Collection
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="shadow-lg rounded-lg">
            <CardMedia
              component="img"
              height="140"
              image={`/images/${product.img}`}
              alt={product.name}
            />
            <CardContent className="text-center">
              <Typography variant="h6" className="font-semibold">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
              <Button variant="contained" color="primary" className="mt-2">
                Add To Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Typography variant="h4" className="text-center font-bold mt-10 mb-6">
        New Arrivals
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newArrivals.map((item, index) => (
          <Card key={index} className="shadow-lg rounded-lg">
            <CardMedia
              component="img"
              height="140"
              image={`/images/${item.img}`}
              alt={item.name}
            />
            <CardContent className="text-center">
              <Typography variant="h6" className="font-semibold">
                {item.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
