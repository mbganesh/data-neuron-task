import { Box, Card, Paper } from "@mui/material";
import React from "react";

const ComponentOne = () => {
  const items = []
  return (
    <Box
    >
        <Paper
          sx={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            width: "100%",
            height: "100%",
            flexWrap: "wrap",
            gap: 3,
            backgroundColor:'transparent',
          }}
        >
          {Array(10).fill(0)?.map((e, i) => (
            <Card
              sx={{
                padding: 3,
                textAlign: 'center',
                margin: 3,
                width: "45px",
                height: "45px",
                borderRadius: 2,
                background: "#010101",
                color: "#fff",
              }}
            >
              {i}
            </Card>
          ))}
        </Paper>
    </Box>
  );
};

export default ComponentOne;
