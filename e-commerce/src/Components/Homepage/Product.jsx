import { Box, Button, Card, CardContent } from "@mui/material";

export default function Product({ title, img, name }) {
  return (
    <Card
      sx={{
        width: "360px", 
        height: "422px", 
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: "#FCF6EC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop:"30px"
      }}
      className="shadow-lg text-center"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-72 object-cover rounded-md"
      />
      {/* <CardContent> */}
      <Box
        sx={{
          background: "linear-gradient(45deg, #a1c4ec, #f1f3f3, #aeb9ba)",
          padding: "8px 0px",
          margin: "10px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          textAlign: "center",
        }}
        className=""
      >
        <Button
          variant="text"
          sx={{
            width: "351px",
            height: "20px",
            borderRadius: "10px",
            color: "white",
            background: "transparent",
            color: "#775617",
            fontSize: "20px",
            textTransform: "none",
          }}
        >
          {title}
        </Button>

        <Button
          variant="text"
          sx={{
            padding: "0",
            margin: "0",
            minWidth: "auto",
            background: "transparent",
            color: "#775617",
            fontSize: "16px",
            fontWeight: "Semi-bold",
            textTransform: "none",
          }}
        >
          {name}
        </Button>
      </Box>
    </Card>
  );
}