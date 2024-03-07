import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        backgroundColor: "#B7C9F2",
        height: "100vh",
      }}
    >
      <Button
        variant="contained"
        color="success"
        sx={{ textTransform: "none", fontWeight: "bold" }}
        onClick={() => navigate("/resize")}
      >
        Task 1 Resize
      </Button>
      <Button
        variant="contained"
        color="warning"
        sx={{ textTransform: "none", fontWeight: "bold" }}
        onClick={() => navigate("/table")}
      >
        Task 2 Table
      </Button>
    </Box>
  );
};

export default HomePage;
