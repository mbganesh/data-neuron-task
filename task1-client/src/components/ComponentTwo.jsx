import { Box, Card, Paper, Typography } from "@mui/material";
import React from "react";

const ComponentTwo = () => {
  const items = [
    "Exaggeration",
    "Perseverance",
    "Contradiction",
    "Accomplished",
    "Unbelievable",
    "Disconnected",
    "Resilience",
    "Life is an intricate tapestry woven with the threads of joy and sorrow, love and loss, triumphs, and trials. Each day presents a new chapter, a blank page waiting to be inscribed with the story of our journey. In the tapestry of existence, our choices and experiences are the vibrant hues that create the rich and intricate patterns of our individual narratives. Embrace the complexities, savor the beauty in the details, and let the threads of resilience and hope guide you through the unfolding masterpiece of your life.",
  ];
  return (
    <Box>
      <Paper
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexWrap: "wrap",
          gap: 3,
          backgroundColor: "transparent",
        }}
      >
        {items?.map((e, i) => (
          <Typography variant="body1">{e}</Typography>
        ))}
      </Paper>
    </Box>
  );
};

export default ComponentTwo;
